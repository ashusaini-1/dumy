'use strict'

const User = require('../../models/user/user');
const ErrorResponse = require('../../utils/ErrorResponse');


const isUser = async (req, res, next) => {

    const user = await User.findOne({ email: req.body.email })

    if (!user) {
        return next(new ErrorResponse("Invalid login Credentials", 400));
    }
    return next();
}

const isUserAuthorized = async (req, res, next) => {
    const user = await User.findById(req.userId);

    if (!user) {
        return next(new ErrorResponse("Invalid login Credentials", 400));
    }
    next();

}

module.exports = { isUser, isUserAuthorized }