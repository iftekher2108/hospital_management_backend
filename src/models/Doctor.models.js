const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    specialization: String,
    phone: String,
    email: String,
    department: { type: mongoose.Schema.Types.ObjectId, ref: "Department" },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Doctor", doctorSchema);
