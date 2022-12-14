const express = require("express");
const router = express.Router();
const bodyCompController = require("./bodyComp.controller");

router.get("/getByName", bodyCompController.getBodyComps);
router.post("/post", bodyCompController.postBodyComp);
router.post("/postFast", bodyCompController.post);

module.exports = router;
