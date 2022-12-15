const Info = require("../../model/info");

module.exports = {
  getAllInfo: async function (req) {
    return new Promise(async function (resolve, reject) {
      try {
        const overview = await Info.Overview.findOne();
        const architecture = await Info.Architecture.findOne();
        const floor = await Info.Floor.find();
        const site = await Info.Site.find();
        resolve({ overview, architecture, floor, site });
      } catch (error) {
        reject(error);
      }
    });
  },
  creatInfo: async function (req) {
    return new Promise(async function (resolve, reject) {
      try {
        await Info.Overview.create(req.body.overview);

        await Info.Architecture.create(req.body.architecture);

        for (let i = 0; i < req.body.floor.length; ++i)
          await Info.Floor.create(req.body.floor[i]);

        for (let i = 0; i < req.body.site.length; ++i)
          await Info.Site.create(req.body.site[i]);
        resolve({ errCode: 200 });
      } catch (error) {
        reject(error);
      }
    });
  },
  updateInfo: async function (req) {
    const data = req.body;
    return new Promise(async function (resolve, reject) {
      try {
        switch (data.keyword) {
          case "overview":
            await Info.Overview.deleteMany({});
            await Info.Overview.create(data.data);
            break;
          case "architecture":
            await Info.Architecture.deleteMany({});
            await Info.Architecture.create(data.data);
            break;
          case "floor":
            await Info.Floor.deleteMany({});
            for (let i = 0; i < data.data.length; ++i)
              await Info.Floor.create(data.data[i]);
            break;
          case "site":
            await Info.Site.deleteMany({});
            for (let i = 0; i < data.data.length; ++i)
              await Info.Site.create(data.data[i]);
            break;
          default:
            break;
        }

        resolve({
          errCode: 200,
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
        // const res = await Info.findOneAndDelete({ _id: req.query.id });
        resolve({ errorCode: 200, mess: "Delete successfull" });
      } catch (error) {
        reject(error);
      }
    });
  },
};
