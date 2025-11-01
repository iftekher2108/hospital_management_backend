const router = require("express").Router();

const doctorController = require("../controllers/doctor.controllers") ;

router.get("/", doctorController.getDoctors);
router.post("/", doctorController.createDoctor);
router.get("/:id", doctorController.getDoctorById);
router.put("/:id", doctorController.updateDoctor);
router.put('/:id/status',doctorController.doctorStatusById);
router.delete("/:id", doctorController.deleteDoctor);

module.exports = router;
