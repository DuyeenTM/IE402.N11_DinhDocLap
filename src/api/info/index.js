const express = require("express");
const router = express.Router();
const infoController = require("./info.controller");

router.get("/get", infoController.getAllInfo);
router.post("/post", infoController.creatInfo);
router.post("/update", infoController.updateInfo);
router.delete("/delete", infoController.deleteInfo);

module.exports = router;
