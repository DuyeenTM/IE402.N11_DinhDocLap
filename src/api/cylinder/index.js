const express = require("express");
const router = express.Router();
const cylinderController = require("./cylinder.controller");

router.get("/getByRAndH", cylinderController.getCylinders);
router.post("/post", cylinderController.postCylinder);

module.exports = router;
