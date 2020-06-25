const express = require("express");
const middleware = require("../middleware/middleware");
const router = express.Router();

router.get("/all",middleware,require("../controller/get").getall);

router.get("/:username",require("../controller/get").getId);

module.exports = router


