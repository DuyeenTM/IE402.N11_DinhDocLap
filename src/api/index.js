const express = require("express");
const router = express.Router();

const nodeRouter = require("./node");
const prismRouter = require("./prism");
const polygonRouter = require("./polygon");
const pointRouter = require("./point");
const lineRouter = require("./line");
const faceRouter = require("./face");
const cylinderRouter = require("./cylinder");
const curveRouter = require("./curve");
const bodyCompRouter = require("./bodyComp");

router.use("/bodyComp", bodyCompRouter);
router.use("/curve", curveRouter);
router.use("/cylinder", cylinderRouter);
router.use("/face", faceRouter);
router.use("/line", lineRouter);
router.use("/point", pointRouter);
router.use("/polygon", polygonRouter);
router.use("/prism", prismRouter);
router.use("/node", nodeRouter);
module.exports = router;
