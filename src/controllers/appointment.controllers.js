const Appointment = require("../models/Appointment.models");

exports.createAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.create(req.body);
    res.status(201).json(appointment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAppointments = async (req, res) => {
  const appointments = await Appointment.find()
    .populate("patient", "name phone")
    .populate("doctor", "name specialization");
  res.json(appointments);
};

exports.getAppointmentById = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id)
      .populate("patient", "name phone")
      .populate("doctor", "name specialization");
    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }
    res.status(200).json({ appointment });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

exports.updateAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" })
    }
    res.status(200).json({ appointment })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

exports.deleteAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndDelete(req.params.id);
    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" })
    }
    res.status(200).json({ message: "Appointment deleted successfully" });
  } catch (error) {
    res.status(400).json({message:error.message})
  }
}