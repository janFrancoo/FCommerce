const sendJWT = (user, res) => {
    const token = user.getJWT();
    const { JWT_COOKIE, NODE_ENV } = process.env;

    return res.status(200).cookie("access_token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + parseInt(JWT_COOKIE * 1000 * 60)),
        secure: NODE_ENV === "dev" ? false : true
    })
    .json({
        success: true,
        access_token: token,
        data: {
            email: user.email,
            username: user.username,
        }
    });
};

const isTokenIncluded = (req) => {
    return (req.headers.authorization && req.headers.authorization.startsWith("Bearer: "));
};

const getAccessToken = (req) => {
    return req.headers.authorization.split(" ")[1];
};

module.exports = {
    sendJWT,
    isTokenIncluded,
    getAccessToken
}