const prismSevice = require("./prism.sevice");

module.exports = {
  getPrisms: async function (req, res) {
    try {
      const prism = await prismSevice.getPrisms(req);
      return res.status(200).json(prism);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  postPrism: async function (req, res) {
    try {
      const prism = await prismSevice.postPrism(req);
      return res.status(200).json(prism);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  post: async function (req, res) {
    try {
      const prism = await prismSevice.post(req);
      return res.status(200).json(prism);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};
