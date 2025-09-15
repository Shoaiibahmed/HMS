const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const wardRoutes = require('./routes/wardRoutes');
const cors = require('cors');

dotenv.config();
connectDB();


const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/wards', wardRoutes);

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => console.log(`Ward Coordinator running on port ${PORT}`));
