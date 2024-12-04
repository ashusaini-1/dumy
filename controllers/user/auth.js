const asyncHandler = require("../../utils/asyncHandler");
const { signupValidation } = require("../../validations/user/userValidation");

module.exports = {
    registeredUser: asyncHandler(async (req, res, next) => {
        let responseObj = {};
        try {

            const { error } = signupValidation(req.body);
            if (error) {
                responseObj.message = error.details[0].message;
                return errorResponse(res, responseObj);
            }


        } catch (error) {

            return res.status(500).json({
                status: 'error',
                message: error.message
            })
        }
    })
}
