const { DataTypes } = require("sequelize");
const sequelize = require("../../core/config/database/database");

const Category = sequelize.define(
  "category",
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
  }
);

module.exports = Category;
