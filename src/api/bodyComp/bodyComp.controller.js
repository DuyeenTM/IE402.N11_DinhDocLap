const bodyCompSevice = require("./bodyComp.sevice");

module.exports = {
  getBodyComps: async function (req, res) {
    try {
      const bodyComp = await bodyCompSevice.getBodyComps(req);

      return res.status(200).json(bodyComp);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  postBodyComp: async function (req, res) {
    try {
      const bodyComp = await bodyCompSevice.postBodyComp(req);
      return res.status(200).json(bodyComp);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  post: async function (req, res) {
    try {
      const bodyComp = await bodyCompSevice.post(req);
      return res.status(200).json(bodyComp);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};
