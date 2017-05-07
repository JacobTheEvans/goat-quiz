var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var resultSchema = new Schema({
  answers: {
    type: [String],
    required: true
  },
  career: {
    type: String,
    required: true
  }
});


module.exports = mongoose.model("Results", resultSchema);
