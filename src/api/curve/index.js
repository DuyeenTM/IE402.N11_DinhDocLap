const express = require("express");
const router = express.Router();
const curveController = require("./curve.controller");

router.get("/getByName", curveController.getCurves);
router.post("/post", curveController.postCurve);
router.post("/postFast", curveController.post);

module.exports = router;
