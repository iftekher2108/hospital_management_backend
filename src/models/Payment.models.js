const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  bill: { type: mongoose.Schema.Types.ObjectId, ref: "Bill" },
  amountPaid: Number,
  paymentDate: { type: Date, default: Date.now },
  method: { type: String, enum: ["Cash", "Card", "Bkash", "Nagad", "Rocket"] },
},{
  timestamps: true
});

module.exports = mongoose.model("Payment", paymentSchema);
