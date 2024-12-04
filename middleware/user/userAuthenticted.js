const jwt = require('jsonwebtoken');
const { SECRET_ACCESS_TOKEN } = process.env;

const isUserAuthenticated = async (req, res, next) => {
    try {
        const header = req.headers['authorization'];
        if (!header) {
            return res.status(401).json({
                success: false,
                message: 'Authorization token is required',
            });
        }

        const token = header.split(' ')[1];
        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Token not found',
            });
        }

        const decoded = jwt.verify(token, SECRET_ACCESS_TOKEN);
        req.userId = decoded.userId;

        next();

    } catch (error) {
        return res.status(401).json({
            success: false,
            message: 'Invalid or expired token',
        });
    }
};

module.exports = isUserAuthenticated;
