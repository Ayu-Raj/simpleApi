var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require("mongoose"),
  bodyParser = require("body-parser");

const apis = require("./api/routes/routes");
mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost/Namedb", { useNewUrlParser: true })
  .then(() => console.log("Mongdb connected"))
  .catch((err) => console.log("Error"));
mongoose.set("useUnifiedTopology", true);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api", apis);
app.listen(port);

console.log("Server started on: " + port);
