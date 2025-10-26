const { PORT } = require("./config/app")
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const { rateLimit } = require('express-rate-limit')
const app = express();
const connectDB = require("./config/db");
const authenticate = require('./src/middlewares/authenticate.middlewares')
const userRoutes = require('./src/routes/user.routes')
const authRoute = require('./src/routes/auth.route')
const patientRoutes = require("./src/routes/patient.routes");
const doctorRoutes = require("./src/routes/doctor.routes");
const appointmentRoutes = require("./src/routes/appointment.routes");
const departmentRoutes = require("./src/routes/department.routes");
const roomRoutes = require('./src/routes/room.routes');
connectDB();
app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(express.static('public'))
// const limiter = rateLimit({
//   windowMs: 3 * 60 * 1000, // 15 minutes
//   max: 50, // every 15 min 200 request allowed
//   message: "Too many requests from this IP, please try again later 🕒",
// })
// app.use('/api',limiter);

app.use("/api/auth", authRoute);
app.use("/api/users", authenticate, userRoutes);
app.use("/api/patients", authenticate, patientRoutes);
app.use("/api/doctors", authenticate, doctorRoutes);
app.use("/api/appointments", authenticate, appointmentRoutes);
app.use("/api/departments", authenticate, departmentRoutes);
app.use("/api/rooms", authenticate, roomRoutes);

app.get("/", (req, res) => {
  console.log("Hospital Management System API is running");
  res.json({ msg: "Hospital management system api is running" });
});

app.listen(PORT || 3000, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
