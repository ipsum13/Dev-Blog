webpackHotUpdate_N_E("pages/login",{

/***/ "./api/admin-user/auth.js":
/*!********************************!*\
  !*** ./api/admin-user/auth.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);


 //import apiBaseUrl from "../../utils/apiBaseUrl.js"

/* harmony default export */ __webpack_exports__["default"] = (function (_x) {
  return _ref.apply(this, arguments);
});

function _ref() {
  _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req) {
    var cookie, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            cookie = req.headers.cookie ? req.headers.cookie : "";
            _context.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("http://localhost:5000/dev-blog-9a969/us-central1/admin/users/authenticate", {
              headers: req ? {
                cookie: cookie
              } : "",
              withCredentials: true
            });

          case 4:
            response = _context.sent;
            return _context.abrupt("return", response.data);

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", {
              success: false
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));
  return _ref.apply(this, arguments);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./api/admin-user/login.js":
/*!*********************************!*\
  !*** ./api/admin-user/login.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
 //import apiBaseUrl from "../../utils/apiBaseUrl.js"

/* harmony default export */ __webpack_exports__["default"] = (function (email, password, callback) {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("http://localhost:5000/dev-blog-9a969/us-central1/admin/users/login", {
    email: email,
    password: password
  }, {
    withCredentials: true
  }).then(function (response) {
    callback(response.data);
  })["catch"](function (error) {
    callback({
      success: false
    });
  });
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./api/admin-user/removeAdminUserCookie.js":
/*!*************************************************!*\
  !*** ./api/admin-user/removeAdminUserCookie.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
 //import apiBaseUrl from "../../utils/apiBaseUrl.js"

/* harmony default export */ __webpack_exports__["default"] = (function () {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("http://localhost:5000/dev-blog-9a969/us-central1/admin/users/remove-admin-user-cookie", {}, {
    withCredentials: true
  }).then(function (response) {
    return response.data;
  })["catch"](function (error) {
    return;
  });
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _api_admin_user_login_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../api/admin-user/login.js */ "./api/admin-user/login.js");
/* harmony import */ var _api_admin_user_auth_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../api/admin-user/auth.js */ "./api/admin-user/auth.js");
/* harmony import */ var _api_admin_user_removeAdminUserCookie_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../api/admin-user/removeAdminUserCookie.js */ "./api/admin-user/removeAdminUserCookie.js");










var _jsxFileName = "F:\\Dev-Blog\\admin\\website\\pages\\login.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var _default = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(_default, _Component);

  var _super = _createSuper(_default);

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(_default, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var req, res, authResult;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req, res = _ref.res;
                _context.next = 3;
                return Object(_api_admin_user_auth_js__WEBPACK_IMPORTED_MODULE_13__["default"])(req);

              case 3:
                authResult = _context.sent;

                if (authResult.success) {
                  res.writeHead(302, {
                    Location: "/"
                  });
                  res.end();
                }

                return _context.abrupt("return", {});

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function _default(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _default);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "updateEmailInputValue", function (event) {
      _this.setState({
        emailInputValue: event.target.value,
        emailRequiredError: false
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "updatePasswordInputValue", function (event) {
      _this.setState({
        passwordInputValue: event.target.value,
        passwordRequiredError: false
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "submitLoginRequest", function () {
      if (!_this.state.emailInputValue || !_this.state.passwordInputValue) {
        if (!_this.state.emailInputValue) _this.setState({
          emailRequiredError: true
        });
        if (!_this.state.passwordInputValue) _this.setState({
          passwordRequiredError: true
        });
      } else {
        _this.setState({
          loading: true
        });

        var self = Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this);

        Object(_api_admin_user_login_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_this.state.emailInputValue, _this.state.passwordInputValue, function (apiResponse) {
          if (!apiResponse.success) {
            self.setState({
              loading: false,
              credentialError: true,
              emailRequiredError: false,
              passwordRequiredError: false
            });
          } else {
            window.location.href = "/";
          }
        });
      }
    });

    _this.state = {
      loading: false,
      credentialError: false,
      emailInputValue: "",
      emailRequiredError: false,
      passwordInputValue: "",
      passwordRequiredError: false
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      Object(_api_admin_user_removeAdminUserCookie_js__WEBPACK_IMPORTED_MODULE_14__["default"])();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        className: "layout-wrapper",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_11___default.a, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("title", {
            children: "Login | Admin"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
          className: "login-wrapper",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
            className: "login-content-container",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
              className: "login-form-container",
              children: [this.state.credentialError ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                className: "login-form-error-block",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
                  children: "Email address and/or password is incorrect."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 17
              }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                className: "login-form-top-header",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
                  children: "Admin Login"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                className: "login-form-field",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
                  onChange: this.updateEmailInputValue,
                  value: this.state.emailInputValue,
                  type: "email",
                  autoComplete: "new-password",
                  placeholder: "Email Address",
                  className: this.state.credentialError || this.state.emailRequiredError ? "error" : null
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 17
                }, this), this.state.emailRequiredError ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                  className: "login-form-error-msg",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
                    children: "Email field is required."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 104,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
                  columnNumber: 19
                }, this) : null]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                className: "login-form-field",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
                  onChange: this.updatePasswordInputValue,
                  value: this.state.passwordInputValue,
                  type: "password",
                  autoComplete: "new-password",
                  placeholder: "Password",
                  className: this.state.credentialError || this.state.passwordRequiredError ? "error" : null
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 109,
                  columnNumber: 17
                }, this), this.state.passwordRequiredError ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                  className: "login-form-error-msg",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
                    children: "Password field is required."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 120,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 119,
                  columnNumber: 19
                }, this) : null]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                className: "login-form-submit-btn-container",
                children: !this.state.loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                  onClick: function onClick() {
                    return _this2.submitLoginRequest();
                  },
                  className: "login-form-submit-btn",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
                    children: "Login"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 128,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 127,
                  columnNumber: 19
                }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                  className: "login-form-submit-btn loading",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
                    children: "Loading"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 131,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 7
      }, this);
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBpL2FkbWluLXVzZXIvYXV0aC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vYXBpL2FkbWluLXVzZXIvbG9naW4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2FwaS9hZG1pbi11c2VyL3JlbW92ZUFkbWluVXNlckNvb2tpZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xvZ2luLmpzIl0sIm5hbWVzIjpbInJlcSIsImNvb2tpZSIsImhlYWRlcnMiLCJheGlvcyIsImdldCIsIndpdGhDcmVkZW50aWFscyIsInJlc3BvbnNlIiwiZGF0YSIsInN1Y2Nlc3MiLCJlbWFpbCIsInBhc3N3b3JkIiwiY2FsbGJhY2siLCJwdXQiLCJ0aGVuIiwiZXJyb3IiLCJyZXMiLCJhdXRoVXNlciIsImF1dGhSZXN1bHQiLCJ3cml0ZUhlYWQiLCJMb2NhdGlvbiIsImVuZCIsInByb3BzIiwiZXZlbnQiLCJzZXRTdGF0ZSIsImVtYWlsSW5wdXRWYWx1ZSIsInRhcmdldCIsInZhbHVlIiwiZW1haWxSZXF1aXJlZEVycm9yIiwicGFzc3dvcmRJbnB1dFZhbHVlIiwicGFzc3dvcmRSZXF1aXJlZEVycm9yIiwic3RhdGUiLCJsb2FkaW5nIiwic2VsZiIsImxvZ2luIiwiYXBpUmVzcG9uc2UiLCJjcmVkZW50aWFsRXJyb3IiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJyZW1vdmVBZG1pblVzZXJDb29raWUiLCJ1cGRhdGVFbWFpbElucHV0VmFsdWUiLCJ1cGRhdGVQYXNzd29yZElucHV0VmFsdWUiLCJzdWJtaXRMb2dpblJlcXVlc3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUVBOztBQUVlO0FBQWY7QUFBQTs7OzBMQUFlLGlCQUFlQSxHQUFmO0FBQUE7QUFBQTtBQUFB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QUFTLEVBQUMsdUJBQXpEO0FBQUEseUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURBLGdCQUlBO0FBQUssMkJBQVMsRUFBQywrQkFBZjtBQUFBLHlDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBMUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBaUVEOzs7O0VBcEkwQkMsZ0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uMGMyZjM4ZTBiYWU1YTRkZmI5OWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5cclxuLy9pbXBvcnQgYXBpQmFzZVVybCBmcm9tIFwiLi4vLi4vdXRpbHMvYXBpQmFzZVVybC5qc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbihyZXEpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgY29va2llID0gcmVxLmhlYWRlcnMuY29va2llID8gcmVxLmhlYWRlcnMuY29va2llIDogXCJcIlxyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2Rldi1ibG9nLTlhOTY5L3VzLWNlbnRyYWwxL2FkbWluL3VzZXJzL2F1dGhlbnRpY2F0ZVwiLCB7XHJcbiAgICAgIGhlYWRlcnM6IHJlcSA/IHtjb29raWU6IGNvb2tpZX0gOiBcIlwiLFxyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWVcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGFcclxuICB9IGNhdGNoKGVycm9yKSB7XHJcbiAgICByZXR1cm4ge3N1Y2Nlc3M6IGZhbHNlfVxyXG4gIH1cclxufSIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5cclxuLy9pbXBvcnQgYXBpQmFzZVVybCBmcm9tIFwiLi4vLi4vdXRpbHMvYXBpQmFzZVVybC5qc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbWFpbCwgcGFzc3dvcmQsIGNhbGxiYWNrKSB7XHJcbiAgYXhpb3MucHV0KFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2Rldi1ibG9nLTlhOTY5L3VzLWNlbnRyYWwxL2FkbWluL3VzZXJzL2xvZ2luXCIsIHtcclxuICAgIGVtYWlsOiBlbWFpbCxcclxuICAgIHBhc3N3b3JkOiBwYXNzd29yZFxyXG4gIH0sIHtcclxuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxyXG4gIH0pXHJcbiAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgIGNhbGxiYWNrKHJlc3BvbnNlLmRhdGEpXHJcbiAgfSlcclxuICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgIGNhbGxiYWNrKHsgc3VjY2VzczogZmFsc2UgfSlcclxuICB9KVxyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcblxyXG4vL2ltcG9ydCBhcGlCYXNlVXJsIGZyb20gXCIuLi8uLi91dGlscy9hcGlCYXNlVXJsLmpzXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIGF4aW9zLnB1dChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9kZXYtYmxvZy05YTk2OS91cy1jZW50cmFsMS9hZG1pbi91c2Vycy9yZW1vdmUtYWRtaW4tdXNlci1jb29raWVcIiwge30sIHt3aXRoQ3JlZGVudGlhbHM6IHRydWV9KVxyXG4gIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YVxyXG4gIH0pXHJcbiAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICByZXR1cm5cclxuICB9KVxyXG59IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXHJcblxyXG5pbXBvcnQgbG9naW4gZnJvbSBcIi4uL2FwaS9hZG1pbi11c2VyL2xvZ2luLmpzXCJcclxuaW1wb3J0IGF1dGhVc2VyIGZyb20gXCIuLi9hcGkvYWRtaW4tdXNlci9hdXRoLmpzXCJcclxuaW1wb3J0IHJlbW92ZUFkbWluVXNlckNvb2tpZSBmcm9tIFwiLi4vYXBpL2FkbWluLXVzZXIvcmVtb3ZlQWRtaW5Vc2VyQ29va2llLmpzXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICh7cmVxLCByZXN9KSB7XHJcbiAgICBjb25zdCBhdXRoUmVzdWx0ID0gYXdhaXQgYXV0aFVzZXIocmVxKVxyXG5cclxuICAgIGlmIChhdXRoUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmVzLndyaXRlSGVhZCgzMDIsIHsgTG9jYXRpb246IFwiL1wiIH0pXHJcbiAgICAgIHJlcy5lbmQoKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7fVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgIGNyZWRlbnRpYWxFcnJvcjogZmFsc2UsXHJcbiAgICAgIGVtYWlsSW5wdXRWYWx1ZTogXCJcIixcclxuICAgICAgZW1haWxSZXF1aXJlZEVycm9yOiBmYWxzZSxcclxuICAgICAgcGFzc3dvcmRJbnB1dFZhbHVlOiBcIlwiLFxyXG4gICAgICBwYXNzd29yZFJlcXVpcmVkRXJyb3I6IGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHJlbW92ZUFkbWluVXNlckNvb2tpZSgpXHJcbiAgfVxyXG5cclxuICB1cGRhdGVFbWFpbElucHV0VmFsdWUgPSAoZXZlbnQpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBlbWFpbElucHV0VmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgICAgZW1haWxSZXF1aXJlZEVycm9yOiBmYWxzZVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHVwZGF0ZVBhc3N3b3JkSW5wdXRWYWx1ZSA9IChldmVudCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHBhc3N3b3JkSW5wdXRWYWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG4gICAgICBwYXNzd29yZFJlcXVpcmVkRXJyb3I6IGZhbHNlXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgc3VibWl0TG9naW5SZXF1ZXN0ID0gKCkgPT4ge1xyXG4gICAgaWYgKCF0aGlzLnN0YXRlLmVtYWlsSW5wdXRWYWx1ZSB8fCAhdGhpcy5zdGF0ZS5wYXNzd29yZElucHV0VmFsdWUpIHtcclxuICAgICAgaWYgKCF0aGlzLnN0YXRlLmVtYWlsSW5wdXRWYWx1ZSkgdGhpcy5zZXRTdGF0ZSh7IGVtYWlsUmVxdWlyZWRFcnJvcjogdHJ1ZSB9KVxyXG4gICAgICBpZiAoIXRoaXMuc3RhdGUucGFzc3dvcmRJbnB1dFZhbHVlKSB0aGlzLnNldFN0YXRlKHsgcGFzc3dvcmRSZXF1aXJlZEVycm9yOiB0cnVlIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KVxyXG5cclxuICAgICAgY29uc3Qgc2VsZiA9IHRoaXNcclxuXHJcbiAgICAgIGxvZ2luKHRoaXMuc3RhdGUuZW1haWxJbnB1dFZhbHVlLCB0aGlzLnN0YXRlLnBhc3N3b3JkSW5wdXRWYWx1ZSwgZnVuY3Rpb24oYXBpUmVzcG9uc2UpIHtcclxuICAgICAgICBpZiAoIWFwaVJlc3BvbnNlLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgY3JlZGVudGlhbEVycm9yOiB0cnVlLFxyXG4gICAgICAgICAgICBlbWFpbFJlcXVpcmVkRXJyb3I6IGZhbHNlLFxyXG4gICAgICAgICAgICBwYXNzd29yZFJlcXVpcmVkRXJyb3I6IGZhbHNlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0LXdyYXBwZXJcIj5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT5Mb2dpbiB8IEFkbWluPC90aXRsZT5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi13cmFwcGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWNvbnRlbnQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tZm9ybS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNyZWRlbnRpYWxFcnJvciA/XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWZvcm0tZXJyb3ItYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+RW1haWwgYWRkcmVzcyBhbmQvb3IgcGFzc3dvcmQgaXMgaW5jb3JyZWN0Ljwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiA6IG51bGxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1mb3JtLXRvcC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPkFkbWluIExvZ2luPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tZm9ybS1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZUVtYWlsSW5wdXRWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWxJbnB1dFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJuZXctcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsIEFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY3JlZGVudGlhbEVycm9yIHx8IHRoaXMuc3RhdGUuZW1haWxSZXF1aXJlZEVycm9yID8gXCJlcnJvclwiIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZW1haWxSZXF1aXJlZEVycm9yID9cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1mb3JtLWVycm9yLW1zZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkVtYWlsIGZpZWxkIGlzIHJlcXVpcmVkLjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+IDogbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tZm9ybS1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZVBhc3N3b3JkSW5wdXRWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmRJbnB1dFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJuZXctcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNyZWRlbnRpYWxFcnJvciB8fCB0aGlzLnN0YXRlLnBhc3N3b3JkUmVxdWlyZWRFcnJvciA/IFwiZXJyb3JcIiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnBhc3N3b3JkUmVxdWlyZWRFcnJvciA/XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tZm9ybS1lcnJvci1tc2dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5QYXNzd29yZCBmaWVsZCBpcyByZXF1aXJlZC48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWZvcm0tc3VibWl0LWJ0bi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgIXRoaXMuc3RhdGUubG9hZGluZyA/XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gdGhpcy5zdWJtaXRMb2dpblJlcXVlc3QoKX0gY2xhc3NOYW1lPVwibG9naW4tZm9ybS1zdWJtaXQtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+TG9naW48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PiA6XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tZm9ybS1zdWJtaXQtYnRuIGxvYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Mb2FkaW5nPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==