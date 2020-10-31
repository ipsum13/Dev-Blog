module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/login.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api/admin-user/auth.js":
/*!********************************!*\
  !*** ./api/admin-user/auth.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
 //import apiBaseUrl from "../../utils/apiBaseUrl.js"

/* harmony default export */ __webpack_exports__["default"] = (async function (req) {
  try {
    const cookie = req.headers.cookie ? req.headers.cookie : "";
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("http://localhost:5000/dev-blog-9a969/us-central1/admin/users/authenticate", {
      headers: req ? {
        cookie: cookie
      } : "",
      withCredentials: true
    });
    return response.data;
  } catch (error) {
    return {
      success: false
    };
  }
});

/***/ }),

/***/ "./api/admin-user/login.js":
/*!*********************************!*\
  !*** ./api/admin-user/login.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
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
  }).catch(function (error) {
    callback({
      success: false
    });
  });
});

/***/ }),

/***/ "./api/admin-user/removeAdminUserCookie.js":
/*!*************************************************!*\
  !*** ./api/admin-user/removeAdminUserCookie.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
 //import apiBaseUrl from "../../utils/apiBaseUrl.js"

/* harmony default export */ __webpack_exports__["default"] = (function () {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("http://localhost:5000/dev-blog-9a969/us-central1/admin/users/remove-admin-user-cookie", {}, {
    withCredentials: true
  }).then(function (response) {
    return response.data;
  }).catch(function (error) {
    return;
  });
});

/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_admin_user_login_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/admin-user/login.js */ "./api/admin-user/login.js");
/* harmony import */ var _api_admin_user_auth_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/admin-user/auth.js */ "./api/admin-user/auth.js");
/* harmony import */ var _api_admin_user_removeAdminUserCookie_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/admin-user/removeAdminUserCookie.js */ "./api/admin-user/removeAdminUserCookie.js");

