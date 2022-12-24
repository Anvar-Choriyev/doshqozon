const Food = require("./Food");
const catchAsync = require("../../core/utils/catchAsync");

exports.getAllCategory = catchAsync(
  async (req, res, next) => {
    const allCategories = Food.findAll();

    res.json({
      status: "succes",
      message: "Barcha kategoriyalar",
      error: null,
      data: { allCategories },
    });
  }
);
