import express from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/', async (req, res) => {
    const { lat, lng } = req.query;

    if (!lat || !lng) {
        return res.status(400).json({ error: 'Latitude and Longitude are required' });
    }

    try {
        // Overpass QL query to find buildings/nodes around a point
        const query = `
            [out:json];
            (
              node(around:50, ${lat}, ${lng})[wheelchair];
              way(around:50, ${lat}, ${lng})[wheelchair];
              node(around:50, ${lat}, ${lng})[elevator];
              way(around:50, ${lat}, ${lng})[elevator];
              node(around:50, ${lat}, ${lng})["toilets:wheelchair"];
              way(around:50, ${lat}, ${lng})["toilets:wheelchair"];
            );
            out body;
            >;
            out skel qt;
        `;

        const response = await axios.post('https://overpass-api.de/api/interpreter', `data=${encodeURIComponent(query)}`);
        const elements = response.data.elements;

        if (!elements || elements.length === 0) {
            return res.json({
                name: "Unknown Area",
                rating: "red",
                features: {
                    elevator: false,
                    wheelchair: false,
                    accessible_toilet: false
                }
            });
        }

        // Aggregate tags
        let features = {
            elevator: false,
            wheelchair: false,
            accessible_toilet: false
        };
        let name = "Building/Area";

        elements.forEach(el => {
            if (el.tags) {
                if (el.tags.name) name = el.tags.name;
                if (el.tags.wheelchair === 'yes') features.wheelchair = true;
                if (el.tags.elevator === 'yes' || el.tags.ramp === 'yes') features.elevator = true;
                if (el.tags['toilets:wheelchair'] === 'yes') features.accessible_toilet = true;
            }
        });

        // Calculate rating
        let rating = "red";
        if (features.wheelchair && features.elevator && features.accessible_toilet) {
            rating = "green";
        } else if (features.wheelchair || features.elevator) {
            rating = "yellow";
        }

        res.json({
            name,
            rating,
            features
        });

    } catch (error) {
        console.error('Overpass API Error:', error);
        res.status(500).json({ error: 'Failed to fetch accessibility data' });
    }
});

export default router;
