const express = require("express");
const { index } = require("../controllers/auth");

const router = express.Router();

router.use("/", index);

module.exports = router;
