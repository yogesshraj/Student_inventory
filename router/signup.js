const express = require("express");
const router = express.Router();

router.post("/signup",require("../controller/signup"))

module.exports=router;
