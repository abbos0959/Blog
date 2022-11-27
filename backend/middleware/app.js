const express = require("express");
const userRouter = require("../router/user");
const app = express();
const cookie = require("cookie-parser");
const cors = require("cors");
const errorHandler = require("../controllers/errorController");

app.use(express.json());
app.use(cookie());
app.use(cors());

app.use("/api/v1", userRouter);

app.use(errorHandler);

module.exports = app;
