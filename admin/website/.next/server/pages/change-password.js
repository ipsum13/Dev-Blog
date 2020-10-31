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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/change-password.js");
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

/***/ "./api/admin-user/changePassword.js":
/*!******************************************!*\
  !*** ./api/admin-user/changePassword.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
 //import apiBaseUrl from "../../utils/apiBaseUrl.js"

/* harmony default export */ __webpack_exports__["default"] = (function (currentPassword, newPassword, callback) {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("http://localhost:5000/dev-blog-9a969/us-central1/admin/users/change-password", {
    currentPassword: currentPassword,
    newPassword: newPassword
  }, {
    withCredentials: true
  }).then(function (response) {
    callback(response.data);
  }).catch(function (error) {
    callback({
      submitError: false
    });
  });
});

/***/ }),

/***/ "./api/admin-user/logout.js":
/*!**********************************!*\
  !*** ./api/admin-user/logout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
 //import apiBaseUrl from "../../utils/apiBaseUrl.js"

/* harmony default export */ __webpack_exports__["default"] = (function (callback) {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("http://localhost:5000/dev-blog-9a969/us-central1/admin/users/logout", {}, {
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

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_admin_user_logout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/admin-user/logout.js */ "./api/admin-user/logout.js");

var _jsxFileName = "F:\\Dev-Blog\\admin\\website\\components\\header.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["default"] = (class extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "requestLogout", () => {
      Object(_api_admin_user_logout_js__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
        window.location.href = "/login";
      });
    });
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "header-wrapper",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "header-logo",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Admin Dashboard"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        onClick: () => this.requestLogout(),
        className: "header-log-out",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "Logout"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this);
  }

});

/***/ }),

/***/ "./components/sidebar.js":
/*!*******************************!*\
  !*** ./components/sidebar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "F:\\Dev-Blog\\admin\\website\\components\\sidebar.js";

/* harmony default export */ __webpack_exports__["default"] = (class extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "sidebar-wrapper",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "sidebar-list",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: this.props.page === "blog-posts" ? "active" : null,
            href: "/",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: "Blog Posts"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 15,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: this.props.page === "images" ? "active" : null,
            href: "/images",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: "Images"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 20,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: this.props.page === "sitemap" ? "active" : null,
            href: "/sitemap",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: "Sitemap"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: this.props.page === "password" ? "active" : null,
            href: "/change-password",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: "Change Password"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this);
  }

});

/***/ }),

/***/ "./pages/change-password.js":
/*!**********************************!*\
  !*** ./pages/change-password.js ***!
  \**********************************/
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
/* harmony import */ var _components_header_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header.js */ "./components/header.js");
/* harmony import */ var _components_sidebar_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/sidebar.js */ "./components/sidebar.js");
/* harmony import */ var _api_admin_user_auth_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/admin-user/auth.js */ "./api/admin-user/auth.js");
/* harmony import */ var _api_admin_user_changePassword_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/admin-user/changePassword.js */ "./api/admin-user/changePassword.js");

var _jsxFileName = "F:\\Dev-Blog\\admin\\website\\pages\\change-password.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







