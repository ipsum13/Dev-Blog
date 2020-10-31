module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/blog/create-new-post.js");
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

var _jsxFileName = "F:\\Dev-Blog\\admin\\website\\components\\header.js";

/* harmony default export */ __webpack_exports__["default"] = (class extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
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
            lineNumber: 9,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "header-log-out",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "Logout"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
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

/***/ "./pages/blog/create-new-post.js":
/*!***************************************!*\
  !*** ./pages/blog/create-new-post.js ***!
  \***************************************/
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
/* harmony import */ var react_codemirror2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-codemirror2 */ "react-codemirror2");
/* harmony import */ var react_codemirror2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_codemirror2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_header_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/header.js */ "./components/header.js");
/* harmony import */ var _components_sidebar_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/sidebar.js */ "./components/sidebar.js");
/* harmony import */ var _api_admin_user_auth_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../api/admin-user/auth.js */ "./api/admin-user/auth.js");

var _jsxFileName = "F:\\Dev-Blog\\admin\\website\\pages\\blog\\create-new-post.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









if (typeof navigator !== "undefined") {
  __webpack_require__(/*! codemirror/mode/markdown/markdown */ "codemirror/mode/markdown/markdown");
}

/* harmony default export */ __webpack_exports__["default"] = (class extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  static async getInitialProps({
    req,
    res
  }) {
    const authResult = await Object(_api_admin_user_auth_js__WEBPACK_IMPORTED_MODULE_7__["default"])(req);

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

    _defineProperty(this, "updateTitleInputValue", event => {
      this.setState({
        titleInputValue: event.target.value
      });
    });

    _defineProperty(this, "updateUrlTitleInputValue", event => {
      this.setState({
        urlTitleInputValue: event.target.value
      });
    });

    _defineProperty(this, "updateDateInputValue", event => {
      this.setState({
        dateInputValue: event.target.value
      });
    });

    _defineProperty(this, "setDateInputValueToNow", () => {
      const dateString = moment__WEBPACK_IMPORTED_MODULE_3___default()().format("YYYY-MM-DD");
      const timeString = moment__WEBPACK_IMPORTED_MODULE_3___default()().format("HH:mm");
      this.setState({
        dateInputValue: dateString + "T" + timeString
      });
    });

    _defineProperty(this, "updateImageUrlInputValue", event => {
      this.setState({
        imageUrlInputValue: event.target.value
      });
    });

    _defineProperty(this, "updateTagsInputValue", event => {
      this.setState({
        tagsInputValue: event.target.value
      });
    });

    _defineProperty(this, "updateMarkdownInputValue", value => {
      this.setState({
        markdownInputValue: value
      });
    });

    _defineProperty(this, "updateSeoTitleTagInputValue", event => {
      let charLeft;

      if (60 - event.target.value.length > 0) {
        charLeft = 60 - event.target.value.length;
      } else {
        charLeft = 0;
      }

      this.setState({
        seoTitleTagInputValue: event.target.value,
        seoTitleTagCharLeft: charLeft
      });
    });

    _defineProperty(this, "updateMetaDescriptionInputValue", event => {
      let charLeft;

      if (160 - event.target.value.length > 0) {
        charLeft = 160 - event.target.value.length;
      } else {
        charLeft = 0;
      }

      this.setState({
        metaDescriptionInputValue: event.target.value,
        metaDescriptionCharLeft: charLeft
      });
    });

    _defineProperty(this, "submitCreateNewPostRequest", () => {
      this.setState({
        submitError: false,
        errorMsg: "",
        loading: true
      });
    });

    this.state = {
      loading: false,
      submitError: false,
      errorMsg: "",
      titleInputValue: "",
      urlTitleInputValue: "",
      dateInputValue: "",
      tagsInputValue: "",
      imageUrlInputValue: "",
      markdownInputValue: "",
      seoTitleTagInputValue: "",
      seoTitleTagCharLeft: 60,
      metaDescriptionInputValue: "",
      metaDescriptionCharLeft: 160
    };
    this.codemirror = null;
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "layout-wrapper",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "Create New Post | Admin"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_header_js__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_sidebar_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        page: "blog-posts"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "layout-content-container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "create-blog-post-content",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "create-blog-post-header",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Create New Blog Post"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "create-blog-post-form-container",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "create-blog-post-form-section",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "create-blog-post-form-section-label",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: "Title"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 125,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "create-blog-post-form-section-input",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  type: "text",
                  value: this.state.titleInputValue,
                  onChange: this.updateTitleInputValue
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 128,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "create-blog-post-form-section",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "create-blog-post-form-section-label",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: "Url Title"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 137,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "create-blog-post-form-section-input",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  type: "text",
                  value: this.state.urlTitleInputValue,
                  onChange: this.updateUrlTitleInputValue
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 140,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "create-blog-post-form-section",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "create-blog-post-form-section-label",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: "Date"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 149,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "create-blog-post-form-section-date-input",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  type: "datetime-local",
                  value: this.state.dateInputValue,
                  onChange: this.updateDateInputValue
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 152,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  onClick: () => this.setDateInputValueToNow(),
                  className: "create-blog-post-form-section-date-input-now",
                  children: "Now"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 157,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "create-blog-post-form-section",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "create-blog-post-form-section-label",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: "Image URL"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 167,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 166,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "create-blog-post-form-section-input",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  type: "text",
                  value: this.state.imageUrlInputValue,
                  onChange: this.updateImageUrlInputValue
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 170,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 169,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "create-blog-post-form-section",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "create-blog-post-form-section-label",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: "Tags"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 179,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 178,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "create-blog-post-form-section-input",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  type: "text",
                  value: this.state.tagsInputValue,
                  onChange: this.updateTagsInputValue
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 182,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 181,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "create-blog-post-form-section",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "create-blog-post-form-section-label",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: "Markdown Content"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 191,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 190,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "create-blog-post-form-section-code-content-input",
                children: react_codemirror2__WEBPACK_IMPORTED_MODULE_4__["Controlled"] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_codemirror2__WEBPACK_IMPORTED_MODULE_4__["Controlled"], {
                  className: "create-blog-post-form-section-codemirror",
                  editorDidMount: editor => {
                    this.codemirror = editor;
                  },
                  value: this.state.markdownInputValue,
                  onBeforeChange: (editor, data, value) => {
                    this.updateMarkdownInputValue(value);
                  },
                  onChange: (editor, data, value) => {
                    this.updateMarkdownInputValue(value);
                  },
                  options: {
                    mode: "markdown",
                    theme: "dracula",
                    lineNumbers: true
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 195,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 193,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "create-blog-post-seo-section-title",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: "SEO"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 217,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 216,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "create-blog-post-form-section",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "create-blog-post-form-section-label",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: "Title Tag"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 221,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 220,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "create-blog-post-form-section-input",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  type: "text",
                  value: this.state.seoTitleTagInputValue,
                  onChange: this.updateSeoTitleTagInputValue
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 224,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: this.state.seoTitleTagCharLeft > 0 ? "char-length green" : "char-length red",
                  children: this.state.seoTitleTagCharLeft
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 229,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 223,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 219,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "create-blog-post-form-section",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "create-blog-post-form-section-label",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: "Meta Description"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 242,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 241,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "create-blog-post-form-section-input",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
                  type: "text",
                  value: this.state.metaDescriptionInputValue,
                  onChange: this.updateMetaDescriptionInputValue
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 245,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: this.state.metaDescriptionCharLeft > 0 ? "char-length green" : "char-length red",
                  children: this.state.metaDescriptionCharLeft
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 250,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 244,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 240,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "create-blog-post-form-btn-container",
              children: !this.state.loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                onClick: this.submitCreateNewPostRequest,
                className: "create-blog-post-form-btn",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: "Submit"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 267,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 263,
                columnNumber: 19
              }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "create-blog-post-form-btn loading",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: "Loading"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 271,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 270,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 261,
              columnNumber: 15
            }, this), this.state.submitError ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "create-blog-post-submit-error-msg",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: this.state.errorMsg
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 277,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 276,
              columnNumber: 17
            }, this) : null]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 111,
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

