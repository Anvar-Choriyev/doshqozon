const Category = require("../../modules/category/Category");
const Food = require("../../modules/food/Food");
const catchAsync = require("./catchAsync");
const categoriesJson = require("../constants/categories.json");
const foodsJson = require("../constants/foods.json");
module.exports = catchAsync(async () => {
  const countCategories = await Category.count();

  if (countCategories === 0) {
    await Category.bulkCreate(categoriesJson);
  }
  const countFoods = await Food.count();

  if (countFoods === 0) {
    await Food.bulkCreate(foodsJson);
  }
});
