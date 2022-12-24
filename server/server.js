const dotenv = require("dotenv");
const nodeEnv = process.env.NODE_ENV;
let envPath;
if (nodeEnv === "dev") {
	envPath = ".env.dev";
} else if (nodeEnv === "prod") {
	envPath = ".env.prod";
}
dotenv.config({ path: `./${envPath}` });
const app = require("../server/app");
const db = require("../server/core/config/database/database");
const PORT = process.env.PORT || 7070;

const start = async () => {
	try {
		await db.authenticate();
		await db.sync({
			force: true,
			// alter: true
		});

		app.listen(PORT, () => {
			console.log(`Server started on port ${PORT}`);
		});
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};
start();
