const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  genericName: { type: String, trim: true }, // e.g. Acetaminophen
  type: { type: String, trim: true }, // e.g. Tablet, Syrup, Injection

  
  picture: String,
  dosage: String,
  duration: String,
  description: String,
  manufacturer: String,
  price: Number,
},{
  timestamps:true
});

module.exports = mongoose.model("Medicine", medicineSchema);
