const Info = require("../../model/info");

module.exports = {
  getAllInfo: async function (req) {
    return new Promise(async function (resolve, reject) {
      try {
        const res = await Info.find();
        resolve(res);
      } catch (error) {
        reject(error);
      }
    });
  },
  creatInfo: async function (req) {
    return new Promise(async function (resolve, reject) {
      try {
        const res = await Info.create(req.body);
        resolve(res);
      } catch (error) {
        reject(error);
      }
    });
  },
  updateInfo: async function (req) {
    const data = req.body;
    return new Promise(async function (resolve, reject) {
      try {
        const r = await Info.findOneAndUpdate(
          {
            _id: req.query.id,
          },
          {
            title: data.title,
            summary: data.summary,
            desc: data.desc,
          }
        );
        resolve({
          errCode: 0,
          errMessage: "Updated Info Successfully",
        });
      } catch (err) {
        reject(err);
      }
    });
  },

  deleteInfo: async function (req) {
    return new Promise(async function (resolve, reject) {
      try {
        const res = await Info.findOneAndDelete({ _id: req.query.id });
        resolve({ errorCode: 200, mess: "Delete successfull" });
      } catch (error) {
        reject(error);
      }
    });
  },
};
