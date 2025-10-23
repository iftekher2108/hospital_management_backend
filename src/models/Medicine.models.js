const mongoose = require("mongoose");
const toJSONPlugin = require("../plugins/toJSON.plugin");

const medicineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  genericName: { type: String, trim: true }, // e.g. Acetaminophen
  type: { type: String, trim: true }, // e.g. Tablet, Syrup, Injection

  picture: String,
  manufacturer: { type: String, trim: true }, // e.g. Square, Beximco
  batchNumber: { type: String, trim: true },
  barcode: { type: String, unique: true, sparse: true },

  description: { type: String },

  unit: { type: String, default: "pcs" }, // e.g. tablet, bottle
  quantityInStock: { type: Number, default: 0 },
  minStockLevel: { type: Number, default: 10 },

  price: { type: Number, default: 0 },
  discount: { type: Number, default: 0 }, // percentage or fixed discount
  tax: { type: Number, default: 0 }, // optional, if you track taxes

  expiryDate: { type: Date },
  manufacturedDate: { type: Date },

  requiresPrescription: { type: Boolean, default: false },
  supplier: { type: String, trim: true },

  status: { type: String, enum: ["available", "out-of-stock", "expired"], default: "available" },
  // deletedAt: { type: Date, default: null }, // for soft delete if needed

}, {
  timestamps: true
});

medicineSchema.plugin(toJSONPlugin);

medicineSchema.index({ name: 1, genericName: 1, manufacturer: 1 });

module.exports = mongoose.model("Medicine", medicineSchema);
