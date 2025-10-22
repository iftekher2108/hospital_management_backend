const router = require("express").Router();

const patientController = require("../controllers/patient.controllers");

// const Patient = require("../models/Patient.models");
// // ✅ Create a new patient
// router.post("/", async (req, res) => {
//   try {
//     const patient = await Patient.create(req.body);
//     res.status(201).json(patient);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });
// // 📋 Get all patients
// router.get("/", async (req, res) => {
//   const patients = await Patient.find();
//   res.json(patients);
// });

router.get("/", patientController.getPatients);
router.post("/", patientController.createPatient);
router.get("/:id", patientController.getPatientById);
router.put("/:id", patientController.updatePatient);
router.delete("/:id", patientController.deletePatient);

module.exports = router;
