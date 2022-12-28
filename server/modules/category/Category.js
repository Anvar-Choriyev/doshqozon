const { DataTypes } = require("sequelize");
const sequelize = require("../../core/config/database/database");
const Food = require("../food/Food");

const Category = sequelize.define(
  "categories",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    underscored: true,
    timestamps: false,
  }
);

Category.hasMany(Food, {
  as: "foods",
  foreignKey: "categoryId",
});
Food.belongsTo(Category, { as: "category" });

module.exports = Category;
