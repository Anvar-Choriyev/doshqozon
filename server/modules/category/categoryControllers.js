const Category = require("./Category");
const catchAsync = require("../../core/utils/catchAsync");
const Food = require("../food/Food");
const { Op } = require("sequelize");
exports.getAllCategory = catchAsync(
  async (req, res, next) => {
    const allCategories = await Category.findAndCountAll({
      where: { id: { [Op.in]: [1, 2, 3, 4, 5] } },
    });

    res.json({
      status: "succes",
      message: "Barcha kategoriyalar",
      error: null,
      data: allCategories.rows,
    });
  }
);
exports.getAllFoodsbyCategory = catchAsync(
  async (req, res, next) => {
    const { id } = req.params;

    const findByCategory = await Category.findByPk(id, {
      attributes: ["name"],
    });

    const allFoodsbyCategory = await Food.findAndCountAll({
      where: {
        categoryId: { [Op.eq]: id },
      },
    });
    res.json({
      status: "succes",
      message: `Kategoriyaga tegishli taomlar`,
      error: null,
      data: {
        categoryName: findByCategory.name,
        foodsArr: allFoodsbyCategory.rows,
      },
    });
  }
);
