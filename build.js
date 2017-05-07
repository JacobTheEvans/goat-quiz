var fs = require("fs");
var browserify = require("browserify");
var babelify = require("babelify");

var source = "./src/index.js";
var output = "./public/js/index.js";

browserify(source)
.transform("babelify", {"presets": ["es2015", "react"]})
.bundle()
.pipe(fs.createWriteStream(output));
