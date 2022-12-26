const AppError = require("../../core/utils/AppError");

const sendErrorDev = (err, res) => {
	res.status(err.statusCode).json({
		status: err.statusCode,
		message: err.message,
		stack: err.stack,
		error: err.errors,
	});
};

const sendErrorProd = (err, res) => {
	res.status(err.statusCode).json({
		status: err.status,
		message: err.message,
		error: err.errors,
	});
};

const errorController = (err, req, res, next) => {
	err.statusCode = err.statusCode || 500;
	err.status = err.status || "error";
	if (process.env.NODE_ENV === "dev") {
		console.log(err);
		console.log(err.stack);
		console.log(err.message);
		res.status(err.statusCode).json({
			status: err.status,
			message: err.message,
		});
		sendErrorDev(err, res);
	} else if (process.env.NODE_ENV === "prod") {
		res.status(err.statusCode).json({
			status: err.status,
			message: err.message,
		});
		sendErrorProd(err, res);
	}
};

module.exports = errorController;
