export default function handler(req, res) {
    if (req.method === 'POST') {
        const { type, description, location } = req.body;
        console.log('Report received:', { type, description, location });
        return res.status(201).json({ message: 'Report submitted successfully', id: Date.now() });
    }
    res.status(405).json({ message: 'Method Not Allowed' });
}
