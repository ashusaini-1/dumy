const mongoose = require("mongoose");
const argon2 = require('argon2');
const jwt = require('jsonwebtoken'); 
const ErrorResponse = require('../utils/ErrorResponse'); 

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    fcm_token: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();  
  }
  try {
    const hash = await argon2.hash(this.password);
    this.password = hash;
    next();
  } catch (error) {
    return next(new ErrorResponse("Error Occurred during password hashing", 400));
  }
});

userSchema.methods.generateJwtToken = async function () {
  try {
    let payload = {
      userId: this._id, 
      email: this.email, 
    };
    const token = jwt.sign(payload, process.env.SECRET_ACCESS_TOKEN, { expiresIn: process.env.JWT_EXPIRE });
    return token;
  } catch (error) {
    throw new ErrorResponse("Failed to generate token", 400);
  }
};

const User = mongoose.model("User", userSchema);

module.exports = User;
