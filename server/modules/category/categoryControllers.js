const Category = require("./Category");
const catchAsync = require("../../core/utils/catchAsync");
const Food = require("../food/Food");
const { Op } = require("sequelize");
exports.getAllCategory = catchAsync(
  async (req, res, next) => {
    const allCategories = await Category.findAndCountAll();

    res.json({
      status: "succes",
      message: "Barcha kategoriyalar",
      error: null,
      data: { ...allCategories.rows },
    });
  }
);
exports.getAllFoodsbyCategory = catchAsync(
  async (req, res, next) => {
    const { id } = req.params;
    console.log(id);
    const allFoodsbyCategory = await Food.findAndCountAll({
      where: {
        categoryId: { [Op.eq]: id },
      },
    });
    res.json({
      status: "succes",
      message: `Kategoriyaga tegishli taomlar`,
      error: null,
      data: { ...allFoodsbyCategory.rows },
    });
  }
);
