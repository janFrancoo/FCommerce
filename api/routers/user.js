const express = require("express");
const { verifyJWT } = require("../middlewares/auth");
const { updateAddress, addProductToCart, removeProductFromCart, getOrders, getCart } = require("../controllers/user");

const router = express.Router();

router.put("/update-address", verifyJWT, updateAddress);
router.post("/add-to-cart", verifyJWT, addProductToCart);
router.delete("/remove-from-cart", verifyJWT, removeProductFromCart);
router.get("/orders", verifyJWT, getOrders);
router.get("/cart", verifyJWT, getCart);

module.exports = router;
