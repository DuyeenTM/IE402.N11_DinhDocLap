const express = require("express");
const router = express.Router();
const faceController = require("./face.controller");

router.get("/getAll", faceController.getFaces);
router.get("/get", faceController.getFace);
router.post("/post", faceController.postFace);

module.exports = router;
