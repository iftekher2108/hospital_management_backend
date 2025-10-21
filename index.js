require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const app = express();
const connectDB = require("./config/db");
const patientRoutes = require("./src/routes/patientRoutes.js");
const doctorRoutes = require("./src/routes/doctorRoutes.js");
const appointmentRoutes = require("./src/routes/appointmentRoutes.js");
const port = process.env.PORT || 3000;
connectDB();
app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/patients", patientRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/appointments", appointmentRoutes);

app.get("/", (req, res) => {
  console.log("Hospital Management System API is running");
  res.json({ msg: "Hospital management system api is running" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
