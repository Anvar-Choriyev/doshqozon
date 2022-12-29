const { Op } = require("sequelize");
const Food = require("./Food");
const catchAsync = require("../../core/utils/catchAsync");
const AppError = require("../../core/utils/AppError");
const foods = require("../../core/constants/foods.json");

exports.getFoodById = catchAsync(async (req, res, next) => {
	const { id } = req.params;
	const mainFood = await Food.findByPk(id);
	if (id == 1 || id == 2 || id == 3 || id == 4) {
		console.log("Logga kirdi");
		additional = await Food.findAll({
			where: {
				categoryId: {
					[Op.eq]: 6,
				},
			},
		});
	}
	res.json({
		status: "success",
		message: "Food by Id",
		error: null,
		data: {
			mainFood,
			extra: {
				additional,
			},
		},
	});
});
