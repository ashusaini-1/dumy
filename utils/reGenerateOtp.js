const jwt = require('jsonwebtoken');
const asyncHandler = require("../utils/asyncHandler");
const ErrorResponse = require("../utils/ErrorResponse"); 
const { RESET_Token_Key, RESET_TOKEN_EXPIRE } = process.env;

const generateResetToken = asyncHandler(async (User, email, next) => {
  const forgotUser = await User.findOne({ email });

  if (!forgotUser) {
    return next(new ErrorResponse("User not found with this email", 404));
  }

  let payload = {
    Id: forgotUser._id,
    email: forgotUser.email,
  };

  const resetToken = jwt.sign(payload, RESET_Token_Key, {
    expiresIn: RESET_TOKEN_EXPIRE,
  });

  if (!resetToken) {
    return next(new ErrorResponse("Error while creating reset token", 500));
  }
  return resetToken;
});

module.exports = generateResetToken;
