const { PORT } = require("./config/app")
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const app = express();
const connectDB = require("./config/db");
const userRoutes = require('./src/routes/user.routes')
const patientRoutes = require("./src/routes/patient.routes");
const doctorRoutes = require("./src/routes/doctor.routes");
const appointmentRoutes = require("./src/routes/appointment.routes");
const departmentRoutes = require("./src/routes/department.routes");
connectDB();
app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

app.use("/api/users",userRoutes)
app.use("/api/patients", patientRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/departments", departmentRoutes);

app.get("/", (req, res) => {
  console.log("Hospital Management System API is running");
  res.json({ msg: "Hospital management system api is running" });
});

app.listen(PORT || 3000, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
