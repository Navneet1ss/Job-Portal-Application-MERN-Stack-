import mongoose from "mongoose";
import validator from "validator";
import bcryptjs from "bcryptjs"; // Updated to bcryptjs
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your Name!"],
    minLength: [3, "Name must contain at least 3 Characters!"],
    maxLength: [30, "Name cannot exceed 30 Characters!"],
  },
  email: {
    type: String,
    required: [true, "Please enter your Email!"],
    validate: [validator.isEmail, "Please provide a valid Email!"],
  },
  phone: {
    type: Number,
    required: [true, "Please enter your Phone Number!"],
  },
  password: {
    type: String,
    required: [true, "Please provide a Password!"],
    minLength: [8, "Password must contain at least 8 characters!"],
    maxLength: [32, "Password cannot exceed 32 characters!"],
    select: false,
  },
  role: {
    type: String,
    required: [true, "Please select a role"],
    enum: ["Job Seeker", "Employer","Admin"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// ENCRYPTING THE PASSWORD WHEN THE USER REGISTERS OR MODIFIES HIS PASSWORD
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcryptjs.hash(this.password, 10); // Updated to bcryptjs
  next();
});

// COMPARING THE USER PASSWORD ENTERED BY USER WITH THE USER SAVED PASSWORD
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcryptjs.compare(enteredPassword, this.password); // Updated to bcryptjs
};

// GENERATING A JWT TOKEN WHEN A USER REGISTERS OR LOGINS
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, "Dtech123", {
    expiresIn: 2 * 24 * 60 * 60,
  });
};

export const User = mongoose.model("User", userSchema);
