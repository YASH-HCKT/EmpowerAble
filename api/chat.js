// Backend proxy for Mistral-7B-Instruct-v0.3 via HuggingFace Inference API
// API key is stored server-side in HF_API_KEY env variable — never exposed to the client.
export default async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") return res.status(200).end();
    if (req.method !== "POST") return res.status(405).json({ error: "Method Not Allowed" });

    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ error: "Missing prompt" });

    const apiKey = process.env.HF_API_KEY;
    if (!apiKey) {
        console.error("HF_API_KEY is not set in environment variables.");
        return res.status(500).json({ error: "Server misconfiguration: HF_API_KEY not set." });
    }

    try {
        const systemMsg =
            "You are EmpowerAble AI, a compassionate accessibility companion. " +
            "Help users with disabilities navigate the world, provide practical guidance, and emotional support. " +
            "Be warm, concise, empathetic, and helpful. Never give harmful advice.";

        // Mistral-7B-Instruct-v0.3 uses the [INST] / [/INST] prompt format.
        // System context is prepended inside the first user turn as recommended by Mistral.
        const inputText =
            "<s>[INST] " + systemMsg + "\n\n" + prompt + " [/INST]";

        const upstreamResponse = await fetch(
            "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.3",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apiKey
                },
                body: JSON.stringify({
                    inputs: inputText,
                    parameters: {
                        max_new_tokens: 400,
                        temperature: 0.7,
                        top_p: 0.95,
                        repetition_penalty: 1.1,
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

        // HuggingFace Inference API returns: [{ generated_text: "..." }]
        const reply =
            Array.isArray(data) && data[0] && data[0].generated_text
                ? data[0].generated_text.trim()
                : "I'm sorry, I couldn't generate a response. Please try again.";

        return res.status(200).json({ msg: reply });

    } catch (error) {
        console.error("Chat proxy error:", error);
        return res.status(502).json({ error: "Failed to contact AI service", details: error.message });
    }
}
