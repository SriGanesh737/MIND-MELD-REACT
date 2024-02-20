const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
const port = process.env.PORT || 8000;
const myUri = process.env.myUri;
const connectionParams = { useNewUrlParser: true };

mongoose.connect(myUri, connectionParams).then(() => {
  app.listen(port, () => {
    console.log("connected to database & app listening on port " + port);
  });
});
