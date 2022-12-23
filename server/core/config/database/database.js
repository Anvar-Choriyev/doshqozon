const { Sequelize } = require("sequelize");
const vars = process.env;

const databaseConfig = {
	host: vars.DB_HOST,
	post: vars.DB_PORT,
	database: vars.DB_DATABASE,
	user: vars.DB_USER,
	password: vars.DB_PASSWORD,
	dialect: vars.DB_DIALECT,
};

const database = new Sequelize(databaseConfig);
module.exports = database;
