require("dotenv").config();
const express = require("express");
const connect = require("./config/db");
const patientRoutes = require("./routes/patient.routes");

const app = express();
app.use(express.json());

app.use("/api/patients", patientRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Patient service running on port ${PORT}`));
