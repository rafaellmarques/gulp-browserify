// Packages
const gulp = require("gulp");
const babelify = require("babelify");
const browserify = require("browserify");
const vinylsourcestream = require("vinyl-source-stream");

// Paths
const paths = {
	src: "./src/assets/js/bundle.js",
	dest: "./dist/js/"
};

// Task
scriptTranspilation = () => {
	return browserify(paths.src)
		.transform(babelify)
		.bundle()
		.pipe(vinylsourcestream("store.js"))
		.pipe(gulp.dest(paths.dest));
};

// Export
module.exports = {
	build: scriptTranspilation
};
