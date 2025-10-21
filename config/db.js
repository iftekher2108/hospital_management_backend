const mongoose = require("mongoose")

const dbURI = process.env.MONGODB_URI || "mongodb://localhost:27017/hospital_management"

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI);
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;