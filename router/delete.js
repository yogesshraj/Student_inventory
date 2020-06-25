const express = require("express");
const middleware = require("../middleware/middleware");
const router = express.Router();

router.delete("/delete_profile",middleware,require("../controller/delete"));

module.exports = router;
