const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const ErrorResponse = require("../utils/ErrorResponse")

const generateOtp = asyncHandler(async (otp) => {
    try {
        const hashedOtp = await argon2.hash(otp);

        const payload = {
            hashedOtp
        };

        const otpToken = jwt.sign(payload, process.env.SECRET_ACCESS_OTP_TOKEN, {
            expiresIn: process.env.OTP_EXPIRE || '10m',
        });

        return otpToken;
    } catch (error) {
        throw new ErrorResponse("Failed to generate OTP");

    }
});

module.exports = generateOtp;
