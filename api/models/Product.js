const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    productName: {
        type: String,
        required: [true, "Please, enter a product name"],
        unique: true
    },
    inStock: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        default: 0
    },
    images: [{
        type: String,
        default: "default.jpg"
    }],
    category: {
        type: mongoose.Schema.ObjectId,
        ref: "Category",
        required: [true, "Please, select a category"]
    }
});

module.exports = mongoose.model("Product", ProductSchema);
