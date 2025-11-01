const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  bill: { type: mongoose.Schema.Types.ObjectId, ref: "Bill" },
  amountPaid: Number,
  paymentDate: { type: Date, default: Date.now },
  method: { type: String, enum: ["cash", "card", "bkash", "nagad", "rocket"] },
  picture: {
    type: String,
  }
},{
  timestamps: true
});

module.exports = mongoose.model("Payment", paymentSchema);
