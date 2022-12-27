const express = require("express");
const foodController = require("./foodControllers");
const router = express.Router();

module.exports = router.get(
  "/:id",
  foodController.getFoodById
);
