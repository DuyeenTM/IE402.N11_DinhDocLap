const bodyCompSevice = require("./bodyComp.sevice");

module.exports = {
  getBodyComps: async function (req, res) {
    try {
      const bodyComp = await bodyCompSevice.getBodyComps();

      return res.status(200).json(bodyComp);
    } catch (error) {
      return res.status(200).json({
        errCode: -1,
        errMessage: "Error from server",
      });
    }
  },

  postBodyComp: async function (req, res) {
    try {
      const bodyComp = await bodyCompSevice.postBodyComp(req);
      return res.status(200).json(bodyComp);
    } catch (error) {
      return res.status(200).json({
        errCode: -1,
        errMessage: "Error from server",
      });
    }
  },
};
