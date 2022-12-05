const express = require("express");
const router = express.Router();
const nodeController = require("./node.controller");

router.get("/getAll", nodeController.getNodes);
router.get("/get", nodeController.getNode);
router.post("/post", nodeController.postNode);

module.exports = router;
