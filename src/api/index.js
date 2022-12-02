const express = require("express");
const router = express.Router();

const nodeRouter = require("./node");

router.use("/node", nodeRouter);
module.exports = router;
