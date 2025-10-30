const mongoose = require("mongoose");
const toJSONPlugin = require("../plugins/toJSON.plugin");
const paginatePlugin = require("../plugins/paginate.plugin");

const departmentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true,  },
    code: { type: String, unique: true, uppercase: true }, // e.g. SURG, CARD, NEUR

    description: String,
    floor: { type: String }, // e.g. "3rd Floor"
    roomNumber: { type: String }, // optional

    headDoctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
    },

    email: { type: String },
    phone: { type: String },

    totalStaff: { type: Number, default: 0 },
    totalBeds: { type: Number, default: 0 },
    status: { type: String, enum: ["active", "inactive"], default: "active" },
  },
  {
    timestamps: true,
  }
);

departmentSchema.plugin(toJSONPlugin)
departmentSchema.plugin(paginatePlugin)

// Optional index for faster search
departmentSchema.index({ name: 1, code: 1 });

module.exports = mongoose.model("Department", departmentSchema);
