const { DataTypes } = require("sequelize");
const sequelize = require("../../core/config/database/database");
const User = require("../user/User");
const orderStatus = require("../../core/constants/orderStatus");
const orderType = require("../../core/constants/orderType");
const paymentType = require("../../core/constants/paymentType");

const Order = sequelize.define(
	"order",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		table: {
			type: DataTypes.INTEGER,
		},
		totalPrice: {
			type: DataTypes.INTEGER,
		},
		orderType: {
			type: DataTypes.ENUM(Object.values(orderType)),
			allowNull: false,
		},
		orderStatus: {
			type: DataTypes.ENUM(Object.values(orderStatus)),
			allowNull: false,
		},
		paymentType: {
			type: DataTypes.ENUM(Object.values(paymentType)),
		},
	},
	{
		underscored: true,
	}
);

User.hasMany(Order, { as: "orders", foreignKey: "userId" });
Order.belongsTo(User, { as: "user" });

module.exports = Order;
