const mongoose = require("mongoose");
const toJSONPlugin = require("../plugins/toJSON.plugin")
const paginatePlugin = require('../plugins/paginate.plugin')

const patientSchema = new mongoose.Schema(
  {
    // Basic Info
    name: { type: String, required: true, trim: true },
    gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
    dob: { type: Date },
    age: { type: Number }, // optional auto-calc
    bloodGroup: { type: String, enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"] },
    maritalStatus: { type: String, enum: ["Single", "Married", "Divorced", "Widowed"] },

    // Contact Info
    phone: { type: String, required: true, trim: true },
    email: { type: String, trim: true },
    address: { type: String },
    city: { type: String },
    country: { type: String },

    // Guardian / Emergency Contact
    guardian: {
      name: String,
      phone: String,
      relationship: String,
    },
    emergencyContact: {
      name: String,
      phone: String,
      relationship: String,
    },

    // Medical Info
    allergies: [{ type: String }],
    currentMedications: [{ type: String }],
    chronicDiseases: [{ type: String }],
    medicalHistory: { type: String },
    bloodPressure: { type: String },
    weight: { type: Number },
    height: { type: Number },
    temperature: { type: Number },

    // // Hospital Info
    // hospital: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Hospital",
    // },

    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
    },

    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
    },

    admitted: { type: Boolean, default: false },
    admissionDate: { type: Date },
    dischargeDate: { type: Date },
    roomNumber: { type: String },

    // Insurance Info
    insurance: {
      provider: String,
      policyNumber: String,
      coverageAmount: Number,
      expiryDate: Date,
    },

    // User relation
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    status: { type: String, enum: ["active", "inactive"], default: "active" },
    // deletedAt: { type: Date, default: null }, // for soft delete
  },
  { timestamps: true }
);

patientSchema.plugin(toJSONPlugin);
patientSchema.plugin(paginatePlugin);

patientSchema.index({ name: 1 }); // Sort/search by patient name
patientSchema.index({ phone: 1 }, { unique: true }); // Prevent duplicate phone
patientSchema.index({ email: 1 }, { unique: true, sparse: true }); // Optional email index
patientSchema.index({ status: 1 }); // Filter by active/inactive

module.exports = mongoose.model("Patient", patientSchema);
