const mongoose = require("mongoose");
const toJSONPlugin = require("../plugins/toJSON.plugin");
const paginatePlugin = require('../plugins/paginate.plugin')

const appointmentSchema = new mongoose.Schema(
  {
    // Relations
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },

    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },

    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
    },

    // hospital: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Hospital",
    // },

    // Appointment Details
    appointmentDate: { type: Date, required: true },
    appointmentTime: { type: String }, // e.g. "10:30 AM"
    reason: { type: String },
    visitType: {
      type: String,
      enum: ["In-person", "Online"],
      default: "In-person",
    },
    mode: {
      type: String,
      enum: ["Walk-in", "Pre-booked", "Follow-up"],
      default: "Pre-booked",
    },
    duration: { type: Number, default: 30 }, // in minutes
    tokenNumber: { type: Number }, // if hospital uses token system
    roomNumber: { type: String },

    // Status
    status: {
      type: String,
      enum: ["scheduled", "ongoing", "completed", "cancelled", "no-show"],
      default: "scheduled",
    },
    cancellationReason: { type: String },
    completedAt: { type: Date },

    // Payment Info
    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "refunded"],
      default: "pending",
    },
    paymentMethod: {
      type: String,
      enum: ["cash", "card", "online", "insurance"],
      default: "Cash",
    },
    consultationFee: { type: Number, default: 0 },

    // Notes / Attachments
    doctorNotes: { type: String },
    patientNotes: { type: String },
    prescription: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Prescription",
    },

    // Soft Delete
    // deletedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

appointmentSchema.plugin(toJSONPlugin)
appointmentSchema.plugin(paginatePlugin)
// Indexes for faster query
appointmentSchema.index({ patient: 1 });
appointmentSchema.index({ doctor: 1 });
appointmentSchema.index({ appointmentDate: 1 });
appointmentSchema.index({ status: 1 });
// appointmentSchema.index({ hospital: 1, department: 1 });
// appointmentSchema.index({ createdAt: -1 });

module.exports = mongoose.model("Appointment", appointmentSchema);
