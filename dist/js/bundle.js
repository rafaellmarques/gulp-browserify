(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
  "O_RDONLY": 0,
  "O_WRONLY": 1,
  "O_RDWR": 2,
  "S_IFMT": 61440,
  "S_IFREG": 32768,
  "S_IFDIR": 16384,
  "S_IFCHR": 8192,
  "S_IFBLK": 24576,
  "S_IFIFO": 4096,
  "S_IFLNK": 40960,
  "S_IFSOCK": 49152,
  "O_CREAT": 512,
  "O_EXCL": 2048,
  "O_NOCTTY": 131072,
  "O_TRUNC": 1024,
  "O_APPEND": 8,
  "O_DIRECTORY": 1048576,
  "O_NOFOLLOW": 256,
  "O_SYNC": 128,
  "O_SYMLINK": 2097152,
  "O_NONBLOCK": 4,
  "S_IRWXU": 448,
  "S_IRUSR": 256,
  "S_IWUSR": 128,
  "S_IXUSR": 64,
  "S_IRWXG": 56,
  "S_IRGRP": 32,
  "S_IWGRP": 16,
  "S_IXGRP": 8,
  "S_IRWXO": 7,
  "S_IROTH": 4,
  "S_IWOTH": 2,
  "S_IXOTH": 1,
  "E2BIG": 7,
  "EACCES": 13,
  "EADDRINUSE": 48,
  "EADDRNOTAVAIL": 49,
  "EAFNOSUPPORT": 47,
  "EAGAIN": 35,
  "EALREADY": 37,
  "EBADF": 9,
  "EBADMSG": 94,
  "EBUSY": 16,
  "ECANCELED": 89,
  "ECHILD": 10,
  "ECONNABORTED": 53,
  "ECONNREFUSED": 61,
  "ECONNRESET": 54,
  "EDEADLK": 11,
  "EDESTADDRREQ": 39,
  "EDOM": 33,
  "EDQUOT": 69,
  "EEXIST": 17,
  "EFAULT": 14,
  "EFBIG": 27,
  "EHOSTUNREACH": 65,
  "EIDRM": 90,
  "EILSEQ": 92,
  "EINPROGRESS": 36,
  "EINTR": 4,
  "EINVAL": 22,
  "EIO": 5,
  "EISCONN": 56,
  "EISDIR": 21,
  "ELOOP": 62,
  "EMFILE": 24,
  "EMLINK": 31,
  "EMSGSIZE": 40,
  "EMULTIHOP": 95,
  "ENAMETOOLONG": 63,
  "ENETDOWN": 50,
  "ENETRESET": 52,
  "ENETUNREACH": 51,
  "ENFILE": 23,
  "ENOBUFS": 55,
  "ENODATA": 96,
  "ENODEV": 19,
  "ENOENT": 2,
  "ENOEXEC": 8,
  "ENOLCK": 77,
  "ENOLINK": 97,
  "ENOMEM": 12,
  "ENOMSG": 91,
  "ENOPROTOOPT": 42,
  "ENOSPC": 28,
  "ENOSR": 98,
  "ENOSTR": 99,
  "ENOSYS": 78,
  "ENOTCONN": 57,
  "ENOTDIR": 20,
  "ENOTEMPTY": 66,
  "ENOTSOCK": 38,
  "ENOTSUP": 45,
  "ENOTTY": 25,
  "ENXIO": 6,
  "EOPNOTSUPP": 102,
  "EOVERFLOW": 84,
  "EPERM": 1,
  "EPIPE": 32,
  "EPROTO": 100,
  "EPROTONOSUPPORT": 43,
  "EPROTOTYPE": 41,
  "ERANGE": 34,
  "EROFS": 30,
  "ESPIPE": 29,
  "ESRCH": 3,
  "ESTALE": 70,
  "ETIME": 101,
  "ETIMEDOUT": 60,
  "ETXTBSY": 26,
  "EWOULDBLOCK": 35,
  "EXDEV": 18,
  "SIGHUP": 1,
  "SIGINT": 2,
  "SIGQUIT": 3,
  "SIGILL": 4,
  "SIGTRAP": 5,
  "SIGABRT": 6,
  "SIGIOT": 6,
  "SIGBUS": 10,
  "SIGFPE": 8,
  "SIGKILL": 9,
  "SIGUSR1": 30,
  "SIGSEGV": 11,
  "SIGUSR2": 31,
  "SIGPIPE": 13,
  "SIGALRM": 14,
  "SIGTERM": 15,
  "SIGCHLD": 20,
  "SIGCONT": 19,
  "SIGSTOP": 17,
  "SIGTSTP": 18,
  "SIGTTIN": 21,
  "SIGTTOU": 22,
  "SIGURG": 16,
  "SIGXCPU": 24,
  "SIGXFSZ": 25,
  "SIGVTALRM": 26,
  "SIGPROF": 27,
  "SIGWINCH": 28,
  "SIGIO": 23,
  "SIGSYS": 12,
  "SSL_OP_ALL": 2147486719,
  "SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION": 262144,
  "SSL_OP_CIPHER_SERVER_PREFERENCE": 4194304,
  "SSL_OP_CISCO_ANYCONNECT": 32768,
  "SSL_OP_COOKIE_EXCHANGE": 8192,
  "SSL_OP_CRYPTOPRO_TLSEXT_BUG": 2147483648,
  "SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS": 2048,
  "SSL_OP_EPHEMERAL_RSA": 0,
  "SSL_OP_LEGACY_SERVER_CONNECT": 4,
  "SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER": 32,
  "SSL_OP_MICROSOFT_SESS_ID_BUG": 1,
  "SSL_OP_MSIE_SSLV2_RSA_PADDING": 0,
  "SSL_OP_NETSCAPE_CA_DN_BUG": 536870912,
  "SSL_OP_NETSCAPE_CHALLENGE_BUG": 2,
  "SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG": 1073741824,
  "SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG": 8,
  "SSL_OP_NO_COMPRESSION": 131072,
  "SSL_OP_NO_QUERY_MTU": 4096,
  "SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION": 65536,
  "SSL_OP_NO_SSLv2": 16777216,
  "SSL_OP_NO_SSLv3": 33554432,
  "SSL_OP_NO_TICKET": 16384,
  "SSL_OP_NO_TLSv1": 67108864,
  "SSL_OP_NO_TLSv1_1": 268435456,
  "SSL_OP_NO_TLSv1_2": 134217728,
  "SSL_OP_PKCS1_CHECK_1": 0,
  "SSL_OP_PKCS1_CHECK_2": 0,
  "SSL_OP_SINGLE_DH_USE": 1048576,
  "SSL_OP_SINGLE_ECDH_USE": 524288,
  "SSL_OP_SSLEAY_080_CLIENT_DH_BUG": 128,
  "SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG": 0,
  "SSL_OP_TLS_BLOCK_PADDING_BUG": 512,
  "SSL_OP_TLS_D5_BUG": 256,
  "SSL_OP_TLS_ROLLBACK_BUG": 8388608,
  "ENGINE_METHOD_DSA": 2,
  "ENGINE_METHOD_DH": 4,
  "ENGINE_METHOD_RAND": 8,
  "ENGINE_METHOD_ECDH": 16,
  "ENGINE_METHOD_ECDSA": 32,
  "ENGINE_METHOD_CIPHERS": 64,
  "ENGINE_METHOD_DIGESTS": 128,
  "ENGINE_METHOD_STORE": 256,
  "ENGINE_METHOD_PKEY_METHS": 512,
  "ENGINE_METHOD_PKEY_ASN1_METHS": 1024,
  "ENGINE_METHOD_ALL": 65535,
  "ENGINE_METHOD_NONE": 0,
  "DH_CHECK_P_NOT_SAFE_PRIME": 2,
  "DH_CHECK_P_NOT_PRIME": 1,
  "DH_UNABLE_TO_CHECK_GENERATOR": 4,
  "DH_NOT_SUITABLE_GENERATOR": 8,
  "NPN_ENABLED": 1,
  "RSA_PKCS1_PADDING": 1,
  "RSA_SSLV23_PADDING": 2,
  "RSA_NO_PADDING": 3,
  "RSA_PKCS1_OAEP_PADDING": 4,
  "RSA_X931_PADDING": 5,
  "RSA_PKCS1_PSS_PADDING": 6,
  "POINT_CONVERSION_COMPRESSED": 2,
  "POINT_CONVERSION_UNCOMPRESSED": 4,
  "POINT_CONVERSION_HYBRID": 6,
  "F_OK": 0,
  "R_OK": 4,
  "W_OK": 2,
  "X_OK": 1,
  "UV_UDP_REUSEADDR": 4
}

},{}],2:[function(require,module,exports){
"use strict";

var _main = require("./modules/main");

var _home = require("./pages/home");

var init = function init() {
  if (_main.main.pageName("home")) {
    _home.home.init();
  }
};

window.onload = init;

},{"./modules/main":3,"./pages/home":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.main = void 0;

var _constants = require("constants");

var main = {
  // Função olá;
  hello: function hello() {
    var body = document.querySelector("body");

    if (!!body) {
      body.innerHTML = "Hello, this project was build with Gulp, Babel and Browserify";
      alert("Hello, this project was build with Gulp, Babel and Browserify");
      console.log("Hello, this project was build with Gulp, Babel and Browserify");
    }
  },
  // Função para validar a classe da tag body de cada página ativa;
  pageName: function pageName(className) {
    var body = document.querySelectorAll("body")[0];
    return body.classList.contains(className);
  },
  pageLoader: function pageLoader() {
    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var loader = document.querySelector(".loader");

    if (!!loader) {
      if (time == 0) {
        main.remove(loader);
      } else {
        var seconds = time * 1000;
        setTimeout(function () {
          return main.remove(loader);
        }, seconds);
      }
    }
  },
  // Remove o elemento
  remove: function remove(element) {
    element.parentNode.removeChild(element);
  },
  // Inserir o elemento What antes de um elemento Where
  outBefore: function outBefore(what, where) {
    where.parentNode.insertBefore(what, where);
  },
  // Inserir o elemento What depois de um elemento Where
  outAfter: function outAfter(what, where) {
    where.parentNode.insertBefore(what, where.nextSibling);
  },
  // Inserir o elemento What como primeiro filho do elemento Where
  inBefore: function inBefore(what, where) {
    where.insertBefore(what, where.firstChild);
  },
  // Inserir elemento What como ultimo filho do elemento Where
  inAfter: function inAfter(what, where) {
    where.insertBefore(what, where.lastChild);
  },
  orderAscending: function orderAscending(element) {
    element.sort(function (a, b) {
      if (a.textContent < b.textContent) {
        return -1;
      } else if (a.textContent > b.textContent) {
        return 1;
      } else {
        return 0;
      }
    });
  },
  orderDescending: function orderDescending(element) {
    element.sort(function (a, b) {
      if (a.textContent > b.textContent) {
        return -1;
      } else if (a.textContent < b.textContent) {
        return 1;
      } else {
        return 0;
      }
    });
  },
  // Ordena uma lista
  orderList: function orderList(element, type) {
    var list = document.querySelectorAll(element);

    if (!!list) {
      list.forEach(function (elementList) {
        var listItem = elementList.children;

        if (!!listItem) {
          var newList = [];

          for (var i = 0; i < listItem.length; i++) {
            newList.push(listItem[i]);
          }

          type == "desc" ? main.orderDescending(newList) : main.orderAscending(newList); // newList.sort((a, b) => {
          // 	if (a.textContent < b.textContent) {
          // 		return -1;
          // 	} else if (a.textContent > b.textContent) {
          // 		return 1;
          // 	} else {
          // 		return 0;
          // 	}
          // });

          for (var _i = 0; _i < newList.length; _i++) {
            main.inAfter(newList[_i], elementList);
          }
        }
      });
    }
  },
  minifiedHeader: function minifiedHeader() {
    window.addEventListener("scroll", function () {
      var header = document.querySelector(".header");
      var showScroll = document.querySelector(".showScroll");
      showScroll ? showScroll.innerHTML = pageYOffset + "px" : "0";
      pageYOffset >= header.clientHeight / 2 ? header.classList.add("minified") : header.classList.remove("minified");
    });
  },
  getFileName: function getFileName() {
    var fileField = document.querySelector(".product-file-upload-field");
    var fileLabel = document.querySelector(".product-file-upload-value");
    var fileName = "";
    fileField.addEventListener("change", function (e) {
      fileName = e.target.value.split("\\").pop();

      if (fileName) {
        fileLabel.innerHTML = fileName;
      }
    });
    fileField.addEventListener("focus", function () {
      fileField.classList.add("has-focus");
    });
    fileField.addEventListener("blur", function () {
      fileField.classList.remove("has-focus");
    });
  },
  getParent: function getParent() {
    var item = document.querySelectorAll(".filters .item");

    if (!!item) {
      item.forEach(function (element) {
        var itemChild = element.firstElementChild;

        if (!!itemChild && itemChild.classList.contains("item")) {
          element.removeChild(element.firstChild);
        }
      });
    }
  }
};
exports.main = main;

},{"constants":1}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.home = void 0;

var _main = require("../modules/main");

var home = {
  init: function init() {
    _main.main.pageLoader(5);

    _main.main.minifiedHeader();

    _main.main.getFileName();

    _main.main.getParent();

    _main.main.orderList(".list", "desc");

    console.log("Página: Home");
  }
};
exports.home = home;

},{"../modules/main":3}]},{},[2]);
