const router = require("express").Router();

const Appointment = require("../models/Appointment.models");

// Create appointment
router.post("/", async (req, res) => {
  try {
    const appointment = await Appointment.create(req.body);
    res.status(201).json(appointment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all appointments with populate
router.get("/", async (req, res) => {
  const appointments = await Appointment.find()
    .populate("patient", "name phone")
    .populate("doctor", "name specialization");
  res.json(appointments);
});

module.exports = router;
