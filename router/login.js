var express = require("express");
var router = express.Router();

router.post("/login",require("../controller/login"));

module.exports = router;