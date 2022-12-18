const polygonSevice = require("./polygon.sevice");

module.exports = {
  getPolygons: async function (req, res) {
    try {
      const polygon = await polygonSevice.getPolygons(req);
      return res.status(200).json(polygon);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  postPolygon: async function (req, res) {
    try {
      const polygon = await polygonSevice.postPolygon(req);
      return res.status(200).json(polygon);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  post: async function (req, res) {
    try {
      const polygon = await polygonSevice.post(req);
      return res.status(200).json(polygon);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};
