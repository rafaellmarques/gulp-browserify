// Packages
const gulp = require("gulp");
const babelify = require("babelify");
const browserify = require("browserify");
const vinylsourcestream = require("vinyl-source-stream");

// Paths
const paths = {
	entry: "./src/assets/scripts/bundle.js",
	output: "./dist/js/"
};

// Task
scriptTranspilation = () => {
	return browserify(paths.entry)
		.transform(babelify)
		.bundle()
		.on("error", function(err) {
			console.log("Error: " + err.message);
		})
		.pipe(vinylsourcestream("bundle.js"))
		.pipe(gulp.dest(paths.output));
};

// Export
module.exports = {
	build: scriptTranspilation
};
