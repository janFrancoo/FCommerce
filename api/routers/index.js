const express = require("express");
const auth = require("./auth");
const user = require("./user");
const comment = require("./product");
const category = require("./category");

const router = express.Router();

router.use("/auth", auth);
router.use("/user", user);
router.use("/product", comment);
router.use("/category", category);

module.exports = router;
