const faceSevice = require("./face.sevice");

module.exports = {
  getFaces: async function (req, res) {
    try {
      const face = await faceSevice.getFaces();
      return res.status(200).json(face);
    } catch (error) {
      return res.status(200).json({
        errCode: -1,
        errMessage: "Error from server",
      });
    }
  },

  getFace: async function (req, res) {
    try {
      const face = await faceSevice.getFace(req);
      return res.status(200).json(face);
    } catch (error) {
      return res.status(200).json({
        errCode: -1,
        errMessage: "Error from server",
      });
    }
  },

  postFace: async function (req, res) {
    try {
      const face = await faceSevice.postFace(req);
      return res.status(200).json(face);
    } catch (error) {
      return res.status(200).json({
        errCode: -1,
        errMessage: "Error from server",
      });
    }
  },
};
