const curveSevice = require("./curve.sevice");

module.exports = {
  getCurves: async function (req, res) {
    try {
      const curve = await curveSevice.getCurves();
      return res.status(200).json(curve);
    } catch (error) {
      return res.status(200).json({
        errCode: -1,
        errMessage: "Error from server",
      });
    }
  },

  postCurve: async function (req, res) {
    try {
      const curve = await curveSevice.postCurve(req);
      return res.status(200).json(curve);
    } catch (error) {
      return res.status(200).json({
        errCode: -1,
        errMessage: "Error from server",
      });
    }
  },
};
