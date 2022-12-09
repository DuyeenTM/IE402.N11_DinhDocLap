const jwt = require("jsonwebtoken");
const user = require("../model/user");
const config = process.env;

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization.substring(7);
  if (!token) {
    return res.status(403).json({ errorCode: 403, mess: "Need token" });
  }
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).json({ errorCode: 403, mess: "Invalid token" });
  }
  return next();
};
const checkPermision = async (req, res, next) => {
  const existUser = await user.findById(req.user.userId);
  if (existUser) {
    if (existUser.role === 2) {
      return next();
    } else {
      res.status(401).json({ errorCode: 401, mess: "Unauthorized" });
    }
  } else res.status(403).json({ errorCode: 403, mess: "User not exist" });
};

module.exports = { checkPermision, verifyToken };
