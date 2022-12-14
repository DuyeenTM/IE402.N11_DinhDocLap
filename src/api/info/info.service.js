const Info = require("../../model/info");

module.exports = {
  getAllInfo: async function (req) {
    return new Promise(async function (resolve, reject) {
      try {
        const res = await Info.findOne();
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
            _id: "639944e9f4c01df85c87dcea",
          },
          {
            [data.keyword]: data.data,
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
