const express = require("express");
const app = express();
const categoryRouter = require("../server/modules/category/categoryRouter");
const userRouter = require("../server/modules/user/userRouter");
app.use(express.json());
app.use(require("cors")());
app.use("/api/v1/users", userRouter);
app.use("/api/v1/categories", categoryRouter);
module.exports = app;
