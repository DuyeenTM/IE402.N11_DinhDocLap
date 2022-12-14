const lineSevice = require("./line.sevice");

module.exports = {
  getPolyline: async function (req, res) {
    try {
      const line = await lineSevice.getPolyline(req);
      return res.status(200).json(line);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  getLine: async function (req, res) {
    try {
      const line = await lineSevice.getLine(req);
      return res.status(200).json(line);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  postLine: async function (req, res) {
    try {
      const line = await lineSevice.postline(req);
      return res.status(200).json(line);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  post: async function (req, res) {
    try {
      const line = await lineSevice.post(req);
      return res.status(200).json(line);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  postPolyline: async function (req, res) {
    try {
      const line = await lineSevice.postPolyline(req);
      return res.status(200).json(line);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};
