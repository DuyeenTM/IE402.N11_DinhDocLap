const express = require("express");
const router = express.Router();
const polygonController = require("./polygon.controller");

router.get("/getByName", polygonController.getPolygons);
router.post("/post", polygonController.postPolygon);
router.post("/postFast", polygonController.post);

module.exports = router;
