const express = require("express");
const { verifyJWT, isVerified, getAdminAccess } = require("../middlewares/auth");
const { getProduct, getProducts, addComment, getComments, addProduct, 
        updateProduct, removeProduct, uploadProductImages } = require("../controllers/product");
const mediaUpload = require("../middlewares/product_image_upload");

const router = express.Router();

router.get("/products", getProducts);
router.post("/add-comment", [verifyJWT, isVerified], addComment);
router.post("/add-product", [verifyJWT, getAdminAccess, mediaUpload.array('photos', 5)], addProduct);
router.put("/update-product", [verifyJWT, getAdminAccess, mediaUpload.array('photos', 5)], updateProduct);
router.delete("/remove-product", [verifyJWT, getAdminAccess], removeProduct);
router.get("/:id/comments", getComments);
router.get("/:id", getProduct);

module.exports = router;
