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
var _this = undefined,
    _jsxFileName = "K:\\janitri\\nextdj\\frontend\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Authenticate = function Authenticate() {
  var config = {
    headers: {
      'Authorization': 'Bearer ' + ''
    }
  };
  axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('http://localhost:8000/auth_user', {}, config).then(function (res) {
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
      lineNumber: 19
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-243749409",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Home"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-243749409",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })), __jsx("form", {
    className: "jsx-243749409",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Email:", __jsx("br", {
    className: "jsx-243749409",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx("input", {
    type: "email",
    className: "jsx-243749409",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-243749409",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), "Password:", __jsx("br", {
    className: "jsx-243749409",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx("input", {
    type: "password",
    className: "jsx-243749409",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-243749409",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx("input", {
    type: "submit",
    value: "Submit",
    onClick: function onClick() {
      return _this.Authenticate();
    },
    className: "jsx-243749409",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })), __jsx("p", {
    id: "receivedmsg",
    className: "jsx-243749409",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "243749409",
    __self: this
  }, ".hero.jsx-243749409{width:100%;color:#333;}.title.jsx-243749409{margin:0;width:100%;padding-top:80px;line-height:1.15;font-size:48px;}.title.jsx-243749409,.description.jsx-243749409{text-align:center;}.row.jsx-243749409{max-width:880px;margin:80px auto 40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.card.jsx-243749409{padding:18px 18px 24px;width:220px;text-align:left;-webkit-text-decoration:none;text-decoration:none;color:#434343;border:1px solid #9b9b9b;}.card.jsx-243749409:hover{border-color:#067df7;}.card.jsx-243749409 h3.jsx-243749409{margin:0;color:#067df7;font-size:18px;}.card.jsx-243749409 p.jsx-243749409{margin:0;padding:12px 0 0;font-size:13px;color:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIks6XFxqYW5pdHJpXFxuZXh0ZGpcXGZyb250ZW5kXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NnQixBQUdvQixBQUlGLEFBUVMsQUFHRixBQU9PLEFBUUYsQUFHWixBQUtBLFNBakNFLEFBNkJHLEFBS0csRUF0Q04sS0FlVyxFQUh4QixFQVBtQixDQXlCbkIsQ0E3QkEsQ0FxQmMsQUFZRyxHQUtBLFNBaEJDLEVBakJDLENBVUosQUFtQmYsR0FLYSxVQWhCVSxDQWlCdkIsRUFsQ2lCLGVBQ2pCLGdDQWlCZ0IsV0FSSyxHQVNNLHlCQUMzQix5Q0FUK0IsMkhBQy9CIiwiZmlsZSI6Iks6XFxqYW5pdHJpXFxuZXh0ZGpcXGZyb250ZW5kXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbnZhciBBdXRoZW50aWNhdGUgPSAoKSA9PiB7XG4gIGxldCBjb25maWcgPSB7XG4gICAgaGVhZGVyczoge1xuICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyAnJ1xuICAgIH1cbiAgfVxuICBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjgwMDAvYXV0aF91c2VyJyx7fSxjb25maWcpLnRoZW4oKHJlcykgPT4ge1xuICAgIGNvbnNvbGUubG9nKHJlcylcbiAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgIGNvbnNvbGUubG9nKGVycilcbiAgfSlcbn1cblxuY29uc3QgSG9tZSA9ICgpID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5Ib21lPC90aXRsZT5cbiAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICA8L0hlYWQ+XG5cbiAgICA8Zm9ybT5cbiAgICAgIEVtYWlsOjxiciAvPjxpbnB1dCB0eXBlPVwiZW1haWxcIj48L2lucHV0Pjxici8+XG4gICAgICBQYXNzd29yZDo8YnIvPjxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIj48L2lucHV0PjxiciAvPlxuICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiIG9uQ2xpY2s9eygpID0+IHRoaXMuQXV0aGVudGljYXRlKCl9PjwvaW5wdXQ+XG4gICAgPC9mb3JtPlxuXG4gICAgPHAgaWQ9XCJyZWNlaXZlZG1zZ1wiPjwvcD5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5oZXJvIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgfVxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZy10b3A6IDgwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAgICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgICB9XG4gICAgICAudGl0bGUsXG4gICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAucm93IHtcbiAgICAgICAgbWF4LXdpZHRoOiA4ODBweDtcbiAgICAgICAgbWFyZ2luOiA4MHB4IGF1dG8gNDBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICB9XG4gICAgICAuY2FyZCB7XG4gICAgICAgIHBhZGRpbmc6IDE4cHggMThweCAyNHB4O1xuICAgICAgICB3aWR0aDogMjIwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6ICM0MzQzNDM7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5YjliOWI7XG4gICAgICB9XG4gICAgICAuY2FyZDpob3ZlciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzA2N2RmNztcbiAgICAgIH1cbiAgICAgIC5jYXJkIGgzIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogIzA2N2RmNztcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgfVxuICAgICAgLmNhcmQgcCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMTJweCAwIDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl19 */\n/*@ sourceURL=K:\\\\janitri\\\\nextdj\\\\frontend\\\\pages\\\\index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.d92934461626e8506d3e.hot-update.js.map