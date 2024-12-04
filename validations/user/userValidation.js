const Joi = require('joi');

// Define the Joi validation schema
const signupValidation = Joi.object({
    userName: Joi.string().min(3).max(50).required()
        .messages({
            "string.empty": "User name is required",
            "string.min": "User name must be at least 3 characters",
            "string.max": "User name must not exceed 50 characters",
        }),
    email: Joi.string().email().required()
        .messages({
            "string.empty": "Email is required",
            "string.email": "Email must be a valid email address",
        }),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .required()
        .messages({
            "string.empty": "Password is required",
            "string.pattern.base": "Password must be 3-30 characters long and contain only alphanumeric characters",
        }),
    isVerified: Joi.boolean()
        .messages({
            "boolean.base": "isVerified must be a boolean value",
        }),
});

module.exports = {signupValidation};
