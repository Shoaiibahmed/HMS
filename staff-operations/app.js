const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const staffRoutes = require('./routes/staffRoutes');
const cors = require('cors');
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/staff', staffRoutes);

connectDB().then(() => {
  app.listen(process.env.PORT, () =>
    console.log(`Staff Operations service running on port ${process.env.PORT}`)
  );
});
