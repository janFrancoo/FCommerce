const asyncHandler = require("express-async-handler");
const CustomError = require("../helpers/CustomError");
const User = require("../models/User");
const UserDetail = require("../models/UserDetail");
const Cart = require("../models/Cart");
const { sendJWT } = require("../helpers/token");
const bcrypt = require('bcrypt');
const sendEmail = require("../helpers/mail");

const register = asyncHandler(async (req, res, next) => {
    const { email, username, password } = req.body;

    if (!(email && username && password))
        return next(new CustomError("Missing inputs"), 400);

    const user = await User.create({
        email,
        username,
        password
    });

    await UserDetail.create({
        user: user
    });

    await Cart.create({
        user: user
    });

    const verificationToken = user.getMailVerificationToken();
    await user.save();
    const verifyMailUrl = `http://localhost:3000/auth/verify-email?verificationToken=${verificationToken}`;
    const mailTemplate = `
        <h3>Confirm your e-mail</h3>
        <p>Click <a href='${verifyMailUrl}' target='_blank'>here.</a> for verify your e-mail address.`;

    try {
        await sendEmail({
            from: process.env.SMTP_USER,
            to: email,
            subject: "FCommerce - Confirm your e-mail",
            html: mailTemplate
        });

        res.status(200).json({
            success: true,
            message: "Verification e-mail is sent to e-mail address"
        });
    } catch (err) {
        console.log(err);
        user.emailVerificationToken = undefined;
        user.emailVerificationExpire = undefined;

        await user.save();

        return next(new CustomError("E-mail could not be sent", 500));
    }
});

const login = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;

    if (!(email, password))
        return next(new CustomError("Missing inputs"), 400);

    const user = await User.findOne({ email }).select("+password");

    if (!user)
        return next(new CustomError("There is no such an e-mail address", 404));

    if (!bcrypt.compareSync(password, user.password))
        return next(new CustomError("Please, check your credentials"), 400);

    sendJWT(user, res);
});

const logout = asyncHandler(async (req, res, next) => {
    const { NODE_ENV } = process.env;

    res.status(200).cookie({
        httpOnly: true,
        expires: new Date(Date.now()),
        secure: NODE_ENV === "dev" ? false : true
    }).json({
        sucess: true,
        message: "Logout successfully"
    });
});

const confirmMail = asyncHandler(async (req, res, next) => {
    const { verificationToken } = req.query;

    if (!verificationToken)
        return next(new CustomError("Invalid token", 400));

    let user = await User.findOne({
        emailVerificationToken: verificationToken,
        emailVerificationExpire: {
            $gt: Date.now()
        }
    });

    if (!user)
        return next(new CustomError("Invalid token or expired session", 400));

    user.emailVerificationToken = undefined;
    user.emailVerificationExpire = undefined;
    await user.save();

    sendJWT(user, res);
});

module.exports = {
    register,
    login,
    logout,
    confirmMail
};
