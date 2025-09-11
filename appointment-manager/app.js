const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const appointmentRoutes = require('./routes/appointmentRoutes');

dotenv.config();
const app = express();
app.use(express.json());

app.use('/api/appointments', appointmentRoutes);

connectDB().then(() => {
  app.listen(process.env.PORT, () =>
    console.log(`🚀 Appointment Manager running on port ${process.env.PORT}`)
  );
});
