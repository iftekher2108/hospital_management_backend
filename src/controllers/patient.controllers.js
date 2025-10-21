const Patient = require("../models/Patient.models") ;

// Create Patient
exports.createPatient = async (req, res) => {
  try {
    const patient = await Patient.create(req.body);
    res.status(201).json(patient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get All Patients
exports.getPatients = async (req, res) => {
  const patients = await Patient.find();
  res.json(patients);
};

// Get Single Patient
exports.getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) return res.status(404).json({ message: "Patient not found" });
    res.json(patient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update Patient
exports.updatePatient = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(patient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete Patient
exports.deletePatient = async (req, res) => {
  try {
    await Patient.findByIdAndDelete(req.params.id);
    res.json({ message: "Patient deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};