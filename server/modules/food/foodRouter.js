const express = require("express");
const foodController = require("./foodControllers");
const router = express.Router();

module.exports = router
	.get("/", foodController.getAllFoods)
	.get("/:id", foodController.getFoodById);
