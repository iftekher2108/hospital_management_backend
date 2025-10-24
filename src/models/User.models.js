const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    // 🔹 Basic Info
    name: { type: String, required: true, trim: true },
    username: { type: String, unique: true, sparse: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    phone: { type: String, trim: true },
    picture: { type: String },
    
    // 🔹 Authentication
    password: { type: String, required: true, minlength: 6 },
    emailVerified: { type: Boolean, default: false },
    verificationToken: { type: String },
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date },

    // 🔹 Roles & Permissions
    role: {
      type: String,
      enum: ["Admin", "Doctor", "Nurse", "Patient", "Receptionist", "Pharmacist", "Accountant"],
      default: "Patient",
    },
    permissions: [{ type: String }], // optional granular permissions

    // 🔹 Login / Activity Tracking
    lastLogin: { type: Date },
    isActive: { type: Boolean, default: true },
    loginAttempts: { type: Number, default: 0 },
    lockUntil: { type: Date },

    // 🔹 Soft Delete
    deletedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

// 🔹 Indexes
userSchema.index({ email: 1 }, { unique: true });
userSchema.index({ role: 1 });
userSchema.index({ isActive: 1 });

// 🔹 Password hashing before save
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// 🔹 Password comparison method
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// 🔹 Hide sensitive fields in JSON response
userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  delete obj.verificationToken;
  delete obj.resetPasswordToken;
  delete obj.resetPasswordExpires;
  return obj;
};

module.exports = mongoose.model("User", userSchema);