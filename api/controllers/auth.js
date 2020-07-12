const asyncHandler = require("express-async-handler");
const customError = require("../helpers/CustomError");

const index = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        success: true,
        message: "Hello, world!"
    });
});

module.exports = {
    index
};
