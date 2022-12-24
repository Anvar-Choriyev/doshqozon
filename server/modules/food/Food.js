const { DataTypes } = require("sequelize");
const sequelize = require("../../core/config/database/database");

const Category = sequelize.define(
  "foods",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    underscored: true,
  }
);

module.exports = Category;
