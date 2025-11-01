const mongoose = require("mongoose");

const billSchema = new mongoose.Schema(
  {
    patient: { type: mongoose.Schema.Types.ObjectId, ref: "Patient" },
    appointment: { type: mongoose.Schema.Types.ObjectId, ref: "Appointment" },
    totalAmount: Number,
    status: { type: String, enum: ["unpaid", "paid"], default: "unpaid" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Bill", billSchema);
