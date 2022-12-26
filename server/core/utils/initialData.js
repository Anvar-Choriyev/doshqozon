const { Op } = require("sequelize");
const Category = require("../../modules/category/Category");
const Food = require("../../modules/food/Food");
const catchAsync = require("./catchAsync");
const categoriesJson = require("../constants/categories.json");
const foodsJson = require("../constants/foods.json");
const User = require("../../modules/user/User");
const userRoles = require("../constants/userRole");
module.exports = catchAsync(async () => {
  const countCategories = await Category.count();

  if (countCategories === 0) {
    await Category.bulkCreate(categoriesJson);
  }
  const countFoods = await Food.count();

  if (countFoods === 0) {
    await Food.bulkCreate(foodsJson);
  }
  const adminCount = await User.count({
    where: {
      userRole: {
        [Op.eq]: userRoles.ADMIN,
      },
    },
  });
  if (adminCount === 0) {
    const adminInfo = {
      name: "Umarov Ali",
      username: "admin",
      password: "20230101",
      userRole: "ADMIN",
    };
    await User.create(adminInfo);
  }
});