/***/ "codemirror/mode/markdown/markdown":
/*!****************************************************!*\
  !*** external "codemirror/mode/markdown/markdown" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/markdown/markdown");

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

/***/ "react-codemirror2":
/*!************************************!*\
  !*** external "react-codemirror2" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-codemirror2");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBpL2FkbWluLXVzZXIvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYmxvZy9jcmVhdGUtbmV3LXBvc3QuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb2RlbWlycm9yL21vZGUvbWFya2Rvd24vbWFya2Rvd25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWNvZGVtaXJyb3IyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsicmVxIiwiY29va2llIiwiaGVhZGVycyIsInJlc3BvbnNlIiwiYXhpb3MiLCJnZXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJkYXRhIiwiZXJyb3IiLCJzdWNjZXNzIiwiQ29tcG9uZW50IiwicmVuZGVyIiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInBhZ2UiLCJuYXZpZ2F0b3IiLCJyZXF1aXJlIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzIiwiYXV0aFJlc3VsdCIsImF1dGhVc2VyIiwid3JpdGVIZWFkIiwiTG9jYXRpb24iLCJlbmQiLCJldmVudCIsInNldFN0YXRlIiwidGl0bGVJbnB1dFZhbHVlIiwidGFyZ2V0IiwidmFsdWUiLCJ1cmxUaXRsZUlucHV0VmFsdWUiLCJkYXRlSW5wdXRWYWx1ZSIsImRhdGVTdHJpbmciLCJtb21lbnQiLCJmb3JtYXQiLCJ0aW1lU3RyaW5nIiwiaW1hZ2VVcmxJbnB1dFZhbHVlIiwidGFnc0lucHV0VmFsdWUiLCJtYXJrZG93bklucHV0VmFsdWUiLCJjaGFyTGVmdCIsImxlbmd0aCIsInNlb1RpdGxlVGFnSW5wdXRWYWx1ZSIsInNlb1RpdGxlVGFnQ2hhckxlZnQiLCJtZXRhRGVzY3JpcHRpb25JbnB1dFZhbHVlIiwibWV0YURlc2NyaXB0aW9uQ2hhckxlZnQiLCJzdWJtaXRFcnJvciIsImVycm9yTXNnIiwibG9hZGluZyIsInN0YXRlIiwiY29kZW1pcnJvciIsInVwZGF0ZVRpdGxlSW5wdXRWYWx1ZSIsInVwZGF0ZVVybFRpdGxlSW5wdXRWYWx1ZSIsInVwZGF0ZURhdGVJbnB1dFZhbHVlIiwic2V0RGF0ZUlucHV0VmFsdWVUb05vdyIsInVwZGF0ZUltYWdlVXJsSW5wdXRWYWx1ZSIsInVwZGF0ZVRhZ3NJbnB1dFZhbHVlIiwiQ29kZU1pcnJvciIsImVkaXRvciIsInVwZGF0ZU1hcmtkb3duSW5wdXRWYWx1ZSIsIm1vZGUiLCJ0aGVtZSIsImxpbmVOdW1iZXJzIiwidXBkYXRlU2VvVGl0bGVUYWdJbnB1dFZhbHVlIiwidXBkYXRlTWV0YURlc2NyaXB0aW9uSW5wdXRWYWx1ZSIsInN1Ym1pdENyZWF0ZU5ld1Bvc3RSZXF1ZXN0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMs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LEtBQUwsQ0FBV0gsV0FBWCxnQkFDQztBQUFLLHVCQUFTLEVBQUMsbUNBQWY7QUFBQSxxQ0FDRTtBQUFBLDBCQUFPLEtBQUtHLEtBQUwsQ0FBV0Y7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREQsR0FJRyxJQTdKTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBK0tEOztBQTlRb0MsQzs7Ozs7Ozs7Ozs7QUNkdkMsa0M7Ozs7Ozs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvYmxvZy9jcmVhdGUtbmV3LXBvc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2Jsb2cvY3JlYXRlLW5ldy1wb3N0LmpzXCIpO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcblxyXG4vL2ltcG9ydCBhcGlCYXNlVXJsIGZyb20gXCIuLi8uLi91dGlscy9hcGlCYXNlVXJsLmpzXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uKHJlcSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjb29raWUgPSByZXEuaGVhZGVycy5jb29raWUgPyByZXEuaGVhZGVycy5jb29raWUgOiBcIlwiXHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvZGV2LWJsb2ctOWE5NjkvdXMtY2VudHJhbDEvYWRtaW4vdXNlcnMvYXV0aGVudGljYXRlXCIsIHtcclxuICAgICAgaGVhZGVyczogcmVxID8ge2Nvb2tpZTogY29va2llfSA6IFwiXCIsXHJcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YVxyXG4gIH0gY2F0Y2goZXJyb3IpIHtcclxuICAgIHJldHVybiB7c3VjY2VzczogZmFsc2V9XHJcbiAgfVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXdyYXBwZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1sb2dvXCI+XHJcbiAgICAgICAgICA8YSBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8c3Bhbj5BZG1pbiBEYXNoYm9hcmQ8L3NwYW4+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbG9nLW91dFwiPlxyXG4gICAgICAgICAgPHNwYW4+TG9nb3V0PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItd3JhcHBlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1saXN0XCI+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5wYWdlID09PSBcImJsb2ctcG9zdHNcIiA/IFwiYWN0aXZlXCIgOiBudWxsfSBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxzcGFuPkJsb2cgUG9zdHM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e3RoaXMucHJvcHMucGFnZSA9PT0gXCJpbWFnZXNcIiA/IFwiYWN0aXZlXCIgOiBudWxsfSBocmVmPVwiL2ltYWdlc1wiPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxzcGFuPkltYWdlczwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5wYWdlID09PSBcInNpdGVtYXBcIiA/IFwiYWN0aXZlXCIgOiBudWxsfSBocmVmPVwiL3NpdGVtYXBcIj5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5TaXRlbWFwPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXt0aGlzLnByb3BzLnBhZ2UgPT09IFwicGFzc3dvcmRcIiA/IFwiYWN0aXZlXCIgOiBudWxsfSBocmVmPVwiL2NoYW5nZS1wYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxzcGFuPkNoYW5nZSBQYXNzd29yZDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCB7IENvbnRyb2xsZWQgYXMgQ29kZU1pcnJvciB9IGZyb20gXCJyZWFjdC1jb2RlbWlycm9yMlwiO1xyXG5cclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9oZWFkZXIuanNcIjtcclxuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2lkZWJhci5qc1wiO1xyXG5cclxuaW1wb3J0IGF1dGhVc2VyIGZyb20gXCIuLi8uLi9hcGkvYWRtaW4tdXNlci9hdXRoLmpzXCI7XHJcblxyXG5pZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gIHJlcXVpcmUoXCJjb2RlbWlycm9yL21vZGUvbWFya2Rvd24vbWFya2Rvd25cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcmVxLCByZXMgfSkge1xyXG4gICAgY29uc3QgYXV0aFJlc3VsdCA9IGF3YWl0IGF1dGhVc2VyKHJlcSk7XHJcblxyXG4gICAgaWYgKCFhdXRoUmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgcmVzLndyaXRlSGVhZCgzMDIsIHsgTG9jYXRpb246IFwiL2xvZ2luXCIgfSk7XHJcbiAgICAgIHJlcy5lbmQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge307XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgc3VibWl0RXJyb3I6IGZhbHNlLFxyXG4gICAgICBlcnJvck1zZzogXCJcIixcclxuICAgICAgdGl0bGVJbnB1dFZhbHVlOiBcIlwiLFxyXG4gICAgICB1cmxUaXRsZUlucHV0VmFsdWU6IFwiXCIsXHJcbiAgICAgIGRhdGVJbnB1dFZhbHVlOiBcIlwiLFxyXG4gICAgICB0YWdzSW5wdXRWYWx1ZTogXCJcIixcclxuICAgICAgaW1hZ2VVcmxJbnB1dFZhbHVlOiBcIlwiLFxyXG4gICAgICBtYXJrZG93bklucHV0VmFsdWU6IFwiXCIsXHJcbiAgICAgIHNlb1RpdGxlVGFnSW5wdXRWYWx1ZTogXCJcIixcclxuICAgICAgc2VvVGl0bGVUYWdDaGFyTGVmdDogNjAsXHJcbiAgICAgIG1ldGFEZXNjcmlwdGlvbklucHV0VmFsdWU6IFwiXCIsXHJcbiAgICAgIG1ldGFEZXNjcmlwdGlvbkNoYXJMZWZ0OiAxNjAsXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuY29kZW1pcnJvciA9IG51bGw7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVUaXRsZUlucHV0VmFsdWUgPSAoZXZlbnQpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyB0aXRsZUlucHV0VmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICB9O1xyXG5cclxuICB1cGRhdGVVcmxUaXRsZUlucHV0VmFsdWUgPSAoZXZlbnQpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyB1cmxUaXRsZUlucHV0VmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICB9O1xyXG5cclxuICB1cGRhdGVEYXRlSW5wdXRWYWx1ZSA9IChldmVudCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGVJbnB1dFZhbHVlOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgfTtcclxuXHJcbiAgc2V0RGF0ZUlucHV0VmFsdWVUb05vdyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRhdGVTdHJpbmcgPSBtb21lbnQoKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xyXG4gICAgY29uc3QgdGltZVN0cmluZyA9IG1vbWVudCgpLmZvcm1hdChcIkhIOm1tXCIpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGVJbnB1dFZhbHVlOiBkYXRlU3RyaW5nICsgXCJUXCIgKyB0aW1lU3RyaW5nIH0pO1xyXG4gIH07XHJcblxyXG4gIHVwZGF0ZUltYWdlVXJsSW5wdXRWYWx1ZSA9IChldmVudCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGltYWdlVXJsSW5wdXRWYWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH07XHJcblxyXG4gIHVwZGF0ZVRhZ3NJbnB1dFZhbHVlID0gKGV2ZW50KSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdGFnc0lucHV0VmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICB9O1xyXG5cclxuICB1cGRhdGVNYXJrZG93bklucHV0VmFsdWUgPSAodmFsdWUpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBtYXJrZG93bklucHV0VmFsdWU6IHZhbHVlIH0pO1xyXG4gIH07XHJcblxyXG4gIHVwZGF0ZVNlb1RpdGxlVGFnSW5wdXRWYWx1ZSA9IChldmVudCkgPT4ge1xyXG4gICAgbGV0IGNoYXJMZWZ0O1xyXG4gICAgaWYgKDYwIC0gZXZlbnQudGFyZ2V0LnZhbHVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgY2hhckxlZnQgPSA2MCAtIGV2ZW50LnRhcmdldC52YWx1ZS5sZW5ndGg7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjaGFyTGVmdCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNlb1RpdGxlVGFnSW5wdXRWYWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG4gICAgICBzZW9UaXRsZVRhZ0NoYXJMZWZ0OiBjaGFyTGVmdCxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHVwZGF0ZU1ldGFEZXNjcmlwdGlvbklucHV0VmFsdWUgPSAoZXZlbnQpID0+IHtcclxuICAgIGxldCBjaGFyTGVmdDtcclxuICAgIGlmICgxNjAgLSBldmVudC50YXJnZXQudmFsdWUubGVuZ3RoID4gMCkge1xyXG4gICAgICBjaGFyTGVmdCA9IDE2MCAtIGV2ZW50LnRhcmdldC52YWx1ZS5sZW5ndGg7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjaGFyTGVmdCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIG1ldGFEZXNjcmlwdGlvbklucHV0VmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgICAgbWV0YURlc2NyaXB0aW9uQ2hhckxlZnQ6IGNoYXJMZWZ0LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3VibWl0Q3JlYXRlTmV3UG9zdFJlcXVlc3QgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc3VibWl0RXJyb3I6IGZhbHNlLCBlcnJvck1zZzogXCJcIiwgbG9hZGluZzogdHJ1ZSB9KTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxheW91dC13cmFwcGVyXCI+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+Q3JlYXRlIE5ldyBQb3N0IHwgQWRtaW48L3RpdGxlPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgPFNpZGViYXIgcGFnZT1cImJsb2ctcG9zdHNcIiAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0LWNvbnRlbnQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyZWF0ZS1ibG9nLXBvc3QtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyZWF0ZS1ibG9nLXBvc3QtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+Q3JlYXRlIE5ldyBCbG9nIFBvc3Q8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyZWF0ZS1ibG9nLXBvc3QtZm9ybS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyZWF0ZS1ibG9nLXBvc3QtZm9ybS1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyZWF0ZS1ibG9nLXBvc3QtZm9ybS1zZWN0aW9uLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPlRpdGxlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyZWF0ZS1ibG9nLXBvc3QtZm9ybS1zZWN0aW9uLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50aXRsZUlucHV0VmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudXBkYXRlVGl0bGVJbnB1dFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcmVhdGUtYmxvZy1wb3N0LWZvcm0tc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcmVhdGUtYmxvZy1wb3N0LWZvcm0tc2VjdGlvbi1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5VcmwgVGl0bGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3JlYXRlLWJsb2ctcG9zdC1mb3JtLXNlY3Rpb24taW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnVybFRpdGxlSW5wdXRWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy51cGRhdGVVcmxUaXRsZUlucHV0VmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyZWF0ZS1ibG9nLXBvc3QtZm9ybS1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyZWF0ZS1ibG9nLXBvc3QtZm9ybS1zZWN0aW9uLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPkRhdGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3JlYXRlLWJsb2ctcG9zdC1mb3JtLXNlY3Rpb24tZGF0ZS1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGVJbnB1dFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZURhdGVJbnB1dFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0RGF0ZUlucHV0VmFsdWVUb05vdygpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNyZWF0ZS1ibG9nLXBvc3QtZm9ybS1zZWN0aW9uLWRhdGUtaW5wdXQtbm93XCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIE5vd1xyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyZWF0ZS1ibG9nLXBvc3QtZm9ybS1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyZWF0ZS1ibG9nLXBvc3QtZm9ybS1zZWN0aW9uLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPkltYWdlIFVSTDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcmVhdGUtYmxvZy1wb3N0LWZvcm0tc2VjdGlvbi1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuaW1hZ2VVcmxJbnB1dFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZUltYWdlVXJsSW5wdXRWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3JlYXRlLWJsb2ctcG9zdC1mb3JtLXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3JlYXRlLWJsb2ctcG9zdC1mb3JtLXNlY3Rpb24tbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+VGFnczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcmVhdGUtYmxvZy1wb3N0LWZvcm0tc2VjdGlvbi1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudGFnc0lucHV0VmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudXBkYXRlVGFnc0lucHV0VmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyZWF0ZS1ibG9nLXBvc3QtZm9ybS1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyZWF0ZS1ibG9nLXBvc3QtZm9ybS1zZWN0aW9uLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPk1hcmtkb3duIENvbnRlbnQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3JlYXRlLWJsb2ctcG9zdC1mb3JtLXNlY3Rpb24tY29kZS1jb250ZW50LWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgIHtDb2RlTWlycm9yICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8Q29kZU1pcnJvclxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3JlYXRlLWJsb2ctcG9zdC1mb3JtLXNlY3Rpb24tY29kZW1pcnJvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBlZGl0b3JEaWRNb3VudD17KGVkaXRvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvZGVtaXJyb3IgPSBlZGl0b3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubWFya2Rvd25JbnB1dFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25CZWZvcmVDaGFuZ2U9eyhlZGl0b3IsIGRhdGEsIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTWFya2Rvd25JbnB1dFZhbHVlKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGVkaXRvciwgZGF0YSwgdmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVNYXJrZG93bklucHV0VmFsdWUodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZTogXCJtYXJrZG93blwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGVtZTogXCJkcmFjdWxhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXJzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcmVhdGUtYmxvZy1wb3N0LXNlby1zZWN0aW9uLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5TRU88L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcmVhdGUtYmxvZy1wb3N0LWZvcm0tc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcmVhdGUtYmxvZy1wb3N0LWZvcm0tc2VjdGlvbi1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5UaXRsZSBUYWc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3JlYXRlLWJsb2ctcG9zdC1mb3JtLXNlY3Rpb24taW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlb1RpdGxlVGFnSW5wdXRWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy51cGRhdGVTZW9UaXRsZVRhZ0lucHV0VmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VvVGl0bGVUYWdDaGFyTGVmdCA+IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcImNoYXItbGVuZ3RoIGdyZWVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcImNoYXItbGVuZ3RoIHJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2VvVGl0bGVUYWdDaGFyTGVmdH1cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcmVhdGUtYmxvZy1wb3N0LWZvcm0tc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcmVhdGUtYmxvZy1wb3N0LWZvcm0tc2VjdGlvbi1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5NZXRhIERlc2NyaXB0aW9uPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyZWF0ZS1ibG9nLXBvc3QtZm9ybS1zZWN0aW9uLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5tZXRhRGVzY3JpcHRpb25JbnB1dFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZU1ldGFEZXNjcmlwdGlvbklucHV0VmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubWV0YURlc2NyaXB0aW9uQ2hhckxlZnQgPiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJjaGFyLWxlbmd0aCBncmVlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJjaGFyLWxlbmd0aCByZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLm1ldGFEZXNjcmlwdGlvbkNoYXJMZWZ0fVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyZWF0ZS1ibG9nLXBvc3QtZm9ybS1idG4tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICB7IXRoaXMuc3RhdGUubG9hZGluZyA/IChcclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc3VibWl0Q3JlYXRlTmV3UG9zdFJlcXVlc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3JlYXRlLWJsb2ctcG9zdC1mb3JtLWJ0blwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TdWJtaXQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcmVhdGUtYmxvZy1wb3N0LWZvcm0tYnRuIGxvYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Mb2FkaW5nPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc3VibWl0RXJyb3IgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyZWF0ZS1ibG9nLXBvc3Qtc3VibWl0LWVycm9yLW1zZ1wiPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj57dGhpcy5zdGF0ZS5lcnJvck1zZ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb2RlbWlycm9yL21vZGUvbWFya2Rvd24vbWFya2Rvd25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jb2RlbWlycm9yMlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==