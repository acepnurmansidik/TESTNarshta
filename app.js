const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const app = express();
const APIv1 = `/api/v1`;

const authRouter = require("./app/api/v1/auth/router");
const categoriesRouter = require("./app/api/v1/categories/router");
const productInfoRouter = require("./app/api/v1/product-info/router");
const imageRouter = require("./app/api/v1/images/router");

// middlewares
const notFoundMiddleware = require("./app/middlewares/not-found");
const handleErrorMiddleware = require("./app/middlewares/handler-error");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(`${APIv1}`, authRouter);
app.use(`${APIv1}`, categoriesRouter);
app.use(`${APIv1}`, productInfoRouter);
app.use(`${APIv1}`, imageRouter);

// middlewares
app.use(notFoundMiddleware);
app.use(handleErrorMiddleware);

module.exports = app;
