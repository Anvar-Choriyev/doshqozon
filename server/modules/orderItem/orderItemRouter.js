const express = require("express");
const { get } = require("../order/orderRouter");
const orderItemController = require("./orderItemController");
const router = express.Router();

module.exports = router
	.get("/", orderItemController.getItemsInOrder)
	.get("/:id", orderItemController.getOrderItemById)
	.post("/", orderItemController.createItem);
