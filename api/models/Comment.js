const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: [true, "Please, provide who you are"]
    },
    product: {
        type: mongoose.Schema.ObjectId,
        ref: "Product",
        required: [true, "Please, provide a product"]
    },
    message: {
        type: String,
        minlength: [3, "Please, enter a message with minimum length 3"]
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Comment", CommentSchema);
