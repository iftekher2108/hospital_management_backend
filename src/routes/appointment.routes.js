const router = require("express").Router();
const appointmentController = require("../controllers/appointment.controllers");

router.get("/", appointmentController.getAppointments);
router.post("/", appointmentController.createAppointment);
router.get('/:id', appointmentController.getAppointmentById);
router.put('/:id', appointmentController.updateAppointment);
router.delete("/:id", appointmentController.deleteAppointment);

module.exports = router;
