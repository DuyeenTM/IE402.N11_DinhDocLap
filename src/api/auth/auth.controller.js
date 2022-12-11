const authSevice = require("./auth.service");

module.exports = {
  login: async function (req, res) {
    try {
      const auth = await authSevice.login(req);
      return res.status(200).json(auth);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  register: async function (req, res) {
    try {
      const auth = await authSevice.register(req);
      return res.status(200).json(auth);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};
