const feedbackSevice = require("./feedback.service");

module.exports = {
  getAllFeedback: async function (req, res) {
    try {
      const r = await feedbackSevice.getAllFeedback(req);
      return res.status(200).json(r);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  createFeedback: async function (req, res) {
    try {
      const r = await feedbackSevice.creatFeedback(req);
      return res.status(200).json(r);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  deleteFeedback: async function (req, res) {
    try {
      const r = await feedbackSevice.deleteFeedback(req);
      return res.status(200).json(r);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};
