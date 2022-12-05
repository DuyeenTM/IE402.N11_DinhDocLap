const polygonSevice = require("./polygon.sevice");

module.exports = {
  getPolygons: async function (req, res) {
    try {
      const polygon = await polygonSevice.getPolygons();
      return res.status(200).json(polygon);
    } catch (error) {
      return res.status(200).json({
        errCode: -1,
        errMessage: "Error from server?",
      });
    }
  },

  postPolygon: async function (req, res) {
    try {
      const polygon = await polygonSevice.postPolygon(req);
      return res.status(200).json(polygon);
    } catch (error) {
      return res.status(200).json({
        errCode: -1,
        errMessage: "Error from server",
      });
    }
  },

  post: async function (req, res) {
    try {
      const polygon = await polygonSevice.post(req);
      return res.status(200).json(polygon);
    } catch (error) {
      return res.status(200).json({
        errCode: -1,
        errMessage: "Error from server",
      });
    }
  },
};
