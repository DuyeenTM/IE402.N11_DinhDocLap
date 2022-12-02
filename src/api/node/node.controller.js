const nodeSevice = require("./node.sevice");

module.exports = {
  getNodes: async function (req, res) {
    try {
      const node = await nodeSevice.getNodes();

      return res.status(200).json(node);
    } catch (error) {
      return res.status(200).json({
        errCode: -1,
        errMessage: "Error from server",
      });
    }
  },

  getNode: async function (req, res) {
    try {
      const node = await nodeSevice.getNode(req);
      return res.status(200).json(node);
    } catch (error) {
      return res.status(200).json({
        errCode: -1,
        errMessage: "Error from server",
      });
    }
  },

  postNode: async function (req, res) {
    try {
      console.log(req.body, req.query);
      const node = await nodeSevice.postNode(req);
      return res.status(200).json(node);
    } catch (error) {
      return res.status(200).json({
        errCode: -1,
        errMessage: "Error from server",
      });
    }
  },
};
