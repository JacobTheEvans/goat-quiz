var result = require("../data/career.js");
var career = require("../data/career.js");

function rankAnswers(answers) {
  var result = {};
  for(var i = 0; i < answers.length; i++) {
    if(answers[i] != "NA") {
      if(answers[i] == "Explosives&Barter") {
        var temp = answers[i].split("&");
        if(result[temp[0]] == undefined) {
          result[temp[0]] = 1;
        } else {
          result[temp[0]]++;
        }
        if(result[temp[1]] == undefined) {
          result[temp[1]] = 1;
        } else {
          result[temp[1]]++;
        }
      }
      if(result[answers[i]] == undefined) {
        result[answers[i]] = 1;
      } else {
        result[answers[i]]++;
      }
    }
  }
  return result;
}

function genGoatResult(answers) {
  var rank = rankAnswers(answers);
  var greatest = {
    amount: -1
  };
  for(key in rank) {
    if(rank[key] > greatest.amount) {
      greatest = {
        name: key,
        amount: rank[key]
      }
    }
  }
  career[greatest.name].skill = greatest.name;
  return career[greatest.name];
};

module.exports = genGoatResult;
