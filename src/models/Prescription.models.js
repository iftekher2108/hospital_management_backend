const mongoose = require("mongoose");
const toJSONPlugin = require("../plugins/toJSON.plugin");

const prescriptionSchema = new mongoose.Schema(
  {
    // 🔹 Relations
    appointment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Appointment",
      required: true,
    },

    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },

    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },

    // hospital: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Hospital",
    // },

    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
    },

    // 🔹 Medical Info
    diagnosis: { type: String, required: true },
    symptoms: [{ type: String }], // e.g. headache, fever, cough
    notes: { type: String }, // doctor’s comments
    // allergiesObserved: [{ type: String }],
    advice: { type: String }, // lifestyle or health advice
    nextVisitDate: { type: Date },

    // 🔹 Medicine Info
    medicines: [
      {
        medicine: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Medicine",
          required: true,
        },
        dosage: { type: String, required: true }, // e.g. "500mg 1 tablet twice daily"
        duration: { type: String }, // e.g. "5 days"
        frequency: { type: String }, // e.g. "After meals"
        notes: { type: String }, // optional instruction
      },
    ],

    // 🔹 Additional Info
    attachments: [{ type: String }], // URLs or file paths
    issuedDate: { type: Date, default: Date.now },
    digitalSignature: { type: String }, // optional for doctor’s e-sign

    // 🔹 Status / Soft Delete
    status: {
      type: String,
      enum: ["active", "revised", "cancelled"],
      default: "active",
    },
    deletedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

prescriptionSchema.plugin(toJSONPlugin)
// 🔹 Indexes for better querying
prescriptionSchema.index({ patient: 1 });
prescriptionSchema.index({ doctor: 1 });
prescriptionSchema.index({ appointment: 1 });
prescriptionSchema.index({ issuedDate: -1 });
prescriptionSchema.index({ status: 1 });

module.exports = mongoose.model("Prescription", prescriptionSchema);