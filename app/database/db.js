const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect("<Your_mongoDB_url>", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once("open", () => console.log("Connected to the database!"))
  .on("error", (err) => console.log("Error with the database!", err));