/* harmony default export */ __webpack_exports__["default"] = (class extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  static async getInitialProps({
    req,
    res
  }) {
    const authResult = await Object(_api_admin_user_auth_js__WEBPACK_IMPORTED_MODULE_5__["default"])(req);

    if (!authResult.success) {
      res.writeHead(302, {
        Location: "/login"
      });
      res.end();
    }

    return {};
  }

  constructor(props) {
    super(props);

    _defineProperty(this, "updateCurrentPasswordInputValue", event => {
      this.setState({
        currentPasswordInputValue: event.target.value
      });
    });

    _defineProperty(this, "updateNewPasswordInputValue", event => {
      this.setState({
        newPasswordInputValue: event.target.value
      });
    });

    _defineProperty(this, "updateConfirmNewPasswordInputValue", event => {
      this.setState({
        confirmNewPasswordInputValue: event.target.value
      });
    });

    _defineProperty(this, "submitChangeRequest", () => {
      if (!this.state.currentPasswordInputValue) {
        this.setState({
          error: true,
          errorMsg: "Current password field is required.",
          success: false
        });
      } else if (!this.state.newPasswordInputValue) {
        this.setState({
          error: true,
          errorMsg: "New password field is required.",
          success: false
        });
      } else if (this.state.newPasswordInputValue !== this.state.confirmNewPasswordInputValue) {
        this.setState({
          error: true,
          errorMsg: "New password values do not match.",
          success: false
        });
      } else {
        this.setState({
          loading: true,
          error: false,
          errorMsg: false,
          success: false
        });
        const self = this;
        Object(_api_admin_user_changePassword_js__WEBPACK_IMPORTED_MODULE_6__["default"])(this.state.currentPasswordInputValue, this.state.newPasswordInputValue, function (apiResponse) {
          if (apiResponse.submitError) {
            self.setState({
              loading: false,
              error: true,
              errorMsg: "An error occured.",
              success: false
            });
          } else if (apiResponse.invalidPasswordCredentialError) {
            self.setState({
              loading: false,
              error: true,
              errorMsg: "Current password credential is invalid.",
              success: false
            });
          } else if (!apiResponse.authSuccess) {
            window.location.href = "/login";
          } else {
            self.setState({
              loading: false,
              error: false,
              success: true
            });
          }
        });
      }
    });

    this.state = {
      loading: false,
      error: false,
      errorMsg: "",
      success: false,
      currentPasswordInputValue: "",
      newPasswordInputValue: "",
      confirmNewPasswordInputValue: ""
    };
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "layout-wrapper",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "Change Password | Admin"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_header_js__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_sidebar_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
        page: "password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "layout-content-container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "settings-content",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "settings-header",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Admin Password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "settings-form-container",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "settings-form-title",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: "Change Password"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "settings-form-section",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "settings-form-section-label",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: "Current Password:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "settings-form-section-input",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  type: "password",
                  value: this.state.currentPasswordInputValue,
                  onChange: this.updateCurrentPasswordInputValue
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "settings-form-section",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "settings-form-section-label",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: "New Password:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 104,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "settings-form-section-input",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  type: "password",
                  value: this.state.newPasswordInputValue,
                  onChange: this.updateNewPasswordInputValue
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 107,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "settings-form-section",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "settings-form-section-label",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: "Confirm New Password:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 116,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "settings-form-section-input",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  type: "password",
                  value: this.state.confirmNewPasswordInputValue,
                  onChange: this.updateConfirmNewPasswordInputValue
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 119,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "settings-page-submit-btn-section",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "settings-form-btn-container",
                children: !this.state.loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  onClick: this.submitChangeRequest,
                  className: "settings-form-btn",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: "Submit"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 131,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 21
                }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "settings-form-btn loading",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: "Loading"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 134,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 17
              }, this), this.state.error ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "settings-submit-error-msg",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: this.state.errorMsg
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 19
              }, this) : null, this.state.success ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "settings-submit-success-msg",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: "Success!"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 147,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 19
              }, this) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 75,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBpL2FkbWluLXVzZXIvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9hcGkvYWRtaW4tdXNlci9jaGFuZ2VQYXNzd29yZC5qcyIsIndlYnBhY2s6Ly8vLi9hcGkvYWRtaW4tdXNlci9sb2dvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaWRlYmFyLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2NoYW5nZS1wYXNzd29yZC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsicmVxIiwiY29va2llIiwiaGVhZGVycyIsInJlc3BvbnNlIiwiYXhpb3MiLCJnZXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJkYXRhIiwiZXJyb3IiLCJzdWNjZXNzIiwiY3VycmVudFBhc3N3b3JkIiwibmV3UGFzc3dvcmQiLCJjYWxsYmFjayIsInB1dCIsInRoZW4iLCJjYXRjaCIsInN1Ym1pdEVycm9yIiwiQ29tcG9uZW50IiwibG9nb3V0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwicmVuZGVyIiwicmVxdWVzdExvZ291dCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJwYWdlIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzIiwiYXV0aFJlc3VsdCIsImF1dGhVc2VyIiwid3JpdGVIZWFkIiwiTG9jYXRpb24iLCJlbmQiLCJldmVudCIsInNldFN0YXRlIiwiY3VycmVudFBhc3N3b3JkSW5wdXRWYWx1ZSIsInRhcmdldCIsInZhbHVlIiwibmV3UGFzc3dvcmRJbnB1dFZhbHVlIiwiY29uZmlybU5ld1Bhc3N3b3JkSW5wdXRWYWx1ZSIsInN0YXRlIiwiZXJyb3JNc2ciLCJsb2FkaW5nIiwic2VsZiIsImNoYW5nZVBhc3N3b3JkIiwiYXBpUmVzcG9uc2UiLCJpbnZhbGlkUGFzc3dvcmRDcmVkZW50aWFsRXJyb3IiLCJhdXRoU3VjY2VzcyIsInVwZGF0ZUN1cnJlbnRQYXNzd29yZElucHV0VmFsdWUiLCJ1cGRhdGVOZXdQYXNzd29yZElucHV0VmFsdWUiLCJ1cGRhdGVDb25maXJtTmV3UGFzc3dvcmRJbnB1dFZhbHVlIiwic3VibWl0Q2hhbmdlUmVxdWVzdCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7Q0FFQTs7QUFFZSwrRUFBZUEsR0FBZixFQUFvQjtBQUNqQyxNQUFJO0FBQ0YsVUFBTUMsTUFBTSxHQUFHRCxHQUFHLENBQUNFLE9BQUosQ0FBWUQsTUFBWixHQUFxQkQsR0FBRyxDQUFDRSxPQUFKLENBQVlELE1BQWpDLEdBQTBDLEVBQXpEO0FBRUEsVUFBTUUsUUFBUSxHQUFHLE1BQU1DLDRDQUFLLENBQUNDLEdBQU4sQ0FBVSwyRUFBVixFQUF1RjtBQUM1R0gsYUFBTyxFQUFFRixHQUFHLEdBQUc7QUFBQ0MsY0FBTSxFQUFFQTtBQUFULE9BQUgsR0FBc0IsRUFEMEU7QUFFNUdLLHFCQUFlLEVBQUU7QUFGMkYsS0FBdkYsQ0FBdkI7QUFLQSxXQUFPSCxRQUFRLENBQUNJLElBQWhCO0FBQ0QsR0FURCxDQVNFLE9BQU1DLEtBQU4sRUFBYTtBQUNiLFdBQU87QUFBQ0MsYUFBTyxFQUFFO0FBQVYsS0FBUDtBQUNEO0FBQ0YsQzs7Ozs7Ozs7Ozs7O0FDakJEO0FBQUE7QUFBQTtDQUVBOztBQUVlLHlFQUFTQyxlQUFULEVBQTBCQyxXQUExQixFQUF1Q0MsUUFBdkMsRUFBaUQ7QUFDOURSLDhDQUFLLENBQUNTLEdBQU4sQ0FBVSw4RUFBVixFQUEwRjtBQUN4RkgsbUJBQWUsRUFBRUEsZUFEdUU7QUFFeEZDLGVBQVcsRUFBRUE7QUFGMkUsR0FBMUYsRUFHRztBQUNETCxtQkFBZSxFQUFFO0FBRGhCLEdBSEgsRUFNQ1EsSUFORCxDQU1NLFVBQVNYLFFBQVQsRUFBbUI7QUFDdkJTLFlBQVEsQ0FBQ1QsUUFBUSxDQUFDSSxJQUFWLENBQVI7QUFDRCxHQVJELEVBU0NRLEtBVEQsQ0FTTyxVQUFTUCxLQUFULEVBQWdCO0FBQ3JCSSxZQUFRLENBQUM7QUFBQ0ksaUJBQVcsRUFBRTtBQUFkLEtBQUQsQ0FBUjtBQUNELEdBWEQ7QUFZRCxDOzs7Ozs7Ozs7Ozs7QUNqQkQ7QUFBQTtBQUFBO0NBRUE7O0FBRWUseUVBQVNKLFFBQVQsRUFBbUI7QUFDaENSLDhDQUFLLENBQUNTLEdBQU4sQ0FBVSxxRUFBVixFQUFpRixFQUFqRixFQUFxRjtBQUFDUCxtQkFBZSxFQUFFO0FBQWxCLEdBQXJGLEVBQ0NRLElBREQsQ0FDTSxVQUFTWCxRQUFULEVBQW1CO0FBQ3ZCUyxZQUFRLENBQUNULFFBQVEsQ0FBQ0ksSUFBVixDQUFSO0FBQ0QsR0FIRCxFQUlDUSxLQUpELENBSU8sVUFBU1AsS0FBVCxFQUFnQjtBQUNyQkksWUFBUSxDQUFDO0FBQUNILGFBQU8sRUFBRTtBQUFWLEtBQUQsQ0FBUjtBQUNELEdBTkQ7QUFPRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pEO0FBRUE7QUFFZSw2RUFBY1EsK0NBQWQsQ0FBd0I7QUFBQTtBQUFBOztBQUFBLDJDQUNyQixNQUFNO0FBQ3BCQywrRUFBTSxDQUFDLFlBQVc7QUFDaEJDLGNBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBaEIsR0FBdUIsUUFBdkI7QUFDRCxPQUZLLENBQU47QUFHRCxLQUxvQztBQUFBOztBQU9yQ0MsUUFBTSxHQUFJO0FBQ1Isd0JBQ0U7QUFBSyxlQUFTLEVBQUMsZ0JBQWY7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsYUFBZjtBQUFBLCtCQUNFO0FBQUcsY0FBSSxFQUFDLEdBQVI7QUFBQSxpQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFNRTtBQUFLLGVBQU8sRUFBRSxNQUFNLEtBQUtDLGFBQUwsRUFBcEI7QUFBMEMsaUJBQVMsRUFBQyxnQkFBcEQ7QUFBQSwrQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQVlEOztBQXBCb0MsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0p2QztBQUVlLDZFQUFjTiwrQ0FBZCxDQUF3QjtBQUNyQ08sYUFBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjtBQUNEOztBQUVESCxRQUFNLEdBQUk7QUFDUix3QkFDRTtBQUFLLGVBQVMsRUFBQyxpQkFBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxjQUFmO0FBQUEsK0JBQ0U7QUFBQSxrQ0FDRTtBQUFHLHFCQUFTLEVBQUUsS0FBS0csS0FBTCxDQUFXQyxJQUFYLEtBQW9CLFlBQXBCLEdBQW1DLFFBQW5DLEdBQThDLElBQTVEO0FBQWtFLGdCQUFJLEVBQUMsR0FBdkU7QUFBQSxtQ0FDRTtBQUFBLHFDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFNRTtBQUFHLHFCQUFTLEVBQUUsS0FBS0QsS0FBTCxDQUFXQyxJQUFYLEtBQW9CLFFBQXBCLEdBQStCLFFBQS9CLEdBQTBDLElBQXhEO0FBQThELGdCQUFJLEVBQUMsU0FBbkU7QUFBQSxtQ0FDRTtBQUFBLHFDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkYsZUFXRTtBQUFHLHFCQUFTLEVBQUUsS0FBS0QsS0FBTCxDQUFXQyxJQUFYLEtBQW9CLFNBQXBCLEdBQWdDLFFBQWhDLEdBQTJDLElBQXpEO0FBQStELGdCQUFJLEVBQUMsVUFBcEU7QUFBQSxtQ0FDRTtBQUFBLHFDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBWEYsZUFnQkU7QUFBRyxxQkFBUyxFQUFFLEtBQUtELEtBQUwsQ0FBV0MsSUFBWCxLQUFvQixVQUFwQixHQUFpQyxRQUFqQyxHQUE0QyxJQUExRDtBQUFnRSxnQkFBSSxFQUFDLGtCQUFyRTtBQUFBLG1DQUNFO0FBQUEscUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQTRCRDs7QUFsQ29DLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGdkM7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRWUsNkVBQWNULCtDQUFkLENBQXdCO0FBQ3JDLGVBQWFVLGVBQWIsQ0FBOEI7QUFBQzNCLE9BQUQ7QUFBTTRCO0FBQU4sR0FBOUIsRUFBMEM7QUFDeEMsVUFBTUMsVUFBVSxHQUFHLE1BQU1DLHVFQUFRLENBQUM5QixHQUFELENBQWpDOztBQUVBLFFBQUksQ0FBQzZCLFVBQVUsQ0FBQ3BCLE9BQWhCLEVBQXlCO0FBQ3ZCbUIsU0FBRyxDQUFDRyxTQUFKLENBQWMsR0FBZCxFQUFtQjtBQUFFQyxnQkFBUSxFQUFFO0FBQVosT0FBbkI7QUFDQUosU0FBRyxDQUFDSyxHQUFKO0FBQ0Q7O0FBRUQsV0FBTyxFQUFQO0FBQ0Q7O0FBRURULGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47O0FBRGlCLDZEQWFnQlMsS0FBRCxJQUFXO0FBQzNDLFdBQUtDLFFBQUwsQ0FBYztBQUFDQyxpQ0FBeUIsRUFBRUYsS0FBSyxDQUFDRyxNQUFOLENBQWFDO0FBQXpDLE9BQWQ7QUFDRCxLQWZrQjs7QUFBQSx5REFpQllKLEtBQUQsSUFBVztBQUN2QyxXQUFLQyxRQUFMLENBQWM7QUFBQ0ksNkJBQXFCLEVBQUVMLEtBQUssQ0FBQ0csTUFBTixDQUFhQztBQUFyQyxPQUFkO0FBQ0QsS0FuQmtCOztBQUFBLGdFQXFCbUJKLEtBQUQsSUFBVztBQUM5QyxXQUFLQyxRQUFMLENBQWM7QUFBQ0ssb0NBQTRCLEVBQUVOLEtBQUssQ0FBQ0csTUFBTixDQUFhQztBQUE1QyxPQUFkO0FBQ0QsS0F2QmtCOztBQUFBLGlEQXlCRyxNQUFNO0FBQzFCLFVBQUksQ0FBQyxLQUFLRyxLQUFMLENBQVdMLHlCQUFoQixFQUEyQztBQUN6QyxhQUFLRCxRQUFMLENBQWM7QUFBQzNCLGVBQUssRUFBRSxJQUFSO0FBQWNrQyxrQkFBUSxFQUFFLHFDQUF4QjtBQUErRGpDLGlCQUFPLEVBQUU7QUFBeEUsU0FBZDtBQUNELE9BRkQsTUFFTyxJQUFJLENBQUMsS0FBS2dDLEtBQUwsQ0FBV0YscUJBQWhCLEVBQXVDO0FBQzVDLGFBQUtKLFFBQUwsQ0FBYztBQUFDM0IsZUFBSyxFQUFFLElBQVI7QUFBY2tDLGtCQUFRLEVBQUUsaUNBQXhCO0FBQTJEakMsaUJBQU8sRUFBRTtBQUFwRSxTQUFkO0FBQ0QsT0FGTSxNQUVBLElBQUksS0FBS2dDLEtBQUwsQ0FBV0YscUJBQVgsS0FBcUMsS0FBS0UsS0FBTCxDQUFXRCw0QkFBcEQsRUFBa0Y7QUFDdkYsYUFBS0wsUUFBTCxDQUFjO0FBQUMzQixlQUFLLEVBQUUsSUFBUjtBQUFja0Msa0JBQVEsRUFBRSxtQ0FBeEI7QUFBNkRqQyxpQkFBTyxFQUFFO0FBQXRFLFNBQWQ7QUFDRCxPQUZNLE1BRUE7QUFDTCxhQUFLMEIsUUFBTCxDQUFjO0FBQUNRLGlCQUFPLEVBQUUsSUFBVjtBQUFnQm5DLGVBQUssRUFBRSxLQUF2QjtBQUE4QmtDLGtCQUFRLEVBQUUsS0FBeEM7QUFBK0NqQyxpQkFBTyxFQUFFO0FBQXhELFNBQWQ7QUFFQSxjQUFNbUMsSUFBSSxHQUFHLElBQWI7QUFFQUMseUZBQWMsQ0FBQyxLQUFLSixLQUFMLENBQVdMLHlCQUFaLEVBQXVDLEtBQUtLLEtBQUwsQ0FBV0YscUJBQWxELEVBQXlFLFVBQVNPLFdBQVQsRUFBc0I7QUFDM0csY0FBSUEsV0FBVyxDQUFDOUIsV0FBaEIsRUFBNkI7QUFDM0I0QixnQkFBSSxDQUFDVCxRQUFMLENBQWM7QUFBQ1EscUJBQU8sRUFBRSxLQUFWO0FBQWlCbkMsbUJBQUssRUFBRSxJQUF4QjtBQUE4QmtDLHNCQUFRLEVBQUUsbUJBQXhDO0FBQTZEakMscUJBQU8sRUFBRTtBQUF0RSxhQUFkO0FBQ0QsV0FGRCxNQUVPLElBQUlxQyxXQUFXLENBQUNDLDhCQUFoQixFQUFnRDtBQUNyREgsZ0JBQUksQ0FBQ1QsUUFBTCxDQUFjO0FBQUNRLHFCQUFPLEVBQUUsS0FBVjtBQUFpQm5DLG1CQUFLLEVBQUUsSUFBeEI7QUFBOEJrQyxzQkFBUSxFQUFFLHlDQUF4QztBQUFtRmpDLHFCQUFPLEVBQUU7QUFBNUYsYUFBZDtBQUNELFdBRk0sTUFFQSxJQUFJLENBQUNxQyxXQUFXLENBQUNFLFdBQWpCLEVBQThCO0FBQ25DN0Isa0JBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBaEIsR0FBdUIsUUFBdkI7QUFDRCxXQUZNLE1BRUE7QUFDTHVCLGdCQUFJLENBQUNULFFBQUwsQ0FBYztBQUFDUSxxQkFBTyxFQUFFLEtBQVY7QUFBaUJuQyxtQkFBSyxFQUFFLEtBQXhCO0FBQStCQyxxQkFBTyxFQUFFO0FBQXhDLGFBQWQ7QUFDRDtBQUNGLFNBVmEsQ0FBZDtBQVdEO0FBQ0YsS0FqRGtCOztBQUVqQixTQUFLZ0MsS0FBTCxHQUFhO0FBQ1hFLGFBQU8sRUFBRSxLQURFO0FBRVhuQyxXQUFLLEVBQUUsS0FGSTtBQUdYa0MsY0FBUSxFQUFFLEVBSEM7QUFJWGpDLGFBQU8sRUFBRSxLQUpFO0FBS1gyQiwrQkFBeUIsRUFBRSxFQUxoQjtBQU1YRywyQkFBcUIsRUFBRSxFQU5aO0FBT1hDLGtDQUE0QixFQUFFO0FBUG5CLEtBQWI7QUFTRDs7QUF3Q0RsQixRQUFNLEdBQUk7QUFDUix3QkFDRTtBQUFLLGVBQVMsRUFBQyxnQkFBZjtBQUFBLDhCQUNFLHFFQUFDLGdEQUFEO0FBQUEsK0JBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRSxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsZUFLRSxxRUFBQyw4REFBRDtBQUFTLFlBQUksRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRixlQU1FO0FBQUssaUJBQVMsRUFBQywwQkFBZjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyxrQkFBZjtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBQyxpQkFBZjtBQUFBLG1DQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUlFO0FBQUsscUJBQVMsRUFBQyx5QkFBZjtBQUFBLG9DQUNFO0FBQUssdUJBQVMsRUFBQyxxQkFBZjtBQUFBLHFDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUlFO0FBQUssdUJBQVMsRUFBQyx1QkFBZjtBQUFBLHNDQUNFO0FBQUsseUJBQVMsRUFBQyw2QkFBZjtBQUFBLHVDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQUlFO0FBQUsseUJBQVMsRUFBQyw2QkFBZjtBQUFBLHVDQUNFO0FBQ0Usc0JBQUksRUFBQyxVQURQO0FBRUUsdUJBQUssRUFBRSxLQUFLbUIsS0FBTCxDQUFXTCx5QkFGcEI7QUFHRSwwQkFBUSxFQUFFLEtBQUthO0FBSGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKRixlQWdCRTtBQUFLLHVCQUFTLEVBQUMsdUJBQWY7QUFBQSxzQ0FDRTtBQUFLLHlCQUFTLEVBQUMsNkJBQWY7QUFBQSx1Q0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFJRTtBQUFLLHlCQUFTLEVBQUMsNkJBQWY7QUFBQSx1Q0FDRTtBQUNFLHNCQUFJLEVBQUMsVUFEUDtBQUVFLHVCQUFLLEVBQUUsS0FBS1IsS0FBTCxDQUFXRixxQkFGcEI7QUFHRSwwQkFBUSxFQUFFLEtBQUtXO0FBSGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFoQkYsZUE0QkU7QUFBSyx1QkFBUyxFQUFDLHVCQUFmO0FBQUEsc0NBQ0U7QUFBSyx5QkFBUyxFQUFDLDZCQUFmO0FBQUEsdUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBSUU7QUFBSyx5QkFBUyxFQUFDLDZCQUFmO0FBQUEsdUNBQ0U7QUFDRSxzQkFBSSxFQUFDLFVBRFA7QUFFRSx1QkFBSyxFQUFFLEtBQUtULEtBQUwsQ0FBV0QsNEJBRnBCO0FBR0UsMEJBQVEsRUFBRSxLQUFLVztBQUhqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBNUJGLGVBd0NFO0FBQUssdUJBQVMsRUFBQyxrQ0FBZjtBQUFBLHNDQUNFO0FBQUsseUJBQVMsRUFBQyw2QkFBZjtBQUFBLDBCQUVJLENBQUMsS0FBS1YsS0FBTCxDQUFXRSxPQUFaLGdCQUNBO0FBQUsseUJBQU8sRUFBRSxLQUFLUyxtQkFBbkI7QUFBd0MsMkJBQVMsRUFBQyxtQkFBbEQ7QUFBQSx5Q0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREEsZ0JBSUE7QUFBSywyQkFBUyxFQUFDLDJCQUFmO0FBQUEseUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTko7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixFQWFJLEtBQUtYLEtBQUwsQ0FBV2pDLEtBQVgsZ0JBQ0E7QUFBSyx5QkFBUyxFQUFDLDJCQUFmO0FBQUEsdUNBQ0U7QUFBQSw0QkFBTyxLQUFLaUMsS0FBTCxDQUFXQztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFEQSxHQUdTLElBaEJiLEVBbUJJLEtBQUtELEtBQUwsQ0FBV2hDLE9BQVgsZ0JBQ0E7QUFBSyx5QkFBUyxFQUFDLDZCQUFmO0FBQUEsdUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURBLEdBR1MsSUF0QmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQXhDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBa0ZEOztBQWxKb0MsQzs7Ozs7Ozs7Ozs7QUNUdkMsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvY2hhbmdlLXBhc3N3b3JkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9jaGFuZ2UtcGFzc3dvcmQuanNcIik7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuXHJcbi8vaW1wb3J0IGFwaUJhc2VVcmwgZnJvbSBcIi4uLy4uL3V0aWxzL2FwaUJhc2VVcmwuanNcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24ocmVxKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNvb2tpZSA9IHJlcS5oZWFkZXJzLmNvb2tpZSA/IHJlcS5oZWFkZXJzLmNvb2tpZSA6IFwiXCJcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9kZXYtYmxvZy05YTk2OS91cy1jZW50cmFsMS9hZG1pbi91c2Vycy9hdXRoZW50aWNhdGVcIiwge1xyXG4gICAgICBoZWFkZXJzOiByZXEgPyB7Y29va2llOiBjb29raWV9IDogXCJcIixcclxuICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhXHJcbiAgfSBjYXRjaChlcnJvcikge1xyXG4gICAgcmV0dXJuIHtzdWNjZXNzOiBmYWxzZX1cclxuICB9XHJcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuXHJcbi8vaW1wb3J0IGFwaUJhc2VVcmwgZnJvbSBcIi4uLy4uL3V0aWxzL2FwaUJhc2VVcmwuanNcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY3VycmVudFBhc3N3b3JkLCBuZXdQYXNzd29yZCwgY2FsbGJhY2spIHtcclxuICBheGlvcy5wdXQoXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvZGV2LWJsb2ctOWE5NjkvdXMtY2VudHJhbDEvYWRtaW4vdXNlcnMvY2hhbmdlLXBhc3N3b3JkXCIsIHtcclxuICAgIGN1cnJlbnRQYXNzd29yZDogY3VycmVudFBhc3N3b3JkLFxyXG4gICAgbmV3UGFzc3dvcmQ6IG5ld1Bhc3N3b3JkXHJcbiAgfSwge1xyXG4gICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlXHJcbiAgfSlcclxuICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgY2FsbGJhY2socmVzcG9uc2UuZGF0YSlcclxuICB9KVxyXG4gIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xyXG4gICAgY2FsbGJhY2soe3N1Ym1pdEVycm9yOiBmYWxzZX0pXHJcbiAgfSlcclxufSIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5cclxuLy9pbXBvcnQgYXBpQmFzZVVybCBmcm9tIFwiLi4vLi4vdXRpbHMvYXBpQmFzZVVybC5qc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gIGF4aW9zLnB1dChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9kZXYtYmxvZy05YTk2OS91cy1jZW50cmFsMS9hZG1pbi91c2Vycy9sb2dvdXRcIiwge30sIHt3aXRoQ3JlZGVudGlhbHM6IHRydWV9KVxyXG4gIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICBjYWxsYmFjayhyZXNwb25zZS5kYXRhKVxyXG4gIH0pXHJcbiAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICBjYWxsYmFjayh7c3VjY2VzczogZmFsc2V9KVxyXG4gIH0pXHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbmltcG9ydCBsb2dvdXQgZnJvbSBcIi4uL2FwaS9hZG1pbi11c2VyL2xvZ291dC5qc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVxdWVzdExvZ291dCA9ICgpID0+IHtcclxuICAgIGxvZ291dChmdW5jdGlvbigpIHtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9sb2dpblwiXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXdyYXBwZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1sb2dvXCI+XHJcbiAgICAgICAgICA8YSBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8c3Bhbj5BZG1pbiBEYXNoYm9hcmQ8L3NwYW4+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB0aGlzLnJlcXVlc3RMb2dvdXQoKX0gY2xhc3NOYW1lPVwiaGVhZGVyLWxvZy1vdXRcIj5cclxuICAgICAgICAgIDxzcGFuPkxvZ291dDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXdyYXBwZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItbGlzdFwiPlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e3RoaXMucHJvcHMucGFnZSA9PT0gXCJibG9nLXBvc3RzXCIgPyBcImFjdGl2ZVwiIDogbnVsbH0gaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5CbG9nIFBvc3RzPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXt0aGlzLnByb3BzLnBhZ2UgPT09IFwiaW1hZ2VzXCIgPyBcImFjdGl2ZVwiIDogbnVsbH0gaHJlZj1cIi9pbWFnZXNcIj5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5JbWFnZXM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e3RoaXMucHJvcHMucGFnZSA9PT0gXCJzaXRlbWFwXCIgPyBcImFjdGl2ZVwiIDogbnVsbH0gaHJlZj1cIi9zaXRlbWFwXCI+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+U2l0ZW1hcDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5wYWdlID09PSBcInBhc3N3b3JkXCIgPyBcImFjdGl2ZVwiIDogbnVsbH0gaHJlZj1cIi9jaGFuZ2UtcGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5DaGFuZ2UgUGFzc3dvcmQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXHJcblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlci5qc1wiXHJcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuLi9jb21wb25lbnRzL3NpZGViYXIuanNcIlxyXG5cclxuaW1wb3J0IGF1dGhVc2VyIGZyb20gXCIuLi9hcGkvYWRtaW4tdXNlci9hdXRoLmpzXCJcclxuaW1wb3J0IGNoYW5nZVBhc3N3b3JkIGZyb20gXCIuLi9hcGkvYWRtaW4tdXNlci9jaGFuZ2VQYXNzd29yZC5qc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoe3JlcSwgcmVzfSkge1xyXG4gICAgY29uc3QgYXV0aFJlc3VsdCA9IGF3YWl0IGF1dGhVc2VyKHJlcSlcclxuXHJcbiAgICBpZiAoIWF1dGhSZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICByZXMud3JpdGVIZWFkKDMwMiwgeyBMb2NhdGlvbjogXCIvbG9naW5cIiB9KVxyXG4gICAgICByZXMuZW5kKClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge31cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogZmFsc2UsXHJcbiAgICAgIGVycm9yTXNnOiBcIlwiLFxyXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgY3VycmVudFBhc3N3b3JkSW5wdXRWYWx1ZTogXCJcIixcclxuICAgICAgbmV3UGFzc3dvcmRJbnB1dFZhbHVlOiBcIlwiLFxyXG4gICAgICBjb25maXJtTmV3UGFzc3dvcmRJbnB1dFZhbHVlOiBcIlwiXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDdXJyZW50UGFzc3dvcmRJbnB1dFZhbHVlID0gKGV2ZW50KSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50UGFzc3dvcmRJbnB1dFZhbHVlOiBldmVudC50YXJnZXQudmFsdWV9KVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlTmV3UGFzc3dvcmRJbnB1dFZhbHVlID0gKGV2ZW50KSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtuZXdQYXNzd29yZElucHV0VmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZX0pXHJcbiAgfVxyXG5cclxuICB1cGRhdGVDb25maXJtTmV3UGFzc3dvcmRJbnB1dFZhbHVlID0gKGV2ZW50KSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtjb25maXJtTmV3UGFzc3dvcmRJbnB1dFZhbHVlOiBldmVudC50YXJnZXQudmFsdWV9KVxyXG4gIH1cclxuXHJcbiAgc3VibWl0Q2hhbmdlUmVxdWVzdCA9ICgpID0+IHtcclxuICAgIGlmICghdGhpcy5zdGF0ZS5jdXJyZW50UGFzc3dvcmRJbnB1dFZhbHVlKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yOiB0cnVlLCBlcnJvck1zZzogXCJDdXJyZW50IHBhc3N3b3JkIGZpZWxkIGlzIHJlcXVpcmVkLlwiLCBzdWNjZXNzOiBmYWxzZX0pXHJcbiAgICB9IGVsc2UgaWYgKCF0aGlzLnN0YXRlLm5ld1Bhc3N3b3JkSW5wdXRWYWx1ZSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcjogdHJ1ZSwgZXJyb3JNc2c6IFwiTmV3IHBhc3N3b3JkIGZpZWxkIGlzIHJlcXVpcmVkLlwiLCBzdWNjZXNzOiBmYWxzZX0pXHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUubmV3UGFzc3dvcmRJbnB1dFZhbHVlICE9PSB0aGlzLnN0YXRlLmNvbmZpcm1OZXdQYXNzd29yZElucHV0VmFsdWUpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3I6IHRydWUsIGVycm9yTXNnOiBcIk5ldyBwYXNzd29yZCB2YWx1ZXMgZG8gbm90IG1hdGNoLlwiLCBzdWNjZXNzOiBmYWxzZX0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiB0cnVlLCBlcnJvcjogZmFsc2UsIGVycm9yTXNnOiBmYWxzZSwgc3VjY2VzczogZmFsc2V9KVxyXG5cclxuICAgICAgY29uc3Qgc2VsZiA9IHRoaXNcclxuXHJcbiAgICAgIGNoYW5nZVBhc3N3b3JkKHRoaXMuc3RhdGUuY3VycmVudFBhc3N3b3JkSW5wdXRWYWx1ZSwgdGhpcy5zdGF0ZS5uZXdQYXNzd29yZElucHV0VmFsdWUsIGZ1bmN0aW9uKGFwaVJlc3BvbnNlKSB7XHJcbiAgICAgICAgaWYgKGFwaVJlc3BvbnNlLnN1Ym1pdEVycm9yKSB7XHJcbiAgICAgICAgICBzZWxmLnNldFN0YXRlKHtsb2FkaW5nOiBmYWxzZSwgZXJyb3I6IHRydWUsIGVycm9yTXNnOiBcIkFuIGVycm9yIG9jY3VyZWQuXCIsIHN1Y2Nlc3M6IGZhbHNlfSlcclxuICAgICAgICB9IGVsc2UgaWYgKGFwaVJlc3BvbnNlLmludmFsaWRQYXNzd29yZENyZWRlbnRpYWxFcnJvcikge1xyXG4gICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7bG9hZGluZzogZmFsc2UsIGVycm9yOiB0cnVlLCBlcnJvck1zZzogXCJDdXJyZW50IHBhc3N3b3JkIGNyZWRlbnRpYWwgaXMgaW52YWxpZC5cIiwgc3VjY2VzczogZmFsc2V9KVxyXG4gICAgICAgIH0gZWxzZSBpZiAoIWFwaVJlc3BvbnNlLmF1dGhTdWNjZXNzKSB7XHJcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2xvZ2luXCJcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7bG9hZGluZzogZmFsc2UsIGVycm9yOiBmYWxzZSwgc3VjY2VzczogdHJ1ZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0LXdyYXBwZXJcIj5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT5DaGFuZ2UgUGFzc3dvcmQgfCBBZG1pbjwvdGl0bGU+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICA8U2lkZWJhciBwYWdlPVwicGFzc3dvcmRcIiAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0LWNvbnRlbnQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5ncy1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5BZG1pbiBQYXNzd29yZDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3MtZm9ybS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzLWZvcm0tdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPkNoYW5nZSBQYXNzd29yZDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzLWZvcm0tc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5ncy1mb3JtLXNlY3Rpb24tbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+Q3VycmVudCBQYXNzd29yZDo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3MtZm9ybS1zZWN0aW9uLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY3VycmVudFBhc3N3b3JkSW5wdXRWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy51cGRhdGVDdXJyZW50UGFzc3dvcmRJbnB1dFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5ncy1mb3JtLXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3MtZm9ybS1zZWN0aW9uLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPk5ldyBQYXNzd29yZDo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3MtZm9ybS1zZWN0aW9uLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmV3UGFzc3dvcmRJbnB1dFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZU5ld1Bhc3N3b3JkSW5wdXRWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3MtZm9ybS1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzLWZvcm0tc2VjdGlvbi1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5Db25maXJtIE5ldyBQYXNzd29yZDo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3MtZm9ybS1zZWN0aW9uLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY29uZmlybU5ld1Bhc3N3b3JkSW5wdXRWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy51cGRhdGVDb25maXJtTmV3UGFzc3dvcmRJbnB1dFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5ncy1wYWdlLXN1Ym1pdC1idG4tc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5ncy1mb3JtLWJ0bi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICF0aGlzLnN0YXRlLmxvYWRpbmcgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17dGhpcy5zdWJtaXRDaGFuZ2VSZXF1ZXN0fSBjbGFzc05hbWU9XCJzZXR0aW5ncy1mb3JtLWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U3VibWl0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5ncy1mb3JtLWJ0biBsb2FkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Mb2FkaW5nPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5lcnJvciA/XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3Mtc3VibWl0LWVycm9yLW1zZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0aGlzLnN0YXRlLmVycm9yTXNnfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+IDogbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnN1Y2Nlc3MgP1xyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzLXN1Ym1pdC1zdWNjZXNzLW1zZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlN1Y2Nlc3MhPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj4gOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==