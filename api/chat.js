// Uses Node.js 18+ built-in fetch (no npm install needed)
export default async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") return res.status(200).end();
    if (req.method !== "POST") return res.status(405).json({ error: "Method Not Allowed" });

    const { prompt, apiKey } = req.body;
    if (!prompt || !apiKey) return res.status(400).json({ error: "Missing prompt or apiKey" });

    try {
        const systemMsg = "You are EmpowerAble AI, a compassionate accessibility companion. Help users with disabilities navigate the world, provide guidance, and emotional support. Be warm, concise, and helpful.";

        // Build Zephyr chat format using string concat to avoid shell-escaping issues
        const sysToken = "<" + "|system|" + ">";
        const userToken = "<" + "|user|" + ">";
        const asstToken = "<" + "|assistant|" + ">";
        const endToken = "</s>";
        const nl = "\n";

        const inputText = sysToken + nl + systemMsg + nl + endToken + nl
            + userToken + nl + prompt + nl + endToken + nl
            + asstToken + nl;

        const upstreamResponse = await fetch(
            "https://api-inference.huggingface.co/models/HuggingFaceH4/zephyr-7b-beta",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apiKey
                },
                body: JSON.stringify({
                    inputs: inputText,
                    parameters: {
                        max_new_tokens: 300,
                        temperature: 0.7,
                        return_full_text: false
                    }
                })
            }
        );

        if (!upstreamResponse.ok) {
            const errText = await upstreamResponse.text();
            throw new Error("HuggingFace API error " + upstreamResponse.status + ": " + errText);
        }

        const data = await upstreamResponse.json();

        // HuggingFace returns array: [{ generated_text: "..." }]
        const reply = Array.isArray(data) && data[0] && data[0].generated_text
            ? data[0].generated_text.trim()
            : "I am sorry, I could not generate a response. Please try again.";

        return res.status(200).json({ msg: reply });

    } catch (error) {
        console.error("Proxy error:", error);
        return res.status(502).json({ error: "Failed to contact AI service", details: error.message });
    }
}
