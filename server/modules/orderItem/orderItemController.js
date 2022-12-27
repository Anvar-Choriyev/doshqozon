const { Op } = require("sequelize");
const AppError = require("../../core/utils/AppError");
const catchAsync = require("../../core/utils/catchAsync");
const Order = require("../order/Order");
const Food = require("../food/Food");
const OrderItem = require("./orderItem");

exports.getItemsInOrder = catchAsync(async (req, res, next) => {
	const { orderId } = req.params;
	if (!orderId) {
		return next(new AppError("OrderId does not exist"), 400);
	}
	const itemsInOrder = await OrderItem.findAll({
		where: {
			orderId: {
				[Op.eq]: orderId,
			},
		},
	});

	res.json({
		status: "success",
		message: "All items in order",
		error: null,
		data: itemsInOrder,
	});
});

exports.getOrderItemById = catchAsync(async (req, res, next) => {
	const { itemId } = req.params;
	const itemById = await OrderItem.findByPk(itemId);
	if (!itemById) {
		return next(new AppError("There is no item by this ID", 404));
	}

	res.json({
		status: "success",
		message: "Item by ID",
		error: null,
		data: itemById,
	});
});

exports.createItem = catchAsync(async (req, res, next) => {
	const { orderId, quantity, foodId, note } = req.body;
	const foodPrice = await Food.findByPk(foodId, {
		attributes: ["id", "price"],
	});
	const newItem = await OrderItem.create({
		orderId: orderId,
		quantity: quantity,
		foodId: foodId,
		itemTotalPrice: +foodPrice.price * quantity,
		note: note,
	});

	res.json({
		status: "success",
		message: "Item created",
		error: null,
		data: newItem,
	});
});
