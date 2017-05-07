var express = require("express");
var bodyParser = require("body-parser");
var ejs = require("ejs");
var path = require("path");
var mongoose = require("mongoose");

//connect to database
mongoose.connect("mongodb://localhost/goatQuiz");

//setup base app
var app = express();

//setup json
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//setup static files
app.use(express.static(path.join(__dirname + "/../public")));
app.set("views", __dirname + "/../public/views");

//setup view engine
app.engine("html", ejs.renderFile);

//import routes
var apiRouter = require("./routes/api.js");
var filesRouter = require("./routes/files.js");

app.use("/api", apiRouter);
app.use(filesRouter);

app.listen(8080, function() {
  console.log("Server started");
});
