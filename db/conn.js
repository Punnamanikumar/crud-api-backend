const mongoose = require("mongoose");
const dbUrl = "mongodb://localhost:27017/users-api";
// const dbUrl = "mongodb+srv://manikumar:manikumar@localatlasdemo.xpjfr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(dbUrl, (err, suc) => {
  if (err) console.log(err);
  console.log("Database Connected Sucessfully...");
});
