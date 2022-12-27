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

exports.getOrderById = catchAsync(async (req, res, next) => {
	const { id } = req.params;
	const orderById = await Order.findByPk(id);

	if (!orderById) {
		return next(new AppError("Order does not exist"));
	}

	res.json({
		status: "success",
		message: "order by id",
		error: null,
		data: orderById,
	});
});

exports.createOrder = catchAsync(async (req, res, next) => {
	const { table, orderType, orderStatus } = req.body;
	const newOrder = await Order.create({
		table: table,
		orderType: orderType,
		orderStatus: orderStatus,
	});

	res.json({
		status: "success",
		message: "new order",
		error: null,
		data: newOrder,
	});
});
