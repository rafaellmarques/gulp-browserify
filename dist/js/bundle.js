(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _app = require("./pages/app");

var init = function init() {
  _app.app.init();
};

window.onload = init;

},{"./pages/app":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.main = void 0;
var main = {
  // Função olá;
  hello: function hello() {
    var body = document.querySelector("body");

    if (!!body) {
      body.classList.add("home");
      body.innerHTML = "Hello, this project was build with Gulp, Babel, Babelify, Browserify and Vinyl Source Stream";
      alert("Hello, this project was build with Gulp, Babel, Babelify, Browserify and Vinyl Source Stream");
      console.log("Hello, this project was build with Gulp, Babel, Babelify, Browserify and Vinyl Source Stream");
    }
  }
};
exports.main = main;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = void 0;

var _main = require("../modules/main");

var app = {
  init: function init() {
    _main.main.hello("Rafael");
  }
};
exports.app = app;

},{"../modules/main":2}]},{},[1]);
