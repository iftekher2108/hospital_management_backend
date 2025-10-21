const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  roomNumber: String,
  roomType: { type: String, enum: ["General", "ICU", "Private"] },
  status: {
    type: String,
    enum: ["Available", "Occupied"],
    default: "Available",
  },
});

module.exports = mongoose.model("Room", roomSchema);
