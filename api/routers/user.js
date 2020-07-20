const express = require("express");
const { verifyJWT, isVerified } = require("../middlewares/auth");
const { updateAddress, addProductToCart, removeProductFromCart, 
        getOrders, getCart, getProfile } = require("../controllers/user");

const router = express.Router();

router.put("/update-address", [verifyJWT, isVerified], updateAddress);
router.post("/add-to-cart", [verifyJWT, isVerified], addProductToCart);
router.delete("/remove-from-cart", [verifyJWT, isVerified], removeProductFromCart);
router.get("/orders", [verifyJWT, isVerified], getOrders);
router.get("/cart", [verifyJWT, isVerified], getCart);
router.get("/profile", [verifyJWT, isVerified], getProfile);

module.exports = router;
