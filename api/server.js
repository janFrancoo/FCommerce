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

app.use(express.json());
app.use("/api", routers);
app.use(customError);
app.use(express.static(path.join(__dirname, "public")));

app.listen(process.env.PORT, () => {
    console.log(`App is started on ${process.env.PORT} - ${process.env.NODE_ENV} mode!`);
});
