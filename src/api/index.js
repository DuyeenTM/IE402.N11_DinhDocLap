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
const authRouter = require("./auth");
const feedbackRouter = require("./feedback");
const infoRouter = require("./info");

router.use("/bodyComp", bodyCompRouter);
router.use("/curve", curveRouter);
router.use("/cylinder", cylinderRouter);
router.use("/face", faceRouter);
router.use("/line", lineRouter);
router.use("/point", pointRouter);
router.use("/polygon", polygonRouter);
router.use("/prism", prismRouter);
router.use("/node", nodeRouter);
router.use("/auth", authRouter);
router.use("/feedback", feedbackRouter);
router.use("/info", infoRouter);

module.exports = router;
