const express = require("express");
const app = express();
const authRouter = require("../server/modules/auth/authRouter");
const categoryRouter = require("../server/modules/category/categoryRouter");
const userRouter = require("../server/modules/user/userRouter");
const orderRouter = require("../server/modules/order/orderRouter");
const orderItemRouter = require("../server/modules/orderItem/orderItemRouter");
app.use(express.json());
app.use(require("cors")());
app.use(express.static("./static", {}));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/orders", orderRouter);
app.use("/api/v1/orderItems", orderItemRouter);
module.exports = app;
