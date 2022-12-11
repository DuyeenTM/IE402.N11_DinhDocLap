const User = require("../../model/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

module.exports = {
  login: async function (req) {
    try {
      const { username, password } = req.body;
      if (!(username && password)) {
        return { errorCode: 201, mess: "All input is required" };
      }
      //check username exist
      const existUser = await User.findOne({ username });

      if (existUser && (await bcrypt.compare(password, existUser.password))) {
        const token = jwt.sign(
          { userId: existUser._id, username },
          process.env.TOKEN_KEY,
          {
            expiresIn: "3d",
          }
        );
        return { errorCode: 200, token };
      } else {
        return { errorCode: 201, mess: "Invalid Credentials" };
      }
    } catch (error) {
      console.log("Register Error", error);
    }
  },
  register: async function (req) {
    try {
      const { username, password } = req.body;
      if (!(username && password)) {
        return { errorCode: 201, mess: "All input is required" };
      }
      //check username exist
      const oldUser = await User.findOne({ username });

      if (oldUser) {
        return { errorCode: 201, mess: "Username exist" };
      } else {
        const encryptedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
          username,
          password: encryptedPassword,
          role: 2,
        });

        const token = jwt.sign(
          { userId: user._id, username },
          process.env.TOKEN_KEY,
          {
            expiresIn: "3d",
          }
        );

        return { errorCode: 200, token };
      }
    } catch (error) {
      console.log("Register Error", error);
    }
  },
};
