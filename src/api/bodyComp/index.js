const express = require("express");
const router = express.Router();
const bodyCompController = require("./bodyComp.controller");

router.get("/getAll", bodyCompController.getBodyComps);
router.post("/post", bodyCompController.postBodyComp);

module.exports = router;
