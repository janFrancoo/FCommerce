const asyncHandler = require("express-async-handler");
const CustomError = require("../helpers/CustomError");
const Category = require("../models/Category");

const getCategories = asyncHandler(async (req, res, next) => {
    const categories = await Category.find();

    res.status(200).json({
        success: true,
        categoryCount: categories.length,
        categories
    });
});

const addCategory = asyncHandler(async (req, res, next) => {
    const { categoryName } = req.body;

    if (!categoryName)
        return next(new CustomError("Missing input"), 400);

    const category = await Category.create({
        name: categoryName
    });

    res.status(200).json({
        success: true,
        category
    });
});

const removeCategory = asyncHandler(async (req, res, next) => {
    const { categoryName } = req.body;

    if (!categoryName)
        return next(new CustomError("Missing input"), 400);

    await Category.deleteOne({
        name: categoryName
    });

    res.status(200).json({
        success: true
    });
});

module.exports = {
    getCategories,
    addCategory, 
    removeCategory
};
