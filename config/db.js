const mongoose = require("mongoose")
const toJSONPlugin = require("../src/plugins/toJSON.plugin")

const dbURI = process.env.MONGODB_URI || "mongodb://localhost:27017/hospital_management"

// register global plugins before connecting / creating models
mongoose.plugin(toJSONPlugin)

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("MongoDB Connection Failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;