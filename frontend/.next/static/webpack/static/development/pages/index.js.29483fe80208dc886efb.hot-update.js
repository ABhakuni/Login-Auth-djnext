webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/Link */ "./node_modules/next/Link.js");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "K:\\janitri\\nextdj\\frontend\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





function getCookie(name) {
  var cookieValue = null;

  if (document.cookie && document.cookie !== '') {
    var cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();

      if (cookie.substring(0, name.length + 1) === name + '=') {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }

  return cookieValue;
}

var Authenticate = function Authenticate() {
  console.log("I am sending request"); // var csrftoken = getCookie('csrftoken')

  var config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json',
      'axios.defaults.xsrfCookieName': 'csrftoken',
      'axios.defaults.xsrfHeaderName': 'X-CSRFToken'
    }
  };
  var data = {
    username: "auth",
    password: "auth"
  };
  data = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(data);
  axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('http://localhost:8000/auth', data, config).then(function (res) {
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
      lineNumber: 43
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-243749409",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Home"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-243749409",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })), "Email:", __jsx("br", {
    className: "jsx-243749409",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx("input", {
    type: "email",
    id: "email",
    className: "jsx-243749409",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-243749409",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), "Password:", __jsx("br", {
    className: "jsx-243749409",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx("input", {
    type: "password",
    id: "password",
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
  }), __jsx(next_Link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("a", {
    onClick: Authenticate,
    className: "jsx-243749409",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Submit")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "243749409",
    __self: this
  }, ".hero.jsx-243749409{width:100%;color:#333;}.title.jsx-243749409{margin:0;width:100%;padding-top:80px;line-height:1.15;font-size:48px;}.title.jsx-243749409,.description.jsx-243749409{text-align:center;}.row.jsx-243749409{max-width:880px;margin:80px auto 40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.card.jsx-243749409{padding:18px 18px 24px;width:220px;text-align:left;-webkit-text-decoration:none;text-decoration:none;color:#434343;border:1px solid #9b9b9b;}.card.jsx-243749409:hover{border-color:#067df7;}.card.jsx-243749409 h3.jsx-243749409{margin:0;color:#067df7;font-size:18px;}.card.jsx-243749409 p.jsx-243749409{margin:0;padding:12px 0 0;font-size:13px;color:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIks6XFxqYW5pdHJpXFxuZXh0ZGpcXGZyb250ZW5kXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeURnQixBQUdvQixBQUlGLEFBUVMsQUFHRixBQU9PLEFBUUYsQUFHWixBQUtBLFNBakNFLEFBNkJHLEFBS0csRUF0Q04sS0FlVyxFQUh4QixFQVBtQixDQXlCbkIsQ0E3QkEsQ0FxQmMsQUFZRyxHQUtBLFNBaEJDLEVBakJDLENBVUosQUFtQmYsR0FLYSxVQWhCVSxDQWlCdkIsRUFsQ2lCLGVBQ2pCLGdDQWlCZ0IsV0FSSyxHQVNNLHlCQUMzQix5Q0FUK0IsMkhBQy9CIiwiZmlsZSI6Iks6XFxqYW5pdHJpXFxuZXh0ZGpcXGZyb250ZW5kXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L0xpbmsnXG5cbmZ1bmN0aW9uIGdldENvb2tpZShuYW1lKSB7XG4gIHZhciBjb29raWVWYWx1ZSA9IG51bGw7XG4gIGlmIChkb2N1bWVudC5jb29raWUgJiYgZG9jdW1lbnQuY29va2llICE9PSAnJykge1xuICAgICAgdmFyIGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29va2llcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBjb29raWUgPSBjb29raWVzW2ldLnRyaW0oKTtcbiAgICAgICAgICBpZiAoY29va2llLnN1YnN0cmluZygwLCBuYW1lLmxlbmd0aCArIDEpID09PSAobmFtZSArICc9JykpIHtcbiAgICAgICAgICAgICAgY29va2llVmFsdWUgPSBkZWNvZGVVUklDb21wb25lbnQoY29va2llLnN1YnN0cmluZyhuYW1lLmxlbmd0aCArIDEpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG4gIHJldHVybiBjb29raWVWYWx1ZTtcbn1cblxuY29uc3QgQXV0aGVudGljYXRlID0gKCkgPT4ge1xuICBjb25zb2xlLmxvZyhcIkkgYW0gc2VuZGluZyByZXF1ZXN0XCIpXG4gIC8vIHZhciBjc3JmdG9rZW4gPSBnZXRDb29raWUoJ2NzcmZ0b2tlbicpXG4gIGxldCBjb25maWcgPSB7aGVhZGVyczoge1xuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICdheGlvcy5kZWZhdWx0cy54c3JmQ29va2llTmFtZSc6ICdjc3JmdG9rZW4nLFxuICAgICdheGlvcy5kZWZhdWx0cy54c3JmSGVhZGVyTmFtZSc6ICdYLUNTUkZUb2tlbidcbiAgfX1cbiAgbGV0IGRhdGEgPSB7XG4gICAgdXNlcm5hbWU6IFwiYXV0aFwiLFxuICAgIHBhc3N3b3JkOiBcImF1dGhcIixcbiAgfVxuICBkYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2F1dGgnLGRhdGEsY29uZmlnKS50aGVuKChyZXMpID0+IHtcbiAgICBjb25zb2xlLmxvZyhyZXMpXG4gIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlcnIpXG4gIH0pXG59XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+SG9tZTwvdGl0bGU+XG4gICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgPC9IZWFkPlxuXG4gICAgey8qIDxmb3JtPiAqL31cbiAgICAgIEVtYWlsOjxiciAvPjxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCI+PC9pbnB1dD48YnIvPlxuICAgICAgUGFzc3dvcmQ6PGJyLz48aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiPjwvaW5wdXQ+PGJyIC8+XG4gICAgICA8TGluayBocmVmPVwiI1wiPjxhIG9uQ2xpY2s9e0F1dGhlbnRpY2F0ZX0+U3VibWl0PC9hPjwvTGluaz5cbiAgICAgIHsvKiA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIgb25DbGljaz17QXV0aGVudGljYXRlfT48L2lucHV0PiAqL31cbiAgICB7LyogPC9mb3JtPiAqL31cblxuICAgIHsvKiA8cCBpZD1cInJlY2VpdmVkbXNnXCI+PC9wPiAqL31cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5oZXJvIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgfVxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZy10b3A6IDgwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAgICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgICB9XG4gICAgICAudGl0bGUsXG4gICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAucm93IHtcbiAgICAgICAgbWF4LXdpZHRoOiA4ODBweDtcbiAgICAgICAgbWFyZ2luOiA4MHB4IGF1dG8gNDBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICB9XG4gICAgICAuY2FyZCB7XG4gICAgICAgIHBhZGRpbmc6IDE4cHggMThweCAyNHB4O1xuICAgICAgICB3aWR0aDogMjIwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6ICM0MzQzNDM7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5YjliOWI7XG4gICAgICB9XG4gICAgICAuY2FyZDpob3ZlciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzA2N2RmNztcbiAgICAgIH1cbiAgICAgIC5jYXJkIGgzIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogIzA2N2RmNztcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgfVxuICAgICAgLmNhcmQgcCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMTJweCAwIDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl19 */\n/*@ sourceURL=K:\\\\janitri\\\\nextdj\\\\frontend\\\\pages\\\\index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.29483fe80208dc886efb.hot-update.js.map