const User = require("./User");
const AppError = require("../../core/utils/AppError");
const catchAsync = require("../../core/utils/catchAsync");
const { Op } = require("sequelize");

exports.getAllUsers = catchAsync(async (req, res, next) => {
	const allUsers = await User.findAll();

	res.json({
		status: "success",
		message: "All users",
		error: null,
		data: allUsers,
	});
});

exports.getUserById = catchAsync(async (req, res, next) => {
	const { id } = req.params;
	const userById = await User.findByPk(id);
	res.json({
		status: "success",
		message: "User by ID",
		error: null,
		data: userById,
	});
});

exports.createUser = catchAsync(async (req, res, next) => {
	await User.create(req.body);
	res.json({
		status: "success",
		message: "User created",
		error: null,
		data: null,
	});
});
