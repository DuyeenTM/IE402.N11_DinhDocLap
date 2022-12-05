const pointSevice = require("./point.sevice");

module.exports = {
  getPoints: async function (req, res) {
    try {
      const point = await pointSevice.getPoints();
      return res.status(200).json(point);
    } catch (error) {
      return res.status(200).json({
        errCode: -1,
        errMessage: "Error from server",
      });
    }
  },

  postPoint: async function (req, res) {
    try {
      const point = await pointSevice.postPoint(req);
      return res.status(200).json(point);
    } catch (error) {
      return res.status(200).json({
        errCode: -1,
        errMessage: "Error from server",
      });
    }
  },
};
