module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "K:\\janitri\\nextdj\\frontend\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



 // axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
// axios.defaults.xsrfCookieName = "csrftoken";
// axios.defaults.withCredentials = true;

var username, password; // function getinput(typeinput) {
//   console.log(typeinput)
//   if(typeinput==='email'){
//     username = document.getElementById('email').innerText
//   }
//   else if(typeinput==='password'){
//     password = document.getElementById('password').innerText
//   }
// }

const Authenticate = () => {
  console.log("I am sending request"); // var csrftoken = getCookie('csrftoken')

  let config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json' // 'axios.defaults.xsrfHeaderName': 'X-CSRFToken',
      // 'axios.defaults.xsrfCookieName': 'csrftoken',
      // 'axios.defaults.withCredentials': true

    }
  };
  let data = {
    username: username,
    password: password
  }; // data = JSON.stringify(data)

  axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('http://127.0.0.1:8000/auth', data, config).then(res => {
    console.log(res);
  }).catch(err => {
    console.log(err);
  });
};

const Home = () => __jsx("div", {
  className: "jsx-243749409",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}, __jsx("title", {
  className: "jsx-243749409",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
}, "Home"), __jsx("link", {
  rel: "icon",
  href: "/favicon.ico",
  className: "jsx-243749409",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  },
  __self: undefined
})), "Email:", __jsx("br", {
  className: "jsx-243749409",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: undefined
}), __jsx("input", {
  type: "email",
  id: "email"
  /*onchange={getinput('email')}*/
  ,
  className: "jsx-243749409",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: undefined
}), __jsx("br", {
  className: "jsx-243749409",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: undefined
}), "Password:", __jsx("br", {
  className: "jsx-243749409",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52
  },
  __self: undefined
}), __jsx("input", {
  type: "password",
  id: "password"
  /*onchange={getinput('password')}*/
  ,
  className: "jsx-243749409",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52
  },
  __self: undefined
}), __jsx("br", {
  className: "jsx-243749409",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52
  },
  __self: undefined
}), __jsx(next_Link__WEBPACK_IMPORTED_MODULE_4___default.a, {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53
  },
  __self: undefined
}, __jsx("a", {
  onClick: Authenticate,
  className: "jsx-243749409",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53
  },
  __self: undefined
}, "Submit")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "243749409",
  __self: undefined
}, ".hero.jsx-243749409{width:100%;color:#333;}.title.jsx-243749409{margin:0;width:100%;padding-top:80px;line-height:1.15;font-size:48px;}.title.jsx-243749409,.description.jsx-243749409{text-align:center;}.row.jsx-243749409{max-width:880px;margin:80px auto 40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.card.jsx-243749409{padding:18px 18px 24px;width:220px;text-align:left;-webkit-text-decoration:none;text-decoration:none;color:#434343;border:1px solid #9b9b9b;}.card.jsx-243749409:hover{border-color:#067df7;}.card.jsx-243749409 h3.jsx-243749409{margin:0;color:#067df7;font-size:18px;}.card.jsx-243749409 p.jsx-243749409{margin:0;padding:12px 0 0;font-size:13px;color:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIks6XFxqYW5pdHJpXFxuZXh0ZGpcXGZyb250ZW5kXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMERnQixBQUdvQixBQUlGLEFBUVMsQUFHRixBQU9PLEFBUUYsQUFHWixBQUtBLFNBakNFLEFBNkJHLEFBS0csRUF0Q04sS0FlVyxFQUh4QixFQVBtQixDQXlCbkIsQ0E3QkEsQ0FxQmMsQUFZRyxHQUtBLFNBaEJDLEVBakJDLENBVUosQUFtQmYsR0FLYSxVQWhCVSxDQWlCdkIsRUFsQ2lCLGVBQ2pCLGdDQWlCZ0IsV0FSSyxHQVNNLHlCQUMzQix5Q0FUK0IsMkhBQy9CIiwiZmlsZSI6Iks6XFxqYW5pdHJpXFxuZXh0ZGpcXGZyb250ZW5kXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L0xpbmsnXG4vLyBheGlvcy5kZWZhdWx0cy54c3JmSGVhZGVyTmFtZSA9IFwiWC1DU1JGVE9LRU5cIjtcbi8vIGF4aW9zLmRlZmF1bHRzLnhzcmZDb29raWVOYW1lID0gXCJjc3JmdG9rZW5cIjtcbi8vIGF4aW9zLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG5cbnZhciB1c2VybmFtZSxwYXNzd29yZFxuXG4vLyBmdW5jdGlvbiBnZXRpbnB1dCh0eXBlaW5wdXQpIHtcbi8vICAgY29uc29sZS5sb2codHlwZWlucHV0KVxuLy8gICBpZih0eXBlaW5wdXQ9PT0nZW1haWwnKXtcbi8vICAgICB1c2VybmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbCcpLmlubmVyVGV4dFxuLy8gICB9XG4vLyAgIGVsc2UgaWYodHlwZWlucHV0PT09J3Bhc3N3b3JkJyl7XG4vLyAgICAgcGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQnKS5pbm5lclRleHRcbi8vICAgfVxuLy8gfVxuXG5jb25zdCBBdXRoZW50aWNhdGUgPSAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiSSBhbSBzZW5kaW5nIHJlcXVlc3RcIilcbiAgLy8gdmFyIGNzcmZ0b2tlbiA9IGdldENvb2tpZSgnY3NyZnRva2VuJylcbiAgbGV0IGNvbmZpZyA9IHtoZWFkZXJzOiB7XG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgLy8gJ2F4aW9zLmRlZmF1bHRzLnhzcmZIZWFkZXJOYW1lJzogJ1gtQ1NSRlRva2VuJyxcbiAgICAvLyAnYXhpb3MuZGVmYXVsdHMueHNyZkNvb2tpZU5hbWUnOiAnY3NyZnRva2VuJyxcbiAgICAvLyAnYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzJzogdHJ1ZVxuICB9fVxuICBsZXQgZGF0YSA9IHtcbiAgICB1c2VybmFtZTogdXNlcm5hbWUsXG4gICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICB9XG4gIC8vIGRhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKVxuICBheGlvcy5wb3N0KCdodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXV0aCcsZGF0YSxjb25maWcpLnRoZW4oKHJlcykgPT4ge1xuICAgIGNvbnNvbGUubG9nKHJlcylcbiAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgIGNvbnNvbGUubG9nKGVycilcbiAgfSlcbn1cblxuY29uc3QgSG9tZSA9ICgpID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5Ib21lPC90aXRsZT5cbiAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICA8L0hlYWQ+XG5cbiAgICB7LyogPGZvcm0+ICovfVxuICAgICAgRW1haWw6PGJyIC8+PGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiAvKm9uY2hhbmdlPXtnZXRpbnB1dCgnZW1haWwnKX0qLz48L2lucHV0Pjxici8+XG4gICAgICBQYXNzd29yZDo8YnIvPjxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgLypvbmNoYW5nZT17Z2V0aW5wdXQoJ3Bhc3N3b3JkJyl9Ki8+PC9pbnB1dD48YnIgLz5cbiAgICAgIDxMaW5rIGhyZWY9XCIjXCI+PGEgb25DbGljaz17QXV0aGVudGljYXRlfT5TdWJtaXQ8L2E+PC9MaW5rPlxuICAgICAgey8qIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiBvbkNsaWNrPXtBdXRoZW50aWNhdGV9PjwvaW5wdXQ+ICovfVxuICAgIHsvKiA8L2Zvcm0+ICovfVxuXG4gICAgey8qIDxwIGlkPVwicmVjZWl2ZWRtc2dcIj48L3A+ICovfVxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmhlcm8ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICB9XG4gICAgICAudGl0bGUge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nLXRvcDogODBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gICAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgIH1cbiAgICAgIC50aXRsZSxcbiAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIC5yb3cge1xuICAgICAgICBtYXgtd2lkdGg6IDg4MHB4O1xuICAgICAgICBtYXJnaW46IDgwcHggYXV0byA0MHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgIH1cbiAgICAgIC5jYXJkIHtcbiAgICAgICAgcGFkZGluZzogMThweCAxOHB4IDI0cHg7XG4gICAgICAgIHdpZHRoOiAyMjBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogIzQzNDM0MztcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzliOWI5YjtcbiAgICAgIH1cbiAgICAgIC5jYXJkOmhvdmVyIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDY3ZGY3O1xuICAgICAgfVxuICAgICAgLmNhcmQgaDMge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGNvbG9yOiAjMDY3ZGY3O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICB9XG4gICAgICAuY2FyZCBwIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDAgMDtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXX0= */\n/*@ sourceURL=K:\\\\janitri\\\\nextdj\\\\frontend\\\\pages\\\\index.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! K:\janitri\nextdj\frontend\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/Link":
/*!****************************!*\
  !*** external "next/Link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/Link");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map