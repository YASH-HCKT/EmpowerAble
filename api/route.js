import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();

router.post('/', async (req, res) => {
    const { start, end, emergency } = req.body;

    if (!start || !end) {
        return res.status(400).json({ error: 'Start and End coordinates are required' });
    }

    try {
        const apiKey = process.env.OPEN_ROUTE_SERVICE_KEY;
        const url = `https://api.openrouteservice.org/v2/directions/wheelchair/geojson`;

        const response = await axios.post(url, {
            coordinates: [start, end],
            preference: emergency ? 'fastest' : 'shortest'
        }, {
            headers: {
                'Authorization': apiKey,
                'Content-Type': 'application/json'
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error('ORS API Error:', error.response?.data || error.message);
        res.status(500).json({ error: 'Failed to calculate route' });
    }
});

export default router;