var _jsxFileName = "F:\\Dev-Blog\\admin\\website\\pages\\login.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/* harmony default export */ __webpack_exports__["default"] = (class extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  static async getInitialProps({
    req,
    res
  }) {
    const authResult = await Object(_api_admin_user_auth_js__WEBPACK_IMPORTED_MODULE_4__["default"])(req);

    if (authResult.success) {
      res.writeHead(302, {
        Location: "/"
      });
      res.end();
    }

    return {};
  }

  constructor(props) {
    super(props);

    _defineProperty(this, "updateEmailInputValue", event => {
      this.setState({
        emailInputValue: event.target.value,
        emailRequiredError: false
      });
    });

    _defineProperty(this, "updatePasswordInputValue", event => {
      this.setState({
        passwordInputValue: event.target.value,
        passwordRequiredError: false
      });
    });

    _defineProperty(this, "submitLoginRequest", () => {
      if (!this.state.emailInputValue || !this.state.passwordInputValue) {
        if (!this.state.emailInputValue) this.setState({
          emailRequiredError: true
        });
        if (!this.state.passwordInputValue) this.setState({
          passwordRequiredError: true
        });
      } else {
        this.setState({
          loading: true
        });
        const self = this;
        Object(_api_admin_user_login_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this.state.emailInputValue, this.state.passwordInputValue, function (apiResponse) {
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

    this.state = {
      loading: false,
      credentialError: false,
      emailInputValue: "",
      emailRequiredError: false,
      passwordInputValue: "",
      passwordRequiredError: false
    };
  }

  componentDidMount() {
    Object(_api_admin_user_removeAdminUserCookie_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "layout-wrapper",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
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
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "login-wrapper",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "login-content-container",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "login-form-container",
            children: [this.state.credentialError ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "login-form-error-block",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
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
            }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "login-form-top-header",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
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
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "login-form-field",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
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
              }, this), this.state.emailRequiredError ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "login-form-error-msg",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
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
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "login-form-field",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
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
              }, this), this.state.passwordRequiredError ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "login-form-error-msg",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
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
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "login-form-submit-btn-container",
              children: !this.state.loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                onClick: () => this.submitLoginRequest(),
                className: "login-form-submit-btn",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
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
              }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "login-form-submit-btn loading",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
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

});

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

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

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBpL2FkbWluLXVzZXIvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9hcGkvYWRtaW4tdXNlci9sb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9hcGkvYWRtaW4tdXNlci9yZW1vdmVBZG1pblVzZXJDb29raWUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbInJlcSIsImNvb2tpZSIsImhlYWRlcnMiLCJyZXNwb25zZSIsImF4aW9zIiwiZ2V0Iiwid2l0aENyZWRlbnRpYWxzIiwiZGF0YSIsImVycm9yIiwic3VjY2VzcyIsImVtYWlsIiwicGFzc3dvcmQiLCJjYWxsYmFjayIsInB1dCIsInRoZW4iLCJjYXRjaCIsIkNvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsInJlcyIsImF1dGhSZXN1bHQiLCJhdXRoVXNlciIsIndyaXRlSGVhZCIsIkxvY2F0aW9uIiwiZW5kIiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImV2ZW50Iiwic2V0U3RhdGUiLCJlbWFpbElucHV0VmFsdWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImVtYWlsUmVxdWlyZWRFcnJvciIsInBhc3N3b3JkSW5wdXRWYWx1ZSIsInBhc3N3b3JkUmVxdWlyZWRFcnJvciIsInN0YXRlIiwibG9hZGluZyIsInNlbGYiLCJsb2dpbiIsImFwaVJlc3BvbnNlIiwiY3JlZGVudGlhbEVycm9yIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiY29tcG9uZW50RGlkTW91bnQiLCJyZW1vdmVBZG1pblVzZXJDb29raWUiLCJyZW5kZXIiLCJ1cGRhdGVFbWFpbElucHV0VmFsdWUiLCJ1cGRhdGVQYXNzd29yZElucHV0VmFsdWUiLCJzdWJtaXRMb2dpblJlcXVlc3QiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0NBRUE7O0FBRWUsK0VBQWVBLEdBQWYsRUFBb0I7QUFDakMsTUFBSTtBQUNGLFVBQU1DLE1BQU0sR0FBR0QsR0FBRyxDQUFDRSxPQUFKLENBQVlELE1BQVosR0FBcUJELEdBQUcsQ0FBQ0UsT0FBSixDQUFZRCxNQUFqQyxHQUEwQyxFQUF6RDtBQUVBLFVBQU1FLFFBQVEsR0FBRyxNQUFNQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVUsMkVBQVYsRUFBdUY7QUFDNUdILGFBQU8sRUFBRUYsR0FBRyxHQUFHO0FBQUNDLGNBQU0sRUFBRUE7QUFBVCxPQUFILEdBQXNCLEVBRDBFO0FBRTVHSyxxQkFBZSxF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QUFYLGdCQUNBO0FBQUsseUJBQVMsRUFBQyxzQkFBZjtBQUFBLHVDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFEQSxHQUdTLElBYmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQTFCRixlQTBDRTtBQUFLLHVCQUFTLEVBQUMsaUNBQWY7QUFBQSx3QkFFSSxDQUFDLEtBQUtDLEtBQUwsQ0FBV0MsT0FBWixnQkFDQTtBQUFLLHVCQUFPLEVBQUUsTUFBTSxLQUFLYSxrQkFBTCxFQUFwQjtBQUErQyx5QkFBUyxFQUFDLHVCQUF6RDtBQUFBLHVDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFEQSxnQkFJQTtBQUFLLHlCQUFTLEVBQUMsK0JBQWY7QUFBQSx1Q0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQTFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBaUVEOztBQXBJb0MsQzs7Ozs7Ozs7Ozs7QUNQdkMsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2xvZ2luLmpzXCIpO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcblxyXG4vL2ltcG9ydCBhcGlCYXNlVXJsIGZyb20gXCIuLi8uLi91dGlscy9hcGlCYXNlVXJsLmpzXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uKHJlcSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjb29raWUgPSByZXEuaGVhZGVycy5jb29raWUgPyByZXEuaGVhZGVycy5jb29raWUgOiBcIlwiXHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvZGV2LWJsb2ctOWE5NjkvdXMtY2VudHJhbDEvYWRtaW4vdXNlcnMvYXV0aGVudGljYXRlXCIsIHtcclxuICAgICAgaGVhZGVyczogcmVxID8ge2Nvb2tpZTogY29va2llfSA6IFwiXCIsXHJcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YVxyXG4gIH0gY2F0Y2goZXJyb3IpIHtcclxuICAgIHJldHVybiB7c3VjY2VzczogZmFsc2V9XHJcbiAgfVxyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcblxyXG4vL2ltcG9ydCBhcGlCYXNlVXJsIGZyb20gXCIuLi8uLi91dGlscy9hcGlCYXNlVXJsLmpzXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVtYWlsLCBwYXNzd29yZCwgY2FsbGJhY2spIHtcclxuICBheGlvcy5wdXQoXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvZGV2LWJsb2ctOWE5NjkvdXMtY2VudHJhbDEvYWRtaW4vdXNlcnMvbG9naW5cIiwge1xyXG4gICAgZW1haWw6IGVtYWlsLFxyXG4gICAgcGFzc3dvcmQ6IHBhc3N3b3JkXHJcbiAgfSwge1xyXG4gICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlXHJcbiAgfSlcclxuICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgY2FsbGJhY2socmVzcG9uc2UuZGF0YSlcclxuICB9KVxyXG4gIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xyXG4gICAgY2FsbGJhY2soeyBzdWNjZXNzOiBmYWxzZSB9KVxyXG4gIH0pXHJcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuXHJcbi8vaW1wb3J0IGFwaUJhc2VVcmwgZnJvbSBcIi4uLy4uL3V0aWxzL2FwaUJhc2VVcmwuanNcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgYXhpb3MucHV0KFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2Rldi1ibG9nLTlhOTY5L3VzLWNlbnRyYWwxL2FkbWluL3VzZXJzL3JlbW92ZS1hZG1pbi11c2VyLWNvb2tpZVwiLCB7fSwge3dpdGhDcmVkZW50aWFsczogdHJ1ZX0pXHJcbiAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhXHJcbiAgfSlcclxuICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgIHJldHVyblxyXG4gIH0pXHJcbn0iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcclxuXHJcbmltcG9ydCBsb2dpbiBmcm9tIFwiLi4vYXBpL2FkbWluLXVzZXIvbG9naW4uanNcIlxyXG5pbXBvcnQgYXV0aFVzZXIgZnJvbSBcIi4uL2FwaS9hZG1pbi11c2VyL2F1dGguanNcIlxyXG5pbXBvcnQgcmVtb3ZlQWRtaW5Vc2VyQ29va2llIGZyb20gXCIuLi9hcGkvYWRtaW4tdXNlci9yZW1vdmVBZG1pblVzZXJDb29raWUuanNcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKHtyZXEsIHJlc30pIHtcclxuICAgIGNvbnN0IGF1dGhSZXN1bHQgPSBhd2FpdCBhdXRoVXNlcihyZXEpXHJcblxyXG4gICAgaWYgKGF1dGhSZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXMud3JpdGVIZWFkKDMwMiwgeyBMb2NhdGlvbjogXCIvXCIgfSlcclxuICAgICAgcmVzLmVuZCgpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHt9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgY3JlZGVudGlhbEVycm9yOiBmYWxzZSxcclxuICAgICAgZW1haWxJbnB1dFZhbHVlOiBcIlwiLFxyXG4gICAgICBlbWFpbFJlcXVpcmVkRXJyb3I6IGZhbHNlLFxyXG4gICAgICBwYXNzd29yZElucHV0VmFsdWU6IFwiXCIsXHJcbiAgICAgIHBhc3N3b3JkUmVxdWlyZWRFcnJvcjogZmFsc2VcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgcmVtb3ZlQWRtaW5Vc2VyQ29va2llKClcclxuICB9XHJcblxyXG4gIHVwZGF0ZUVtYWlsSW5wdXRWYWx1ZSA9IChldmVudCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGVtYWlsSW5wdXRWYWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG4gICAgICBlbWFpbFJlcXVpcmVkRXJyb3I6IGZhbHNlXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlUGFzc3dvcmRJbnB1dFZhbHVlID0gKGV2ZW50KSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcGFzc3dvcmRJbnB1dFZhbHVlOiBldmVudC50YXJnZXQudmFsdWUsXHJcbiAgICAgIHBhc3N3b3JkUmVxdWlyZWRFcnJvcjogZmFsc2VcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBzdWJtaXRMb2dpblJlcXVlc3QgPSAoKSA9PiB7XHJcbiAgICBpZiAoIXRoaXMuc3RhdGUuZW1haWxJbnB1dFZhbHVlIHx8ICF0aGlzLnN0YXRlLnBhc3N3b3JkSW5wdXRWYWx1ZSkge1xyXG4gICAgICBpZiAoIXRoaXMuc3RhdGUuZW1haWxJbnB1dFZhbHVlKSB0aGlzLnNldFN0YXRlKHsgZW1haWxSZXF1aXJlZEVycm9yOiB0cnVlIH0pXHJcbiAgICAgIGlmICghdGhpcy5zdGF0ZS5wYXNzd29yZElucHV0VmFsdWUpIHRoaXMuc2V0U3RhdGUoeyBwYXNzd29yZFJlcXVpcmVkRXJyb3I6IHRydWUgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pXHJcblxyXG4gICAgICBjb25zdCBzZWxmID0gdGhpc1xyXG5cclxuICAgICAgbG9naW4odGhpcy5zdGF0ZS5lbWFpbElucHV0VmFsdWUsIHRoaXMuc3RhdGUucGFzc3dvcmRJbnB1dFZhbHVlLCBmdW5jdGlvbihhcGlSZXNwb25zZSkge1xyXG4gICAgICAgIGlmICghYXBpUmVzcG9uc2Uuc3VjY2Vzcykge1xyXG4gICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsRXJyb3I6IHRydWUsXHJcbiAgICAgICAgICAgIGVtYWlsUmVxdWlyZWRFcnJvcjogZmFsc2UsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkUmVxdWlyZWRFcnJvcjogZmFsc2VcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvXCJcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXlvdXQtd3JhcHBlclwiPlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPkxvZ2luIHwgQWRtaW48L3RpdGxlPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLXdyYXBwZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tY29udGVudC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1mb3JtLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY3JlZGVudGlhbEVycm9yID9cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tZm9ybS1lcnJvci1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5FbWFpbCBhZGRyZXNzIGFuZC9vciBwYXNzd29yZCBpcyBpbmNvcnJlY3QuPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+IDogbnVsbFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWZvcm0tdG9wLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+QWRtaW4gTG9naW48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1mb3JtLWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudXBkYXRlRW1haWxJbnB1dFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbElucHV0VmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm5ldy1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWwgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jcmVkZW50aWFsRXJyb3IgfHwgdGhpcy5zdGF0ZS5lbWFpbFJlcXVpcmVkRXJyb3IgPyBcImVycm9yXCIgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5lbWFpbFJlcXVpcmVkRXJyb3IgP1xyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWZvcm0tZXJyb3ItbXNnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+RW1haWwgZmllbGQgaXMgcmVxdWlyZWQuPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1mb3JtLWZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudXBkYXRlUGFzc3dvcmRJbnB1dFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZElucHV0VmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm5ldy1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY3JlZGVudGlhbEVycm9yIHx8IHRoaXMuc3RhdGUucGFzc3dvcmRSZXF1aXJlZEVycm9yID8gXCJlcnJvclwiIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucGFzc3dvcmRSZXF1aXJlZEVycm9yID9cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1mb3JtLWVycm9yLW1zZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlBhc3N3b3JkIGZpZWxkIGlzIHJlcXVpcmVkLjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+IDogbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tZm9ybS1zdWJtaXQtYnRuLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAhdGhpcy5zdGF0ZS5sb2FkaW5nID9cclxuICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB0aGlzLnN1Ym1pdExvZ2luUmVxdWVzdCgpfSBjbGFzc05hbWU9XCJsb2dpbi1mb3JtLXN1Ym1pdC1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Mb2dpbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+IDpcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1mb3JtLXN1Ym1pdC1idG4gbG9hZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkxvYWRpbmc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=