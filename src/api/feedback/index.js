const express = require("express");
const router = express.Router();
const feedbackController = require("./feedback.controller");

router.get("/getAll", feedbackController.getAllFeedback);
router.post("/post", feedbackController.createFeedback);
router.delete("/delete", feedbackController.deleteFeedback);

module.exports = router;
