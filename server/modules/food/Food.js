const { DataTypes } = require("sequelize");
const sequelize = require("../../core/config/database/database");

const Food = sequelize.define(
  "foods",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    url: DataTypes.STRING,
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    measure: DataTypes.STRING(100),
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    underscored: true,
    timestamps: false,
  }
);

module.exports = Food;
