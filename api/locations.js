export default function handler(req, res) {
    const locations = [
        {
            id: 1,
            type: 'station',
            icon: 'train',
            title: 'Zurich Central Hub',
            address: 'Bahnhofplatz 15, 8001 Zürich',
            score: 98,
            lat: 40,
            lng: 30,
            features: ['accessible', 'elevator', 'wc', 'blind'],
            image: 'https://images.unsplash.com/photo-1542617392-747653554160?auto=format&fit=crop&q=80&w=1000'
        },
        {
            id: 2,
            type: 'hospital',
            icon: 'local_hospital',
            title: 'City Medical Center',
            address: 'Medical Way 12, Zürich',
            score: 95,
            lat: 55,
            lng: 60,
            features: ['accessible', 'local_hospital', 'wc'],
            image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000'
        },
        {
            id: 3,
            type: 'restaurant',
            icon: 'restaurant',
            title: 'Green Bistro',
            address: 'Park Avenue 4, Zürich',
            score: 88,
            lat: 25,
            lng: 75,
            features: ['accessible', 'wc'],
            image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000'
        }
    ];

    res.status(200).json(locations);
}
