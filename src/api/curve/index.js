const express = require("express");
const router = express.Router();
const curveController = require("./curve.controller");

router.get("/getAll", curveController.getCurves);
router.post("/post", curveController.postCurve);

module.exports = router;
