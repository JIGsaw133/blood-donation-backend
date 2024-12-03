const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

const donorRoutes = require('./routes/donors');
const inventoryRoutes = require('./routes/innventory');
const donationRoutes = require('./routes/donation');
const transfusionRoutes = require('./routes/transfusion');
const eventRoutes = require('./routes/event');
const healthcareRequestRoutes = require('./routes/healthcareRequest');
const transactionRoutes = require('./routes/transaction');


dotenv.config();

const app = express();
const port = process.env.port || 80;

// Middleware
app.use(cors());
app.use(bodyParser.json());


// Default route
app.get('/', (req, res) => {
    res.send('Blood Donation Backend API is running.');
});

// routes
app.use('/api/donors', donorRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/donations', donationRoutes);
app.use('/api/transfusions', transfusionRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/requests', healthcareRequestRoutes);
app.use('/api/transactions', transactionRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

process.on('SIGTERM', async () => {
    await pool.end(); // Close MySQL connection
    process.exit(0);
});


