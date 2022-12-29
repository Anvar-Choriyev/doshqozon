const { Op } = require("sequelize");
const Food = require("./Food");
const catchAsync = require("../../core/utils/catchAsync");
const AppError = require("../../core/utils/AppError");
const foods = require("../../core/constants/foods.json");

exports.getFoodById = catchAsync(async (req, res, next) => {
	const { id } = req.params;
	// console.log(typeof id, "AAAAAAAAAAAAAA");
	const mainFood = await Food.findByPk(id);
	let additional;
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
	if (id == 9) {
		additional = await Food.findAll({
			where: {
				categoryId: {
					[Op.eq]: 3,
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
