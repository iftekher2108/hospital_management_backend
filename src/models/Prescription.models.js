const mongoose = require("mongoose");

const prescriptionSchema = new mongoose.Schema(
  {
    appointment: { type: mongoose.Schema.Types.ObjectId, ref: "Appointment" },
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
    patient: { type: mongoose.Schema.Types.ObjectId, ref: "Patient" },
    diagnosis: String,
    medicines: [
      {
        medicine: { type: mongoose.Schema.Types.ObjectId, ref: "Medicine" },
        dosage: String,
        duration: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Prescription", prescriptionSchema);
