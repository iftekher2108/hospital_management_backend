const mongoose = require("mongoose");
const toJSONPlugin = require("../plugins/toJSON.plugin");

const roomSchema = new mongoose.Schema(
  {
    //  Basic Info
    roomNumber: { type: String, required: true, trim: true },
    floor: { type: String }, // e.g. "3rd Floor"
    // building: { type: String }, // optional if multiple buildings
    description: { type: String },
    picture: { type: String },

    //  Type & Capacity
    roomType: {
      type: String,
      enum: ["General", "ICU", "Private", "Semi-Private", "Emergency", "VIP"],
      default: "General",
    },
    bedCount: { type: Number, default: 1 },
    availableBeds: { type: Number, default: 1 },

    //  Status
    status: {
      type: String,
      enum: ["Available", "Occupied", "Maintenance"],
      default: "Available",
    },

    //  Pricing / Billing
    dailyRate: { type: Number, default: 0 }, // per day cost
    // hourlyRate: { type: Number, default: 0 }, // optional
    amenities: [{ type: String }], // e.g. ["AC", "TV", "Attached Bathroom"]

    // //  Relations
    // hospital: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Hospital",
    // },

    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
    },

    currentPatient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      default: null,
    },

    // Booking Details
    bookedFrom: { type: Date },
    bookedTo: { type: Date },
    lastCleanedAt: { type: Date },

    // // Soft Delete & Meta
    // deletedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

roomSchema.plugin(toJSONPlugin)
// Indexes for faster searching
roomSchema.index({ roomNumber: 1 }, { unique: true });
roomSchema.index({ roomType: 1 });
roomSchema.index({ status: 1 });
roomSchema.index({ department: 1 });
roomSchema.index({ currentPatient: 1 });

module.exports = mongoose.model("Room", roomSchema);