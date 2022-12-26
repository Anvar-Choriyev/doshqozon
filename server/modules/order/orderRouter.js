const express = require("express");
const orderController = require("../order/orderController");
const router = express.Router();

module.exports = router.get("/", orderController.getAllOrders);
