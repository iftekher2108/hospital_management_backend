const mongoose = require("mongoose");
const toJSONPlugin = require("../plugins/toJSON.plugin")

const patientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    gender: { type: String, enum: ["Male", "Female", "Other"] },
    dob: Date,
    phone: String,
    email: String,
    address: String,
    guardian:{
      name: String,
      phone: String,
      relationship: String,
    },
    user:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }
  },
  { timestamps: true }
);

patientSchema.plugin(toJSONPlugin);

module.exports = mongoose.model("Patient", patientSchema);
