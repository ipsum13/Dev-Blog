webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_layout_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/layout.css */ "./styles/layout.css");
/* harmony import */ var _styles_layout_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_components_header_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/header.css */ "./styles/components/header.css");
/* harmony import */ var _styles_components_header_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_header_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_components_sidebar_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/components/sidebar.css */ "./styles/components/sidebar.css");
/* harmony import */ var _styles_components_sidebar_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_components_sidebar_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_login_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/login.css */ "./styles/login.css");
/* harmony import */ var _styles_login_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_login_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_blog_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/blog/index.css */ "./styles/blog/index.css");
/* harmony import */ var _styles_blog_index_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_blog_index_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_blog_create_new_post_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/blog/create-new-post.css */ "./styles/blog/create-new-post.css");
/* harmony import */ var _styles_blog_create_new_post_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_blog_create_new_post_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_blog_edit_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/blog/edit.css */ "./styles/blog/edit.css");
/* harmony import */ var _styles_blog_edit_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_blog_edit_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_images_index_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/images/index.css */ "./styles/images/index.css");
/* harmony import */ var _styles_images_index_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_images_index_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_images_upload_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/images/upload.css */ "./styles/images/upload.css");
/* harmony import */ var _styles_images_upload_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_images_upload_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styles_images_edit_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/images/edit.css */ "./styles/images/edit.css");
/* harmony import */ var _styles_images_edit_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_images_edit_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _styles_sitemap_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/sitemap.css */ "./styles/sitemap.css");
/* harmony import */ var _styles_sitemap_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_sitemap_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _styles_change_password_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/change-password.css */ "./styles/change-password.css");
/* harmony import */ var _styles_change_password_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_change_password_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _styles_components_modals_delete_blog_post_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../styles/components/modals/delete-blog-post.css */ "./styles/components/modals/delete-blog-post.css");
/* harmony import */ var _styles_components_modals_delete_blog_post_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_components_modals_delete_blog_post_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _styles_components_modals_delete_image_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../styles/components/modals/delete-image.css */ "./styles/components/modals/delete-image.css");
/* harmony import */ var _styles_components_modals_delete_image_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_styles_components_modals_delete_image_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! codemirror/lib/codemirror.css */ "./node_modules/codemirror/lib/codemirror.css");
/* harmony import */ var codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var codemirror_theme_dracula_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! codemirror/theme/dracula.css */ "./node_modules/codemirror/theme/dracula.css");
/* harmony import */ var codemirror_theme_dracula_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(codemirror_theme_dracula_css__WEBPACK_IMPORTED_MODULE_17__);


var _jsxFileName = "F:\\Dev-Blog\\admin\\website\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// layout


 // pages









 // modals


 // codemirror



function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c = MyApp;

var _c;

$RefreshReg$(_c, "MyApp");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQTtDQUlBOztBQUNBO0FBQ0E7QUFFZSxTQUFTQSxLQUFULE9BQXlDO0FBQUEsTUFBeEJDLFNBQXdCLFFBQXhCQSxTQUF3QjtBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTtBQUN0RCxzQkFBTyxxRUFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEO0tBRnVCRixLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMjkxNWYwNjI1ZWYxOWE2MWY4NDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGxheW91dFxyXG5pbXBvcnQgXCIuLi9zdHlsZXMvbGF5b3V0LmNzc1wiXHJcbmltcG9ydCBcIi4uL3N0eWxlcy9jb21wb25lbnRzL2hlYWRlci5jc3NcIlxyXG5pbXBvcnQgXCIuLi9zdHlsZXMvY29tcG9uZW50cy9zaWRlYmFyLmNzc1wiXHJcblxyXG4vLyBwYWdlc1xyXG5pbXBvcnQgXCIuLi9zdHlsZXMvbG9naW4uY3NzXCJcclxuaW1wb3J0IFwiLi4vc3R5bGVzL2Jsb2cvaW5kZXguY3NzXCJcclxuaW1wb3J0IFwiLi4vc3R5bGVzL2Jsb2cvY3JlYXRlLW5ldy1wb3N0LmNzc1wiXHJcbmltcG9ydCBcIi4uL3N0eWxlcy9ibG9nL2VkaXQuY3NzXCJcclxuaW1wb3J0IFwiLi4vc3R5bGVzL2ltYWdlcy9pbmRleC5jc3NcIlxyXG5pbXBvcnQgXCIuLi9zdHlsZXMvaW1hZ2VzL3VwbG9hZC5jc3NcIlxyXG5pbXBvcnQgXCIuLi9zdHlsZXMvaW1hZ2VzL2VkaXQuY3NzXCJcclxuaW1wb3J0IFwiLi4vc3R5bGVzL3NpdGVtYXAuY3NzXCJcclxuaW1wb3J0IFwiLi4vc3R5bGVzL2NoYW5nZS1wYXNzd29yZC5jc3NcIlxyXG5cclxuLy8gbW9kYWxzXHJcbmltcG9ydCBcIi4uL3N0eWxlcy9jb21wb25lbnRzL21vZGFscy9kZWxldGUtYmxvZy1wb3N0LmNzc1wiXHJcbmltcG9ydCBcIi4uL3N0eWxlcy9jb21wb25lbnRzL21vZGFscy9kZWxldGUtaW1hZ2UuY3NzXCJcclxuXHJcblxyXG4vLyBjb2RlbWlycm9yXHJcbmltcG9ydCBcImNvZGVtaXJyb3IvbGliL2NvZGVtaXJyb3IuY3NzXCJcclxuaW1wb3J0IFwiY29kZW1pcnJvci90aGVtZS9kcmFjdWxhLmNzc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==