const main = {
	// Função olá;
	hello() {
		const body = document.querySelector("body");
		if (!!body) {
			body.classList.add("home");
			body.innerHTML = "Hello, this project was build with Gulp, Babel, Babelify, Browserify and Vinyl Source Stream";
			alert("Hello, this project was build with Gulp, Babel, Babelify, Browserify and Vinyl Source Stream");
			console.log("Hello, this project was build with Gulp, Babel, Babelify, Browserify and Vinyl Source Stream");
		}
	}
};

export { main };
