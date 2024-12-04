

const successResponse = (res, resData = {}) => {
    res.status(200).json({
        success: true,
        message: resData.message || "Request successful",
        data: resData.data || null,
    });
};

const createdResponse = (res, resData = {}) => {
    res.status(201).json({
        success: true,
        message: resData.message || "Resource created successfully",
        data: resData.data || null,
    });
};

const badRequestResponse = (res, resData = {}) => {
    res.status(400).json({
        success: false,
        message: resData.message || "Bad Request",
        data: resData.data || null,
    });
};

const unauthorizedResponse = (res, resData = {}) => {
    res.status(401).json({
        success: false,
        message: resData.message || "Unauthorized",
        data: resData.data || null,
    });
};

const notFoundResponse = (res, resData = {}) => {
    res.status(404).json({
        success: false,
        message: resData.message || "Resource not found",
        data: resData.data || null,
    });
};

const serverErrorResponse = (res, resData = {}) => {
    res.status(500).json({
        success: false,
        message: resData.message || "Internal server error",
        data: resData.data || null,
    });
};

const forbiddenResponse = (res, resData = {}) => {
    res.status(403).json({
        success: false,
        message: resData.message || "Forbidden: You don't have permission to access this resource",
        data: resData.data || null,
    });
};

module.exports = {
    successResponse,
    createdResponse,
    badRequestResponse,
    unauthorizedResponse,
    notFoundResponse,
    serverErrorResponse,
    forbiddenResponse
};
