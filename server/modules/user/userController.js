const User = require("./User");
const AppError = require("../../core/utils/AppError");
const catchAsync = require("../../core/utils/catchAsync");
const { Op } = require("sequelize");

exports.getAllUsers = catchAsync(async (req, res, next) => {
	res.send("All users will be here");
});

exports.getUserById = catchAsync(async (req, res, next) => {
	res.send("User by id");
});

exports.createUser = catchAsync(async (req, res, next) => {
	res.send("User created");
});
