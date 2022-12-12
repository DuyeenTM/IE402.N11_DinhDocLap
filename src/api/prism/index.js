const express = require("express");
const router = express.Router();
const prismController = require("./prism.controller");

router.get("/getByName", prismController.getPrisms);
router.post("/post", prismController.postPrism);
router.post("/postFast", prismController.post);

module.exports = router;
