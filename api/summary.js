export default function handler(req, res) {
    const { id } = req.query;
    const summaries = {
        "1": "Exceptional accessibility infrastructure. Automated door systems and level flooring throughout. 24/7 assistance staff available at the East gate.",
        "2": "Top-tier medical facility with full wheelchair access and specialized hearing loops in all waiting areas.",
        "3": "Spacious seating arrangements and ramp access at the main entrance. Wheelchair-accessible restrooms are located on the ground floor."
    };

    res.status(200).json({ summary: summaries[id] || "No summary available for this location." });
}
