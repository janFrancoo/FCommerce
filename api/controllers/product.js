const asyncHandler = require("express-async-handler");
const CustomError = require("../helpers/CustomError");
const Comment = require("../models/Comment");
const Product = require("../models/Product");
const Category = require("../models/Category");

const getProduct = asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    const product = await Product.findById(id).populate("category", "name -_id");

    if (!product)
        return next(new CustomError("Product not found"), 404);

    res.status(200).json({
        success: true,
        product
    });
});

const getProducts = asyncHandler(async (req, res, next) => {
    const { categoryId } = req.query;

    if (!categoryId)
        return next(new CustomError("Missing input"), 400);

    const category = await Category.findById(categoryId);

    if (!category)
        return next(new CustomError("Category not found"), 404);

    const products = await Product.find({
        category
    });

    res.status(200).json({
        success: true,
        productCount: products.length,
        products
    });
});

const addComment = asyncHandler(async (req, res, next) => {
    const { id, message } = req.body;

    if (!(id && message))
        return next(new CustomError("Missing inputs"), 400);
    
    const product = await Product.findById(id);

    if (!product)
        return next(new CustomError("Product not found"), 404);

    const comment = await Comment.create({
        user: req.user.id,
        message,
        product
    });

    await comment.populate('user', 'username').execPopulate();

    res.status(200).json({
        success: true,
        comment
    });
});

const getComments = asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    if (!id)
        return next(new CustomError("Missing input"), 400);

    const product = await Product.findById(id);

    if (!product)
        return next(new CustomError("Product not found"), 404);

    const comments = await Comment.find({
        product
    }).sort({'date': -1}).populate("user", "username");

    res.status(200).json({
        success: true,
        commentCount: comments.length,
        comments
    });
});

const addProduct = asyncHandler(async (req, res, next) => {
    const { productName, stock, price, categoryName, description } = req.body;

    const images = [];
    for (let i = 0; i < req.files.length; i++) {
        images.push(req.files[i].filename);
    }

    if (!(productName && categoryName))
        return next(new CustomError("Missing inputs"), 400);

    const category = await Category.findOne({
        name: categoryName
    });

    if (!category)
        return next(new CustomError("Category not found"), 404);

    const product = await Product.create({
        productName,
        inStock: stock,
        price,
        images,
        category,
        description
    });

    res.status(200).json({
        success: true,
        product
    });
});

const updateProduct = asyncHandler(async (req, res, next) => {
    const { id, productName, stock, price, categoryName, description } = req.body;

    const images = [];
    for (let i = 0; i < req.files.length; i++) {
        images.push(req.files[i].filename);
    }

    if (!(productName && categoryName))
        return next(new CustomError("Missing inputs"), 400);

    const category = await Category.findOne({
        name: categoryName
    });

    if (!category)
        return next(new CustomError("Category not found"), 404);

    const toBeUpdated = { 
        productName,
        inStock: stock,
        price,
        category,
        description
    };

    if (images.length !== 0)
        toBeUpdated.images = images;

    const product = await Product.findByIdAndUpdate(id, toBeUpdated, { new: true });

    if (!product)
        return next(new CustomError("Product not found"), 404);

    res.status(200).json({
        success: true,
        product
    });
});

const removeProduct = asyncHandler(async (req, res, next) => {
    const { id } = req.body;

    await Product.findByIdAndRemove(id);

    res.status(200).json({
        success: true
    });
});

const searchProduct = asyncHandler(async (req, res, next) => {
    const key = req.query.productName;

    if (!key)
        return next(new CustomError("Missing key"), 400);

    const products = await Product.find({
        productName: { 
            "$regex": key, 
            "$options": "i"
        },
    });

    res.status(200).json({
        success: true,
        products
    });
});

module.exports = {
    getProduct,
    getProducts,
    addComment,
    getComments,
    addProduct,
    updateProduct,
    removeProduct,
    searchProduct
};
