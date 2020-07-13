const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserDetailSchema = new Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    },
    orders: [{
        products: [{
            product: {
                type: mongoose.Schema.ObjectId,
                ref: "Product"
            },
            amount: {
                type: Number
            }
        }],
        date: {
            type: Date,
            default: Date.now
        },
        status: {
            type: String,
            default: "preparing",
            enum: [
                "preparing",
                "on road",
                "delivered",
                "cancelled"
            ]
        }
    }],
    cart: {
        type: mongoose.Schema.ObjectId,
        ref: "Cart"
    }
});

module.exports = mongoose.model("UserDetail", UserDetailSchema);
