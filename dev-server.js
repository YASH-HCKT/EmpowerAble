import express from 'express';
import locationsHandler from './api/locations.js';
import summaryHandler from './api/summary.js';
import reportsHandler from './api/reports.js';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Mock Vercel req/res for the handlers
const mockHandler = (handler) => (req, res) => {
    const mockRes = {
        status: (code) => ({
            json: (data) => res.status(code).json(data)
        })
    };
    handler(req, mockRes);
};

app.get('/api/locations', mockHandler(locationsHandler));
app.get('/api/summary', mockHandler(summaryHandler));
app.post('/api/reports', mockHandler(reportsHandler));

app.listen(port, () => {
    console.log(`Local dev backend running at http://localhost:${port}`);
});
