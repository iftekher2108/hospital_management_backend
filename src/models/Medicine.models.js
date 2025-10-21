const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: String,
  description: String,
  price: Number,
});

module.exports = mongoose.model("Medicine", medicineSchema);
