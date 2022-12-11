const express = require("express");
const router = express.Router();
const lineController = require("./line.controller");

router.get("/getPolyline", lineController.getPolyline);
router.get("/getLineByWandHandColor", lineController.getLine);
router.post("/post", lineController.postLine);
router.post("/postFast", lineController.post);
router.post("/postPolyline", lineController.postPolyline);

module.exports = router;
