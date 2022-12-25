const router = require("express").Router();
const categoryControllers = require("./categoryControllers");
router.route("/").get(categoryControllers.getAllCategory);
router
  .route("/:id")
  .get(categoryControllers.getAllFoodsbyCategory);

module.exports = router;
