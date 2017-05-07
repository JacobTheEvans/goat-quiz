var express = require("express");
var apiRouter = express.Router();

//import result model
var Result = require("../models/result.js");

//import goat data
var data = require("../data/goat.js");
var getResult = require("../utils/result.js");

apiRouter.post("/", function(req, res) {
  if(req.body.answers != undefined) {
    var result = getResult(req.body.answers);
    var newResult = new Result({
      answers: req.body.answers,
      career: result.title
    });
    newResult.save(function(err, data) {
      if(err) {
        res.status(500).send({"message": "Error in server", err: err});
      } else {
        res.status(200).send({"message": "Here is the result", result: result});
      }
    });
  } else {
    res.status(400).send({"message": "Must provide answers"});
  }
});

apiRouter.get("/", function(req, res) {
  res.status(200).send({message: "Goat Data", data: data});
});

module.exports = apiRouter;
