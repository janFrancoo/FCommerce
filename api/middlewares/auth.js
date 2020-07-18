const jwt = require("jsonwebtoken");
const { isTokenIncluded, getAccessToken } = require("../helpers/token");
const CustomError = require("../helpers/CustomError");

const verifyJWT = (req, res, next) => {
    const { JWT_SECRET_KEY } = process.env;

    if (!isTokenIncluded(req))
        return next(new CustomError("Missing token"), 401);

    const accessToken = getAccessToken(req);

    jwt.verify(accessToken, JWT_SECRET_KEY, (err, decoded) => {
        if (err)
            return next(new CustomError("You are not authorized to access"), 401);

        req.user = {
            id: decoded.id,
            name: decoded.name,
            user: decoded.username,
            role: decoded.role,
            emailVerificationToken: decoded.emailVerificationToken
        };

        next();
    });
};

const isVerified = (req, res, next) => {
    if (req.user.emailVerificationToken)
        return next(new CustomError("You must verify your e-mail address"), 403);

    next();
};

const getAdminAccess = (req, res, next) => {
    if (req.user.role !== "admin")
        return next(new CustomError("You do not have admin authority to access here"), 403);

    next();
};

module.exports = {
    verifyJWT,
    isVerified,
    getAdminAccess
}
