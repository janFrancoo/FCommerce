const express = require("express");
const dotenv = require("dotenv");
const connectDatabase = require("./helpers/connect_db");
const routers = require("./routers");
const customError = require("./middlewares/custom_error_handler");
const path = require("path");

const app = express();

dotenv.config({
    path: "./config.env"
});

connectDatabase();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
});
app.use(express.json());
app.use("/api", routers);
app.use(customError);
app.use(express.static(path.join(__dirname, "public")));

app.listen(process.env.PORT, () => {
    console.log(`App is started on ${process.env.PORT} - ${process.env.NODE_ENV} mode!`);
});
