const curveSevice = require("./curve.sevice");

module.exports = {
  getCurves: async function (req, res) {
    try {
      const curve = await curveSevice.getCurves(req);
      return res.status(200).json(curve);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  postCurve: async function (req, res) {
    try {
      const curve = await curveSevice.postCurve(req);
      return res.status(200).json(curve);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  post: async function (req, res) {
    try {
      const curve = await curveSevice.post(req);
      return res.status(200).json(curve);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};
