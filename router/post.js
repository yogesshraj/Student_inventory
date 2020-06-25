const express = require("express");
const router = express.Router();

router.post("/data",require("../controller/post"));

module.exports=router;