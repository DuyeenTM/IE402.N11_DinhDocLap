const app = require("./app.js");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
(async function main() {
  dotenv.config();

  const port = process.env.PORT || 8000;
  try {
    await mongoose.connect(process.env.DB_URI, {
      useUnifiedTopology: true,
    });
    console.log("Connect Database Successfully");

    app.listen(port, () => {
      console.log("Server is running on port: " + port);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
// main().catch(console.error);
