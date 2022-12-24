const express = require("express");
const router = express.Router();
const userController = require("./userController");

module.exports = router
	.get("/", userController.getAllUsers)
	.get("/:id", userController.getUserById)
	.post("/", userController.createUser);
