const express = require("express");
const app = express();
const AppError = require("./core/utils/AppError");
const authRouter = require("../server/modules/auth/authRouter");
const categoryRouter = require("../server/modules/category/categoryRouter");
const userRouter = require("../server/modules/user/userRouter");
const orderRouter = require("../server/modules/order/orderRouter");
const orderItemRouter = require("../server/modules/orderItem/orderItemRouter");
const errorController = require("./modules/error/errorController");
app.use(express.json());
app.use(require("cors")());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/orders", orderRouter);
app.use("/api/v1/orderItems", orderItemRouter);

app.use(express.static(__dirname + "/build"));

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});

app.all("*", (req, res, next) => {
  return next(
    new AppError(`${req.path} yo'li mavjud emas`, 404)
  );
});

app.use(errorController);

module.exports = app;
