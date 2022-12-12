const express = require("express");
const router = express.Router();
const cylinderController = require("./cylinder.controller");

router.get("/getByName", cylinderController.getCylinders);
router.post("/post", cylinderController.postCylinder);
router.post("/postFast", cylinderController.post);

module.exports = router;
