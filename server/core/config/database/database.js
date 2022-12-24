const { Sequelize } = require("sequelize");
const vars = process.env;

const dbConfig = {
	host: vars.DB_HOST || "localhost",
	port: vars.DB_PORT || 5432,
	database: vars.DB_DATABASE || "doshqozon",
	username: vars.DB_USER || "postgres",
	password: vars.DB_PASSWORD || "root",
	dialect: vars.DB_DIALECT || "postgres",
};

const sequelize = new Sequelize(dbConfig);
module.exports = sequelize;
