const express = require("express");
const userRouter = require("../router/user");
const app = express();

app.use(express.json());

app.use("/api/v1", userRouter);

module.exports = app;
