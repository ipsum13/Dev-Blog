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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./api/blog-posts/getAllPosts.js":
/*!***************************************!*\
  !*** ./api/blog-posts/getAllPosts.js ***!
  \***************************************/
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
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()({
      url: "http://localhost:5000/dev-blog-9a969/us-central1/admin/blog-posts/get-all",
      headers: req ? {
        cookie: cookie
      } : "",
      withCredentials: true
    });
    return response.data;
  } catch (error) {
    return {
      submitError: true
    };
  }
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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_header_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/header.js */ "./components/header.js");
/* harmony import */ var _components_sidebar_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/sidebar.js */ "./components/sidebar.js");
/* harmony import */ var _api_blog_posts_getAllPosts_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/blog-posts/getAllPosts.js */ "./api/blog-posts/getAllPosts.js");


var _jsxFileName = "F:\\Dev-Blog\\admin\\website\\pages\\index.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







/* harmony default export */ __webpack_exports__["default"] = (class extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  static async getInitialProps({
    req,
    res
  }) {
    const apiResult = await Object(_api_blog_posts_getAllPosts_js__WEBPACK_IMPORTED_MODULE_6__["default"])(req);

    if (!apiResult.authSuccess) {
      res.writeHead(302, {
        Location: "/login"
      });
      res.end();
    }

    return {
      activePosts: apiResult.activePosts ? apiResult.activePosts : [],
      upcomingPosts: apiResult.upcomingPosts ? apiResult.upcomingPosts : [],
      getDataError: apiResult && apiResult.getDataError
    };
  }

  constructor(props) {
    super(props);

    _defineProperty(this, "handleActiveBtnClick", () => {
      this.setState({
        showActivePosts: true,
        showUpcomingPosts: false
      });
    });

    _defineProperty(this, "handleUpcomingBtnClick", () => {
      this.setState({
        showActivePosts: false,
        showUpcomingPosts: true
      });
    });

    this.state = {
      showActivePosts: true,
      showUpcomingPosts: false
    };
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "layout-wrapper",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "Blog Posts | Admin"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_header_js__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_sidebar_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
        page: "blog-posts"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "layout-content-container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "blog-posts-content",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "blog-posts-top-header",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "blog-posts-page-label",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: "All Blog Posts"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "blog-posts-add-new-btn-container",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "/blog/create-new-post",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "blog-posts-add-new-btn",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: "+ Add New Post"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 65,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "blog-posts-list-container",
            children: !this.props.getDataError ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "blog-posts-list-tab-btns",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "blog-posts-list-tab-btn-container",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: this.state.showActivePosts ? "blog-posts-list-tab-btn active" : "blog-posts-list-tab-btn",
                    onClick: () => this.handleActiveBtnClick(),
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: "Active"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 80,
                      columnNumber: 25
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 76,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "blog-posts-list-tab-btn-container",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: this.state.showUpcomingPosts ? "blog-posts-list-tab-btn active" : "blog-posts-list-tab-btn",
                    onClick: () => this.handleUpcomingBtnClick(),
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: "Upcoming"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 88,
                      columnNumber: 25
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 84,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "blog-posts-list-items-table",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "blog-posts-list-items-table-header",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "blog-posts-list-items-table-header-item title",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: "Title"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 95,
                      columnNumber: 25
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 94,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "blog-posts-list-items-table-header-item date",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: "Date"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 98,
                      columnNumber: 25
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 97,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "blog-posts-list-items-table-header-item edit",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 101,
                      columnNumber: 25
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 100,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 21
                }, this), this.state.showActivePosts && this.props.activePosts.length ? this.props.activePosts.map((post, index) => {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "blog-posts-list-items-table-item",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "blog-posts-list-items-table-item-data title",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        children: post.title
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 110,
                        columnNumber: 31
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 109,
                      columnNumber: 29
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "blog-posts-list-items-table-item-data date",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        children: moment__WEBPACK_IMPORTED_MODULE_3___default.a.unix(post.dateTimestamp).format('MM/DD/YYYY')
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 113,
                        columnNumber: 31
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 112,
                      columnNumber: 29
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "blog-posts-list-items-table-item-data edit",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: `/blog/edit-post/${post.id}`,
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          children: "Edit"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 117,
                          columnNumber: 33
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 116,
                        columnNumber: 31
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        children: " >"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 119,
                        columnNumber: 31
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 115,
                      columnNumber: 29
                    }, this)]
                  }, index, true, {
                    fileName: _jsxFileName,
                    lineNumber: 108,
                    columnNumber: 27
                  }, this);
                }) : null, this.state.showUpcomingPosts && this.props.upcomingPosts.length ? this.props.upcomingPosts.map((post, index) => {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "blog-posts-list-items-table-item",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "blog-posts-list-items-table-item-data title",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        children: post.title
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 131,
                        columnNumber: 31
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 130,
                      columnNumber: 29
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "blog-posts-list-items-table-item-data date",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        children: moment__WEBPACK_IMPORTED_MODULE_3___default.a.unix(post.dateTimestamp).format('MM/DD/YYYY')
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 134,
                        columnNumber: 31
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 133,
                      columnNumber: 29
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "blog-posts-list-items-table-item-data edit",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: `/blog/edit-post/${post.id}`,
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          children: "Edit"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 138,
                          columnNumber: 33
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 137,
                        columnNumber: 31
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        children: " >"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 140,
                        columnNumber: 31
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 136,
                      columnNumber: 29
                    }, this)]
                  }, index, true, {
                    fileName: _jsxFileName,
                    lineNumber: 129,
                    columnNumber: 27
                  }, this);
                }) : null]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 19
              }, this)]
            }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "blog-posts-list-get-data-error",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: "An error occurred."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 149,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
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

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBpL2FkbWluLXVzZXIvbG9nb3V0LmpzIiwid2VicGFjazovLy8uL2FwaS9ibG9nLXBvc3RzL2dldEFsbFBvc3RzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiY2FsbGJhY2siLCJheGlvcyIsInB1dCIsIndpdGhDcmVkZW50aWFscyIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwic3VjY2VzcyIsInJlcSIsImNvb2tpZSIsImhlYWRlcnMiLCJ1cmwiLCJzdWJtaXRFcnJvciIsIkNvbXBvbmVudCIsImxvZ291dCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInJlbmRlciIsInJlcXVlc3RMb2dvdXQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicGFnZSIsImdldEluaXRpYWxQcm9wcyIsInJlcyIsImFwaVJlc3VsdCIsImdldEFsbFBvc3RzIiwiYXV0aFN1Y2Nlc3MiLCJ3cml0ZUhlYWQiLCJMb2NhdGlvbiIsImVuZCIsImFjdGl2ZVBvc3RzIiwidXBjb21pbmdQb3N0cyIsImdldERhdGFFcnJvciIsInNldFN0YXRlIiwic2hvd0FjdGl2ZVBvc3RzIiwic2hvd1VwY29taW5nUG9zdHMiLCJzdGF0ZSIsImhhbmRsZUFjdGl2ZUJ0bkNsaWNrIiwiaGFuZGxlVXBjb21pbmdCdG5DbGljayIsImxlbmd0aCIsIm1hcCIsInBvc3QiLCJpbmRleCIsInRpdGxlIiwibW9tZW50IiwidW5peCIsImRhdGVUaW1lc3RhbXAiLCJmb3JtYXQiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7Q0FFQTs7QUFFZSx5RUFBU0EsUUFBVCxFQUFtQjtBQUNoQ0MsOENBQUssQ0FBQ0MsR0FBTixDQUFVLHFFQUFWLEVBQWlGLEVBQWpGLEVBQXFGO0FBQUNDLG1CQUFlLEVBQUU7QUFBbEIsR0FBckYsRUFDQ0MsSUFERCxDQUNNLFVBQVNDLFFBQVQsRUFBbUI7QUFDdkJMLFlBQVEsQ0FBQ0ssUUFBUSxDQUFDQyxJQUFWLENBQVI7QUFDRCxHQUhELEVBSUNDLEtBSkQsQ0FJTyxVQUFTQyxLQUFULEVBQWdCO0FBQ3JCUixZQUFRLENBQUM7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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBbkJGO0FBQUEsNEJBREEsZ0JBNEVBO0FBQUssdUJBQVMsRUFBQyxnQ0FBZjtBQUFBLHFDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTlFSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQTRHRDs7QUFuSm9DLEM7Ozs7Ozs7Ozs7O0FDVHZDLGtDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5cclxuLy9pbXBvcnQgYXBpQmFzZVVybCBmcm9tIFwiLi4vLi4vdXRpbHMvYXBpQmFzZVVybC5qc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gIGF4aW9zLnB1dChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9kZXYtYmxvZy05YTk2OS91cy1jZW50cmFsMS9hZG1pbi91c2Vycy9sb2dvdXRcIiwge30sIHt3aXRoQ3JlZGVudGlhbHM6IHRydWV9KVxyXG4gIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICBjYWxsYmFjayhyZXNwb25zZS5kYXRhKVxyXG4gIH0pXHJcbiAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICBjYWxsYmFjayh7c3VjY2VzczogZmFsc2V9KVxyXG4gIH0pXHJcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuXHJcbi8vaW1wb3J0IGFwaUJhc2VVcmwgZnJvbSBcIi4uLy4uL3V0aWxzL2FwaUJhc2VVcmwuanNcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24ocmVxKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNvb2tpZSA9IHJlcS5oZWFkZXJzLmNvb2tpZSA/IHJlcS5oZWFkZXJzLmNvb2tpZSA6IFwiXCJcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHtcclxuICAgICAgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9kZXYtYmxvZy05YTk2OS91cy1jZW50cmFsMS9hZG1pbi9ibG9nLXBvc3RzL2dldC1hbGxcIixcclxuICAgICAgaGVhZGVyczogcmVxID8ge2Nvb2tpZTogY29va2llfSA6IFwiXCIsXHJcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YVxyXG4gIH0gY2F0Y2goZXJyb3IpIHtcclxuICAgIHJldHVybiB7c3VibWl0RXJyb3I6IHRydWV9XHJcbiAgfVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5pbXBvcnQgbG9nb3V0IGZyb20gXCIuLi9hcGkvYWRtaW4tdXNlci9sb2dvdXQuanNcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlcXVlc3RMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBsb2dvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvbG9naW5cIlxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci13cmFwcGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbG9nb1wiPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPHNwYW4+QWRtaW4gRGFzaGJvYXJkPC9zcGFuPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gdGhpcy5yZXF1ZXN0TG9nb3V0KCl9IGNsYXNzTmFtZT1cImhlYWRlci1sb2ctb3V0XCI+XHJcbiAgICAgICAgICA8c3Bhbj5Mb2dvdXQ8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufSIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci13cmFwcGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLWxpc3RcIj5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXt0aGlzLnByb3BzLnBhZ2UgPT09IFwiYmxvZy1wb3N0c1wiID8gXCJhY3RpdmVcIiA6IG51bGx9IGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+QmxvZyBQb3N0czwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5wYWdlID09PSBcImltYWdlc1wiID8gXCJhY3RpdmVcIiA6IG51bGx9IGhyZWY9XCIvaW1hZ2VzXCI+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+SW1hZ2VzPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXt0aGlzLnByb3BzLnBhZ2UgPT09IFwic2l0ZW1hcFwiID8gXCJhY3RpdmVcIiA6IG51bGx9IGhyZWY9XCIvc2l0ZW1hcFwiPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlNpdGVtYXA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e3RoaXMucHJvcHMucGFnZSA9PT0gXCJwYXNzd29yZFwiID8gXCJhY3RpdmVcIiA6IG51bGx9IGhyZWY9XCIvY2hhbmdlLXBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+Q2hhbmdlIFBhc3N3b3JkPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufSIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIlxyXG5cclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkZXIuanNcIlxyXG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9zaWRlYmFyLmpzXCJcclxuXHJcbmltcG9ydCBnZXRBbGxQb3N0cyBmcm9tIFwiLi4vYXBpL2Jsb2ctcG9zdHMvZ2V0QWxsUG9zdHMuanNcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMgKHtyZXEsIHJlc30pIHtcclxuICAgIGNvbnN0IGFwaVJlc3VsdCA9IGF3YWl0IGdldEFsbFBvc3RzKHJlcSlcclxuXHJcbiAgICBpZiAoIWFwaVJlc3VsdC5hdXRoU3VjY2Vzcykge1xyXG4gICAgICByZXMud3JpdGVIZWFkKDMwMiwgeyBMb2NhdGlvbjogXCIvbG9naW5cIiB9KVxyXG4gICAgICByZXMuZW5kKClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBhY3RpdmVQb3N0czogYXBpUmVzdWx0LmFjdGl2ZVBvc3RzID8gYXBpUmVzdWx0LmFjdGl2ZVBvc3RzIDogW10sXHJcbiAgICAgIHVwY29taW5nUG9zdHM6IGFwaVJlc3VsdC51cGNvbWluZ1Bvc3RzID8gYXBpUmVzdWx0LnVwY29taW5nUG9zdHMgOiBbXSxcclxuICAgICAgZ2V0RGF0YUVycm9yOiBhcGlSZXN1bHQgJiYgYXBpUmVzdWx0LmdldERhdGFFcnJvclxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc2hvd0FjdGl2ZVBvc3RzOiB0cnVlLFxyXG4gICAgICBzaG93VXBjb21pbmdQb3N0czogZmFsc2VcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZUFjdGl2ZUJ0bkNsaWNrID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNob3dBY3RpdmVQb3N0czogdHJ1ZSxcclxuICAgICAgc2hvd1VwY29taW5nUG9zdHM6IGZhbHNlXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlVXBjb21pbmdCdG5DbGljayA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzaG93QWN0aXZlUG9zdHM6IGZhbHNlLFxyXG4gICAgICBzaG93VXBjb21pbmdQb3N0czogdHJ1ZVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxheW91dC13cmFwcGVyXCI+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+QmxvZyBQb3N0cyB8IEFkbWluPC90aXRsZT5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgIDxTaWRlYmFyIHBhZ2U9XCJibG9nLXBvc3RzXCIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxheW91dC1jb250ZW50LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLXBvc3RzLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLXBvc3RzLXRvcC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctcG9zdHMtcGFnZS1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+QWxsIEJsb2cgUG9zdHM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLXBvc3RzLWFkZC1uZXctYnRuLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9ibG9nL2NyZWF0ZS1uZXctcG9zdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctcG9zdHMtYWRkLW5ldy1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4rIEFkZCBOZXcgUG9zdDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctcG9zdHMtbGlzdC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAhdGhpcy5wcm9wcy5nZXREYXRhRXJyb3IgP1xyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLXBvc3RzLWxpc3QtdGFiLWJ0bnNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctcG9zdHMtbGlzdC10YWItYnRuLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMuc3RhdGUuc2hvd0FjdGl2ZVBvc3RzID8gXCJibG9nLXBvc3RzLWxpc3QtdGFiLWJ0biBhY3RpdmVcIiA6IFwiYmxvZy1wb3N0cy1saXN0LXRhYi1idG5cIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVBY3RpdmVCdG5DbGljaygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5BY3RpdmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctcG9zdHMtbGlzdC10YWItYnRuLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMuc3RhdGUuc2hvd1VwY29taW5nUG9zdHMgPyBcImJsb2ctcG9zdHMtbGlzdC10YWItYnRuIGFjdGl2ZVwiIDogXCJibG9nLXBvc3RzLWxpc3QtdGFiLWJ0blwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVVwY29taW5nQnRuQ2xpY2soKX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+VXBjb21pbmc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1wb3N0cy1saXN0LWl0ZW1zLXRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLXBvc3RzLWxpc3QtaXRlbXMtdGFibGUtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctcG9zdHMtbGlzdC1pdGVtcy10YWJsZS1oZWFkZXItaXRlbSB0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5UaXRsZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLXBvc3RzLWxpc3QtaXRlbXMtdGFibGUtaGVhZGVyLWl0ZW0gZGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5EYXRlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctcG9zdHMtbGlzdC1pdGVtcy10YWJsZS1oZWFkZXItaXRlbSBlZGl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd0FjdGl2ZVBvc3RzICYmIHRoaXMucHJvcHMuYWN0aXZlUG9zdHMubGVuZ3RoID9cclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWN0aXZlUG9zdHMubWFwKChwb3N0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiYmxvZy1wb3N0cy1saXN0LWl0ZW1zLXRhYmxlLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1wb3N0cy1saXN0LWl0ZW1zLXRhYmxlLWl0ZW0tZGF0YSB0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cG9zdC50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1wb3N0cy1saXN0LWl0ZW1zLXRhYmxlLWl0ZW0tZGF0YSBkYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnttb21lbnQudW5peChwb3N0LmRhdGVUaW1lc3RhbXApLmZvcm1hdCgnTU0vREQvWVlZWScpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLXBvc3RzLWxpc3QtaXRlbXMtdGFibGUtaXRlbS1kYXRhIGVkaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YC9ibG9nL2VkaXQtcG9zdC8ke3Bvc3QuaWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RWRpdDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KSA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93VXBjb21pbmdQb3N0cyAmJiB0aGlzLnByb3BzLnVwY29taW5nUG9zdHMubGVuZ3RoID9cclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudXBjb21pbmdQb3N0cy5tYXAoKHBvc3QsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJibG9nLXBvc3RzLWxpc3QtaXRlbXMtdGFibGUtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLXBvc3RzLWxpc3QtaXRlbXMtdGFibGUtaXRlbS1kYXRhIHRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntwb3N0LnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLXBvc3RzLWxpc3QtaXRlbXMtdGFibGUtaXRlbS1kYXRhIGRhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e21vbWVudC51bml4KHBvc3QuZGF0ZVRpbWVzdGFtcCkuZm9ybWF0KCdNTS9ERC9ZWVlZJyl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctcG9zdHMtbGlzdC1pdGVtcy10YWJsZS1pdGVtLWRhdGEgZWRpdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgL2Jsb2cvZWRpdC1wb3N0LyR7cG9zdC5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5FZGl0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiA+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgIH0pIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Lz4gOlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLXBvc3RzLWxpc3QtZ2V0LWRhdGEtZXJyb3JcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+QW4gZXJyb3Igb2NjdXJyZWQuPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9