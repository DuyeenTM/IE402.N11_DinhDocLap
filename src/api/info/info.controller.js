const infoSevice = require("./info.service");

module.exports = {
  getAllInfo: async function (req, res) {
    try {
      const r = await infoSevice.getAllInfo(req);
      return res.status(200).json(r);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  creatInfo: async function (req, res) {
    try {
      const r = await infoSevice.creatInfo(req);
      return res.status(200).json(r);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  updateInfo: async function (req, res) {
    try {
      const r = await infoSevice.updateInfo(req);
      return res.status(200).json(r);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  deleteInfo: async function (req, res) {
    try {
      const r = await infoSevice.deleteInfo(req);
      return res.status(200).json(r);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};
