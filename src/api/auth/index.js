const express = require("express");
const router = express.Router();
const authController = require("./auth.controller");
const authMiddleWare = require("../../middleware/auth");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get(
  "/test",
  authMiddleWare.verifyToken,
  authMiddleWare.checkPermision,
  (req, res) => {
    res.status(401).json({ message: "OK" });
  }
);

module.exports = router;
