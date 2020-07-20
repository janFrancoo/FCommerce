const express = require("express");
const { register, login, logout, confirmMail, adminCheck } = require("../controllers/auth");
const { verifyJWT, getAdminAccess } = require("../middlewares/auth");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/confirm", confirmMail);
router.get("/admin", [verifyJWT, getAdminAccess], adminCheck);

module.exports = router;
