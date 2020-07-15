const asyncHandler = require("express-async-handler");
const CustomError = require("../helpers/CustomError");
const UserDetail = require("../models/UserDetail");
const Product = require("../models/Product");
const Cart = require("../models/Cart");

const updateAddress = asyncHandler(async (req, res, next) => {
    const { address } = req.body;

    if (!address)
        return next(new CustomError("Missing input"), 400);

    await UserDetail.findOneAndUpdate(req.user.id, {
        address
    });

    res.status(200).json({
        success: true,
        address
    });
});

const addProductToCart = asyncHandler(async (req, res, next) => {
    const { id, amount } = req.body;

    if (!id)
        return next(new CustomError("Missing product"), 400);

    const product = await Product.findById(id);

    if (!product)
        return next(new CustomError("Product not found"), 404);

    const cart = await Cart.findOne({
        user: req.user.id
    }).populate("products.product");

    cart.products.map(async (item, idx) => {
        if (item.product.id === id) {
            products[idx].quantity += (amount || 1);
            await cart.save();
            res.status(200).json({
                success: true,
                cart
            });
        }
    });

    cart.products.push({
        product,
        quantity: amount || 1
    });

    await cart.save();

    res.status(200).json({
        success: true,
        cart
    });
});

const removeProductFromCart = asyncHandler(async (req, res, next) => {
    const { id } = req.body;

    if (!id)
        return next(new CustomError("Missing product"), 400);

    const product = await Product.findById(id);

    if (!product)
        return next(new CustomError("Product not found"), 404);

    const cart = await Cart.findOne({
        user: req.user.id
    }).populate("products.product");

    cart.products = cart.products.filter((item) => { return item.id != id });
    await cart.save(); 

    res.status(200).json({
        success: true,
    });
});

const getOrders = asyncHandler(async (req, res, next) => {
    const orders = await UserDetail.findOne({
        user: req.user.id
    }, "-cart -address -user").populate("products.product");

    res.status(200).json({
        success: true,
        orders
    });
});

const getCart = asyncHandler(async (req, res, next) => {
    const cart = await Cart.findOne({
        user: req.user.id
    }, "-user").populate("products.product");

    res.status(200).json({
        success: true,
        cart
    })
});

module.exports = {
    updateAddress,
    addProductToCart,
    removeProductFromCart,
    getOrders,
    getCart
};
