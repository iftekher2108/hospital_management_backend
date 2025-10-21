const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    gender: { type: String, enum: ["Male", "Female", "Other"] },
    dob: Date,
    phone: String,
    email: String,
    address: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Patient", patientSchema);
