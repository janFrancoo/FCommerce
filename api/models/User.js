const mongoose = require("mongoose");
const crypto = require("crypto");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, "Please, provide an e-mail"],
        unique: true,
        match: [
            /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
            "Please, provide a valid e-mail"
        ]
    },
    username: {
        type: String,
        minlength: [4, "Please, provide a username with minimum length 4"],
        required: [true, "Please, provide a username"]
    },
    role: {
        type: String,
        default: "user",
        enum: [
            "user",
            "admin"
        ]
    },
    password: {
        type: String,
        minlength: [6, "Please, provide a password with minimum length 6"],
        required: [true, "Please, provide a password"],
        select: false
    },
    createDate: {
        type: Date,
        default: Date.now
    },
    emailVerificationToken: {
        type: String
    },
    emailVerificationExpire: {
        type: Date
    },
    resetPasswordToken: {
        type: String
    },
    resetPasswordExpire: {
        type: Date
    }
});

UserSchema.methods.getJWT = function() {
    const { JWT_SECRET_KEY, JWT_EXPIRE } = process.env;

    const payload = {
        id: this._id,
        email: this.email,
        role: this.role
    };

    const token = jwt.sign(payload, JWT_SECRET_KEY, {
        expiresIn: JWT_EXPIRE
    });

    return token;
};

UserSchema.methods.getMailVerificationToken = function() {
    const randomHex = crypto.randomBytes(15).toString("hex");
    const { EMAIL_VERIFICATION_EXPIRE } = process.env;
    const emailVerificationToken = crypto
    .createHash("SHA256")
    .update(randomHex)
    .digest("hex");

    this.emailVerificationToken = emailVerificationToken;
    this.emailVerificationExpire = Date.now() + parseInt(EMAIL_VERIFICATION_EXPIRE);

    return emailVerificationToken;
};

UserSchema.methods.getPasswordResetToken = function() {
    const randomHex = crypto.randomBytes(15).toString("hex");
    const { RESET_PWD_EXPIRE } = process.env;
    const resetPwdToken = crypto
    .createHash("SHA256")
    .update(randomHex)
    .digest("hex");

    this.resetPasswordToken = resetPwdToken;
    this.resetPasswordExpire = Date.now() + parseInt(RESET_PWD_EXPIRE);

    return resetPwdToken;
};

UserSchema.pre("save", function(next) {
    if (!this.isModified("password"))
        next();

    bcrypt.genSalt(10, (err, salt) => {
        if (err)
            next(err);

        bcrypt.hash(this.password, salt, (err, hash) => {
            if (err)
                next(err);

            this.password = hash;
            next();
        });
    });
});

module.exports = mongoose.model("User", UserSchema);
