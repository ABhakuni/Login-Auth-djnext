webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/Link */ "./node_modules/next/Link.js");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "K:\\janitri\\nextdj\\frontend\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



 // axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
// axios.defaults.xsrfCookieName = "csrftoken";
// axios.defaults.withCredentials = true;

var username, password;

var getinput = function getinput(typeinput) {
  console.log(typeinput);

  if (typeinput === 'email') {
    username = document.getElementById('email').value;
  } else if (typeinput === 'password') {
    password = document.getElementById('password').value;
  }
};

var Authenticate = function Authenticate() {
  console.log("I am sending request"); // var csrftoken = getCookie('csrftoken')

  var config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json' // 'axios.defaults.xsrfHeaderName': 'X-CSRFToken',
      // 'axios.defaults.xsrfCookieName': 'csrftoken',
      // 'axios.defaults.withCredentials': true

    }
  };
  var data = {
    username: username,
    password: password
  }; // data = JSON.stringify(data)

  axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('http://127.0.0.1:8000/auth', data, config).then(function (res) {
    console.log(res);
  })["catch"](function (err) {
    console.log(err);
  });
};

var Home = function Home() {
  return __jsx("div", {
    className: "jsx-243749409",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-243749409",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Home"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-243749409",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  })), "Email:", __jsx("br", {
    className: "jsx-243749409",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx("input", {
    type: "email",
    id: "email",
    onchange: "getinput('email')",
    className: "jsx-243749409",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-243749409",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), "Password:", __jsx("br", {
    className: "jsx-243749409",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), __jsx("input", {
    type: "password",
    id: "password",
    onchange: "getinput('password')",
    className: "jsx-243749409",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-243749409",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), __jsx(next_Link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("a", {
    onClick: Authenticate,
    className: "jsx-243749409",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Submit")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "243749409",
    __self: this
  }, ".hero.jsx-243749409{width:100%;color:#333;}.title.jsx-243749409{margin:0;width:100%;padding-top:80px;line-height:1.15;font-size:48px;}.title.jsx-243749409,.description.jsx-243749409{text-align:center;}.row.jsx-243749409{max-width:880px;margin:80px auto 40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.card.jsx-243749409{padding:18px 18px 24px;width:220px;text-align:left;-webkit-text-decoration:none;text-decoration:none;color:#434343;border:1px solid #9b9b9b;}.card.jsx-243749409:hover{border-color:#067df7;}.card.jsx-243749409 h3.jsx-243749409{margin:0;color:#067df7;font-size:18px;}.card.jsx-243749409 p.jsx-243749409{margin:0;padding:12px 0 0;font-size:13px;color:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIks6XFxqYW5pdHJpXFxuZXh0ZGpcXGZyb250ZW5kXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMERnQixBQUdvQixBQUlGLEFBUVMsQUFHRixBQU9PLEFBUUYsQUFHWixBQUtBLFNBakNFLEFBNkJHLEFBS0csRUF0Q04sS0FlVyxFQUh4QixFQVBtQixDQXlCbkIsQ0E3QkEsQ0FxQmMsQUFZRyxHQUtBLFNBaEJDLEVBakJDLENBVUosQUFtQmYsR0FLYSxVQWhCVSxDQWlCdkIsRUFsQ2lCLGVBQ2pCLGdDQWlCZ0IsV0FSSyxHQVNNLHlCQUMzQix5Q0FUK0IsMkhBQy9CIiwiZmlsZSI6Iks6XFxqYW5pdHJpXFxuZXh0ZGpcXGZyb250ZW5kXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L0xpbmsnXG4vLyBheGlvcy5kZWZhdWx0cy54c3JmSGVhZGVyTmFtZSA9IFwiWC1DU1JGVE9LRU5cIjtcbi8vIGF4aW9zLmRlZmF1bHRzLnhzcmZDb29raWVOYW1lID0gXCJjc3JmdG9rZW5cIjtcbi8vIGF4aW9zLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG5cbnZhciB1c2VybmFtZSxwYXNzd29yZFxuXG5jb25zdCBnZXRpbnB1dCA9ICh0eXBlaW5wdXQpID0+IHtcbiAgY29uc29sZS5sb2codHlwZWlucHV0KVxuICBpZih0eXBlaW5wdXQ9PT0nZW1haWwnKXtcbiAgICB1c2VybmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbCcpLnZhbHVlXG4gIH1cbiAgZWxzZSBpZih0eXBlaW5wdXQ9PT0ncGFzc3dvcmQnKXtcbiAgICBwYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZCcpLnZhbHVlXG4gIH1cbn1cblxuY29uc3QgQXV0aGVudGljYXRlID0gKCkgPT4ge1xuICBjb25zb2xlLmxvZyhcIkkgYW0gc2VuZGluZyByZXF1ZXN0XCIpXG4gIC8vIHZhciBjc3JmdG9rZW4gPSBnZXRDb29raWUoJ2NzcmZ0b2tlbicpXG4gIGxldCBjb25maWcgPSB7aGVhZGVyczoge1xuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIC8vICdheGlvcy5kZWZhdWx0cy54c3JmSGVhZGVyTmFtZSc6ICdYLUNTUkZUb2tlbicsXG4gICAgLy8gJ2F4aW9zLmRlZmF1bHRzLnhzcmZDb29raWVOYW1lJzogJ2NzcmZ0b2tlbicsXG4gICAgLy8gJ2F4aW9zLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscyc6IHRydWVcbiAgfX1cbiAgbGV0IGRhdGEgPSB7XG4gICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgfVxuICAvLyBkYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgYXhpb3MucG9zdCgnaHR0cDovLzEyNy4wLjAuMTo4MDAwL2F1dGgnLGRhdGEsY29uZmlnKS50aGVuKChyZXMpID0+IHtcbiAgICBjb25zb2xlLmxvZyhyZXMpXG4gIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlcnIpXG4gIH0pXG59XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+SG9tZTwvdGl0bGU+XG4gICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgPC9IZWFkPlxuXG4gICAgey8qIDxmb3JtPiAqL31cbiAgICAgIEVtYWlsOjxiciAvPjxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgb25jaGFuZ2U9XCJnZXRpbnB1dCgnZW1haWwnKVwiPjwvaW5wdXQ+PGJyLz5cbiAgICAgIFBhc3N3b3JkOjxici8+PGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGlkPVwicGFzc3dvcmRcIiBvbmNoYW5nZT1cImdldGlucHV0KCdwYXNzd29yZCcpXCI+PC9pbnB1dD48YnIgLz5cbiAgICAgIDxMaW5rIGhyZWY9XCIjXCI+PGEgb25DbGljaz17QXV0aGVudGljYXRlfT5TdWJtaXQ8L2E+PC9MaW5rPlxuICAgICAgey8qIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiBvbkNsaWNrPXtBdXRoZW50aWNhdGV9PjwvaW5wdXQ+ICovfVxuICAgIHsvKiA8L2Zvcm0+ICovfVxuXG4gICAgey8qIDxwIGlkPVwicmVjZWl2ZWRtc2dcIj48L3A+ICovfVxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmhlcm8ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICB9XG4gICAgICAudGl0bGUge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nLXRvcDogODBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gICAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgIH1cbiAgICAgIC50aXRsZSxcbiAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIC5yb3cge1xuICAgICAgICBtYXgtd2lkdGg6IDg4MHB4O1xuICAgICAgICBtYXJnaW46IDgwcHggYXV0byA0MHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgIH1cbiAgICAgIC5jYXJkIHtcbiAgICAgICAgcGFkZGluZzogMThweCAxOHB4IDI0cHg7XG4gICAgICAgIHdpZHRoOiAyMjBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogIzQzNDM0MztcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzliOWI5YjtcbiAgICAgIH1cbiAgICAgIC5jYXJkOmhvdmVyIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDY3ZGY3O1xuICAgICAgfVxuICAgICAgLmNhcmQgaDMge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGNvbG9yOiAjMDY3ZGY3O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICB9XG4gICAgICAuY2FyZCBwIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDAgMDtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXX0= */\n/*@ sourceURL=K:\\\\janitri\\\\nextdj\\\\frontend\\\\pages\\\\index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.9dcee30a0d2936528c84.hot-update.js.map