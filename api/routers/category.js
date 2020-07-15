const express = require("express");
const { verifyJWT, getAdminAccess } = require("../middlewares/auth");
const { getCategories, addCategory, removeCategory } = require("../controllers/category");
const router = express.Router();

router.get("/categories", getCategories);
router.post("/add-category", [verifyJWT, getAdminAccess], addCategory);
router.delete("/remove-category", [verifyJWT, getAdminAccess], removeCategory);

module.exports = router;
