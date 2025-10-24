const router = require("express").Router();

const patientController = require("../controllers/patient.controllers");

router.get("/", patientController.getPatients);
router.post("/", patientController.createPatient);
router.get("/:id", patientController.getPatientById);
router.put("/:id", patientController.updatePatient);
router.delete("/:id", patientController.deletePatient);

module.exports = router;
