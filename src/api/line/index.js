const express = require("express");
const router = express.Router();
const lineController = require("./line.controller");

router.get("/getPolylineByName", lineController.getPolyline);
router.get("/getByName", lineController.getLine);
router.post("/post", lineController.postLine);
router.post("/postFast", lineController.post);
router.post("/postPolyline", lineController.postPolyline);

module.exports = router;
