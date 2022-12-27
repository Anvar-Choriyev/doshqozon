const { DataTypes } = require("sequelize");
const sequelize = require("../../core/config/database/database");
const Food = require("../food/Food");
const Order = require("../order/Order");

const OrderItem = sequelize.define(
	"orderItem",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		quantity: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		itemTotalPrice: {
			type: DataTypes.INTEGER,
		},
		note: {
			type: DataTypes.STRING,
		},
	},
	{
		underscored: true,
	}
);
OrderItem.hasOne(Food, { as: "food", foreignKey: "foodId" });
Order.hasMany(OrderItem, { as: "orderItems", foreignKey: "orderId" });
OrderItem.belongsTo(Order, { as: "order" });

module.exports = OrderItem;
