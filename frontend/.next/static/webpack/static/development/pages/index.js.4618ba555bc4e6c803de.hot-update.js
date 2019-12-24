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
      'Accept': 'application/json',
      'Content-Type': 'application/json',
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
  }, ".hero.jsx-243749409{width:100%;color:#333;}.title.jsx-243749409{margin:0;width:100%;padding-top:80px;line-height:1.15;font-size:48px;}.title.jsx-243749409,.description.jsx-243749409{text-align:center;}.row.jsx-243749409{max-width:880px;margin:80px auto 40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.card.jsx-243749409{padding:18px 18px 24px;width:220px;text-align:left;-webkit-text-decoration:none;text-decoration:none;color:#434343;border:1px solid #9b9b9b;}.card.jsx-243749409:hover{border-color:#067df7;}.card.jsx-243749409 h3.jsx-243749409{margin:0;color:#067df7;font-size:18px;}.card.jsx-243749409 p.jsx-243749409{margin:0;padding:12px 0 0;font-size:13px;color:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIks6XFxqYW5pdHJpXFxuZXh0ZGpcXGZyb250ZW5kXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeURnQixBQUdvQixBQUlGLEFBUVMsQUFHRixBQU9PLEFBUUYsQUFHWixBQUtBLFNBakNFLEFBNkJHLEFBS0csRUF0Q04sS0FlVyxFQUh4QixFQVBtQixDQXlCbkIsQ0E3QkEsQ0FxQmMsQUFZRyxHQUtBLFNBaEJDLEVBakJDLENBVUosQUFtQmYsR0FLYSxVQWhCVSxDQWlCdkIsRUFsQ2lCLGVBQ2pCLGdDQWlCZ0IsV0FSSyxHQVNNLHlCQUMzQix5Q0FUK0IsMkhBQy9CIiwiZmlsZSI6Iks6XFxqYW5pdHJpXFxuZXh0ZGpcXGZyb250ZW5kXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L0xpbmsnXG5cbmZ1bmN0aW9uIGdldENvb2tpZShuYW1lKSB7XG4gIHZhciBjb29raWVWYWx1ZSA9IG51bGw7XG4gIGlmIChkb2N1bWVudC5jb29raWUgJiYgZG9jdW1lbnQuY29va2llICE9PSAnJykge1xuICAgICAgdmFyIGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29va2llcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBjb29raWUgPSBjb29raWVzW2ldLnRyaW0oKTtcbiAgICAgICAgICBpZiAoY29va2llLnN1YnN0cmluZygwLCBuYW1lLmxlbmd0aCArIDEpID09PSAobmFtZSArICc9JykpIHtcbiAgICAgICAgICAgICAgY29va2llVmFsdWUgPSBkZWNvZGVVUklDb21wb25lbnQoY29va2llLnN1YnN0cmluZyhuYW1lLmxlbmd0aCArIDEpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG4gIHJldHVybiBjb29raWVWYWx1ZTtcbn1cblxuY29uc3QgQXV0aGVudGljYXRlID0gKCkgPT4ge1xuICBjb25zb2xlLmxvZyhcIkkgYW0gc2VuZGluZyByZXF1ZXN0XCIpXG4gIC8vIHZhciBjc3JmdG9rZW4gPSBnZXRDb29raWUoJ2NzcmZ0b2tlbicpXG4gIGxldCBjb25maWcgPSB7aGVhZGVyczoge1xuICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAnYXhpb3MuZGVmYXVsdHMueHNyZkNvb2tpZU5hbWUnOiAnY3NyZnRva2VuJyxcbiAgICAnYXhpb3MuZGVmYXVsdHMueHNyZkhlYWRlck5hbWUnOiAnWC1DU1JGVG9rZW4nXG4gIH19XG4gIGxldCBkYXRhID0ge1xuICAgIHVzZXJuYW1lOiBcImF1dGhcIixcbiAgICBwYXNzd29yZDogXCJhdXRoXCIsXG4gIH1cbiAgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4gIGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hdXRoJyxkYXRhLGNvbmZpZykudGhlbigocmVzKSA9PiB7XG4gICAgY29uc29sZS5sb2cocmVzKVxuICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgY29uc29sZS5sb2coZXJyKVxuICB9KVxufVxuXG5jb25zdCBIb21lID0gKCkgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPkhvbWU8L3RpdGxlPlxuICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgIDwvSGVhZD5cblxuICAgIHsvKiA8Zm9ybT4gKi99XG4gICAgICBFbWFpbDo8YnIgLz48aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiPjwvaW5wdXQ+PGJyLz5cbiAgICAgIFBhc3N3b3JkOjxici8+PGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGlkPVwicGFzc3dvcmRcIj48L2lucHV0PjxiciAvPlxuICAgICAgPExpbmsgaHJlZj1cIiNcIj48YSBvbkNsaWNrPXtBdXRoZW50aWNhdGV9PlN1Ym1pdDwvYT48L0xpbms+XG4gICAgICB7LyogPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiIG9uQ2xpY2s9e0F1dGhlbnRpY2F0ZX0+PC9pbnB1dD4gKi99XG4gICAgey8qIDwvZm9ybT4gKi99XG5cbiAgICB7LyogPHAgaWQ9XCJyZWNlaXZlZG1zZ1wiPjwvcD4gKi99XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuaGVybyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgIH1cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmctdG9wOiA4MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgICAgfVxuICAgICAgLnRpdGxlLFxuICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgICAgLnJvdyB7XG4gICAgICAgIG1heC13aWR0aDogODgwcHg7XG4gICAgICAgIG1hcmdpbjogODBweCBhdXRvIDQwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgfVxuICAgICAgLmNhcmQge1xuICAgICAgICBwYWRkaW5nOiAxOHB4IDE4cHggMjRweDtcbiAgICAgICAgd2lkdGg6IDIyMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiAjNDM0MzQzO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOWI5YjliO1xuICAgICAgfVxuICAgICAgLmNhcmQ6aG92ZXIge1xuICAgICAgICBib3JkZXItY29sb3I6ICMwNjdkZjc7XG4gICAgICB9XG4gICAgICAuY2FyZCBoMyB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6ICMwNjdkZjc7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIH1cbiAgICAgIC5jYXJkIHAge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDEycHggMCAwO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdfQ== */\n/*@ sourceURL=K:\\\\janitri\\\\nextdj\\\\frontend\\\\pages\\\\index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.4618ba555bc4e6c803de.hot-update.js.map