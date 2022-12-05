const express = require("express");
const router = express.Router();
const pointController = require("./point.controller");

router.get("/getAll", pointController.getPoints);
router.post("/post", pointController.postPoint);

module.exports = router;
