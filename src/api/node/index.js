const express = require("express");
const router = express.Router();
const nodeController = require("./node.controller");

router.get("/get", nodeController.getNodes);
router.get("/getId", nodeController.getNode);
router.post("/post", nodeController.postNode);

module.exports = router;
