const express = require("express");
const app = express();
app.use(express.json());
const userRouter = require("../server/modules/user/userRouter");
const authRouter = require("../server/modules/auth/authRouter");
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
module.exports = app;
