import 'dotenv/config';
import express from 'express';
import locationsHandler from './api/locations.js';
import summaryHandler from './api/summary.js';
import reportsHandler from './api/reports.js';
import chatHandler from './api/chat.js';
import accessibilityHandler from './api/accessibility.js';
import routeHandler from './api/route.js';
import contactHandler from './api/contact.js';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Mock Vercel req/res for the handlers
const mockHandler = (handler) => (req, res) => {
    const mockRes = {
        status: (code) => ({
            json: (data) => res.status(code).json(data),
            end: () => res.status(code).end()
        })
    };
    handler(req, mockRes);
};

app.get('/api/locations', mockHandler(locationsHandler));
app.get('/api/summary', mockHandler(summaryHandler));
app.post('/api/reports', mockHandler(reportsHandler));
app.post('/api/chat', mockHandler(chatHandler));
app.get('/api/accessibility', accessibilityHandler);
app.post('/api/route', routeHandler);
app.post('/api/contact', contactHandler);

app.listen(port, () => {
    console.log(`Local dev backend running at http://localhost:${port}`);
});
