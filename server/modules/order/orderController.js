const { Op } = require("sequelize");
const Order = require("../order/Order");
const AppError = require("../../core/utils/AppError");
const catchAsync = require("../../core/utils/catchAsync");

exports.getAllOrders = catchAsync(async (req, res, next) => {
	const allOrders = await Order.findAll();

	res.json({
		status: "success",
		message: "All Orders",
		error: null,
		data: allOrders,
	});
});
