const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const emergencyRoutes = require('./routes/emergencyRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use('/api/emergency', emergencyRoutes);

const PORT = process.env.PORT || 3006;
app.listen(PORT, () => console.log(`Emergency Response running on port ${PORT}`));
