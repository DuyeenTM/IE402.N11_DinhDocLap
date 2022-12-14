const Feedback = require("../../model/feedback");

module.exports = {
  getAllFeedback: async function (req) {
    return new Promise(async function (resolve, reject) {
      try {
        const res = await Feedback.find();
        resolve(res);
      } catch (error) {
        reject(error);
      }
    });
  },
  creatFeedback: async function (req) {
    return new Promise(async function (resolve, reject) {
      try {
        const res = await Feedback.create(req.body);
        resolve(res);
      } catch (error) {
        reject(error);
      }
    });
  },
  deleteFeedback: async function (req) {
    return new Promise(async function (resolve, reject) {
      try {
        const res = await Feedback.findOneAndDelete({ _id: req.query.id });
        resolve({ errorCode: 200, mess: "Delete successfull" });
      } catch (error) {
        reject(error);
      }
    });
  },
};
