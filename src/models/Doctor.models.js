const mongoose = require("mongoose");
const toJSONPlugin = require("../plugins/toJSON.plugin");
const paginatePlugin = require("../plugins/paginate.plugin");
const doctorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    gender: { type: String, enum: ["male", "female", "other"] },
    dateOfBirth: { type: Date },

    phone: String,
    email: String,
    address: { type: String },
    city: { type: String },
    country: { type: String, default: "bangladesh" },

    specialization: String,
    qualification: { type: String }, // e.g., MBBS, FCPS, MD, etc.
    experienceYears: { type: Number, default: 0 },
    department: { type: mongoose.Schema.Types.ObjectId, ref: "Department" },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    profileImage: { type: String }, // URL or file path
    certificates: [{ type: String }],

    // Hospital / Clinic Info
    chamberName: { type: String },
    chamberAddress: { type: String },
    visitingHours: { type: String }, // e.g., "10 AM - 2 PM"
    consultationFee: { type: Number, default: 0 },

    // Availability
    availableDays: [
      {
        day: {
          type: String,
          enum: [
            "saturday",
            "sunday",
            "monday",
            "tuesday",
            "wednesday",
            "thursday",
            "friday",
          ],
        },
        startTime: String,
        endTime: String,
      },
    ],

    // Ratings & Status
    rating: { type: Number, min: 0, max: 5, default: 0 },
    // totalReviews: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },

    // // Soft Delete (optional)
    // isDeleted: { type: Boolean, default: false },
    // deletedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

doctorSchema.plugin(toJSONPlugin);
doctorSchema.plugin(paginatePlugin);

module.exports = mongoose.model("Doctor", doctorSchema);
