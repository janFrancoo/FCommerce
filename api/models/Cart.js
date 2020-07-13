const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CartSchema = new Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: [true, "Please, provide who you are"]
    },
    products: [{
        product: {
            type: mongoose.Schema.ObjectId,
            ref: "Product",
        },
        amount: {
            type: Number,
            default: 1
        }
    }]
});

module.exports = mongoose.model("Cart", CartSchema);
