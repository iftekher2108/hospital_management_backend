const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  roomNumber: String,
  description: String,
  picture: String,
  roomType: { type: String, enum: ["General", "ICU", "Private"] },
  status: {
    type: String,
    enum: ["Available", "Occupied"],
    default: "Available",
  },
},{
  timestamps:true
});

module.exports = mongoose.model("Room", roomSchema);
