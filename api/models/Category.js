const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name: {
        type: String,
        require: [true, "Please, enter a category name"],
        unique: true
    }
});

module.exports = mongoose.model("Category", CategorySchema);
