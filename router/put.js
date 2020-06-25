const express = require("express");
const router = express.Router();

router.put("/:username",require("../controller/put"));

module.exports = router;
