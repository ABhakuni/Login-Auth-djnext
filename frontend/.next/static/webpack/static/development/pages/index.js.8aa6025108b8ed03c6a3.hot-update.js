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

function getinput(typeinput) {
  console.log(typeinput);

  if (typeinput === 'email') {
    username = document.getElementById('email').innerText;
  } else if (typeinput === 'password') {
    password = document.getElementById('password').innerText;
  }
}

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
  }, ".hero.jsx-243749409{width:100%;color:#333;}.title.jsx-243749409{margin:0;width:100%;padding-top:80px;line-height:1.15;font-size:48px;}.title.jsx-243749409,.description.jsx-243749409{text-align:center;}.row.jsx-243749409{max-width:880px;margin:80px auto 40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.card.jsx-243749409{padding:18px 18px 24px;width:220px;text-align:left;-webkit-text-decoration:none;text-decoration:none;color:#434343;border:1px solid #9b9b9b;}.card.jsx-243749409:hover{border-color:#067df7;}.card.jsx-243749409 h3.jsx-243749409{margin:0;color:#067df7;font-size:18px;}.card.jsx-243749409 p.jsx-243749409{margin:0;padding:12px 0 0;font-size:13px;color:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIks6XFxqYW5pdHJpXFxuZXh0ZGpcXGZyb250ZW5kXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMERnQixBQUdvQixBQUlGLEFBUVMsQUFHRixBQU9PLEFBUUYsQUFHWixBQUtBLFNBakNFLEFBNkJHLEFBS0csRUF0Q04sS0FlVyxFQUh4QixFQVBtQixDQXlCbkIsQ0E3QkEsQ0FxQmMsQUFZRyxHQUtBLFNBaEJDLEVBakJDLENBVUosQUFtQmYsR0FLYSxVQWhCVSxDQWlCdkIsRUFsQ2lCLGVBQ2pCLGdDQWlCZ0IsV0FSSyxHQVNNLHlCQUMzQix5Q0FUK0IsMkhBQy9CIiwiZmlsZSI6Iks6XFxqYW5pdHJpXFxuZXh0ZGpcXGZyb250ZW5kXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L0xpbmsnXG4vLyBheGlvcy5kZWZhdWx0cy54c3JmSGVhZGVyTmFtZSA9IFwiWC1DU1JGVE9LRU5cIjtcbi8vIGF4aW9zLmRlZmF1bHRzLnhzcmZDb29raWVOYW1lID0gXCJjc3JmdG9rZW5cIjtcbi8vIGF4aW9zLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG5cbnZhciB1c2VybmFtZSxwYXNzd29yZFxuXG5mdW5jdGlvbiBnZXRpbnB1dCh0eXBlaW5wdXQpIHtcbiAgY29uc29sZS5sb2codHlwZWlucHV0KVxuICBpZih0eXBlaW5wdXQ9PT0nZW1haWwnKXtcbiAgICB1c2VybmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbCcpLmlubmVyVGV4dFxuICB9XG4gIGVsc2UgaWYodHlwZWlucHV0PT09J3Bhc3N3b3JkJyl7XG4gICAgcGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQnKS5pbm5lclRleHRcbiAgfVxufVxuXG5jb25zdCBBdXRoZW50aWNhdGUgPSAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiSSBhbSBzZW5kaW5nIHJlcXVlc3RcIilcbiAgLy8gdmFyIGNzcmZ0b2tlbiA9IGdldENvb2tpZSgnY3NyZnRva2VuJylcbiAgbGV0IGNvbmZpZyA9IHtoZWFkZXJzOiB7XG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgLy8gJ2F4aW9zLmRlZmF1bHRzLnhzcmZIZWFkZXJOYW1lJzogJ1gtQ1NSRlRva2VuJyxcbiAgICAvLyAnYXhpb3MuZGVmYXVsdHMueHNyZkNvb2tpZU5hbWUnOiAnY3NyZnRva2VuJyxcbiAgICAvLyAnYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzJzogdHJ1ZVxuICB9fVxuICBsZXQgZGF0YSA9IHtcbiAgICB1c2VybmFtZTogdXNlcm5hbWUsXG4gICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICB9XG4gIC8vIGRhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKVxuICBheGlvcy5wb3N0KCdodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXV0aCcsZGF0YSxjb25maWcpLnRoZW4oKHJlcykgPT4ge1xuICAgIGNvbnNvbGUubG9nKHJlcylcbiAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgIGNvbnNvbGUubG9nKGVycilcbiAgfSlcbn1cblxuY29uc3QgSG9tZSA9ICgpID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5Ib21lPC90aXRsZT5cbiAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICA8L0hlYWQ+XG5cbiAgICB7LyogPGZvcm0+ICovfVxuICAgICAgRW1haWw6PGJyIC8+PGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBvbmNoYW5nZT1cImdldGlucHV0KCdlbWFpbCcpXCI+PC9pbnB1dD48YnIvPlxuICAgICAgUGFzc3dvcmQ6PGJyLz48aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIG9uY2hhbmdlPVwiZ2V0aW5wdXQoJ3Bhc3N3b3JkJylcIj48L2lucHV0PjxiciAvPlxuICAgICAgPExpbmsgaHJlZj1cIiNcIj48YSBvbkNsaWNrPXtBdXRoZW50aWNhdGV9PlN1Ym1pdDwvYT48L0xpbms+XG4gICAgICB7LyogPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiIG9uQ2xpY2s9e0F1dGhlbnRpY2F0ZX0+PC9pbnB1dD4gKi99XG4gICAgey8qIDwvZm9ybT4gKi99XG5cbiAgICB7LyogPHAgaWQ9XCJyZWNlaXZlZG1zZ1wiPjwvcD4gKi99XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuaGVybyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgIH1cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmctdG9wOiA4MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgICAgfVxuICAgICAgLnRpdGxlLFxuICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgICAgLnJvdyB7XG4gICAgICAgIG1heC13aWR0aDogODgwcHg7XG4gICAgICAgIG1hcmdpbjogODBweCBhdXRvIDQwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgfVxuICAgICAgLmNhcmQge1xuICAgICAgICBwYWRkaW5nOiAxOHB4IDE4cHggMjRweDtcbiAgICAgICAgd2lkdGg6IDIyMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiAjNDM0MzQzO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOWI5YjliO1xuICAgICAgfVxuICAgICAgLmNhcmQ6aG92ZXIge1xuICAgICAgICBib3JkZXItY29sb3I6ICMwNjdkZjc7XG4gICAgICB9XG4gICAgICAuY2FyZCBoMyB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6ICMwNjdkZjc7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIH1cbiAgICAgIC5jYXJkIHAge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDEycHggMCAwO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdfQ== */\n/*@ sourceURL=K:\\\\janitri\\\\nextdj\\\\frontend\\\\pages\\\\index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.8aa6025108b8ed03c6a3.hot-update.js.map