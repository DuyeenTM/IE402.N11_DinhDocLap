const express = require("express");
const router = express.Router();
const lineController = require("./line.controller");

router.get("/get", lineController.getLines);
router.post("/post", lineController.postLine);

module.exports = router;
