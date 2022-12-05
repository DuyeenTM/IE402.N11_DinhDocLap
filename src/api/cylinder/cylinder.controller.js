const cylinderSevice = require("./cylinder.sevice");

module.exports = {
  getCylinders: async function (req, res) {
    try {
      const cylinder = await cylinderSevice.getCylinders(req);
      return res.status(200).json(cylinder);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  postCylinder: async function (req, res) {
    try {
      const cylinder = await cylinderSevice.postCylinder(req);
      return res.status(200).json(cylinder);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};
