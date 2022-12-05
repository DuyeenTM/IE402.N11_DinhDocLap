const faceSevice = require("./face.sevice");

module.exports = {
  getFaces: async function (req, res) {
    try {
      const face = await faceSevice.getFaces();
      return res.status(200).json(face);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  getFace: async function (req, res) {
    try {
      const face = await faceSevice.getFace(req);
      return res.status(200).json(face);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  postFace: async function (req, res) {
    try {
      const face = await faceSevice.postFace(req);
      return res.status(200).json(face);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};
