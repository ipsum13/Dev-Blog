webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/codemirror/lib/codemirror.css":
/*!****************************************************!*\
  !*** ./node_modules/codemirror/lib/codemirror.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-5-2!./codemirror.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/codemirror/lib/codemirror.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-5-2!./codemirror.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/codemirror/lib/codemirror.css",
      function () {
        content = __webpack_require__(/*! !../../css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-5-2!./codemirror.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/codemirror/lib/codemirror.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/codemirror/theme/dracula.css":
/*!***************************************************!*\
  !*** ./node_modules/codemirror/theme/dracula.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-5-2!./dracula.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/codemirror/theme/dracula.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-5-2!./dracula.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/codemirror/theme/dracula.css",
      function () {
        content = __webpack_require__(/*! !../../css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-5-2!./dracula.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/codemirror/theme/dracula.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/codemirror/lib/codemirror.css":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-5-2!./node_modules/codemirror/lib/codemirror.css ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* BASICS */\n\n.CodeMirror {\n  /* Set height, width, borders, and global font properties here */\n  font-family: monospace;\n  height: 300px;\n  color: black;\n  direction: ltr;\n}\n\n/* PADDING */\n\n.CodeMirror-lines {\n  padding: 4px 0; /* Vertical padding around content */\n}\n.CodeMirror pre.CodeMirror-line,\n.CodeMirror pre.CodeMirror-line-like {\n  padding: 0 4px; /* Horizontal padding of content */\n}\n\n.CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  background-color: white; /* The little square between H and V scrollbars */\n}\n\n/* GUTTER */\n\n.CodeMirror-gutters {\n  border-right: 1px solid #ddd;\n  background-color: #f7f7f7;\n  white-space: nowrap;\n}\n.CodeMirror-linenumbers {}\n.CodeMirror-linenumber {\n  padding: 0 3px 0 5px;\n  min-width: 20px;\n  text-align: right;\n  color: #999;\n  white-space: nowrap;\n}\n\n.CodeMirror-guttermarker { color: black; }\n.CodeMirror-guttermarker-subtle { color: #999; }\n\n/* CURSOR */\n\n.CodeMirror-cursor {\n  border-left: 1px solid black;\n  border-right: none;\n  width: 0;\n}\n/* Shown when moving in bi-directional text */\n.CodeMirror div.CodeMirror-secondarycursor {\n  border-left: 1px solid silver;\n}\n.cm-fat-cursor .CodeMirror-cursor {\n  width: auto;\n  border: 0 !important;\n  background: #7e7;\n}\n.cm-fat-cursor div.CodeMirror-cursors {\n  z-index: 1;\n}\n.cm-fat-cursor-mark {\n  background-color: rgba(20, 255, 20, 0.5);\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n}\n.cm-animate-fat-cursor {\n  width: auto;\n  border: 0;\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n  background-color: #7e7;\n}\n@-webkit-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n\n/* Can style cursor different in overwrite (non-insert) mode */\n.CodeMirror-overwrite .CodeMirror-cursor {}\n\n.cm-tab { display: inline-block; text-decoration: inherit; }\n\n.CodeMirror-rulers {\n  position: absolute;\n  left: 0; right: 0; top: -50px; bottom: 0;\n  overflow: hidden;\n}\n.CodeMirror-ruler {\n  border-left: 1px solid #ccc;\n  top: 0; bottom: 0;\n  position: absolute;\n}\n\n/* DEFAULT THEME */\n\n.cm-s-default .cm-header {color: blue;}\n.cm-s-default .cm-quote {color: #090;}\n.cm-negative {color: #d44;}\n.cm-positive {color: #292;}\n.cm-header, .cm-strong {font-weight: bold;}\n.cm-em {font-style: italic;}\n.cm-link {text-decoration: underline;}\n.cm-strikethrough {text-decoration: line-through;}\n\n.cm-s-default .cm-keyword {color: #708;}\n.cm-s-default .cm-atom {color: #219;}\n.cm-s-default .cm-number {color: #164;}\n.cm-s-default .cm-def {color: #00f;}\n.cm-s-default .cm-variable,\n.cm-s-default .cm-punctuation,\n.cm-s-default .cm-property,\n.cm-s-default .cm-operator {}\n.cm-s-default .cm-variable-2 {color: #05a;}\n.cm-s-default .cm-variable-3, .cm-s-default .cm-type {color: #085;}\n.cm-s-default .cm-comment {color: #a50;}\n.cm-s-default .cm-string {color: #a11;}\n.cm-s-default .cm-string-2 {color: #f50;}\n.cm-s-default .cm-meta {color: #555;}\n.cm-s-default .cm-qualifier {color: #555;}\n.cm-s-default .cm-builtin {color: #30a;}\n.cm-s-default .cm-bracket {color: #997;}\n.cm-s-default .cm-tag {color: #170;}\n.cm-s-default .cm-attribute {color: #00c;}\n.cm-s-default .cm-hr {color: #999;}\n.cm-s-default .cm-link {color: #00c;}\n\n.cm-s-default .cm-error {color: #f00;}\n.cm-invalidchar {color: #f00;}\n\n.CodeMirror-composing { border-bottom: 2px solid; }\n\n/* Default styles for common addons */\n\ndiv.CodeMirror span.CodeMirror-matchingbracket {color: #0b0;}\ndiv.CodeMirror span.CodeMirror-nonmatchingbracket {color: #a22;}\n.CodeMirror-matchingtag { background: rgba(255, 150, 0, .3); }\n.CodeMirror-activeline-background {background: #e8f2ff;}\n\n/* STOP */\n\n/* The rest of this file contains styles related to the mechanics of\n   the editor. You probably shouldn't touch them. */\n\n.CodeMirror {\n  position: relative;\n  overflow: hidden;\n  background: white;\n}\n\n.CodeMirror-scroll {\n  overflow: scroll !important; /* Things will break if this is overridden */\n  /* 50px is the magic margin used to hide the element's real scrollbars */\n  /* See overflow: hidden in .CodeMirror */\n  margin-bottom: -50px; margin-right: -50px;\n  padding-bottom: 50px;\n  height: 100%;\n  outline: none; /* Prevent dragging from highlighting the element */\n  position: relative;\n}\n.CodeMirror-sizer {\n  position: relative;\n  border-right: 50px solid transparent;\n}\n\n/* The fake, visible scrollbars. Used to force redraw during scrolling\n   before actual scrolling happens, thus preventing shaking and\n   flickering artifacts. */\n.CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  position: absolute;\n  z-index: 6;\n  display: none;\n  outline: none;\n}\n.CodeMirror-vscrollbar {\n  right: 0; top: 0;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.CodeMirror-hscrollbar {\n  bottom: 0; left: 0;\n  overflow-y: hidden;\n  overflow-x: scroll;\n}\n.CodeMirror-scrollbar-filler {\n  right: 0; bottom: 0;\n}\n.CodeMirror-gutter-filler {\n  left: 0; bottom: 0;\n}\n\n.CodeMirror-gutters {\n  position: absolute; left: 0; top: 0;\n  min-height: 100%;\n  z-index: 3;\n}\n.CodeMirror-gutter {\n  white-space: normal;\n  height: 100%;\n  display: inline-block;\n  vertical-align: top;\n  margin-bottom: -50px;\n}\n.CodeMirror-gutter-wrapper {\n  position: absolute;\n  z-index: 4;\n  background: none !important;\n  border: none !important;\n}\n.CodeMirror-gutter-background {\n  position: absolute;\n  top: 0; bottom: 0;\n  z-index: 4;\n}\n.CodeMirror-gutter-elt {\n  position: absolute;\n  cursor: default;\n  z-index: 4;\n}\n.CodeMirror-gutter-wrapper ::selection { background-color: transparent }\n.CodeMirror-gutter-wrapper ::-moz-selection { background-color: transparent }\n\n.CodeMirror-lines {\n  cursor: text;\n  min-height: 1px; /* prevents collapsing before first draw */\n}\n.CodeMirror pre.CodeMirror-line,\n.CodeMirror pre.CodeMirror-line-like {\n  /* Reset some styles that the rest of the page might have set */ border-radius: 0;\n  border-width: 0;\n  background: transparent;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  white-space: pre;\n  word-wrap: normal;\n  line-height: inherit;\n  color: inherit;\n  z-index: 2;\n  position: relative;\n  overflow: visible;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-font-variant-ligatures: contextual;\n  -webkit-font-feature-settings: \"calt\";\n          font-feature-settings: \"calt\";\n  font-variant-ligatures: contextual;\n}\n.CodeMirror-wrap pre.CodeMirror-line,\n.CodeMirror-wrap pre.CodeMirror-line-like {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  word-break: normal;\n}\n\n.CodeMirror-linebackground {\n  position: absolute;\n  left: 0; right: 0; top: 0; bottom: 0;\n  z-index: 0;\n}\n\n.CodeMirror-linewidget {\n  position: relative;\n  z-index: 2;\n  padding: 0.1px; /* Force widget margins to stay inside of the container */\n}\n\n.CodeMirror-widget {}\n\n.CodeMirror-rtl pre { direction: rtl; }\n\n.CodeMirror-code {\n  outline: none;\n}\n\n/* Force content-box sizing for the elements where we expect it */\n.CodeMirror-scroll,\n.CodeMirror-sizer,\n.CodeMirror-gutter,\n.CodeMirror-gutters,\n.CodeMirror-linenumber {\n  box-sizing: content-box;\n}\n\n.CodeMirror-measure {\n  position: absolute;\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  visibility: hidden;\n}\n\n.CodeMirror-cursor {\n  position: absolute;\n  pointer-events: none;\n}\n.CodeMirror-measure pre { position: static; }\n\ndiv.CodeMirror-cursors {\n  visibility: hidden;\n  position: relative;\n  z-index: 3;\n}\ndiv.CodeMirror-dragcursors {\n  visibility: visible;\n}\n\n.CodeMirror-focused div.CodeMirror-cursors {\n  visibility: visible;\n}\n\n.CodeMirror-selected { background: #d9d9d9; }\n.CodeMirror-focused .CodeMirror-selected { background: #d7d4f0; }\n.CodeMirror-crosshair { cursor: crosshair; }\n.CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection { background: #d7d4f0; }\n.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }\n\n.cm-searching {\n  background-color: #ffa;\n  background-color: rgba(255, 255, 0, .4);\n}\n\n/* Used to force a border model for a node */\n.cm-force-border { padding-right: .1px; }\n\n@media print {\n  /* Hide the cursor when printing */\n  .CodeMirror div.CodeMirror-cursors {\n    visibility: hidden;\n  }\n}\n\n/* See issue #2901 */\n.cm-tab-wrap-hack:after { content: ''; }\n\n/* Help users use markselection to safely style text background */\nspan.CodeMirror-selectedtext { background: none; }\n", "",{"version":3,"sources":["webpack://node_modules/codemirror/lib/codemirror.css"],"names":[],"mappings":"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","sourcesContent":["/* BASICS */\n\n.CodeMirror {\n  /* Set height, width, borders, and global font properties here */\n  font-family: monospace;\n  height: 300px;\n  color: black;\n  direction: ltr;\n}\n\n/* PADDING */\n\n.CodeMirror-lines {\n  padding: 4px 0; /* Vertical padding around content */\n}\n.CodeMirror pre.CodeMirror-line,\n.CodeMirror pre.CodeMirror-line-like {\n  padding: 0 4px; /* Horizontal padding of content */\n}\n\n.CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  background-color: white; /* The little square between H and V scrollbars */\n}\n\n/* GUTTER */\n\n.CodeMirror-gutters {\n  border-right: 1px solid #ddd;\n  background-color: #f7f7f7;\n  white-space: nowrap;\n}\n.CodeMirror-linenumbers {}\n.CodeMirror-linenumber {\n  padding: 0 3px 0 5px;\n  min-width: 20px;\n  text-align: right;\n  color: #999;\n  white-space: nowrap;\n}\n\n.CodeMirror-guttermarker { color: black; }\n.CodeMirror-guttermarker-subtle { color: #999; }\n\n/* CURSOR */\n\n.CodeMirror-cursor {\n  border-left: 1px solid black;\n  border-right: none;\n  width: 0;\n}\n/* Shown when moving in bi-directional text */\n.CodeMirror div.CodeMirror-secondarycursor {\n  border-left: 1px solid silver;\n}\n.cm-fat-cursor .CodeMirror-cursor {\n  width: auto;\n  border: 0 !important;\n  background: #7e7;\n}\n.cm-fat-cursor div.CodeMirror-cursors {\n  z-index: 1;\n}\n.cm-fat-cursor-mark {\n  background-color: rgba(20, 255, 20, 0.5);\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  -moz-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n}\n.cm-animate-fat-cursor {\n  width: auto;\n  border: 0;\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  -moz-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n  background-color: #7e7;\n}\n@-moz-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@-webkit-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n\n/* Can style cursor different in overwrite (non-insert) mode */\n.CodeMirror-overwrite .CodeMirror-cursor {}\n\n.cm-tab { display: inline-block; text-decoration: inherit; }\n\n.CodeMirror-rulers {\n  position: absolute;\n  left: 0; right: 0; top: -50px; bottom: 0;\n  overflow: hidden;\n}\n.CodeMirror-ruler {\n  border-left: 1px solid #ccc;\n  top: 0; bottom: 0;\n  position: absolute;\n}\n\n/* DEFAULT THEME */\n\n.cm-s-default .cm-header {color: blue;}\n.cm-s-default .cm-quote {color: #090;}\n.cm-negative {color: #d44;}\n.cm-positive {color: #292;}\n.cm-header, .cm-strong {font-weight: bold;}\n.cm-em {font-style: italic;}\n.cm-link {text-decoration: underline;}\n.cm-strikethrough {text-decoration: line-through;}\n\n.cm-s-default .cm-keyword {color: #708;}\n.cm-s-default .cm-atom {color: #219;}\n.cm-s-default .cm-number {color: #164;}\n.cm-s-default .cm-def {color: #00f;}\n.cm-s-default .cm-variable,\n.cm-s-default .cm-punctuation,\n.cm-s-default .cm-property,\n.cm-s-default .cm-operator {}\n.cm-s-default .cm-variable-2 {color: #05a;}\n.cm-s-default .cm-variable-3, .cm-s-default .cm-type {color: #085;}\n.cm-s-default .cm-comment {color: #a50;}\n.cm-s-default .cm-string {color: #a11;}\n.cm-s-default .cm-string-2 {color: #f50;}\n.cm-s-default .cm-meta {color: #555;}\n.cm-s-default .cm-qualifier {color: #555;}\n.cm-s-default .cm-builtin {color: #30a;}\n.cm-s-default .cm-bracket {color: #997;}\n.cm-s-default .cm-tag {color: #170;}\n.cm-s-default .cm-attribute {color: #00c;}\n.cm-s-default .cm-hr {color: #999;}\n.cm-s-default .cm-link {color: #00c;}\n\n.cm-s-default .cm-error {color: #f00;}\n.cm-invalidchar {color: #f00;}\n\n.CodeMirror-composing { border-bottom: 2px solid; }\n\n/* Default styles for common addons */\n\ndiv.CodeMirror span.CodeMirror-matchingbracket {color: #0b0;}\ndiv.CodeMirror span.CodeMirror-nonmatchingbracket {color: #a22;}\n.CodeMirror-matchingtag { background: rgba(255, 150, 0, .3); }\n.CodeMirror-activeline-background {background: #e8f2ff;}\n\n/* STOP */\n\n/* The rest of this file contains styles related to the mechanics of\n   the editor. You probably shouldn't touch them. */\n\n.CodeMirror {\n  position: relative;\n  overflow: hidden;\n  background: white;\n}\n\n.CodeMirror-scroll {\n  overflow: scroll !important; /* Things will break if this is overridden */\n  /* 50px is the magic margin used to hide the element's real scrollbars */\n  /* See overflow: hidden in .CodeMirror */\n  margin-bottom: -50px; margin-right: -50px;\n  padding-bottom: 50px;\n  height: 100%;\n  outline: none; /* Prevent dragging from highlighting the element */\n  position: relative;\n}\n.CodeMirror-sizer {\n  position: relative;\n  border-right: 50px solid transparent;\n}\n\n/* The fake, visible scrollbars. Used to force redraw during scrolling\n   before actual scrolling happens, thus preventing shaking and\n   flickering artifacts. */\n.CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  position: absolute;\n  z-index: 6;\n  display: none;\n  outline: none;\n}\n.CodeMirror-vscrollbar {\n  right: 0; top: 0;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.CodeMirror-hscrollbar {\n  bottom: 0; left: 0;\n  overflow-y: hidden;\n  overflow-x: scroll;\n}\n.CodeMirror-scrollbar-filler {\n  right: 0; bottom: 0;\n}\n.CodeMirror-gutter-filler {\n  left: 0; bottom: 0;\n}\n\n.CodeMirror-gutters {\n  position: absolute; left: 0; top: 0;\n  min-height: 100%;\n  z-index: 3;\n}\n.CodeMirror-gutter {\n  white-space: normal;\n  height: 100%;\n  display: inline-block;\n  vertical-align: top;\n  margin-bottom: -50px;\n}\n.CodeMirror-gutter-wrapper {\n  position: absolute;\n  z-index: 4;\n  background: none !important;\n  border: none !important;\n}\n.CodeMirror-gutter-background {\n  position: absolute;\n  top: 0; bottom: 0;\n  z-index: 4;\n}\n.CodeMirror-gutter-elt {\n  position: absolute;\n  cursor: default;\n  z-index: 4;\n}\n.CodeMirror-gutter-wrapper ::selection { background-color: transparent }\n.CodeMirror-gutter-wrapper ::-moz-selection { background-color: transparent }\n\n.CodeMirror-lines {\n  cursor: text;\n  min-height: 1px; /* prevents collapsing before first draw */\n}\n.CodeMirror pre.CodeMirror-line,\n.CodeMirror pre.CodeMirror-line-like {\n  /* Reset some styles that the rest of the page might have set */\n  -moz-border-radius: 0; -webkit-border-radius: 0; border-radius: 0;\n  border-width: 0;\n  background: transparent;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  white-space: pre;\n  word-wrap: normal;\n  line-height: inherit;\n  color: inherit;\n  z-index: 2;\n  position: relative;\n  overflow: visible;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-font-variant-ligatures: contextual;\n  font-variant-ligatures: contextual;\n}\n.CodeMirror-wrap pre.CodeMirror-line,\n.CodeMirror-wrap pre.CodeMirror-line-like {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  word-break: normal;\n}\n\n.CodeMirror-linebackground {\n  position: absolute;\n  left: 0; right: 0; top: 0; bottom: 0;\n  z-index: 0;\n}\n\n.CodeMirror-linewidget {\n  position: relative;\n  z-index: 2;\n  padding: 0.1px; /* Force widget margins to stay inside of the container */\n}\n\n.CodeMirror-widget {}\n\n.CodeMirror-rtl pre { direction: rtl; }\n\n.CodeMirror-code {\n  outline: none;\n}\n\n/* Force content-box sizing for the elements where we expect it */\n.CodeMirror-scroll,\n.CodeMirror-sizer,\n.CodeMirror-gutter,\n.CodeMirror-gutters,\n.CodeMirror-linenumber {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n}\n\n.CodeMirror-measure {\n  position: absolute;\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  visibility: hidden;\n}\n\n.CodeMirror-cursor {\n  position: absolute;\n  pointer-events: none;\n}\n.CodeMirror-measure pre { position: static; }\n\ndiv.CodeMirror-cursors {\n  visibility: hidden;\n  position: relative;\n  z-index: 3;\n}\ndiv.CodeMirror-dragcursors {\n  visibility: visible;\n}\n\n.CodeMirror-focused div.CodeMirror-cursors {\n  visibility: visible;\n}\n\n.CodeMirror-selected { background: #d9d9d9; }\n.CodeMirror-focused .CodeMirror-selected { background: #d7d4f0; }\n.CodeMirror-crosshair { cursor: crosshair; }\n.CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection { background: #d7d4f0; }\n.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }\n\n.cm-searching {\n  background-color: #ffa;\n  background-color: rgba(255, 255, 0, .4);\n}\n\n/* Used to force a border model for a node */\n.cm-force-border { padding-right: .1px; }\n\n@media print {\n  /* Hide the cursor when printing */\n  .CodeMirror div.CodeMirror-cursors {\n    visibility: hidden;\n  }\n}\n\n/* See issue #2901 */\n.cm-tab-wrap-hack:after { content: ''; }\n\n/* Help users use markselection to safely style text background */\nspan.CodeMirror-selectedtext { background: none; }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/codemirror/theme/dracula.css":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-5-2!./node_modules/codemirror/theme/dracula.css ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*\n\n    Name:       dracula\n    Author:     Michael Kaminsky (http://github.com/mkaminsky11)\n\n    Original dracula color scheme by Zeno Rocha (https://github.com/zenorocha/dracula-theme)\n\n*/\n\n\n.cm-s-dracula.CodeMirror, .cm-s-dracula .CodeMirror-gutters {\n  background-color: #282a36 !important;\n  color: #f8f8f2 !important;\n  border: none;\n}\n.cm-s-dracula .CodeMirror-gutters { color: #282a36; }\n.cm-s-dracula .CodeMirror-cursor { border-left: solid thin #f8f8f0; }\n.cm-s-dracula .CodeMirror-linenumber { color: #6D8A88; }\n.cm-s-dracula .CodeMirror-selected { background: rgba(255, 255, 255, 0.10); }\n.cm-s-dracula .CodeMirror-line::selection, .cm-s-dracula .CodeMirror-line > span::selection, .cm-s-dracula .CodeMirror-line > span > span::selection { background: rgba(255, 255, 255, 0.10); }\n.cm-s-dracula .CodeMirror-line::-moz-selection, .cm-s-dracula .CodeMirror-line > span::-moz-selection, .cm-s-dracula .CodeMirror-line > span > span::-moz-selection { background: rgba(255, 255, 255, 0.10); }\n.cm-s-dracula span.cm-comment { color: #6272a4; }\n.cm-s-dracula span.cm-string, .cm-s-dracula span.cm-string-2 { color: #f1fa8c; }\n.cm-s-dracula span.cm-number { color: #bd93f9; }\n.cm-s-dracula span.cm-variable { color: #50fa7b; }\n.cm-s-dracula span.cm-variable-2 { color: white; }\n.cm-s-dracula span.cm-def { color: #50fa7b; }\n.cm-s-dracula span.cm-operator { color: #ff79c6; }\n.cm-s-dracula span.cm-keyword { color: #ff79c6; }\n.cm-s-dracula span.cm-atom { color: #bd93f9; }\n.cm-s-dracula span.cm-meta { color: #f8f8f2; }\n.cm-s-dracula span.cm-tag { color: #ff79c6; }\n.cm-s-dracula span.cm-attribute { color: #50fa7b; }\n.cm-s-dracula span.cm-qualifier { color: #50fa7b; }\n.cm-s-dracula span.cm-property { color: #66d9ef; }\n.cm-s-dracula span.cm-builtin { color: #50fa7b; }\n.cm-s-dracula span.cm-variable-3, .cm-s-dracula span.cm-type { color: #ffb86c; }\n\n.cm-s-dracula .CodeMirror-activeline-background { background: rgba(255,255,255,0.1); }\n.cm-s-dracula .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }\n", "",{"version":3,"sources":["webpack://node_modules/codemirror/theme/dracula.css"],"names":[],"mappings":"AAAA;;;;;;;CAOC;;;AAGD;EACE,oCAAoC;EACpC,yBAAyB;EACzB,YAAY;AACd;AACA,oCAAoC,cAAc,EAAE;AACpD,mCAAmC,+BAA+B,EAAE;AACpE,uCAAuC,cAAc,EAAE;AACvD,qCAAqC,qCAAqC,EAAE;AAC5E,uJAAuJ,qCAAqC,EAAE;AAC9L,sKAAsK,qCAAqC,EAAE;AAC7M,gCAAgC,cAAc,EAAE;AAChD,+DAA+D,cAAc,EAAE;AAC/E,+BAA+B,cAAc,EAAE;AAC/C,iCAAiC,cAAc,EAAE;AACjD,mCAAmC,YAAY,EAAE;AACjD,4BAA4B,cAAc,EAAE;AAC5C,iCAAiC,cAAc,EAAE;AACjD,gCAAgC,cAAc,EAAE;AAChD,6BAA6B,cAAc,EAAE;AAC7C,6BAA6B,cAAc,EAAE;AAC7C,4BAA4B,cAAc,EAAE;AAC5C,kCAAkC,cAAc,EAAE;AAClD,kCAAkC,cAAc,EAAE;AAClD,iCAAiC,cAAc,EAAE;AACjD,gCAAgC,cAAc,EAAE;AAChD,+DAA+D,cAAc,EAAE;;AAE/E,kDAAkD,iCAAiC,EAAE;AACrF,4CAA4C,0BAA0B,EAAE,uBAAuB,EAAE","sourcesContent":["/*\n\n    Name:       dracula\n    Author:     Michael Kaminsky (http://github.com/mkaminsky11)\n\n    Original dracula color scheme by Zeno Rocha (https://github.com/zenorocha/dracula-theme)\n\n*/\n\n\n.cm-s-dracula.CodeMirror, .cm-s-dracula .CodeMirror-gutters {\n  background-color: #282a36 !important;\n  color: #f8f8f2 !important;\n  border: none;\n}\n.cm-s-dracula .CodeMirror-gutters { color: #282a36; }\n.cm-s-dracula .CodeMirror-cursor { border-left: solid thin #f8f8f0; }\n.cm-s-dracula .CodeMirror-linenumber { color: #6D8A88; }\n.cm-s-dracula .CodeMirror-selected { background: rgba(255, 255, 255, 0.10); }\n.cm-s-dracula .CodeMirror-line::selection, .cm-s-dracula .CodeMirror-line > span::selection, .cm-s-dracula .CodeMirror-line > span > span::selection { background: rgba(255, 255, 255, 0.10); }\n.cm-s-dracula .CodeMirror-line::-moz-selection, .cm-s-dracula .CodeMirror-line > span::-moz-selection, .cm-s-dracula .CodeMirror-line > span > span::-moz-selection { background: rgba(255, 255, 255, 0.10); }\n.cm-s-dracula span.cm-comment { color: #6272a4; }\n.cm-s-dracula span.cm-string, .cm-s-dracula span.cm-string-2 { color: #f1fa8c; }\n.cm-s-dracula span.cm-number { color: #bd93f9; }\n.cm-s-dracula span.cm-variable { color: #50fa7b; }\n.cm-s-dracula span.cm-variable-2 { color: white; }\n.cm-s-dracula span.cm-def { color: #50fa7b; }\n.cm-s-dracula span.cm-operator { color: #ff79c6; }\n.cm-s-dracula span.cm-keyword { color: #ff79c6; }\n.cm-s-dracula span.cm-atom { color: #bd93f9; }\n.cm-s-dracula span.cm-meta { color: #f8f8f2; }\n.cm-s-dracula span.cm-tag { color: #ff79c6; }\n.cm-s-dracula span.cm-attribute { color: #50fa7b; }\n.cm-s-dracula span.cm-qualifier { color: #50fa7b; }\n.cm-s-dracula span.cm-property { color: #66d9ef; }\n.cm-s-dracula span.cm-builtin { color: #50fa7b; }\n.cm-s-dracula span.cm-variable-3, .cm-s-dracula span.cm-type { color: #ffb86c; }\n\n.cm-s-dracula .CodeMirror-activeline-background { background: rgba(255,255,255,0.1); }\n.cm-s-dracula .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/blog/create-new-post.css":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./styles/blog/create-new-post.css ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".create-blog-post-content {\r\n    max-width: 1300px;\r\n    margin: auto;\r\n    overflow: auto;\r\n    padding: 30px 20px 30px 20px;\r\n  }\r\n  \r\n  .create-blog-post-header {\r\n    width: 100%;\r\n    height: 52px;\r\n    line-height: 52px;\r\n    font-size: 18px;\r\n    cursor: default;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .create-blog-post-form-container {\r\n    overflow: auto;\r\n    margin-top: 25px;\r\n  }\r\n  \r\n  .create-blog-post-form-section {\r\n    margin-bottom: 25px;\r\n  }\r\n  \r\n  .create-blog-post-form-section-label {\r\n    font-size: 15px;\r\n    margin-bottom: 15px;\r\n  }\r\n  \r\n  .create-blog-post-form-section-input {\r\n    width: 100%;\r\n  }\r\n  \r\n  .create-blog-post-form-section-input input {\r\n    width: 575px;\r\n    font-size: 15px;\r\n    line-height: normal;\r\n    padding: 10.5px 0;\r\n    text-indent: 14px;\r\n    border-radius: 3px;\r\n    background-color: #fff;\r\n    box-shadow: none;\r\n    border: 0.5px solid #cacbcc;\r\n    box-sizing: content-box;\r\n    overflow: visible;\r\n    color: #26394d;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n  }\r\n  \r\n  .create-blog-post-form-section-date-input input {\r\n    width: 320px;\r\n    font-size: 15px;\r\n    line-height: normal;\r\n    padding: 10.5px 0;\r\n    text-indent: 7.5px;\r\n    border-radius: 3px;\r\n    background-color: #fff;\r\n    box-shadow: none;\r\n    border: 0.5px solid #cacbcc;\r\n    box-sizing: content-box;\r\n    overflow: visible;\r\n    color: #26394d;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n  }\r\n  \r\n  .create-blog-post-content-btns-container {\r\n    width: 90%;\r\n    margin-bottom: 20px;\r\n  }\r\n  \r\n  .create-blog-post-content-btns-row {\r\n    margin-bottom: 10px;\r\n  }\r\n  \r\n  .create-blog-post-content-btn {\r\n    background-image: -webkit-linear-gradient(top, #e4e4e4, #f7f7f7);\r\n    background-image: linear-gradient(to bottom, #e4e4e4, #f7f7f7);\r\n    border: 1px solid #afafaf;\r\n    display: inline-block;\r\n    text-align: center;\r\n    padding: 5px;\r\n    font-size: 11px;\r\n    cursor: default;\r\n    margin-right: 7.5px;\r\n  }\r\n  \r\n  .create-blog-post-form-section-code-content-input {\r\n    width: 90%;\r\n  }\r\n  \r\n  .create-blog-post-form-section-input textarea {\r\n    resize: none;\r\n    height: 125px;\r\n    width: 575px;\r\n    border-radius: 3px;\r\n    border: 0.5px solid #cacbcc;\r\n    padding: 10.5px;\r\n    box-sizing: border-box;\r\n    font-size: 15px;\r\n  }\r\n  \r\n  .char-length {\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    margin-left: 15px;\r\n    font-size: 14px;\r\n  }\r\n  \r\n  .char-length.green {\r\n    color: green;\r\n  }\r\n  \r\n  .char-length.red {\r\n    color: rgb(186,51,58,0.85);\r\n  }\r\n  \r\n  .create-blog-post-form-section-date-input-now {\r\n    text-decoration: underline;\r\n    margin-left: 15px;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n  }\r\n  \r\n  .create-blog-post-seo-section-title {\r\n    font-weight: bold;\r\n    margin-top: 50px;\r\n    margin-bottom: 20px;\r\n    font-size: 18px;\r\n  }\r\n  \r\n  .create-blog-post-form-btn-container {\r\n    width: 120px;\r\n    margin-top: 50px;\r\n    margin-bottom: 10px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .create-blog-post-form-btn {\r\n    background: #357edd;\r\n    color: #fff;\r\n    letter-spacing: 0.5px;\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n    border-radius: 2px;\r\n    padding: 15px 0px 15px 0px;\r\n  }\r\n  \r\n  .create-blog-post-form-btn.loading {\r\n    opacity: 0.9;\r\n  }\r\n  \r\n  .create-blog-post-form-btn.loading span:after {\r\n    color: rgb(232, 232, 232);\r\n    content: ' .';\r\n    -webkit-animation: dots 1.2s steps(5, end) infinite;\r\n            animation: dots 1.2s steps(5, end) infinite;\r\n  }\r\n  \r\n  .create-blog-post-submit-error-msg {\r\n    color: rgb(186,51,58,0.85);\r\n    margin-top: 15px;\r\n  }\r\n  \r\n  .create-blog-post-submit-success-msg {\r\n    color: green;\r\n    margin-top: 15px;\r\n  }", "",{"version":3,"sources":["webpack://styles/blog/create-new-post.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;IACjB,YAAY;IACZ,cAAc;IACd,4BAA4B;EAC9B;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,eAAe;IACf,eAAe;IACf,iBAAiB;EACnB;;EAEA;IACE,cAAc;IACd,gBAAgB;EAClB;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,eAAe;IACf,mBAAmB;EACrB;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,YAAY;IACZ,eAAe;IACf,mBAAmB;IACnB,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,sBAAsB;IACtB,gBAAgB;IAChB,2BAA2B;IAC3B,uBAAuB;IACvB,iBAAiB;IACjB,cAAc;IACd,yBAAiB;OAAjB,sBAAiB;QAAjB,qBAAiB;YAAjB,iBAAiB;EACnB;;EAEA;IACE,YAAY;IACZ,eAAe;IACf,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;IAClB,kBAAkB;IAClB,sBAAsB;IACtB,gBAAgB;IAChB,2BAA2B;IAC3B,uBAAuB;IACvB,iBAAiB;IACjB,cAAc;IACd,yBAAiB;OAAjB,sBAAiB;QAAjB,qBAAiB;YAAjB,iBAAiB;EACnB;;EAEA;IACE,UAAU;IACV,mBAAmB;EACrB;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,gEAA8D;IAA9D,8DAA8D;IAC9D,yBAAyB;IACzB,qBAAqB;IACrB,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,eAAe;IACf,mBAAmB;EACrB;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,2BAA2B;IAC3B,eAAe;IACf,sBAAsB;IACtB,eAAe;EACjB;;EAEA;IACE,yBAAiB;OAAjB,sBAAiB;QAAjB,qBAAiB;YAAjB,iBAAiB;IACjB,iBAAiB;IACjB,eAAe;EACjB;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,0BAA0B;EAC5B;;EAEA;IACE,0BAA0B;IAC1B,iBAAiB;IACjB,eAAe;IACf,eAAe;EACjB;;EAEA;IACE,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;IACnB,eAAe;EACjB;;EAEA;IACE,YAAY;IACZ,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;EACjB;;EAEA;IACE,mBAAmB;IACnB,WAAW;IACX,qBAAqB;IACrB,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,0BAA0B;EAC5B;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,yBAAyB;IACzB,aAAa;IACb,mDAA2C;YAA3C,2CAA2C;EAC7C;;EAEA;IACE,0BAA0B;IAC1B,gBAAgB;EAClB;;EAEA;IACE,YAAY;IACZ,gBAAgB;EAClB","sourcesContent":[".create-blog-post-content {\r\n    max-width: 1300px;\r\n    margin: auto;\r\n    overflow: auto;\r\n    padding: 30px 20px 30px 20px;\r\n  }\r\n  \r\n  .create-blog-post-header {\r\n    width: 100%;\r\n    height: 52px;\r\n    line-height: 52px;\r\n    font-size: 18px;\r\n    cursor: default;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .create-blog-post-form-container {\r\n    overflow: auto;\r\n    margin-top: 25px;\r\n  }\r\n  \r\n  .create-blog-post-form-section {\r\n    margin-bottom: 25px;\r\n  }\r\n  \r\n  .create-blog-post-form-section-label {\r\n    font-size: 15px;\r\n    margin-bottom: 15px;\r\n  }\r\n  \r\n  .create-blog-post-form-section-input {\r\n    width: 100%;\r\n  }\r\n  \r\n  .create-blog-post-form-section-input input {\r\n    width: 575px;\r\n    font-size: 15px;\r\n    line-height: normal;\r\n    padding: 10.5px 0;\r\n    text-indent: 14px;\r\n    border-radius: 3px;\r\n    background-color: #fff;\r\n    box-shadow: none;\r\n    border: 0.5px solid #cacbcc;\r\n    box-sizing: content-box;\r\n    overflow: visible;\r\n    color: #26394d;\r\n    user-select: none;\r\n  }\r\n  \r\n  .create-blog-post-form-section-date-input input {\r\n    width: 320px;\r\n    font-size: 15px;\r\n    line-height: normal;\r\n    padding: 10.5px 0;\r\n    text-indent: 7.5px;\r\n    border-radius: 3px;\r\n    background-color: #fff;\r\n    box-shadow: none;\r\n    border: 0.5px solid #cacbcc;\r\n    box-sizing: content-box;\r\n    overflow: visible;\r\n    color: #26394d;\r\n    user-select: none;\r\n  }\r\n  \r\n  .create-blog-post-content-btns-container {\r\n    width: 90%;\r\n    margin-bottom: 20px;\r\n  }\r\n  \r\n  .create-blog-post-content-btns-row {\r\n    margin-bottom: 10px;\r\n  }\r\n  \r\n  .create-blog-post-content-btn {\r\n    background-image: linear-gradient(to bottom, #e4e4e4, #f7f7f7);\r\n    border: 1px solid #afafaf;\r\n    display: inline-block;\r\n    text-align: center;\r\n    padding: 5px;\r\n    font-size: 11px;\r\n    cursor: default;\r\n    margin-right: 7.5px;\r\n  }\r\n  \r\n  .create-blog-post-form-section-code-content-input {\r\n    width: 90%;\r\n  }\r\n  \r\n  .create-blog-post-form-section-input textarea {\r\n    resize: none;\r\n    height: 125px;\r\n    width: 575px;\r\n    border-radius: 3px;\r\n    border: 0.5px solid #cacbcc;\r\n    padding: 10.5px;\r\n    box-sizing: border-box;\r\n    font-size: 15px;\r\n  }\r\n  \r\n  .char-length {\r\n    user-select: none;\r\n    margin-left: 15px;\r\n    font-size: 14px;\r\n  }\r\n  \r\n  .char-length.green {\r\n    color: green;\r\n  }\r\n  \r\n  .char-length.red {\r\n    color: rgb(186,51,58,0.85);\r\n  }\r\n  \r\n  .create-blog-post-form-section-date-input-now {\r\n    text-decoration: underline;\r\n    margin-left: 15px;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n  }\r\n  \r\n  .create-blog-post-seo-section-title {\r\n    font-weight: bold;\r\n    margin-top: 50px;\r\n    margin-bottom: 20px;\r\n    font-size: 18px;\r\n  }\r\n  \r\n  .create-blog-post-form-btn-container {\r\n    width: 120px;\r\n    margin-top: 50px;\r\n    margin-bottom: 10px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .create-blog-post-form-btn {\r\n    background: #357edd;\r\n    color: #fff;\r\n    letter-spacing: 0.5px;\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n    border-radius: 2px;\r\n    padding: 15px 0px 15px 0px;\r\n  }\r\n  \r\n  .create-blog-post-form-btn.loading {\r\n    opacity: 0.9;\r\n  }\r\n  \r\n  .create-blog-post-form-btn.loading span:after {\r\n    color: rgb(232, 232, 232);\r\n    content: ' .';\r\n    animation: dots 1.2s steps(5, end) infinite;\r\n  }\r\n  \r\n  .create-blog-post-submit-error-msg {\r\n    color: rgb(186,51,58,0.85);\r\n    margin-top: 15px;\r\n  }\r\n  \r\n  .create-blog-post-submit-success-msg {\r\n    color: green;\r\n    margin-top: 15px;\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/blog/edit.css":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./styles/blog/edit.css ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".edit-blog-post-content {\r\n    max-width: 1300px;\r\n    margin: auto;\r\n    overflow: auto;\r\n    padding: 30px 20px 30px 20px;\r\n  }\r\n  \r\n  .edit-blog-post-header {\r\n    width: 100%;\r\n    height: 52px;\r\n    line-height: 52px;\r\n    font-size: 18px;\r\n    cursor: default;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .edit-blog-post-form-container {\r\n    overflow: auto;\r\n    margin-top: 25px;\r\n  }\r\n  \r\n  .edit-blog-post-form-section {\r\n    margin-bottom: 25px;\r\n  }\r\n  \r\n  .edit-blog-post-form-section-label {\r\n    font-size: 15px;\r\n    margin-bottom: 15px;\r\n  }\r\n  \r\n  .edit-blog-post-form-section-input {\r\n    width: 100%;\r\n  }\r\n  \r\n  .edit-blog-post-form-section-input input[type=\"text\"] {\r\n    width: 575px;\r\n    font-size: 15px;\r\n    line-height: normal;\r\n    padding: 10.5px 0;\r\n    text-indent: 14px;\r\n    border-radius: 3px;\r\n    background-color: #fff;\r\n    box-shadow: none;\r\n    border: 0.5px solid #cacbcc;\r\n    box-sizing: content-box;\r\n    overflow: visible;\r\n    color: #26394d;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n  }\r\n  \r\n  .edit-blog-post-form-section-input input[type=\"datetime-local\"] {\r\n    width: 275px;\r\n    font-size: 14px;\r\n    line-height: normal;\r\n    padding: 10.5px 0;\r\n    text-indent: 6px;\r\n    border-radius: 3px;\r\n    background-color: #fff;\r\n    box-shadow: none;\r\n    border: 0.5px solid #cacbcc;\r\n    box-sizing: content-box;\r\n    overflow: visible;\r\n    color: #26394d;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n  }\r\n  \r\n  .edit-blog-post-content-btns-container {\r\n    width: 90%;\r\n    margin-bottom: 20px;\r\n  }\r\n  \r\n  .edit-blog-post-content-btns-row {\r\n    margin-bottom: 10px;\r\n  }\r\n  \r\n  .edit-blog-post-content-btn {\r\n    background-image: -webkit-linear-gradient(top, #e4e4e4, #f7f7f7);\r\n    background-image: linear-gradient(to bottom, #e4e4e4, #f7f7f7);\r\n    border: 1px solid #afafaf;\r\n    display: inline-block;\r\n    text-align: center;\r\n    padding: 5px;\r\n    font-size: 11px;\r\n    cursor: default;\r\n    margin-right: 7.5px;\r\n  }\r\n  \r\n  .edit-blog-post-form-section-code-content-input {\r\n    width: 90%;\r\n  }\r\n  \r\n  .edit-blog-post-form-section-input textarea {\r\n    resize: none;\r\n    height: 125px;\r\n    width: 575px;\r\n    border-radius: 3px;\r\n    border: 0.5px solid #cacbcc;\r\n    padding: 10.5px;\r\n    box-sizing: border-box;\r\n    font-size: 14.5px;\r\n  }\r\n  \r\n  .char-length {\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    margin-left: 15px;\r\n    font-size: 14px;\r\n  }\r\n  \r\n  .char-length.green {\r\n    color: green;\r\n  }\r\n  \r\n  .char-length.red {\r\n    color: rgb(186,51,58,0.85);\r\n  }\r\n  \r\n  .edit-blog-post-form-section-date-input-now {\r\n    text-decoration: underline;\r\n    margin-left: 15px;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n  }\r\n  \r\n  .edit-blog-post-seo-section-title {\r\n    font-weight: bold;\r\n    margin-top: 50px;\r\n    margin-bottom: 20px;\r\n    font-size: 18px;\r\n  }\r\n  \r\n  .edit-blog-post-form-btns-section {\r\n    width: 90%;\r\n    margin-top: 50px;\r\n    margin-bottom: 10px;\r\n  }\r\n  \r\n  .edit-blog-post-form-submit-btn-container {\r\n    display: inline-block;\r\n    width: 120px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .edit-blog-post-form-btn {\r\n    background: #357edd;\r\n    color: #fff;\r\n    letter-spacing: 0.5px;\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n    border-radius: 2px;\r\n    padding: 15px 0px 15px 0px;\r\n  }\r\n  \r\n  .edit-blog-post-form-btn.loading {\r\n    opacity: 0.9;\r\n  }\r\n  \r\n  .edit-blog-post-form-btn.loading span:after {\r\n    color: rgb(232, 232, 232);\r\n    content: ' .';\r\n    -webkit-animation: dots 1.2s steps(5, end) infinite;\r\n            animation: dots 1.2s steps(5, end) infinite;\r\n  }\r\n  \r\n  .edit-blog-post-submit-error-msg {\r\n    color: rgb(186,51,58,0.85);\r\n    margin-top: 15px;\r\n    text-align: left;\r\n  }\r\n  \r\n  .edit-blog-post-submit-success-msg {\r\n    color: green;\r\n    margin-top: 15px;\r\n    text-align: left;\r\n  }\r\n  \r\n  .edit-blog-post-form-delete {\r\n    display: inline-block;\r\n    float: right;\r\n    margin-top: 10px;\r\n    color: rgb(186,51,58,0.85);\r\n    cursor: pointer;\r\n    font-size: 15px;\r\n  }\r\n  \r\n  .edit-blog-post-form-delete:hover {\r\n    text-decoration: underline;\r\n  }\r\n  \r\n  .edit-blog-post-get-data-error-msg {\r\n    text-align: center;\r\n    margin-top: 35vh;\r\n  }", "",{"version":3,"sources":["webpack://styles/blog/edit.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;IACjB,YAAY;IACZ,cAAc;IACd,4BAA4B;EAC9B;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,eAAe;IACf,eAAe;IACf,iBAAiB;EACnB;;EAEA;IACE,cAAc;IACd,gBAAgB;EAClB;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,eAAe;IACf,mBAAmB;EACrB;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,YAAY;IACZ,eAAe;IACf,mBAAmB;IACnB,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,sBAAsB;IACtB,gBAAgB;IAChB,2BAA2B;IAC3B,uBAAuB;IACvB,iBAAiB;IACjB,cAAc;IACd,yBAAiB;OAAjB,sBAAiB;QAAjB,qBAAiB;YAAjB,iBAAiB;EACnB;;EAEA;IACE,YAAY;IACZ,eAAe;IACf,mBAAmB;IACnB,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;IAClB,sBAAsB;IACtB,gBAAgB;IAChB,2BAA2B;IAC3B,uBAAuB;IACvB,iBAAiB;IACjB,cAAc;IACd,yBAAiB;OAAjB,sBAAiB;QAAjB,qBAAiB;YAAjB,iBAAiB;EACnB;;EAEA;IACE,UAAU;IACV,mBAAmB;EACrB;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,gEAA8D;IAA9D,8DAA8D;IAC9D,yBAAyB;IACzB,qBAAqB;IACrB,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,eAAe;IACf,mBAAmB;EACrB;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,2BAA2B;IAC3B,eAAe;IACf,sBAAsB;IACtB,iBAAiB;EACnB;;EAEA;IACE,yBAAiB;OAAjB,sBAAiB;QAAjB,qBAAiB;YAAjB,iBAAiB;IACjB,iBAAiB;IACjB,eAAe;EACjB;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,0BAA0B;EAC5B;;EAEA;IACE,0BAA0B;IAC1B,iBAAiB;IACjB,eAAe;IACf,eAAe;EACjB;;EAEA;IACE,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;IACnB,eAAe;EACjB;;EAEA;IACE,UAAU;IACV,gBAAgB;IAChB,mBAAmB;EACrB;;EAEA;IACE,qBAAqB;IACrB,YAAY;IACZ,kBAAkB;IAClB,eAAe;EACjB;;EAEA;IACE,mBAAmB;IACnB,WAAW;IACX,qBAAqB;IACrB,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,0BAA0B;EAC5B;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,yBAAyB;IACzB,aAAa;IACb,mDAA2C;YAA3C,2CAA2C;EAC7C;;EAEA;IACE,0BAA0B;IAC1B,gBAAgB;IAChB,gBAAgB;EAClB;;EAEA;IACE,YAAY;IACZ,gBAAgB;IAChB,gBAAgB;EAClB;;EAEA;IACE,qBAAqB;IACrB,YAAY;IACZ,gBAAgB;IAChB,0BAA0B;IAC1B,eAAe;IACf,eAAe;EACjB;;EAEA;IACE,0BAA0B;EAC5B;;EAEA;IACE,kBAAkB;IAClB,gBAAgB;EAClB","sourcesContent":[".edit-blog-post-content {\r\n    max-width: 1300px;\r\n    margin: auto;\r\n    overflow: auto;\r\n    padding: 30px 20px 30px 20px;\r\n  }\r\n  \r\n  .edit-blog-post-header {\r\n    width: 100%;\r\n    height: 52px;\r\n    line-height: 52px;\r\n    font-size: 18px;\r\n    cursor: default;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .edit-blog-post-form-container {\r\n    overflow: auto;\r\n    margin-top: 25px;\r\n  }\r\n  \r\n  .edit-blog-post-form-section {\r\n    margin-bottom: 25px;\r\n  }\r\n  \r\n  .edit-blog-post-form-section-label {\r\n    font-size: 15px;\r\n    margin-bottom: 15px;\r\n  }\r\n  \r\n  .edit-blog-post-form-section-input {\r\n    width: 100%;\r\n  }\r\n  \r\n  .edit-blog-post-form-section-input input[type=\"text\"] {\r\n    width: 575px;\r\n    font-size: 15px;\r\n    line-height: normal;\r\n    padding: 10.5px 0;\r\n    text-indent: 14px;\r\n    border-radius: 3px;\r\n    background-color: #fff;\r\n    box-shadow: none;\r\n    border: 0.5px solid #cacbcc;\r\n    box-sizing: content-box;\r\n    overflow: visible;\r\n    color: #26394d;\r\n    user-select: none;\r\n  }\r\n  \r\n  .edit-blog-post-form-section-input input[type=\"datetime-local\"] {\r\n    width: 275px;\r\n    font-size: 14px;\r\n    line-height: normal;\r\n    padding: 10.5px 0;\r\n    text-indent: 6px;\r\n    border-radius: 3px;\r\n    background-color: #fff;\r\n    box-shadow: none;\r\n    border: 0.5px solid #cacbcc;\r\n    box-sizing: content-box;\r\n    overflow: visible;\r\n    color: #26394d;\r\n    user-select: none;\r\n  }\r\n  \r\n  .edit-blog-post-content-btns-container {\r\n    width: 90%;\r\n    margin-bottom: 20px;\r\n  }\r\n  \r\n  .edit-blog-post-content-btns-row {\r\n    margin-bottom: 10px;\r\n  }\r\n  \r\n  .edit-blog-post-content-btn {\r\n    background-image: linear-gradient(to bottom, #e4e4e4, #f7f7f7);\r\n    border: 1px solid #afafaf;\r\n    display: inline-block;\r\n    text-align: center;\r\n    padding: 5px;\r\n    font-size: 11px;\r\n    cursor: default;\r\n    margin-right: 7.5px;\r\n  }\r\n  \r\n  .edit-blog-post-form-section-code-content-input {\r\n    width: 90%;\r\n  }\r\n  \r\n  .edit-blog-post-form-section-input textarea {\r\n    resize: none;\r\n    height: 125px;\r\n    width: 575px;\r\n    border-radius: 3px;\r\n    border: 0.5px solid #cacbcc;\r\n    padding: 10.5px;\r\n    box-sizing: border-box;\r\n    font-size: 14.5px;\r\n  }\r\n  \r\n  .char-length {\r\n    user-select: none;\r\n    margin-left: 15px;\r\n    font-size: 14px;\r\n  }\r\n  \r\n  .char-length.green {\r\n    color: green;\r\n  }\r\n  \r\n  .char-length.red {\r\n    color: rgb(186,51,58,0.85);\r\n  }\r\n  \r\n  .edit-blog-post-form-section-date-input-now {\r\n    text-decoration: underline;\r\n    margin-left: 15px;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n  }\r\n  \r\n  .edit-blog-post-seo-section-title {\r\n    font-weight: bold;\r\n    margin-top: 50px;\r\n    margin-bottom: 20px;\r\n    font-size: 18px;\r\n  }\r\n  \r\n  .edit-blog-post-form-btns-section {\r\n    width: 90%;\r\n    margin-top: 50px;\r\n    margin-bottom: 10px;\r\n  }\r\n  \r\n  .edit-blog-post-form-submit-btn-container {\r\n    display: inline-block;\r\n    width: 120px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .edit-blog-post-form-btn {\r\n    background: #357edd;\r\n    color: #fff;\r\n    letter-spacing: 0.5px;\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n    border-radius: 2px;\r\n    padding: 15px 0px 15px 0px;\r\n  }\r\n  \r\n  .edit-blog-post-form-btn.loading {\r\n    opacity: 0.9;\r\n  }\r\n  \r\n  .edit-blog-post-form-btn.loading span:after {\r\n    color: rgb(232, 232, 232);\r\n    content: ' .';\r\n    animation: dots 1.2s steps(5, end) infinite;\r\n  }\r\n  \r\n  .edit-blog-post-submit-error-msg {\r\n    color: rgb(186,51,58,0.85);\r\n    margin-top: 15px;\r\n    text-align: left;\r\n  }\r\n  \r\n  .edit-blog-post-submit-success-msg {\r\n    color: green;\r\n    margin-top: 15px;\r\n    text-align: left;\r\n  }\r\n  \r\n  .edit-blog-post-form-delete {\r\n    display: inline-block;\r\n    float: right;\r\n    margin-top: 10px;\r\n    color: rgb(186,51,58,0.85);\r\n    cursor: pointer;\r\n    font-size: 15px;\r\n  }\r\n  \r\n  .edit-blog-post-form-delete:hover {\r\n    text-decoration: underline;\r\n  }\r\n  \r\n  .edit-blog-post-get-data-error-msg {\r\n    text-align: center;\r\n    margin-top: 35vh;\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/blog/index.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./styles/blog/index.css ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".blog-posts-content {\r\n    max-width: 1200px;\r\n    margin: auto;\r\n    overflow: auto;\r\n    padding: 40px;\r\n  }\r\n  \r\n  .blog-posts-top-header {\r\n    width: 100%;\r\n    height: 52px;\r\n    line-height: 52px;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n  }\r\n  \r\n  .blog-posts-page-label {\r\n    display: inline-block;\r\n    font-size: 18px;\r\n    cursor: default;\r\n  }\r\n  \r\n  .blog-posts-add-new-btn-container {\r\n    display: inline-block;\r\n    float: right;\r\n  }\r\n  \r\n  .blog-posts-add-new-btn-container a {\r\n    text-decoration: none;\r\n  }\r\n  \r\n  .blog-posts-add-new-btn {\r\n    font-size: 14px;\r\n    width: 140px;\r\n    white-space: nowrap;\r\n    border-radius: 2px;\r\n    background-color: rgb(0,0,0,0.75);\r\n    color: #fff;\r\n    font-family: inherit;\r\n    text-align: center;\r\n  }\r\n  \r\n  .blog-posts-list-container {\r\n    margin-top: 30px;\r\n  }\r\n  \r\n  .blog-posts-list-tab-btns {\r\n    width: 100%;\r\n    overflow: auto;\r\n  }\r\n  \r\n  .blog-posts-list-tab-btn-container {\r\n    width: 50%;\r\n    float: left;\r\n    text-align: center;\r\n    height: 50px;\r\n    line-height: 50px;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n  }\r\n  \r\n  .blog-posts-list-tab-btn {\r\n    font-size: 15px;\r\n    color: rgb(0,0,0,0.95);\r\n    background-color: #d1d1d1;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.5px;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .blog-posts-list-tab-btn.active {\r\n    background-color: rgb(186,51,58,0.85);\r\n    color: #fff;\r\n  }\r\n  \r\n  .blog-posts-list-items-table {\r\n    margin-top: 30px;\r\n  }\r\n  \r\n  .blog-posts-list-items-table-header {\r\n    border-bottom: 1.75px solid #d1d1d1;\r\n    padding-bottom: 10px;\r\n    margin-bottom: 10px;\r\n    text-transform: uppercase;\r\n    font-size: 13px;\r\n    color: rgb(0,0,0,0.9);\r\n    cursor: default;\r\n  }\r\n  \r\n  .blog-posts-list-items-table-header-item {\r\n    display: inline-block;\r\n  }\r\n  \r\n  .blog-posts-list-items-table-header-item.title {\r\n    width: 65%;\r\n  }\r\n  \r\n  .blog-posts-list-items-table-header-item.date {\r\n    width: 25%;\r\n  }\r\n  \r\n  .blog-posts-list-items-table-header-item.edit {\r\n    width: 10%;\r\n  }\r\n  \r\n  .blog-posts-list-items-table-item {\r\n    border-bottom: 1.75px solid #e3e3e3;\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    font-size: 14px;\r\n    color: rgb(0,0,0,0.9);\r\n    cursor: default;\r\n  }\r\n  \r\n  .blog-posts-list-items-table-item-data {\r\n    display: inline-block;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n  }\r\n  \r\n  .blog-posts-list-items-table-item-data.title {\r\n    width: 65%;\r\n  }\r\n  \r\n  .blog-posts-list-items-table-item-data.date {\r\n    width: 25%;\r\n  }\r\n  \r\n  .blog-posts-list-items-table-item-data.edit {\r\n    width: 10%;\r\n  }\r\n  \r\n  .blog-posts-list-items-table-item-data.edit a {\r\n    text-decoration: none;\r\n    color: inherit;\r\n  }\r\n  \r\n  .blog-posts-list-items-table-item-data.edit a:hover {\r\n    text-decoration: underline;\r\n  }\r\n  \r\n  .blog-posts-list-get-data-error {\r\n    width: 100%;\r\n    text-align: center;\r\n    margin-top: 150px;\r\n  }", "",{"version":3,"sources":["webpack://styles/blog/index.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;IACjB,YAAY;IACZ,cAAc;IACd,aAAa;EACf;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,yBAAiB;OAAjB,sBAAiB;QAAjB,qBAAiB;YAAjB,iBAAiB;EACnB;;EAEA;IACE,qBAAqB;IACrB,eAAe;IACf,eAAe;EACjB;;EAEA;IACE,qBAAqB;IACrB,YAAY;EACd;;EAEA;IACE,qBAAqB;EACvB;;EAEA;IACE,eAAe;IACf,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;IAClB,iCAAiC;IACjC,WAAW;IACX,oBAAoB;IACpB,kBAAkB;EACpB;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,WAAW;IACX,cAAc;EAChB;;EAEA;IACE,UAAU;IACV,WAAW;IACX,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;IACjB,yBAAiB;OAAjB,sBAAiB;QAAjB,qBAAiB;YAAjB,iBAAiB;EACnB;;EAEA;IACE,eAAe;IACf,sBAAsB;IACtB,yBAAyB;IACzB,iBAAiB;IACjB,yBAAyB;IACzB,qBAAqB;IACrB,eAAe;EACjB;;EAEA;IACE,qCAAqC;IACrC,WAAW;EACb;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,mCAAmC;IACnC,oBAAoB;IACpB,mBAAmB;IACnB,yBAAyB;IACzB,eAAe;IACf,qBAAqB;IACrB,eAAe;EACjB;;EAEA;IACE,qBAAqB;EACvB;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,mCAAmC;IACnC,iBAAiB;IACjB,oBAAoB;IACpB,eAAe;IACf,qBAAqB;IACrB,eAAe;EACjB;;EAEA;IACE,qBAAqB;IACrB,mBAAmB;IACnB,gBAAgB;IAChB,uBAAuB;EACzB;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,qBAAqB;IACrB,cAAc;EAChB;;EAEA;IACE,0BAA0B;EAC5B;;EAEA;IACE,WAAW;IACX,kBAAkB;IAClB,iBAAiB;EACnB","sourcesContent":[".blog-posts-content {\r\n    max-width: 1200px;\r\n    margin: auto;\r\n    overflow: auto;\r\n    padding: 40px;\r\n  }\r\n  \r\n  .blog-posts-top-header {\r\n    width: 100%;\r\n    height: 52px;\r\n    line-height: 52px;\r\n    user-select: none;\r\n  }\r\n  \r\n  .blog-posts-page-label {\r\n    display: inline-block;\r\n    font-size: 18px;\r\n    cursor: default;\r\n  }\r\n  \r\n  .blog-posts-add-new-btn-container {\r\n    display: inline-block;\r\n    float: right;\r\n  }\r\n  \r\n  .blog-posts-add-new-btn-container a {\r\n    text-decoration: none;\r\n  }\r\n  \r\n  .blog-posts-add-new-btn {\r\n    font-size: 14px;\r\n    width: 140px;\r\n    white-space: nowrap;\r\n    border-radius: 2px;\r\n    background-color: rgb(0,0,0,0.75);\r\n    color: #fff;\r\n    font-family: inherit;\r\n    text-align: center;\r\n  }\r\n  \r\n  .blog-posts-list-container {\r\n    margin-top: 30px;\r\n  }\r\n  \r\n  .blog-posts-list-tab-btns {\r\n    width: 100%;\r\n    overflow: auto;\r\n  }\r\n  \r\n  .blog-posts-list-tab-btn-container {\r\n    width: 50%;\r\n    float: left;\r\n    text-align: center;\r\n    height: 50px;\r\n    line-height: 50px;\r\n    user-select: none;\r\n  }\r\n  \r\n  .blog-posts-list-tab-btn {\r\n    font-size: 15px;\r\n    color: rgb(0,0,0,0.95);\r\n    background-color: #d1d1d1;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.5px;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .blog-posts-list-tab-btn.active {\r\n    background-color: rgb(186,51,58,0.85);\r\n    color: #fff;\r\n  }\r\n  \r\n  .blog-posts-list-items-table {\r\n    margin-top: 30px;\r\n  }\r\n  \r\n  .blog-posts-list-items-table-header {\r\n    border-bottom: 1.75px solid #d1d1d1;\r\n    padding-bottom: 10px;\r\n    margin-bottom: 10px;\r\n    text-transform: uppercase;\r\n    font-size: 13px;\r\n    color: rgb(0,0,0,0.9);\r\n    cursor: default;\r\n  }\r\n  \r\n  .blog-posts-list-items-table-header-item {\r\n    display: inline-block;\r\n  }\r\n  \r\n  .blog-posts-list-items-table-header-item.title {\r\n    width: 65%;\r\n  }\r\n  \r\n  .blog-posts-list-items-table-header-item.date {\r\n    width: 25%;\r\n  }\r\n  \r\n  .blog-posts-list-items-table-header-item.edit {\r\n    width: 10%;\r\n  }\r\n  \r\n  .blog-posts-list-items-table-item {\r\n    border-bottom: 1.75px solid #e3e3e3;\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    font-size: 14px;\r\n    color: rgb(0,0,0,0.9);\r\n    cursor: default;\r\n  }\r\n  \r\n  .blog-posts-list-items-table-item-data {\r\n    display: inline-block;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n  }\r\n  \r\n  .blog-posts-list-items-table-item-data.title {\r\n    width: 65%;\r\n  }\r\n  \r\n  .blog-posts-list-items-table-item-data.date {\r\n    width: 25%;\r\n  }\r\n  \r\n  .blog-posts-list-items-table-item-data.edit {\r\n    width: 10%;\r\n  }\r\n  \r\n  .blog-posts-list-items-table-item-data.edit a {\r\n    text-decoration: none;\r\n    color: inherit;\r\n  }\r\n  \r\n  .blog-posts-list-items-table-item-data.edit a:hover {\r\n    text-decoration: underline;\r\n  }\r\n  \r\n  .blog-posts-list-get-data-error {\r\n    width: 100%;\r\n    text-align: center;\r\n    margin-top: 150px;\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/components/header.css":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./styles/components/header.css ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".header-wrapper {\r\n    width: 100%;\r\n    background-color: #357edd;\r\n    height: 50px;\r\n    position: fixed;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    z-index: 100;\r\n  }\r\n  \r\n  .header-logo {\r\n    display: inline-block;\r\n    height: 50px;\r\n    line-height: 50px;\r\n    color: #fff;\r\n    margin-left: 25px;\r\n    font-size: 15.5px;\r\n    letter-spacing: 0.5px;\r\n  }\r\n  \r\n  .header-logo a {\r\n    text-decoration: none;\r\n    color: inherit;\r\n  }\r\n  \r\n  .header-log-out {\r\n    display: inline-block;\r\n    height: 50px;\r\n    line-height: 50px;\r\n    color: #fff;\r\n    float: right;\r\n    margin-right: 20px;\r\n    cursor: pointer;\r\n    font-size: 15.5px;\r\n    letter-spacing: 0.5px;\r\n  }", "",{"version":3,"sources":["webpack://styles/components/header.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,yBAAyB;IACzB,YAAY;IACZ,eAAe;IACf,yBAAiB;OAAjB,sBAAiB;QAAjB,qBAAiB;YAAjB,iBAAiB;IACjB,YAAY;EACd;;EAEA;IACE,qBAAqB;IACrB,YAAY;IACZ,iBAAiB;IACjB,WAAW;IACX,iBAAiB;IACjB,iBAAiB;IACjB,qBAAqB;EACvB;;EAEA;IACE,qBAAqB;IACrB,cAAc;EAChB;;EAEA;IACE,qBAAqB;IACrB,YAAY;IACZ,iBAAiB;IACjB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,iBAAiB;IACjB,qBAAqB;EACvB","sourcesContent":[".header-wrapper {\r\n    width: 100%;\r\n    background-color: #357edd;\r\n    height: 50px;\r\n    position: fixed;\r\n    user-select: none;\r\n    z-index: 100;\r\n  }\r\n  \r\n  .header-logo {\r\n    display: inline-block;\r\n    height: 50px;\r\n    line-height: 50px;\r\n    color: #fff;\r\n    margin-left: 25px;\r\n    font-size: 15.5px;\r\n    letter-spacing: 0.5px;\r\n  }\r\n  \r\n  .header-logo a {\r\n    text-decoration: none;\r\n    color: inherit;\r\n  }\r\n  \r\n  .header-log-out {\r\n    display: inline-block;\r\n    height: 50px;\r\n    line-height: 50px;\r\n    color: #fff;\r\n    float: right;\r\n    margin-right: 20px;\r\n    cursor: pointer;\r\n    font-size: 15.5px;\r\n    letter-spacing: 0.5px;\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/components/modals/delete-blog-post.css":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./styles/components/modals/delete-blog-post.css ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".delete-blog-post-modal-wrapper {\r\n    position: fixed;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0px;\r\n    left: 0px;\r\n    visibility: hidden;\r\n    background-color: rgba(0, 0, 0, 0.75);\r\n    opacity: 0;\r\n    overflow: hidden;\r\n    z-index: 100;\r\n    color: rgb(43, 43, 43);\r\n    -webkit-transition: visibility 0s, opacity 0.05s linear;\r\n    transition: visibility 0s, opacity 0.05s linear;\r\n  }\r\n  \r\n  .delete-blog-post-modal-content {\r\n    position: relative;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-flex-direction: column;\r\n            flex-direction: column;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    background-color: white;\r\n    width: 425px;\r\n    height: 260px;\r\n    border-radius: 3px;\r\n    text-align: left;\r\n    color: #324B5A;\r\n  }\r\n  \r\n  .delete-blog-post-modal-close-wrapper {\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-justify-content: flex-end;\r\n            justify-content: flex-end;\r\n    -webkit-align-items: center;\r\n            align-items: center;\r\n    padding-right: 20px;\r\n    padding-top: 20px;\r\n  }\r\n  \r\n  .delete-blog-post-modal-close-button {\r\n    cursor: pointer;\r\n    font-size: 1.4rem;\r\n    font-weight: 300;\r\n  }\r\n  \r\n  .show-delete-blog-post-modal {\r\n    opacity: 1;\r\n    visibility: visible;\r\n    -webkit-transform: scale(1.0);\r\n            transform: scale(1.0);\r\n  }\r\n  \r\n  .delete-blog-post-modal-inner-content {\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-flex: 1 1;\r\n            flex: 1 1;\r\n    padding: 0px 50px 20px;\r\n  }\r\n  \r\n  .delete-blog-post-modal-content-title {\r\n    text-align: center;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .delete-blog-post-modal-content-text-wrapper {\r\n    width: 100%;\r\n    padding-right: 20px;\r\n  }\r\n  \r\n  .delete-blog-post-modal-content-text {\r\n    margin-top: 30px;\r\n    font-size: 15px;\r\n  }\r\n  \r\n  .delete-blog-post-modal-confirm-btn-container {\r\n    width: 100%;\r\n    margin-top: 30px;\r\n  }\r\n  \r\n  .delete-blog-post-modal-confirm-btn {\r\n    width: 110px;\r\n    background: rgb(186,51,58,0.9);\r\n    -webkit-font-smoothing: antialiased;\r\n    border-radius: 2px;\r\n    border: 1px solid #c0341d;\r\n    -webkit-transition: all .1s;\r\n    transition: all .1s;\r\n    cursor: pointer;\r\n    font-size: 13.5px;\r\n    padding-top: 14px;\r\n    padding-bottom: 14px;\r\n    text-align: center;\r\n    color: #fff;\r\n    letter-spacing: 0.5px;\r\n  }\r\n  \r\n  .delete-blog-post-modal-confirm-btn:hover {\r\n    background: rgb(186,51,58);\r\n  }\r\n  \r\n  .delete-blog-post-modal-confirm-btn.loading {\r\n    opacity: 0.9;\r\n  }\r\n  \r\n  .delete-blog-post-modal-confirm-btn.loading span:after {\r\n    color: rgb(232, 232, 232);\r\n    content: ' .';\r\n    -webkit-animation: dots 1.2s steps(5, end) infinite;\r\n            animation: dots 1.2s steps(5, end) infinite;\r\n  }\r\n  \r\n  .delete-blog-post-modal-error-wrapper {\r\n    z-index: 1;\r\n    background-color: rgb(255, 255, 255);\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-flex-direction: column;\r\n            flex-direction: column;\r\n    overflow: auto;\r\n    cursor: default;\r\n    text-align: center;\r\n    padding-left: 25px;\r\n    padding-right: 25px;\r\n  }\r\n  \r\n  .delete-blog-post-modal-error-title {\r\n    margin-top: 15px;\r\n  }\r\n  \r\n  .delete-blog-post-modal-error-text {\r\n    margin-top: 25px;\r\n    font-size: 14px;\r\n  }\r\n  \r\n  .delete-blog-post-modal-success-wrapper {\r\n    z-index: 1;\r\n    background-color: rgb(255, 255, 255);\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-flex-direction: column;\r\n            flex-direction: column;\r\n    overflow: auto;\r\n    cursor: default;\r\n    text-align: center;\r\n    padding-left: 25px;\r\n    padding-right: 25px;\r\n  }\r\n  \r\n  .delete-blog-post-modal-success-text {\r\n    margin-top: 25px;\r\n  }\r\n  \r\n  .delete-blog-post-modal-loading-wrapper {\r\n    z-index: 1;\r\n    background-color: rgb(255, 255, 255);\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-flex-direction: column;\r\n            flex-direction: column;\r\n    overflow: auto;\r\n    cursor: default;\r\n    padding: 25px;\r\n    margin-top: 75px;\r\n    text-align: center;\r\n  }\r\n  \r\n  .delete-blog-post-modal-loading-icon {\r\n    margin: auto;\r\n  }\r\n  \r\n  .delete-blog-post-modal-loading-subtext {\r\n    font-size: 14.5px;\r\n    margin-top: 25px;\r\n  }\r\n  \r\n  @media only screen and (max-width: 600px) {\r\n    .delete-blog-post-modal-content {\r\n      width: 100%;\r\n      height: 100%;\r\n      border-radius: 0px;\r\n      margin-top: 50px;\r\n    }\r\n  }", "",{"version":3,"sources":["webpack://styles/components/modals/delete-blog-post.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,qBAAa;IAAb,aAAa;IACb,WAAW;IACX,YAAY;IACZ,QAAQ;IACR,SAAS;IACT,kBAAkB;IAClB,qCAAqC;IACrC,UAAU;IACV,gBAAgB;IAChB,YAAY;IACZ,sBAAsB;IACtB,uDAA+C;IAA/C,+CAA+C;EACjD;;EAEA;IACE,kBAAkB;IAClB,qBAAa;IAAb,aAAa;IACb,8BAAsB;YAAtB,sBAAsB;IACtB,QAAQ;IACR,SAAS;IACT,wCAAgC;YAAhC,gCAAgC;IAChC,uBAAuB;IACvB,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,gBAAgB;IAChB,cAAc;EAChB;;EAEA;IACE,qBAAa;IAAb,aAAa;IAEb,iCAAyB;YAAzB,yBAAyB;IAEzB,2BAAmB;YAAnB,mBAAmB;IACnB,mBAAmB;IACnB,iBAAiB;EACnB;;EAEA;IACE,eAAe;IACf,iBAAiB;IACjB,gBAAgB;EAClB;;EAEA;IACE,UAAU;IACV,mBAAmB;IACnB,6BAAqB;YAArB,qBAAqB;EACvB;;EAEA;IACE,qBAAa;IAAb,aAAa;IACb,8BAAsB;YAAtB,sBAAsB;IACtB,iBAAY;YAAZ,SAAY;IACZ,sBAAsB;EACxB;;EAEA;IACE,kBAAkB;IAClB,eAAe;IACf,iBAAiB;EACnB;;EAEA;IACE,WAAW;IACX,mBAAmB;EACrB;;EAEA;IACE,gBAAgB;IAChB,eAAe;EACjB;;EAEA;IACE,WAAW;IACX,gBAAgB;EAClB;;EAEA;IACE,YAAY;IACZ,8BAA8B;IAC9B,mCAAmC;IACnC,kBAAkB;IAClB,yBAAyB;IACzB,2BAAmB;IAAnB,mBAAmB;IACnB,eAAe;IACf,iBAAiB;IACjB,iBAAiB;IACjB,oBAAoB;IACpB,kBAAkB;IAClB,WAAW;IACX,qBAAqB;EACvB;;EAEA;IACE,0BAA0B;EAC5B;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,yBAAyB;IACzB,aAAa;IACb,mDAA2C;YAA3C,2CAA2C;EAC7C;;EAEA;IACE,UAAU;IACV,oCAAoC;IACpC,qBAAa;IAAb,aAAa;IACb,8BAAsB;YAAtB,sBAAsB;IACtB,cAAc;IACd,eAAe;IACf,kBAAkB;IAClB,kBAAkB;IAClB,mBAAmB;EACrB;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,gBAAgB;IAChB,eAAe;EACjB;;EAEA;IACE,UAAU;IACV,oCAAoC;IACpC,qBAAa;IAAb,aAAa;IACb,8BAAsB;YAAtB,sBAAsB;IACtB,cAAc;IACd,eAAe;IACf,kBAAkB;IAClB,kBAAkB;IAClB,mBAAmB;EACrB;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,UAAU;IACV,oCAAoC;IACpC,qBAAa;IAAb,aAAa;IACb,8BAAsB;YAAtB,sBAAsB;IACtB,cAAc;IACd,eAAe;IACf,aAAa;IACb,gBAAgB;IAChB,kBAAkB;EACpB;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,iBAAiB;IACjB,gBAAgB;EAClB;;EAEA;IACE;MACE,WAAW;MACX,YAAY;MACZ,kBAAkB;MAClB,gBAAgB;IAClB;EACF","sourcesContent":[".delete-blog-post-modal-wrapper {\r\n    position: fixed;\r\n    display: flex;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0px;\r\n    left: 0px;\r\n    visibility: hidden;\r\n    background-color: rgba(0, 0, 0, 0.75);\r\n    opacity: 0;\r\n    overflow: hidden;\r\n    z-index: 100;\r\n    color: rgb(43, 43, 43);\r\n    transition: visibility 0s, opacity 0.05s linear;\r\n  }\r\n  \r\n  .delete-blog-post-modal-content {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    background-color: white;\r\n    width: 425px;\r\n    height: 260px;\r\n    border-radius: 3px;\r\n    text-align: left;\r\n    color: #324B5A;\r\n  }\r\n  \r\n  .delete-blog-post-modal-close-wrapper {\r\n    display: flex;\r\n    -webkit-box-pack: end;\r\n    justify-content: flex-end;\r\n    -webkit-box-align: center;\r\n    align-items: center;\r\n    padding-right: 20px;\r\n    padding-top: 20px;\r\n  }\r\n  \r\n  .delete-blog-post-modal-close-button {\r\n    cursor: pointer;\r\n    font-size: 1.4rem;\r\n    font-weight: 300;\r\n  }\r\n  \r\n  .show-delete-blog-post-modal {\r\n    opacity: 1;\r\n    visibility: visible;\r\n    transform: scale(1.0);\r\n  }\r\n  \r\n  .delete-blog-post-modal-inner-content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex: 1 1 0%;\r\n    padding: 0px 50px 20px;\r\n  }\r\n  \r\n  .delete-blog-post-modal-content-title {\r\n    text-align: center;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .delete-blog-post-modal-content-text-wrapper {\r\n    width: 100%;\r\n    padding-right: 20px;\r\n  }\r\n  \r\n  .delete-blog-post-modal-content-text {\r\n    margin-top: 30px;\r\n    font-size: 15px;\r\n  }\r\n  \r\n  .delete-blog-post-modal-confirm-btn-container {\r\n    width: 100%;\r\n    margin-top: 30px;\r\n  }\r\n  \r\n  .delete-blog-post-modal-confirm-btn {\r\n    width: 110px;\r\n    background: rgb(186,51,58,0.9);\r\n    -webkit-font-smoothing: antialiased;\r\n    border-radius: 2px;\r\n    border: 1px solid #c0341d;\r\n    transition: all .1s;\r\n    cursor: pointer;\r\n    font-size: 13.5px;\r\n    padding-top: 14px;\r\n    padding-bottom: 14px;\r\n    text-align: center;\r\n    color: #fff;\r\n    letter-spacing: 0.5px;\r\n  }\r\n  \r\n  .delete-blog-post-modal-confirm-btn:hover {\r\n    background: rgb(186,51,58);\r\n  }\r\n  \r\n  .delete-blog-post-modal-confirm-btn.loading {\r\n    opacity: 0.9;\r\n  }\r\n  \r\n  .delete-blog-post-modal-confirm-btn.loading span:after {\r\n    color: rgb(232, 232, 232);\r\n    content: ' .';\r\n    animation: dots 1.2s steps(5, end) infinite;\r\n  }\r\n  \r\n  .delete-blog-post-modal-error-wrapper {\r\n    z-index: 1;\r\n    background-color: rgb(255, 255, 255);\r\n    display: flex;\r\n    flex-direction: column;\r\n    overflow: auto;\r\n    cursor: default;\r\n    text-align: center;\r\n    padding-left: 25px;\r\n    padding-right: 25px;\r\n  }\r\n  \r\n  .delete-blog-post-modal-error-title {\r\n    margin-top: 15px;\r\n  }\r\n  \r\n  .delete-blog-post-modal-error-text {\r\n    margin-top: 25px;\r\n    font-size: 14px;\r\n  }\r\n  \r\n  .delete-blog-post-modal-success-wrapper {\r\n    z-index: 1;\r\n    background-color: rgb(255, 255, 255);\r\n    display: flex;\r\n    flex-direction: column;\r\n    overflow: auto;\r\n    cursor: default;\r\n    text-align: center;\r\n    padding-left: 25px;\r\n    padding-right: 25px;\r\n  }\r\n  \r\n  .delete-blog-post-modal-success-text {\r\n    margin-top: 25px;\r\n  }\r\n  \r\n  .delete-blog-post-modal-loading-wrapper {\r\n    z-index: 1;\r\n    background-color: rgb(255, 255, 255);\r\n    display: flex;\r\n    flex-direction: column;\r\n    overflow: auto;\r\n    cursor: default;\r\n    padding: 25px;\r\n    margin-top: 75px;\r\n    text-align: center;\r\n  }\r\n  \r\n  .delete-blog-post-modal-loading-icon {\r\n    margin: auto;\r\n  }\r\n  \r\n  .delete-blog-post-modal-loading-subtext {\r\n    font-size: 14.5px;\r\n    margin-top: 25px;\r\n  }\r\n  \r\n  @media only screen and (max-width: 600px) {\r\n    .delete-blog-post-modal-content {\r\n      width: 100%;\r\n      height: 100%;\r\n      border-radius: 0px;\r\n      margin-top: 50px;\r\n    }\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/components/sidebar.css":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./styles/components/sidebar.css ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".sidebar-wrapper {\r\n    height: 100%;\r\n    width: 130px;\r\n    overflow: hidden;\r\n    background-color: #f1f1f1;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0;\r\n    left: 0;\r\n    margin-top: 50px;\r\n    padding-top: 10px;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n  }\r\n  \r\n  .sidebar-list {\r\n    padding-left: 25px;\r\n  }\r\n  \r\n  .sidebar-list ul {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n  }\r\n  \r\n  .sidebar-list ul a {\r\n    text-decoration: none;\r\n    color: rgb(0,0,0,.7);\r\n  }\r\n  \r\n  .sidebar-list ul a.active {\r\n    color: rgb(0,0,0,.95);\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .sidebar-list ul li {\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n  }", "",{"version":3,"sources":["webpack://styles/components/sidebar.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,YAAY;IACZ,gBAAgB;IAChB,yBAAyB;IACzB,eAAe;IACf,UAAU;IACV,MAAM;IACN,OAAO;IACP,gBAAgB;IAChB,iBAAiB;IACjB,yBAAiB;OAAjB,sBAAiB;QAAjB,qBAAiB;YAAjB,iBAAiB;EACnB;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,SAAS;IACT,UAAU;IACV,gBAAgB;EAClB;;EAEA;IACE,qBAAqB;IACrB,oBAAoB;EACtB;;EAEA;IACE,qBAAqB;IACrB,iBAAiB;EACnB;;EAEA;IACE,iBAAiB;IACjB,oBAAoB;EACtB","sourcesContent":[".sidebar-wrapper {\r\n    height: 100%;\r\n    width: 130px;\r\n    overflow: hidden;\r\n    background-color: #f1f1f1;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0;\r\n    left: 0;\r\n    margin-top: 50px;\r\n    padding-top: 10px;\r\n    user-select: none;\r\n  }\r\n  \r\n  .sidebar-list {\r\n    padding-left: 25px;\r\n  }\r\n  \r\n  .sidebar-list ul {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n  }\r\n  \r\n  .sidebar-list ul a {\r\n    text-decoration: none;\r\n    color: rgb(0,0,0,.7);\r\n  }\r\n  \r\n  .sidebar-list ul a.active {\r\n    color: rgb(0,0,0,.95);\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .sidebar-list ul li {\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/images/index.css":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./styles/images/index.css ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".images-content {\r\n    max-width: 1200px;\r\n    margin: auto;\r\n    overflow: auto;\r\n    padding: 40px;\r\n  }\r\n  \r\n  .images-top-header {\r\n    width: 100%;\r\n    height: 46px;\r\n    line-height: 46px;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n  }\r\n  \r\n  .images-page-header-label {\r\n    display: inline-block;\r\n    font-size: 18px;\r\n    cursor: default;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .images-add-new-btn-container {\r\n    display: inline-block;\r\n    float: right;\r\n  }\r\n  \r\n  .images-add-new-btn-container a {\r\n    text-decoration: none;\r\n  }\r\n  \r\n  .images-add-new-btn {\r\n    font-size: 14px;\r\n    width: 100px;\r\n    white-space: nowrap;\r\n    border-radius: 2px;\r\n    background-color: rgb(0,0,0,0.75);\r\n    color: #fff;\r\n    font-family: inherit;\r\n    text-align: center;\r\n  }\r\n  \r\n  .images-list-container {\r\n    margin-top: 30px;\r\n  }\r\n  \r\n  .images-list-items-table {\r\n    margin-top: 30px;\r\n  }\r\n  \r\n  .images-list-items-table-header {\r\n    border-bottom: 1.75px solid #d1d1d1;\r\n    padding-bottom: 10px;\r\n    margin-bottom: 10px;\r\n    text-transform: uppercase;\r\n    font-size: 13px;\r\n    color: rgb(0,0,0,0.9);\r\n    cursor: default;\r\n  }\r\n  \r\n  .images-list-items-table-header-item {\r\n    display: inline-block;\r\n  }\r\n  \r\n  .images-list-items-table-header-item.filename {\r\n    width: 60%;\r\n  }\r\n  \r\n  .images-list-items-table-header-item.link {\r\n    width: 30%;\r\n  }\r\n  \r\n  .images-list-items-table-header-item.edit {\r\n    width: 10%;\r\n  }\r\n  \r\n  .images-list-items-table-item {\r\n    border-bottom: 1.75px solid #e3e3e3;\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    font-size: 14px;\r\n    color: rgb(0,0,0,0.9);\r\n    cursor: default;\r\n  }\r\n  \r\n  .images-list-items-table-item-data {\r\n    display: inline-block;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n  }\r\n  \r\n  .images-list-items-table-item-data.filename {\r\n    width: 60%;\r\n  }\r\n  \r\n  .images-list-items-table-item-data.link {\r\n    width: 30%;\r\n  }\r\n  \r\n  .images-list-items-table-item-data.link a,\r\n  .images-list-items-table-item-data.link a:visited {\r\n    color: rgb(30,144,255);\r\n  }\r\n  \r\n  .images-list-items-table-item-data.edit {\r\n    width: 10%;\r\n  }\r\n  \r\n  .images-list-items-table-item-data.edit a {\r\n    text-decoration: none;\r\n    color: inherit;\r\n  }\r\n  \r\n  .images-list-items-table-item-data.edit a:hover {\r\n    text-decoration: underline;\r\n  }\r\n  \r\n  .images-get-data-error {\r\n    text-align: center;\r\n    margin-top: 35vh;\r\n  }", "",{"version":3,"sources":["webpack://styles/images/index.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;IACjB,YAAY;IACZ,cAAc;IACd,aAAa;EACf;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,yBAAiB;OAAjB,sBAAiB;QAAjB,qBAAiB;YAAjB,iBAAiB;EACnB;;EAEA;IACE,qBAAqB;IACrB,eAAe;IACf,eAAe;IACf,iBAAiB;EACnB;;EAEA;IACE,qBAAqB;IACrB,YAAY;EACd;;EAEA;IACE,qBAAqB;EACvB;;EAEA;IACE,eAAe;IACf,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;IAClB,iCAAiC;IACjC,WAAW;IACX,oBAAoB;IACpB,kBAAkB;EACpB;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,mCAAmC;IACnC,oBAAoB;IACpB,mBAAmB;IACnB,yBAAyB;IACzB,eAAe;IACf,qBAAqB;IACrB,eAAe;EACjB;;EAEA;IACE,qBAAqB;EACvB;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,mCAAmC;IACnC,iBAAiB;IACjB,oBAAoB;IACpB,eAAe;IACf,qBAAqB;IACrB,eAAe;EACjB;;EAEA;IACE,qBAAqB;IACrB,mBAAmB;IACnB,gBAAgB;IAChB,uBAAuB;EACzB;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;EACZ;;EAEA;;IAEE,sBAAsB;EACxB;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,qBAAqB;IACrB,cAAc;EAChB;;EAEA;IACE,0BAA0B;EAC5B;;EAEA;IACE,kBAAkB;IAClB,gBAAgB;EAClB","sourcesContent":[".images-content {\r\n    max-width: 1200px;\r\n    margin: auto;\r\n    overflow: auto;\r\n    padding: 40px;\r\n  }\r\n  \r\n  .images-top-header {\r\n    width: 100%;\r\n    height: 46px;\r\n    line-height: 46px;\r\n    user-select: none;\r\n  }\r\n  \r\n  .images-page-header-label {\r\n    display: inline-block;\r\n    font-size: 18px;\r\n    cursor: default;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .images-add-new-btn-container {\r\n    display: inline-block;\r\n    float: right;\r\n  }\r\n  \r\n  .images-add-new-btn-container a {\r\n    text-decoration: none;\r\n  }\r\n  \r\n  .images-add-new-btn {\r\n    font-size: 14px;\r\n    width: 100px;\r\n    white-space: nowrap;\r\n    border-radius: 2px;\r\n    background-color: rgb(0,0,0,0.75);\r\n    color: #fff;\r\n    font-family: inherit;\r\n    text-align: center;\r\n  }\r\n  \r\n  .images-list-container {\r\n    margin-top: 30px;\r\n  }\r\n  \r\n  .images-list-items-table {\r\n    margin-top: 30px;\r\n  }\r\n  \r\n  .images-list-items-table-header {\r\n    border-bottom: 1.75px solid #d1d1d1;\r\n    padding-bottom: 10px;\r\n    margin-bottom: 10px;\r\n    text-transform: uppercase;\r\n    font-size: 13px;\r\n    color: rgb(0,0,0,0.9);\r\n    cursor: default;\r\n  }\r\n  \r\n  .images-list-items-table-header-item {\r\n    display: inline-block;\r\n  }\r\n  \r\n  .images-list-items-table-header-item.filename {\r\n    width: 60%;\r\n  }\r\n  \r\n  .images-list-items-table-header-item.link {\r\n    width: 30%;\r\n  }\r\n  \r\n  .images-list-items-table-header-item.edit {\r\n    width: 10%;\r\n  }\r\n  \r\n  .images-list-items-table-item {\r\n    border-bottom: 1.75px solid #e3e3e3;\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    font-size: 14px;\r\n    color: rgb(0,0,0,0.9);\r\n    cursor: default;\r\n  }\r\n  \r\n  .images-list-items-table-item-data {\r\n    display: inline-block;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n  }\r\n  \r\n  .images-list-items-table-item-data.filename {\r\n    width: 60%;\r\n  }\r\n  \r\n  .images-list-items-table-item-data.link {\r\n    width: 30%;\r\n  }\r\n  \r\n  .images-list-items-table-item-data.link a,\r\n  .images-list-items-table-item-data.link a:visited {\r\n    color: rgb(30,144,255);\r\n  }\r\n  \r\n  .images-list-items-table-item-data.edit {\r\n    width: 10%;\r\n  }\r\n  \r\n  .images-list-items-table-item-data.edit a {\r\n    text-decoration: none;\r\n    color: inherit;\r\n  }\r\n  \r\n  .images-list-items-table-item-data.edit a:hover {\r\n    text-decoration: underline;\r\n  }\r\n  \r\n  .images-get-data-error {\r\n    text-align: center;\r\n    margin-top: 35vh;\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/layout.css":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./styles/layout.css ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "* {\r\n    margin: 0px;\r\n    padding: 0px;\r\n    border-width: 0px;\r\n    border-style: none;\r\n    border-style: initial;\r\n    border-color: currentColor;\r\n    border-color: initial;\r\n    -webkit-border-image: none;\r\n            border-image: none;\r\n    -webkit-border-image: initial;\r\n            border-image: initial;\r\n    -webkit-font-smoothing: antialiased;\r\n    -webkit-backface-visibility: hidden;\r\n  }\r\n  \r\n  :focus {outline:none;}\r\n  ::-moz-focus-inner {border:0;}\r\n  \r\n  .layout-wrapper {\r\n    height: 100%;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-flex-direction: column;\r\n            flex-direction: column;\r\n    font-family: Open Sans,system-ui,BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;\r\n  }\r\n  \r\n  .layout-content-container {\r\n    height: 100%;\r\n    min-height: calc(100vh - 50px);\r\n    margin-top: 50px;\r\n    margin-left: 130px;\r\n    background-color: #F5F9FD;\r\n  }\r\n  \r\n  .CodeMirror {\r\n    height: 450px;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n  }\r\n  \r\n  /* Global animation */\r\n  @-webkit-keyframes dots {\r\n    0%, 20% {\r\n      color: rgb(245, 245, 245);\r\n      text-shadow:\r\n        .25em 0 0 rgb(245, 245, 245),\r\n        .5em 0 0 rgb(245, 245, 245);\r\n      }\r\n    40% {\r\n      color: #bfbfbf;\r\n      text-shadow:\r\n        .25em 0 0 rgb(245, 245, 245),\r\n        .5em 0 0 rgb(245, 245, 245);\r\n      }\r\n    60% {\r\n      text-shadow:\r\n        .25em 0 0 #bfbfbf,\r\n        .5em 0 0 rgb(245, 245, 245);\r\n      }\r\n    80%, 100% {\r\n      text-shadow:\r\n        .25em 0 0 #bfbfbf,\r\n        .5em 0 0 #bfbfbf;\r\n    }\r\n  }\r\n  @keyframes dots {\r\n    0%, 20% {\r\n      color: rgb(245, 245, 245);\r\n      text-shadow:\r\n        .25em 0 0 rgb(245, 245, 245),\r\n        .5em 0 0 rgb(245, 245, 245);\r\n      }\r\n    40% {\r\n      color: #bfbfbf;\r\n      text-shadow:\r\n        .25em 0 0 rgb(245, 245, 245),\r\n        .5em 0 0 rgb(245, 245, 245);\r\n      }\r\n    60% {\r\n      text-shadow:\r\n        .25em 0 0 #bfbfbf,\r\n        .5em 0 0 rgb(245, 245, 245);\r\n      }\r\n    80%, 100% {\r\n      text-shadow:\r\n        .25em 0 0 #bfbfbf,\r\n        .5em 0 0 #bfbfbf;\r\n    }\r\n  }", "",{"version":3,"sources":["webpack://styles/layout.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,kBAAqB;IAArB,qBAAqB;IACrB,0BAAqB;IAArB,qBAAqB;IACrB,0BAAqB;YAArB,kBAAqB;IAArB,6BAAqB;YAArB,qBAAqB;IACrB,mCAAmC;IACnC,mCAAmC;EACrC;;EAEA,QAAQ,YAAY,CAAC;EACrB,oBAAoB,QAAQ,CAAC;;EAE7B;IACE,YAAY;IACZ,qBAAa;IAAb,aAAa;IACb,8BAAsB;YAAtB,sBAAsB;IACtB,wJAAwJ;EAC1J;;EAEA;IACE,YAAY;IACZ,8BAA8B;IAC9B,gBAAgB;IAChB,kBAAkB;IAClB,yBAAyB;EAC3B;;EAEA;IACE,aAAa;IACb,iBAAiB;IACjB,oBAAoB;EACtB;;EAEA,qBAAqB;EACrB;IACE;MACE,yBAAyB;MACzB;;mCAE6B;MAC7B;IACF;MACE,cAAc;MACd;;mCAE6B;MAC7B;IACF;MACE;;mCAE6B;MAC7B;IACF;MACE;;wBAEkB;IACpB;EACF;EAvBA;IACE;MACE,yBAAyB;MACzB;;mCAE6B;MAC7B;IACF;MACE,cAAc;MACd;;mCAE6B;MAC7B;IACF;MACE;;mCAE6B;MAC7B;IACF;MACE;;wBAEkB;IACpB;EACF","sourcesContent":["* {\r\n    margin: 0px;\r\n    padding: 0px;\r\n    border-width: 0px;\r\n    border-style: initial;\r\n    border-color: initial;\r\n    border-image: initial;\r\n    -webkit-font-smoothing: antialiased;\r\n    -webkit-backface-visibility: hidden;\r\n  }\r\n  \r\n  :focus {outline:none;}\r\n  ::-moz-focus-inner {border:0;}\r\n  \r\n  .layout-wrapper {\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    font-family: Open Sans,system-ui,BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;\r\n  }\r\n  \r\n  .layout-content-container {\r\n    height: 100%;\r\n    min-height: calc(100vh - 50px);\r\n    margin-top: 50px;\r\n    margin-left: 130px;\r\n    background-color: #F5F9FD;\r\n  }\r\n  \r\n  .CodeMirror {\r\n    height: 450px;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n  }\r\n  \r\n  /* Global animation */\r\n  @keyframes dots {\r\n    0%, 20% {\r\n      color: rgb(245, 245, 245);\r\n      text-shadow:\r\n        .25em 0 0 rgb(245, 245, 245),\r\n        .5em 0 0 rgb(245, 245, 245);\r\n      }\r\n    40% {\r\n      color: #bfbfbf;\r\n      text-shadow:\r\n        .25em 0 0 rgb(245, 245, 245),\r\n        .5em 0 0 rgb(245, 245, 245);\r\n      }\r\n    60% {\r\n      text-shadow:\r\n        .25em 0 0 #bfbfbf,\r\n        .5em 0 0 rgb(245, 245, 245);\r\n      }\r\n    80%, 100% {\r\n      text-shadow:\r\n        .25em 0 0 #bfbfbf,\r\n        .5em 0 0 #bfbfbf;\r\n    }\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/login.css":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./styles/login.css ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".login-wrapper {\r\n    min-height: 100vh;\r\n    background-color: #F5F9FD;\r\n  }\r\n  \r\n  .login-content-container {\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n  }\r\n  \r\n  .login-form-container {\r\n    width: 500px;\r\n    margin: auto;\r\n    padding: 45px 48px;\r\n    box-shadow: 0 2px 4px 0 rgba(39,64,89,.4);\r\n    background-color: #fff;\r\n    border-radius: 2px;\r\n    position: relative;\r\n    box-sizing: border-box;\r\n    position: absolute;\r\n    top: 45%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%,-45%);\r\n    transform: translate(-50%,-45%);\r\n  }\r\n  \r\n  .login-form-error-block {\r\n    background-color: rgb(184, 60, 59, 0.95);\r\n    padding-left: 12px;\r\n    border-radius: 3px;\r\n    margin-top: 8px;\r\n    margin-bottom: 25px;\r\n    color: #f0f0f0;\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    font-size: 15px;\r\n  }\r\n  \r\n  .login-form-top-header {\r\n    font-size: 32px;\r\n    font-weight: 400;\r\n    line-height: 1.38;\r\n    text-align: center;\r\n    color: rgba(0,0,0,.7);\r\n    margin-bottom: 40px;\r\n  }\r\n  \r\n  .login-form-field {\r\n    margin-bottom: 15px;\r\n  }\r\n  \r\n  .login-form-field input {\r\n    width: 100%;\r\n  }\r\n  \r\n  .login-form-field input[type=email],\r\n  .login-form-field input[type=password] {\r\n    font-size: 16px;\r\n    line-height: normal;\r\n    padding: 17px 0;\r\n    text-indent: 20px;\r\n    border-radius: 3px;\r\n    background-color: #fff;\r\n    box-shadow: none;\r\n    border: 1px solid #cacbcc;\r\n    box-sizing: content-box;\r\n    overflow: visible;\r\n    color: #26394d;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n  }\r\n  \r\n  .login-form-field input[type=email].error,\r\n  .login-form-field input[type=password].error {\r\n    border-color: #cb3837;\r\n  }\r\n  \r\n  .login-form-field input[type=email]:hover,\r\n  .login-form-field input[type=password]:hover {\r\n    border-color: #357edd;\r\n  }\r\n  \r\n  .login-form-field input[type=email]::-webkit-input-placeholder, .login-form-field input[type=password]::-webkit-input-placeholder {\r\n    opacity: 0.75;\r\n  }\r\n  \r\n  .login-form-field input[type=email]:-ms-input-placeholder, .login-form-field input[type=password]:-ms-input-placeholder {\r\n    opacity: 0.75;\r\n  }\r\n  \r\n  .login-form-field input[type=email]::placeholder,\r\n  .login-form-field input[type=password]::placeholder {\r\n    opacity: 0.75;\r\n  }\r\n  \r\n  .login-form-error-msg {\r\n    color: #cb3837;\r\n    font-size: 14px;\r\n    margin-top: 10px;\r\n  }\r\n  \r\n  .login-form-submit-btn-container {\r\n    width: 100%;\r\n    margin: auto;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .login-form-submit-btn {\r\n    background: #357edd;\r\n    color: #fff;\r\n    letter-spacing: 0.3px;\r\n    font-size: 16px;\r\n    font-weight: 700;\r\n    border-radius: 2px;\r\n    padding: 18px 0px 18px 0px;\r\n  }\r\n  \r\n  .login-form-submit-btn.loading {\r\n    opacity: 0.9;\r\n  }\r\n  \r\n  .login-form-submit-btn.loading span:after {\r\n    color: rgb(232, 232, 232);\r\n    content: ' .';\r\n    -webkit-animation: dots 1.2s steps(5, end) infinite;\r\n            animation: dots 1.2s steps(5, end) infinite;\r\n  }", "",{"version":3,"sources":["webpack://styles/login.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;IACjB,yBAAyB;EAC3B;;EAEA;IACE,yBAAiB;OAAjB,sBAAiB;QAAjB,qBAAiB;YAAjB,iBAAiB;EACnB;;EAEA;IACE,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,yCAAyC;IACzC,sBAAsB;IACtB,kBAAkB;IAClB,kBAAkB;IAGlB,sBAAsB;IACtB,kBAAkB;IAClB,QAAQ;IACR,SAAS;IAET,uCAAuC;IACvC,+BAA+B;EACjC;;EAEA;IACE,wCAAwC;IACxC,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;IACf,mBAAmB;IACnB,cAAc;IACd,iBAAiB;IACjB,oBAAoB;IACpB,eAAe;EACjB;;EAEA;IACE,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,qBAAqB;IACrB,mBAAmB;EACrB;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,WAAW;EACb;;EAEA;;IAEE,eAAe;IACf,mBAAmB;IACnB,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,sBAAsB;IACtB,gBAAgB;IAChB,yBAAyB;IACzB,uBAAuB;IACvB,iBAAiB;IACjB,cAAc;IACd,yBAAiB;OAAjB,sBAAiB;QAAjB,qBAAiB;YAAjB,iBAAiB;EACnB;;EAEA;;IAEE,qBAAqB;EACvB;;EAEA;;IAEE,qBAAqB;EACvB;;EAEA;IAEE,aAAa;EACf;;EAHA;IAEE,aAAa;EACf;;EAHA;;IAEE,aAAa;EACf;;EAEA;IACE,cAAc;IACd,eAAe;IACf,gBAAgB;EAClB;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;EACjB;;EAEA;IACE,mBAAmB;IACnB,WAAW;IACX,qBAAqB;IACrB,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,0BAA0B;EAC5B;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,yBAAyB;IACzB,aAAa;IACb,mDAA2C;YAA3C,2CAA2C;EAC7C","sourcesContent":[".login-wrapper {\r\n    min-height: 100vh;\r\n    background-color: #F5F9FD;\r\n  }\r\n  \r\n  .login-content-container {\r\n    user-select: none;\r\n  }\r\n  \r\n  .login-form-container {\r\n    width: 500px;\r\n    margin: auto;\r\n    padding: 45px 48px;\r\n    box-shadow: 0 2px 4px 0 rgba(39,64,89,.4);\r\n    background-color: #fff;\r\n    border-radius: 2px;\r\n    position: relative;\r\n    -webkit-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    position: absolute;\r\n    top: 45%;\r\n    left: 50%;\r\n    -ms-transform: translateX(-50%) translateY(-45%);\r\n    -webkit-transform: translate(-50%,-45%);\r\n    transform: translate(-50%,-45%);\r\n  }\r\n  \r\n  .login-form-error-block {\r\n    background-color: rgb(184, 60, 59, 0.95);\r\n    padding-left: 12px;\r\n    border-radius: 3px;\r\n    margin-top: 8px;\r\n    margin-bottom: 25px;\r\n    color: #f0f0f0;\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    font-size: 15px;\r\n  }\r\n  \r\n  .login-form-top-header {\r\n    font-size: 32px;\r\n    font-weight: 400;\r\n    line-height: 1.38;\r\n    text-align: center;\r\n    color: rgba(0,0,0,.7);\r\n    margin-bottom: 40px;\r\n  }\r\n  \r\n  .login-form-field {\r\n    margin-bottom: 15px;\r\n  }\r\n  \r\n  .login-form-field input {\r\n    width: 100%;\r\n  }\r\n  \r\n  .login-form-field input[type=email],\r\n  .login-form-field input[type=password] {\r\n    font-size: 16px;\r\n    line-height: normal;\r\n    padding: 17px 0;\r\n    text-indent: 20px;\r\n    border-radius: 3px;\r\n    background-color: #fff;\r\n    box-shadow: none;\r\n    border: 1px solid #cacbcc;\r\n    box-sizing: content-box;\r\n    overflow: visible;\r\n    color: #26394d;\r\n    user-select: none;\r\n  }\r\n  \r\n  .login-form-field input[type=email].error,\r\n  .login-form-field input[type=password].error {\r\n    border-color: #cb3837;\r\n  }\r\n  \r\n  .login-form-field input[type=email]:hover,\r\n  .login-form-field input[type=password]:hover {\r\n    border-color: #357edd;\r\n  }\r\n  \r\n  .login-form-field input[type=email]::placeholder,\r\n  .login-form-field input[type=password]::placeholder {\r\n    opacity: 0.75;\r\n  }\r\n  \r\n  .login-form-error-msg {\r\n    color: #cb3837;\r\n    font-size: 14px;\r\n    margin-top: 10px;\r\n  }\r\n  \r\n  .login-form-submit-btn-container {\r\n    width: 100%;\r\n    margin: auto;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .login-form-submit-btn {\r\n    background: #357edd;\r\n    color: #fff;\r\n    letter-spacing: 0.3px;\r\n    font-size: 16px;\r\n    font-weight: 700;\r\n    border-radius: 2px;\r\n    padding: 18px 0px 18px 0px;\r\n  }\r\n  \r\n  .login-form-submit-btn.loading {\r\n    opacity: 0.9;\r\n  }\r\n  \r\n  .login-form-submit-btn.loading span:after {\r\n    color: rgb(232, 232, 232);\r\n    content: ' .';\r\n    animation: dots 1.2s steps(5, end) infinite;\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-dev-runtime.development.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.1
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev

var jsxDEV$1 =  jsxWithValidation ;

exports.jsxDEV = jsxDEV$1;
  })();
}


/***/ }),

/***/ "./node_modules/react/jsx-dev-runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react/jsx-dev-runtime.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-dev-runtime.development.js */ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js");
}


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

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
/* harmony import */ var _styles_components_modals_delete_blog_post_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/components/modals/delete-blog-post.css */ "./styles/components/modals/delete-blog-post.css");
/* harmony import */ var _styles_components_modals_delete_blog_post_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_components_modals_delete_blog_post_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! codemirror/lib/codemirror.css */ "./node_modules/codemirror/lib/codemirror.css");
/* harmony import */ var codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(codemirror_lib_codemirror_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var codemirror_theme_dracula_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! codemirror/theme/dracula.css */ "./node_modules/codemirror/theme/dracula.css");
/* harmony import */ var codemirror_theme_dracula_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(codemirror_theme_dracula_css__WEBPACK_IMPORTED_MODULE_12__);


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
    lineNumber: 21,
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

/***/ }),

/***/ "./styles/blog/create-new-post.css":
/*!*****************************************!*\
  !*** ./styles/blog/create-new-post.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./create-new-post.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/blog/create-new-post.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./create-new-post.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/blog/create-new-post.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./create-new-post.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/blog/create-new-post.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./styles/blog/edit.css":
/*!******************************!*\
  !*** ./styles/blog/edit.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./edit.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/blog/edit.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./edit.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/blog/edit.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./edit.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/blog/edit.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./styles/blog/index.css":
/*!*******************************!*\
  !*** ./styles/blog/index.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/blog/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/blog/index.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/blog/index.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./styles/components/header.css":
/*!**************************************!*\
  !*** ./styles/components/header.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./header.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/components/header.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./header.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/components/header.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./header.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/components/header.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./styles/components/modals/delete-blog-post.css":
/*!*******************************************************!*\
  !*** ./styles/components/modals/delete-blog-post.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./delete-blog-post.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/components/modals/delete-blog-post.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./delete-blog-post.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/components/modals/delete-blog-post.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./delete-blog-post.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/components/modals/delete-blog-post.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./styles/components/sidebar.css":
/*!***************************************!*\
  !*** ./styles/components/sidebar.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./sidebar.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/components/sidebar.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./sidebar.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/components/sidebar.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./sidebar.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/components/sidebar.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./styles/images/index.css":
/*!*********************************!*\
  !*** ./styles/images/index.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/images/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/images/index.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/images/index.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./styles/layout.css":
/*!***************************!*\
  !*** ./styles/layout.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./layout.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/layout.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./layout.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/layout.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./layout.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/layout.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./styles/login.css":
/*!**************************!*\
  !*** ./styles/login.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./login.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/login.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./login.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/login.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./login.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/login.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvY29kZW1pcnJvci9saWIvY29kZW1pcnJvci5jc3M/YmEyMyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2NvZGVtaXJyb3IvdGhlbWUvZHJhY3VsYS5jc3M/YTI2NiIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2NvZGVtaXJyb3IvbGliL2NvZGVtaXJyb3IuY3NzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvY29kZW1pcnJvci90aGVtZS9kcmFjdWxhLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2Jsb2cvY3JlYXRlLW5ldy1wb3N0LmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2Jsb2cvZWRpdC5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9ibG9nL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2NvbXBvbmVudHMvaGVhZGVyLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2NvbXBvbmVudHMvbW9kYWxzL2RlbGV0ZS1ibG9nLXBvc3QuY3NzIiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvY29tcG9uZW50cy9zaWRlYmFyLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2ltYWdlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9sYXlvdXQuY3NzIiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvbG9naW4uY3NzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL19OX0UvKHdlYnBhY2spL2J1aWxkaW4vaGFybW9ueS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9ibG9nL2NyZWF0ZS1uZXctcG9zdC5jc3M/NmMxNyIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2Jsb2cvZWRpdC5jc3M/MGNjZCIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2Jsb2cvaW5kZXguY3NzP2U2YjkiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9jb21wb25lbnRzL2hlYWRlci5jc3M/ODc4ZCIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2NvbXBvbmVudHMvbW9kYWxzL2RlbGV0ZS1ibG9nLXBvc3QuY3NzPzIzYTkiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9jb21wb25lbnRzL3NpZGViYXIuY3NzP2Y4YTIiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9pbWFnZXMvaW5kZXguY3NzPzNmOGUiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9sYXlvdXQuY3NzPzMyNmIiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9sb2dpbi5jc3M/MWM2NyJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7O0FDYkEsVUFBVSxtQkFBTyxDQUFDLHlJQUE4RDtBQUNoRiwwQkFBMEIsbUJB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssRUFBRTs7QUFFUCxpREFBaUQ7QUFDakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQzs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFROztBQUVSO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0EsU0FBUztBQUNULHdCQUF3QjtBQUN4QjtBQUNBLFNBQVM7QUFDVCx3QkFBd0I7QUFDeEI7QUFDQSxTQUFTO0FBQ1QseUJBQXlCO0FBQ3pCO0FBQ0EsU0FBUztBQUNULHlCQUF5QjtBQUN6QjtBQUNBLFNBQVM7QUFDVCxrQ0FBa0M7QUFDbEM7QUFDQSxTQUFTO0FBQ1QsNEJBQTRCO0FBQzVCO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMERBQTBEOztBQUUxRDtBQUNBOztBQUVBO0FBQ0Esd0RBQXdEO0FBQ3hEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFROzs7QUFHUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLGtCQUFrQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7O0FBR2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOzs7QUFHSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEhBQTBIO0FBQzFIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUVBQW1FOztBQUVuRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFdBQVcsY0FBYztBQUN6QixXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRTtBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsMkRBQTJELFNBQVM7QUFDcEUseUJBQXlCLFNBQVM7QUFDbEM7QUFDQSxhQUFhLFNBQVM7QUFDdEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLEVBQUU7QUFDYjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0REFBNEQ7QUFDNUQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckIsV0FBVyxFQUFFO0FBQ2I7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsMkNBQTJDOztBQUUzQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGlCQUFpQjtBQUNwQzs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZDQUE2QztBQUM3Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIscUJBQXFCO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDbHJDYTs7QUFFYixJQUFJLEtBQXFDLEVBQUUsRUFFMUM7QUFDRCxtQkFBbUIsbUJBQU8sQ0FBQyxpSEFBNEM7QUFDdkU7Ozs7Ozs7Ozs7Ozs7QUNOYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsd0JBQXdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsU0FBSTs7QUFFbkY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EscUVBQXFFLHFCQUFxQixhQUFhOztBQUV2Rzs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELEdBQUc7O0FBRUg7OztBQUdBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsNEJBQTRCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQiw2QkFBNkI7QUFDakQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7O0FDNVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0NBR0E7O0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEtBQVQsT0FBeUM7QUFBQSxNQUF4QkMsU0FBd0IsUUFBeEJBLFNBQXdCO0FBQUEsTUFBYkMsU0FBYSxRQUFiQSxTQUFhO0FBQ3RELHNCQUFPLHFFQUFDLFNBQUQsb0JBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7S0FGdUJGLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CeEIsVUFBVSxtQkFBTyxDQUFDLHNKQUEyRTtBQUM3RiwwQkFBMEIsbUJBQU8sQ0FBQywyU0FBbUs7O0FBRXJNOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0Esc0VBQXNFLHdDQUF3QztBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxJQUFJLElBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLDJTQUFtSztBQUN6SztBQUNBLGtCQUFrQixtQkFBTyxDQUFDLDJTQUFtSzs7QUFFN0w7O0FBRUE7QUFDQSw0QkFBNEIsUUFBUztBQUNyQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxzQzs7Ozs7Ozs7Ozs7QUM3RUEsVUFBVSxtQkFBTyxDQUFDLHNKQUEyRTtBQUM3RiwwQkFBMEIsbUJBQU8sQ0FBQyxxUkFBd0o7O0FBRTFMOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0Esc0VBQXNFLHdDQUF3QztBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxJQUFJLElBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLHFSQUF3SjtBQUM5SjtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLHFSQUF3Sjs7QUFFbEw7O0FBRUE7QUFDQSw0QkFBNEIsUUFBUztBQUNyQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxzQzs7Ozs7Ozs7Ozs7QUM3RUEsVUFBVSxtQkFBTyxDQUFDLHNKQUEyRTtBQUM3RiwwQkFBMEIsbUJBQU8sQ0FBQyx1UkFBeUo7O0FBRTNMOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0Esc0VBQXNFLHdDQUF3QztBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxJQUFJLElBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLHVSQUF5SjtBQUMvSjtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLHVSQUF5Sjs7QUFFbkw7O0FBRUE7QUFDQSw0QkFBNEIsUUFBUztBQUNyQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxzQzs7Ozs7Ozs7Ozs7QUM3RUEsVUFBVSxtQkFBTyxDQUFDLHNKQUEyRTtBQUM3RiwwQkFBMEIsbUJBQU8sQ0FBQywrUkFBMEo7O0FBRTVMOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0Esc0VBQXNFLHdDQUF3QztBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxJQUFJLElBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLCtSQUEwSjtBQUNoSztBQUNBLGtCQUFrQixtQkFBTyxDQUFDLCtSQUEwSjs7QUFFcEw7O0FBRUE7QUFDQSw0QkFBNEIsUUFBUztBQUNyQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxzQzs7Ozs7Ozs7Ozs7QUM3RUEsVUFBVSxtQkFBTyxDQUFDLHlKQUE4RTtBQUNoRywwQkFBMEIsbUJBQU8sQ0FBQyxnVUFBMEs7O0FBRTVNOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0Esc0VBQXNFLHdDQUF3QztBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxJQUFJLElBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLGdVQUEwSztBQUNoTDtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLGdVQUEwSzs7QUFFcE07O0FBRUE7QUFDQSw0QkFBNEIsUUFBUztBQUNyQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxzQzs7Ozs7Ozs7Ozs7QUM3RUEsVUFBVSxtQkFBTyxDQUFDLHNKQUEyRTtBQUM3RiwwQkFBMEIsbUJBQU8sQ0FBQyxpU0FBMko7O0FBRTdMOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0Esc0VBQXNFLHdDQUF3QztBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxJQUFJLElBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLGlTQUEySjtBQUNqSztBQUNBLGtCQUFrQixtQkFBTyxDQUFDLGlTQUEySjs7QUFFckw7O0FBRUE7QUFDQSw0QkFBNEIsUUFBUztBQUNyQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxzQzs7Ozs7Ozs7Ozs7QUM3RUEsVUFBVSxtQkFBTyxDQUFDLHNKQUEyRTtBQUM3RiwwQkFBMEIsbUJBQU8sQ0FBQyx5UkFBeUo7O0FBRTNMOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0Esc0VBQXNFLHdDQUF3QztBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxJQUFJLElBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLHlSQUF5SjtBQUMvSjtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLHlSQUF5Sjs7QUFFbkw7O0FBRUE7QUFDQSw0QkFBNEIsUUFBUztBQUNyQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxzQzs7Ozs7Ozs7Ozs7QUM3RUEsVUFBVSxtQkFBTyxDQUFDLG1KQUF3RTtBQUMxRiwwQkFBMEIsbUJBQU8sQ0FBQyw4UUFBb0o7O0FBRXRMOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0Esc0VBQXNFLHdDQUF3QztBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxJQUFJLElBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLDhRQUFvSjtBQUMxSjtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLDhRQUFvSjs7QUFFOUs7O0FBRUE7QUFDQSw0QkFBNEIsUUFBUztBQUNyQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxzQzs7Ozs7Ozs7Ozs7QUM3RUEsVUFBVSxtQkFBTyxDQUFDLG1KQUF3RTtBQUMxRiwwQkFBMEIsbUJBQU8sQ0FBQyw0UUFBbUo7O0FBRXJMOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0Esc0VBQXNFLHdDQUF3QztBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxJQUFJLElBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLDRRQUFtSjtBQUN6SjtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLDRRQUFtSjs7QUFFN0s7O0FBRUE7QUFDQSw0QkFBNEIsUUFBUztBQUNyQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxzQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjdlNTdlZjY3N2U3M2M3NjhlZDllLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTUtMSEuLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtNS0yIS4vY29kZW1pcnJvci5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYikge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi01LTEhLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTUtMiEuL2NvZGVtaXJyb3IuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtNS0xIS4uLy4uL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi01LTIhLi9jb2RlbWlycm9yLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTUtMSEuLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtNS0yIS4vZHJhY3VsYS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYikge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi01LTEhLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTUtMiEuL2RyYWN1bGEuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtNS0xIS4uLy4uL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi01LTIhLi9kcmFjdWxhLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEJBU0lDUyAqL1xcblxcbi5Db2RlTWlycm9yIHtcXG4gIC8qIFNldCBoZWlnaHQsIHdpZHRoLCBib3JkZXJzLCBhbmQgZ2xvYmFsIGZvbnQgcHJvcGVydGllcyBoZXJlICovXFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGRpcmVjdGlvbjogbHRyO1xcbn1cXG5cXG4vKiBQQURESU5HICovXFxuXFxuLkNvZGVNaXJyb3ItbGluZXMge1xcbiAgcGFkZGluZzogNHB4IDA7IC8qIFZlcnRpY2FsIHBhZGRpbmcgYXJvdW5kIGNvbnRlbnQgKi9cXG59XFxuLkNvZGVNaXJyb3IgcHJlLkNvZGVNaXJyb3ItbGluZSxcXG4uQ29kZU1pcnJvciBwcmUuQ29kZU1pcnJvci1saW5lLWxpa2Uge1xcbiAgcGFkZGluZzogMCA0cHg7IC8qIEhvcml6b250YWwgcGFkZGluZyBvZiBjb250ZW50ICovXFxufVxcblxcbi5Db2RlTWlycm9yLXNjcm9sbGJhci1maWxsZXIsIC5Db2RlTWlycm9yLWd1dHRlci1maWxsZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IC8qIFRoZSBsaXR0bGUgc3F1YXJlIGJldHdlZW4gSCBhbmQgViBzY3JvbGxiYXJzICovXFxufVxcblxcbi8qIEdVVFRFUiAqL1xcblxcbi5Db2RlTWlycm9yLWd1dHRlcnMge1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RkZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4uQ29kZU1pcnJvci1saW5lbnVtYmVycyB7fVxcbi5Db2RlTWlycm9yLWxpbmVudW1iZXIge1xcbiAgcGFkZGluZzogMCAzcHggMCA1cHg7XFxuICBtaW4td2lkdGg6IDIwcHg7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGNvbG9yOiAjOTk5O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLkNvZGVNaXJyb3ItZ3V0dGVybWFya2VyIHsgY29sb3I6IGJsYWNrOyB9XFxuLkNvZGVNaXJyb3ItZ3V0dGVybWFya2VyLXN1YnRsZSB7IGNvbG9yOiAjOTk5OyB9XFxuXFxuLyogQ1VSU09SICovXFxuXFxuLkNvZGVNaXJyb3ItY3Vyc29yIHtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICB3aWR0aDogMDtcXG59XFxuLyogU2hvd24gd2hlbiBtb3ZpbmcgaW4gYmktZGlyZWN0aW9uYWwgdGV4dCAqL1xcbi5Db2RlTWlycm9yIGRpdi5Db2RlTWlycm9yLXNlY29uZGFyeWN1cnNvciB7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHNpbHZlcjtcXG59XFxuLmNtLWZhdC1jdXJzb3IgLkNvZGVNaXJyb3ItY3Vyc29yIHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAjN2U3O1xcbn1cXG4uY20tZmF0LWN1cnNvciBkaXYuQ29kZU1pcnJvci1jdXJzb3JzIHtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5jbS1mYXQtY3Vyc29yLW1hcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMCwgMjU1LCAyMCwgMC41KTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBibGluayAxLjA2cyBzdGVwcygxKSBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbjogYmxpbmsgMS4wNnMgc3RlcHMoMSkgaW5maW5pdGU7XFxufVxcbi5jbS1hbmltYXRlLWZhdC1jdXJzb3Ige1xcbiAgd2lkdGg6IGF1dG87XFxuICBib3JkZXI6IDA7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogYmxpbmsgMS4wNnMgc3RlcHMoMSkgaW5maW5pdGU7XFxuICBhbmltYXRpb246IGJsaW5rIDEuMDZzIHN0ZXBzKDEpIGluZmluaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdlNztcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5rIHtcXG4gIDAlIHt9XFxuICA1MCUgeyBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcbiAgMTAwJSB7fVxcbn1cXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcXG4gIDAlIHt9XFxuICA1MCUgeyBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcbiAgMTAwJSB7fVxcbn1cXG5cXG4vKiBDYW4gc3R5bGUgY3Vyc29yIGRpZmZlcmVudCBpbiBvdmVyd3JpdGUgKG5vbi1pbnNlcnQpIG1vZGUgKi9cXG4uQ29kZU1pcnJvci1vdmVyd3JpdGUgLkNvZGVNaXJyb3ItY3Vyc29yIHt9XFxuXFxuLmNtLXRhYiB7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0OyB9XFxuXFxuLkNvZGVNaXJyb3ItcnVsZXJzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7IHJpZ2h0OiAwOyB0b3A6IC01MHB4OyBib3R0b206IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uQ29kZU1pcnJvci1ydWxlciB7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNjY2M7XFxuICB0b3A6IDA7IGJvdHRvbTogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLyogREVGQVVMVCBUSEVNRSAqL1xcblxcbi5jbS1zLWRlZmF1bHQgLmNtLWhlYWRlciB7Y29sb3I6IGJsdWU7fVxcbi5jbS1zLWRlZmF1bHQgLmNtLXF1b3RlIHtjb2xvcjogIzA5MDt9XFxuLmNtLW5lZ2F0aXZlIHtjb2xvcjogI2Q0NDt9XFxuLmNtLXBvc2l0aXZlIHtjb2xvcjogIzI5Mjt9XFxuLmNtLWhlYWRlciwgLmNtLXN0cm9uZyB7Zm9udC13ZWlnaHQ6IGJvbGQ7fVxcbi5jbS1lbSB7Zm9udC1zdHlsZTogaXRhbGljO31cXG4uY20tbGluayB7dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7fVxcbi5jbS1zdHJpa2V0aHJvdWdoIHt0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDt9XFxuXFxuLmNtLXMtZGVmYXVsdCAuY20ta2V5d29yZCB7Y29sb3I6ICM3MDg7fVxcbi5jbS1zLWRlZmF1bHQgLmNtLWF0b20ge2NvbG9yOiAjMjE5O31cXG4uY20tcy1kZWZhdWx0IC5jbS1udW1iZXIge2NvbG9yOiAjMTY0O31cXG4uY20tcy1kZWZhdWx0IC5jbS1kZWYge2NvbG9yOiAjMDBmO31cXG4uY20tcy1kZWZhdWx0IC5jbS12YXJpYWJsZSxcXG4uY20tcy1kZWZhdWx0IC5jbS1wdW5jdHVhdGlvbixcXG4uY20tcy1kZWZhdWx0IC5jbS1wcm9wZXJ0eSxcXG4uY20tcy1kZWZhdWx0IC5jbS1vcGVyYXRvciB7fVxcbi5jbS1zLWRlZmF1bHQgLmNtLXZhcmlhYmxlLTIge2NvbG9yOiAjMDVhO31cXG4uY20tcy1kZWZhdWx0IC5jbS12YXJpYWJsZS0zLCAuY20tcy1kZWZhdWx0IC5jbS10eXBlIHtjb2xvcjogIzA4NTt9XFxuLmNtLXMtZGVmYXVsdCAuY20tY29tbWVudCB7Y29sb3I6ICNhNTA7fVxcbi5jbS1zLWRlZmF1bHQgLmNtLXN0cmluZyB7Y29sb3I6ICNhMTE7fVxcbi5jbS1zLWRlZmF1bHQgLmNtLXN0cmluZy0yIHtjb2xvcjogI2Y1MDt9XFxuLmNtLXMtZGVmYXVsdCAuY20tbWV0YSB7Y29sb3I6ICM1NTU7fVxcbi5jbS1zLWRlZmF1bHQgLmNtLXF1YWxpZmllciB7Y29sb3I6ICM1NTU7fVxcbi5jbS1zLWRlZmF1bHQgLmNtLWJ1aWx0aW4ge2NvbG9yOiAjMzBhO31cXG4uY20tcy1kZWZhdWx0IC5jbS1icmFja2V0IHtjb2xvcjogIzk5Nzt9XFxuLmNtLXMtZGVmYXVsdCAuY20tdGFnIHtjb2xvcjogIzE3MDt9XFxuLmNtLXMtZGVmYXVsdCAuY20tYXR0cmlidXRlIHtjb2xvcjogIzAwYzt9XFxuLmNtLXMtZGVmYXVsdCAuY20taHIge2NvbG9yOiAjOTk5O31cXG4uY20tcy1kZWZhdWx0IC5jbS1saW5rIHtjb2xvcjogIzAwYzt9XFxuXFxuLmNtLXMtZGVmYXVsdCAuY20tZXJyb3Ige2NvbG9yOiAjZjAwO31cXG4uY20taW52YWxpZGNoYXIge2NvbG9yOiAjZjAwO31cXG5cXG4uQ29kZU1pcnJvci1jb21wb3NpbmcgeyBib3JkZXItYm90dG9tOiAycHggc29saWQ7IH1cXG5cXG4vKiBEZWZhdWx0IHN0eWxlcyBmb3IgY29tbW9uIGFkZG9ucyAqL1xcblxcbmRpdi5Db2RlTWlycm9yIHNwYW4uQ29kZU1pcnJvci1tYXRjaGluZ2JyYWNrZXQge2NvbG9yOiAjMGIwO31cXG5kaXYuQ29kZU1pcnJvciBzcGFuLkNvZGVNaXJyb3Itbm9ubWF0Y2hpbmdicmFja2V0IHtjb2xvcjogI2EyMjt9XFxuLkNvZGVNaXJyb3ItbWF0Y2hpbmd0YWcgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTUwLCAwLCAuMyk7IH1cXG4uQ29kZU1pcnJvci1hY3RpdmVsaW5lLWJhY2tncm91bmQge2JhY2tncm91bmQ6ICNlOGYyZmY7fVxcblxcbi8qIFNUT1AgKi9cXG5cXG4vKiBUaGUgcmVzdCBvZiB0aGlzIGZpbGUgY29udGFpbnMgc3R5bGVzIHJlbGF0ZWQgdG8gdGhlIG1lY2hhbmljcyBvZlxcbiAgIHRoZSBlZGl0b3IuIFlvdSBwcm9iYWJseSBzaG91bGRuJ3QgdG91Y2ggdGhlbS4gKi9cXG5cXG4uQ29kZU1pcnJvciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcblxcbi5Db2RlTWlycm9yLXNjcm9sbCB7XFxuICBvdmVyZmxvdzogc2Nyb2xsICFpbXBvcnRhbnQ7IC8qIFRoaW5ncyB3aWxsIGJyZWFrIGlmIHRoaXMgaXMgb3ZlcnJpZGRlbiAqL1xcbiAgLyogNTBweCBpcyB0aGUgbWFnaWMgbWFyZ2luIHVzZWQgdG8gaGlkZSB0aGUgZWxlbWVudCdzIHJlYWwgc2Nyb2xsYmFycyAqL1xcbiAgLyogU2VlIG92ZXJmbG93OiBoaWRkZW4gaW4gLkNvZGVNaXJyb3IgKi9cXG4gIG1hcmdpbi1ib3R0b206IC01MHB4OyBtYXJnaW4tcmlnaHQ6IC01MHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdXRsaW5lOiBub25lOyAvKiBQcmV2ZW50IGRyYWdnaW5nIGZyb20gaGlnaGxpZ2h0aW5nIHRoZSBlbGVtZW50ICovXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5Db2RlTWlycm9yLXNpemVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlci1yaWdodDogNTBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyogVGhlIGZha2UsIHZpc2libGUgc2Nyb2xsYmFycy4gVXNlZCB0byBmb3JjZSByZWRyYXcgZHVyaW5nIHNjcm9sbGluZ1xcbiAgIGJlZm9yZSBhY3R1YWwgc2Nyb2xsaW5nIGhhcHBlbnMsIHRodXMgcHJldmVudGluZyBzaGFraW5nIGFuZFxcbiAgIGZsaWNrZXJpbmcgYXJ0aWZhY3RzLiAqL1xcbi5Db2RlTWlycm9yLXZzY3JvbGxiYXIsIC5Db2RlTWlycm9yLWhzY3JvbGxiYXIsIC5Db2RlTWlycm9yLXNjcm9sbGJhci1maWxsZXIsIC5Db2RlTWlycm9yLWd1dHRlci1maWxsZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogNjtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4uQ29kZU1pcnJvci12c2Nyb2xsYmFyIHtcXG4gIHJpZ2h0OiAwOyB0b3A6IDA7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcbi5Db2RlTWlycm9yLWhzY3JvbGxiYXIge1xcbiAgYm90dG9tOiAwOyBsZWZ0OiAwO1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcbn1cXG4uQ29kZU1pcnJvci1zY3JvbGxiYXItZmlsbGVyIHtcXG4gIHJpZ2h0OiAwOyBib3R0b206IDA7XFxufVxcbi5Db2RlTWlycm9yLWd1dHRlci1maWxsZXIge1xcbiAgbGVmdDogMDsgYm90dG9tOiAwO1xcbn1cXG5cXG4uQ29kZU1pcnJvci1ndXR0ZXJzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMDsgdG9wOiAwO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIHotaW5kZXg6IDM7XFxufVxcbi5Db2RlTWlycm9yLWd1dHRlciB7XFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gIG1hcmdpbi1ib3R0b206IC01MHB4O1xcbn1cXG4uQ29kZU1pcnJvci1ndXR0ZXItd3JhcHBlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiA0O1xcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XFxufVxcbi5Db2RlTWlycm9yLWd1dHRlci1iYWNrZ3JvdW5kIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDsgYm90dG9tOiAwO1xcbiAgei1pbmRleDogNDtcXG59XFxuLkNvZGVNaXJyb3ItZ3V0dGVyLWVsdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICB6LWluZGV4OiA0O1xcbn1cXG4uQ29kZU1pcnJvci1ndXR0ZXItd3JhcHBlciA6OnNlbGVjdGlvbiB7IGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IH1cXG4uQ29kZU1pcnJvci1ndXR0ZXItd3JhcHBlciA6Oi1tb3otc2VsZWN0aW9uIHsgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgfVxcblxcbi5Db2RlTWlycm9yLWxpbmVzIHtcXG4gIGN1cnNvcjogdGV4dDtcXG4gIG1pbi1oZWlnaHQ6IDFweDsgLyogcHJldmVudHMgY29sbGFwc2luZyBiZWZvcmUgZmlyc3QgZHJhdyAqL1xcbn1cXG4uQ29kZU1pcnJvciBwcmUuQ29kZU1pcnJvci1saW5lLFxcbi5Db2RlTWlycm9yIHByZS5Db2RlTWlycm9yLWxpbmUtbGlrZSB7XFxuICAvKiBSZXNldCBzb21lIHN0eWxlcyB0aGF0IHRoZSByZXN0IG9mIHRoZSBwYWdlIG1pZ2h0IGhhdmUgc2V0ICovIGJvcmRlci1yYWRpdXM6IDA7XFxuICBib3JkZXItd2lkdGg6IDA7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgbWFyZ2luOiAwO1xcbiAgd2hpdGUtc3BhY2U6IHByZTtcXG4gIHdvcmQtd3JhcDogbm9ybWFsO1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHotaW5kZXg6IDI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAtd2Via2l0LWZvbnQtdmFyaWFudC1saWdhdHVyZXM6IGNvbnRleHR1YWw7XFxuICAtd2Via2l0LWZvbnQtZmVhdHVyZS1zZXR0aW5nczogXFxcImNhbHRcXFwiO1xcbiAgICAgICAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IFxcXCJjYWx0XFxcIjtcXG4gIGZvbnQtdmFyaWFudC1saWdhdHVyZXM6IGNvbnRleHR1YWw7XFxufVxcbi5Db2RlTWlycm9yLXdyYXAgcHJlLkNvZGVNaXJyb3ItbGluZSxcXG4uQ29kZU1pcnJvci13cmFwIHByZS5Db2RlTWlycm9yLWxpbmUtbGlrZSB7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxuICB3b3JkLWJyZWFrOiBub3JtYWw7XFxufVxcblxcbi5Db2RlTWlycm9yLWxpbmViYWNrZ3JvdW5kIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7IHJpZ2h0OiAwOyB0b3A6IDA7IGJvdHRvbTogMDtcXG4gIHotaW5kZXg6IDA7XFxufVxcblxcbi5Db2RlTWlycm9yLWxpbmV3aWRnZXQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMjtcXG4gIHBhZGRpbmc6IDAuMXB4OyAvKiBGb3JjZSB3aWRnZXQgbWFyZ2lucyB0byBzdGF5IGluc2lkZSBvZiB0aGUgY29udGFpbmVyICovXFxufVxcblxcbi5Db2RlTWlycm9yLXdpZGdldCB7fVxcblxcbi5Db2RlTWlycm9yLXJ0bCBwcmUgeyBkaXJlY3Rpb246IHJ0bDsgfVxcblxcbi5Db2RlTWlycm9yLWNvZGUge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLyogRm9yY2UgY29udGVudC1ib3ggc2l6aW5nIGZvciB0aGUgZWxlbWVudHMgd2hlcmUgd2UgZXhwZWN0IGl0ICovXFxuLkNvZGVNaXJyb3Itc2Nyb2xsLFxcbi5Db2RlTWlycm9yLXNpemVyLFxcbi5Db2RlTWlycm9yLWd1dHRlcixcXG4uQ29kZU1pcnJvci1ndXR0ZXJzLFxcbi5Db2RlTWlycm9yLWxpbmVudW1iZXIge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxufVxcblxcbi5Db2RlTWlycm9yLW1lYXN1cmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uQ29kZU1pcnJvci1jdXJzb3Ige1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5Db2RlTWlycm9yLW1lYXN1cmUgcHJlIHsgcG9zaXRpb246IHN0YXRpYzsgfVxcblxcbmRpdi5Db2RlTWlycm9yLWN1cnNvcnMge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMztcXG59XFxuZGl2LkNvZGVNaXJyb3ItZHJhZ2N1cnNvcnMge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLkNvZGVNaXJyb3ItZm9jdXNlZCBkaXYuQ29kZU1pcnJvci1jdXJzb3JzIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5Db2RlTWlycm9yLXNlbGVjdGVkIHsgYmFja2dyb3VuZDogI2Q5ZDlkOTsgfVxcbi5Db2RlTWlycm9yLWZvY3VzZWQgLkNvZGVNaXJyb3Itc2VsZWN0ZWQgeyBiYWNrZ3JvdW5kOiAjZDdkNGYwOyB9XFxuLkNvZGVNaXJyb3ItY3Jvc3NoYWlyIHsgY3Vyc29yOiBjcm9zc2hhaXI7IH1cXG4uQ29kZU1pcnJvci1saW5lOjpzZWxlY3Rpb24sIC5Db2RlTWlycm9yLWxpbmUgPiBzcGFuOjpzZWxlY3Rpb24sIC5Db2RlTWlycm9yLWxpbmUgPiBzcGFuID4gc3Bhbjo6c2VsZWN0aW9uIHsgYmFja2dyb3VuZDogI2Q3ZDRmMDsgfVxcbi5Db2RlTWlycm9yLWxpbmU6Oi1tb3otc2VsZWN0aW9uLCAuQ29kZU1pcnJvci1saW5lID4gc3Bhbjo6LW1vei1zZWxlY3Rpb24sIC5Db2RlTWlycm9yLWxpbmUgPiBzcGFuID4gc3Bhbjo6LW1vei1zZWxlY3Rpb24geyBiYWNrZ3JvdW5kOiAjZDdkNGYwOyB9XFxuXFxuLmNtLXNlYXJjaGluZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMCwgLjQpO1xcbn1cXG5cXG4vKiBVc2VkIHRvIGZvcmNlIGEgYm9yZGVyIG1vZGVsIGZvciBhIG5vZGUgKi9cXG4uY20tZm9yY2UtYm9yZGVyIHsgcGFkZGluZy1yaWdodDogLjFweDsgfVxcblxcbkBtZWRpYSBwcmludCB7XFxuICAvKiBIaWRlIHRoZSBjdXJzb3Igd2hlbiBwcmludGluZyAqL1xcbiAgLkNvZGVNaXJyb3IgZGl2LkNvZGVNaXJyb3ItY3Vyc29ycyB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIH1cXG59XFxuXFxuLyogU2VlIGlzc3VlICMyOTAxICovXFxuLmNtLXRhYi13cmFwLWhhY2s6YWZ0ZXIgeyBjb250ZW50OiAnJzsgfVxcblxcbi8qIEhlbHAgdXNlcnMgdXNlIG1hcmtzZWxlY3Rpb24gdG8gc2FmZWx5IHN0eWxlIHRleHQgYmFja2dyb3VuZCAqL1xcbnNwYW4uQ29kZU1pcnJvci1zZWxlY3RlZHRleHQgeyBiYWNrZ3JvdW5kOiBub25lOyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL25vZGVfbW9kdWxlcy9jb2RlbWlycm9yL2xpYi9jb2RlbWlycm9yLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxXQUFXOztBQUVYO0VBQ0UsZ0VBQWdFO0VBQ2hFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUEsWUFBWTs7QUFFWjtFQUNFLGNBQWMsRUFBRSxvQ0FBb0M7QUFDdEQ7QUFDQTs7RUFFRSxjQUFjLEVBQUUsa0NBQWtDO0FBQ3BEOztBQUVBO0VBQ0UsdUJBQXVCLEVBQUUsaURBQWlEO0FBQzVFOztBQUVBLFdBQVc7O0FBRVg7RUFDRSw0QkFBNEI7RUFDNUIseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjtBQUNBLHlCQUF5QjtBQUN6QjtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUEsMkJBQTJCLFlBQVksRUFBRTtBQUN6QyxrQ0FBa0MsV0FBVyxFQUFFOztBQUUvQyxXQUFXOztBQUVYO0VBQ0UsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixRQUFRO0FBQ1Y7QUFDQSw2Q0FBNkM7QUFDN0M7RUFDRSw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLHdDQUF3QztFQUN4QyxnREFBZ0Q7RUFFaEQsd0NBQXdDO0FBQzFDO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsU0FBUztFQUNULGdEQUFnRDtFQUVoRCx3Q0FBd0M7RUFDeEMsc0JBQXNCO0FBQ3hCO0FBTUE7RUFDRSxJQUFJO0VBQ0osTUFBTSw2QkFBNkIsRUFBRTtFQUNyQyxNQUFNO0FBQ1I7QUFDQTtFQUNFLElBQUk7RUFDSixNQUFNLDZCQUE2QixFQUFFO0VBQ3JDLE1BQU07QUFDUjs7QUFFQSw4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RyxtQkFBbUIsRUFBRTtBQUNsSSw0SEFBNEgsbUJBQW1CLEVBQUU7O0FBRWpKO0VBQ0Usc0JBQXNCO0VBQ3RCLHVDQUF1QztBQUN6Qzs7QUFFQSw0Q0FBNEM7QUFDNUMsbUJBQW1CLG1CQUFtQixFQUFFOztBQUV4QztFQUNFLGtDQUFrQztFQUNsQztJQUNFLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBLG9CQUFvQjtBQUNwQiwwQkFBMEIsV0FBVyxFQUFFOztBQUV2QyxpRUFBaUU7QUFDakUsK0JBQStCLGdCQUFnQixFQUFFXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEJBU0lDUyAqL1xcblxcbi5Db2RlTWlycm9yIHtcXG4gIC8qIFNldCBoZWlnaHQsIHdpZHRoLCBib3JkZXJzLCBhbmQgZ2xvYmFsIGZvbnQgcHJvcGVydGllcyBoZXJlICovXFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGRpcmVjdGlvbjogbHRyO1xcbn1cXG5cXG4vKiBQQURESU5HICovXFxuXFxuLkNvZGVNaXJyb3ItbGluZXMge1xcbiAgcGFkZGluZzogNHB4IDA7IC8qIFZlcnRpY2FsIHBhZGRpbmcgYXJvdW5kIGNvbnRlbnQgKi9cXG59XFxuLkNvZGVNaXJyb3IgcHJlLkNvZGVNaXJyb3ItbGluZSxcXG4uQ29kZU1pcnJvciBwcmUuQ29kZU1pcnJvci1saW5lLWxpa2Uge1xcbiAgcGFkZGluZzogMCA0cHg7IC8qIEhvcml6b250YWwgcGFkZGluZyBvZiBjb250ZW50ICovXFxufVxcblxcbi5Db2RlTWlycm9yLXNjcm9sbGJhci1maWxsZXIsIC5Db2RlTWlycm9yLWd1dHRlci1maWxsZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IC8qIFRoZSBsaXR0bGUgc3F1YXJlIGJldHdlZW4gSCBhbmQgViBzY3JvbGxiYXJzICovXFxufVxcblxcbi8qIEdVVFRFUiAqL1xcblxcbi5Db2RlTWlycm9yLWd1dHRlcnMge1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RkZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4uQ29kZU1pcnJvci1saW5lbnVtYmVycyB7fVxcbi5Db2RlTWlycm9yLWxpbmVudW1iZXIge1xcbiAgcGFkZGluZzogMCAzcHggMCA1cHg7XFxuICBtaW4td2lkdGg6IDIwcHg7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGNvbG9yOiAjOTk5O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLkNvZGVNaXJyb3ItZ3V0dGVybWFya2VyIHsgY29sb3I6IGJsYWNrOyB9XFxuLkNvZGVNaXJyb3ItZ3V0dGVybWFya2VyLXN1YnRsZSB7IGNvbG9yOiAjOTk5OyB9XFxuXFxuLyogQ1VSU09SICovXFxuXFxuLkNvZGVNaXJyb3ItY3Vyc29yIHtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICB3aWR0aDogMDtcXG59XFxuLyogU2hvd24gd2hlbiBtb3ZpbmcgaW4gYmktZGlyZWN0aW9uYWwgdGV4dCAqL1xcbi5Db2RlTWlycm9yIGRpdi5Db2RlTWlycm9yLXNlY29uZGFyeWN1cnNvciB7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHNpbHZlcjtcXG59XFxuLmNtLWZhdC1jdXJzb3IgLkNvZGVNaXJyb3ItY3Vyc29yIHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAjN2U3O1xcbn1cXG4uY20tZmF0LWN1cnNvciBkaXYuQ29kZU1pcnJvci1jdXJzb3JzIHtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5jbS1mYXQtY3Vyc29yLW1hcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMCwgMjU1LCAyMCwgMC41KTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBibGluayAxLjA2cyBzdGVwcygxKSBpbmZpbml0ZTtcXG4gIC1tb3otYW5pbWF0aW9uOiBibGluayAxLjA2cyBzdGVwcygxKSBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbjogYmxpbmsgMS4wNnMgc3RlcHMoMSkgaW5maW5pdGU7XFxufVxcbi5jbS1hbmltYXRlLWZhdC1jdXJzb3Ige1xcbiAgd2lkdGg6IGF1dG87XFxuICBib3JkZXI6IDA7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogYmxpbmsgMS4wNnMgc3RlcHMoMSkgaW5maW5pdGU7XFxuICAtbW96LWFuaW1hdGlvbjogYmxpbmsgMS4wNnMgc3RlcHMoMSkgaW5maW5pdGU7XFxuICBhbmltYXRpb246IGJsaW5rIDEuMDZzIHN0ZXBzKDEpIGluZmluaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdlNztcXG59XFxuQC1tb3ota2V5ZnJhbWVzIGJsaW5rIHtcXG4gIDAlIHt9XFxuICA1MCUgeyBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcbiAgMTAwJSB7fVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmxpbmsge1xcbiAgMCUge31cXG4gIDUwJSB7IGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuICAxMDAlIHt9XFxufVxcbkBrZXlmcmFtZXMgYmxpbmsge1xcbiAgMCUge31cXG4gIDUwJSB7IGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuICAxMDAlIHt9XFxufVxcblxcbi8qIENhbiBzdHlsZSBjdXJzb3IgZGlmZmVyZW50IGluIG92ZXJ3cml0ZSAobm9uLWluc2VydCkgbW9kZSAqL1xcbi5Db2RlTWlycm9yLW92ZXJ3cml0ZSAuQ29kZU1pcnJvci1jdXJzb3Ige31cXG5cXG4uY20tdGFiIHsgZGlzcGxheTogaW5saW5lLWJsb2NrOyB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7IH1cXG5cXG4uQ29kZU1pcnJvci1ydWxlcnMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDsgcmlnaHQ6IDA7IHRvcDogLTUwcHg7IGJvdHRvbTogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5Db2RlTWlycm9yLXJ1bGVyIHtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2NjYztcXG4gIHRvcDogMDsgYm90dG9tOiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4vKiBERUZBVUxUIFRIRU1FICovXFxuXFxuLmNtLXMtZGVmYXVsdCAuY20taGVhZGVyIHtjb2xvcjogYmx1ZTt9XFxuLmNtLXMtZGVmYXVsdCAuY20tcXVvdGUge2NvbG9yOiAjMDkwO31cXG4uY20tbmVnYXRpdmUge2NvbG9yOiAjZDQ0O31cXG4uY20tcG9zaXRpdmUge2NvbG9yOiAjMjkyO31cXG4uY20taGVhZGVyLCAuY20tc3Ryb25nIHtmb250LXdlaWdodDogYm9sZDt9XFxuLmNtLWVtIHtmb250LXN0eWxlOiBpdGFsaWM7fVxcbi5jbS1saW5rIHt0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTt9XFxuLmNtLXN0cmlrZXRocm91Z2gge3RleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO31cXG5cXG4uY20tcy1kZWZhdWx0IC5jbS1rZXl3b3JkIHtjb2xvcjogIzcwODt9XFxuLmNtLXMtZGVmYXVsdCAuY20tYXRvbSB7Y29sb3I6ICMyMTk7fVxcbi5jbS1zLWRlZmF1bHQgLmNtLW51bWJlciB7Y29sb3I6ICMxNjQ7fVxcbi5jbS1zLWRlZmF1bHQgLmNtLWRlZiB7Y29sb3I6ICMwMGY7fVxcbi5jbS1zLWRlZmF1bHQgLmNtLXZhcmlhYmxlLFxcbi5jbS1zLWRlZmF1bHQgLmNtLXB1bmN0dWF0aW9uLFxcbi5jbS1zLWRlZmF1bHQgLmNtLXByb3BlcnR5LFxcbi5jbS1zLWRlZmF1bHQgLmNtLW9wZXJhdG9yIHt9XFxuLmNtLXMtZGVmYXVsdCAuY20tdmFyaWFibGUtMiB7Y29sb3I6ICMwNWE7fVxcbi5jbS1zLWRlZmF1bHQgLmNtLXZhcmlhYmxlLTMsIC5jbS1zLWRlZmF1bHQgLmNtLXR5cGUge2NvbG9yOiAjMDg1O31cXG4uY20tcy1kZWZhdWx0IC5jbS1jb21tZW50IHtjb2xvcjogI2E1MDt9XFxuLmNtLXMtZGVmYXVsdCAuY20tc3RyaW5nIHtjb2xvcjogI2ExMTt9XFxuLmNtLXMtZGVmYXVsdCAuY20tc3RyaW5nLTIge2NvbG9yOiAjZjUwO31cXG4uY20tcy1kZWZhdWx0IC5jbS1tZXRhIHtjb2xvcjogIzU1NTt9XFxuLmNtLXMtZGVmYXVsdCAuY20tcXVhbGlmaWVyIHtjb2xvcjogIzU1NTt9XFxuLmNtLXMtZGVmYXVsdCAuY20tYnVpbHRpbiB7Y29sb3I6ICMzMGE7fVxcbi5jbS1zLWRlZmF1bHQgLmNtLWJyYWNrZXQge2NvbG9yOiAjOTk3O31cXG4uY20tcy1kZWZhdWx0IC5jbS10YWcge2NvbG9yOiAjMTcwO31cXG4uY20tcy1kZWZhdWx0IC5jbS1hdHRyaWJ1dGUge2NvbG9yOiAjMDBjO31cXG4uY20tcy1kZWZhdWx0IC5jbS1ociB7Y29sb3I6ICM5OTk7fVxcbi5jbS1zLWRlZmF1bHQgLmNtLWxpbmsge2NvbG9yOiAjMDBjO31cXG5cXG4uY20tcy1kZWZhdWx0IC5jbS1lcnJvciB7Y29sb3I6ICNmMDA7fVxcbi5jbS1pbnZhbGlkY2hhciB7Y29sb3I6ICNmMDA7fVxcblxcbi5Db2RlTWlycm9yLWNvbXBvc2luZyB7IGJvcmRlci1ib3R0b206IDJweCBzb2xpZDsgfVxcblxcbi8qIERlZmF1bHQgc3R5bGVzIGZvciBjb21tb24gYWRkb25zICovXFxuXFxuZGl2LkNvZGVNaXJyb3Igc3Bhbi5Db2RlTWlycm9yLW1hdGNoaW5nYnJhY2tldCB7Y29sb3I6ICMwYjA7fVxcbmRpdi5Db2RlTWlycm9yIHNwYW4uQ29kZU1pcnJvci1ub25tYXRjaGluZ2JyYWNrZXQge2NvbG9yOiAjYTIyO31cXG4uQ29kZU1pcnJvci1tYXRjaGluZ3RhZyB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxNTAsIDAsIC4zKTsgfVxcbi5Db2RlTWlycm9yLWFjdGl2ZWxpbmUtYmFja2dyb3VuZCB7YmFja2dyb3VuZDogI2U4ZjJmZjt9XFxuXFxuLyogU1RPUCAqL1xcblxcbi8qIFRoZSByZXN0IG9mIHRoaXMgZmlsZSBjb250YWlucyBzdHlsZXMgcmVsYXRlZCB0byB0aGUgbWVjaGFuaWNzIG9mXFxuICAgdGhlIGVkaXRvci4gWW91IHByb2JhYmx5IHNob3VsZG4ndCB0b3VjaCB0aGVtLiAqL1xcblxcbi5Db2RlTWlycm9yIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuXFxuLkNvZGVNaXJyb3Itc2Nyb2xsIHtcXG4gIG92ZXJmbG93OiBzY3JvbGwgIWltcG9ydGFudDsgLyogVGhpbmdzIHdpbGwgYnJlYWsgaWYgdGhpcyBpcyBvdmVycmlkZGVuICovXFxuICAvKiA1MHB4IGlzIHRoZSBtYWdpYyBtYXJnaW4gdXNlZCB0byBoaWRlIHRoZSBlbGVtZW50J3MgcmVhbCBzY3JvbGxiYXJzICovXFxuICAvKiBTZWUgb3ZlcmZsb3c6IGhpZGRlbiBpbiAuQ29kZU1pcnJvciAqL1xcbiAgbWFyZ2luLWJvdHRvbTogLTUwcHg7IG1hcmdpbi1yaWdodDogLTUwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG91dGxpbmU6IG5vbmU7IC8qIFByZXZlbnQgZHJhZ2dpbmcgZnJvbSBoaWdobGlnaHRpbmcgdGhlIGVsZW1lbnQgKi9cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLkNvZGVNaXJyb3Itc2l6ZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyLXJpZ2h0OiA1MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKiBUaGUgZmFrZSwgdmlzaWJsZSBzY3JvbGxiYXJzLiBVc2VkIHRvIGZvcmNlIHJlZHJhdyBkdXJpbmcgc2Nyb2xsaW5nXFxuICAgYmVmb3JlIGFjdHVhbCBzY3JvbGxpbmcgaGFwcGVucywgdGh1cyBwcmV2ZW50aW5nIHNoYWtpbmcgYW5kXFxuICAgZmxpY2tlcmluZyBhcnRpZmFjdHMuICovXFxuLkNvZGVNaXJyb3ItdnNjcm9sbGJhciwgLkNvZGVNaXJyb3ItaHNjcm9sbGJhciwgLkNvZGVNaXJyb3Itc2Nyb2xsYmFyLWZpbGxlciwgLkNvZGVNaXJyb3ItZ3V0dGVyLWZpbGxlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiA2O1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5Db2RlTWlycm9yLXZzY3JvbGxiYXIge1xcbiAgcmlnaHQ6IDA7IHRvcDogMDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuLkNvZGVNaXJyb3ItaHNjcm9sbGJhciB7XFxuICBib3R0b206IDA7IGxlZnQ6IDA7XFxuICBvdmVyZmxvdy15OiBoaWRkZW47XFxuICBvdmVyZmxvdy14OiBzY3JvbGw7XFxufVxcbi5Db2RlTWlycm9yLXNjcm9sbGJhci1maWxsZXIge1xcbiAgcmlnaHQ6IDA7IGJvdHRvbTogMDtcXG59XFxuLkNvZGVNaXJyb3ItZ3V0dGVyLWZpbGxlciB7XFxuICBsZWZ0OiAwOyBib3R0b206IDA7XFxufVxcblxcbi5Db2RlTWlycm9yLWd1dHRlcnMge1xcbiAgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAwOyB0b3A6IDA7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgei1pbmRleDogMztcXG59XFxuLkNvZGVNaXJyb3ItZ3V0dGVyIHtcXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgbWFyZ2luLWJvdHRvbTogLTUwcHg7XFxufVxcbi5Db2RlTWlycm9yLWd1dHRlci13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDQ7XFxuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XFxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuLkNvZGVNaXJyb3ItZ3V0dGVyLWJhY2tncm91bmQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwOyBib3R0b206IDA7XFxuICB6LWluZGV4OiA0O1xcbn1cXG4uQ29kZU1pcnJvci1ndXR0ZXItZWx0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIHotaW5kZXg6IDQ7XFxufVxcbi5Db2RlTWlycm9yLWd1dHRlci13cmFwcGVyIDo6c2VsZWN0aW9uIHsgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgfVxcbi5Db2RlTWlycm9yLWd1dHRlci13cmFwcGVyIDo6LW1vei1zZWxlY3Rpb24geyBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCB9XFxuXFxuLkNvZGVNaXJyb3ItbGluZXMge1xcbiAgY3Vyc29yOiB0ZXh0O1xcbiAgbWluLWhlaWdodDogMXB4OyAvKiBwcmV2ZW50cyBjb2xsYXBzaW5nIGJlZm9yZSBmaXJzdCBkcmF3ICovXFxufVxcbi5Db2RlTWlycm9yIHByZS5Db2RlTWlycm9yLWxpbmUsXFxuLkNvZGVNaXJyb3IgcHJlLkNvZGVNaXJyb3ItbGluZS1saWtlIHtcXG4gIC8qIFJlc2V0IHNvbWUgc3R5bGVzIHRoYXQgdGhlIHJlc3Qgb2YgdGhlIHBhZ2UgbWlnaHQgaGF2ZSBzZXQgKi9cXG4gIC1tb3otYm9yZGVyLXJhZGl1czogMDsgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwOyBib3JkZXItcmFkaXVzOiAwO1xcbiAgYm9yZGVyLXdpZHRoOiAwO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIG1hcmdpbjogMDtcXG4gIHdoaXRlLXNwYWNlOiBwcmU7XFxuICB3b3JkLXdyYXA6IG5vcm1hbDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB6LWluZGV4OiAyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgLXdlYmtpdC1mb250LXZhcmlhbnQtbGlnYXR1cmVzOiBjb250ZXh0dWFsO1xcbiAgZm9udC12YXJpYW50LWxpZ2F0dXJlczogY29udGV4dHVhbDtcXG59XFxuLkNvZGVNaXJyb3Itd3JhcCBwcmUuQ29kZU1pcnJvci1saW5lLFxcbi5Db2RlTWlycm9yLXdyYXAgcHJlLkNvZGVNaXJyb3ItbGluZS1saWtlIHtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG4gIHdvcmQtYnJlYWs6IG5vcm1hbDtcXG59XFxuXFxuLkNvZGVNaXJyb3ItbGluZWJhY2tncm91bmQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDsgcmlnaHQ6IDA7IHRvcDogMDsgYm90dG9tOiAwO1xcbiAgei1pbmRleDogMDtcXG59XFxuXFxuLkNvZGVNaXJyb3ItbGluZXdpZGdldCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAyO1xcbiAgcGFkZGluZzogMC4xcHg7IC8qIEZvcmNlIHdpZGdldCBtYXJnaW5zIHRvIHN0YXkgaW5zaWRlIG9mIHRoZSBjb250YWluZXIgKi9cXG59XFxuXFxuLkNvZGVNaXJyb3Itd2lkZ2V0IHt9XFxuXFxuLkNvZGVNaXJyb3ItcnRsIHByZSB7IGRpcmVjdGlvbjogcnRsOyB9XFxuXFxuLkNvZGVNaXJyb3ItY29kZSB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4vKiBGb3JjZSBjb250ZW50LWJveCBzaXppbmcgZm9yIHRoZSBlbGVtZW50cyB3aGVyZSB3ZSBleHBlY3QgaXQgKi9cXG4uQ29kZU1pcnJvci1zY3JvbGwsXFxuLkNvZGVNaXJyb3Itc2l6ZXIsXFxuLkNvZGVNaXJyb3ItZ3V0dGVyLFxcbi5Db2RlTWlycm9yLWd1dHRlcnMsXFxuLkNvZGVNaXJyb3ItbGluZW51bWJlciB7XFxuICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxufVxcblxcbi5Db2RlTWlycm9yLW1lYXN1cmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uQ29kZU1pcnJvci1jdXJzb3Ige1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5Db2RlTWlycm9yLW1lYXN1cmUgcHJlIHsgcG9zaXRpb246IHN0YXRpYzsgfVxcblxcbmRpdi5Db2RlTWlycm9yLWN1cnNvcnMge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMztcXG59XFxuZGl2LkNvZGVNaXJyb3ItZHJhZ2N1cnNvcnMge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLkNvZGVNaXJyb3ItZm9jdXNlZCBkaXYuQ29kZU1pcnJvci1jdXJzb3JzIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5Db2RlTWlycm9yLXNlbGVjdGVkIHsgYmFja2dyb3VuZDogI2Q5ZDlkOTsgfVxcbi5Db2RlTWlycm9yLWZvY3VzZWQgLkNvZGVNaXJyb3Itc2VsZWN0ZWQgeyBiYWNrZ3JvdW5kOiAjZDdkNGYwOyB9XFxuLkNvZGVNaXJyb3ItY3Jvc3NoYWlyIHsgY3Vyc29yOiBjcm9zc2hhaXI7IH1cXG4uQ29kZU1pcnJvci1saW5lOjpzZWxlY3Rpb24sIC5Db2RlTWlycm9yLWxpbmUgPiBzcGFuOjpzZWxlY3Rpb24sIC5Db2RlTWlycm9yLWxpbmUgPiBzcGFuID4gc3Bhbjo6c2VsZWN0aW9uIHsgYmFja2dyb3VuZDogI2Q3ZDRmMDsgfVxcbi5Db2RlTWlycm9yLWxpbmU6Oi1tb3otc2VsZWN0aW9uLCAuQ29kZU1pcnJvci1saW5lID4gc3Bhbjo6LW1vei1zZWxlY3Rpb24sIC5Db2RlTWlycm9yLWxpbmUgPiBzcGFuID4gc3Bhbjo6LW1vei1zZWxlY3Rpb24geyBiYWNrZ3JvdW5kOiAjZDdkNGYwOyB9XFxuXFxuLmNtLXNlYXJjaGluZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMCwgLjQpO1xcbn1cXG5cXG4vKiBVc2VkIHRvIGZvcmNlIGEgYm9yZGVyIG1vZGVsIGZvciBhIG5vZGUgKi9cXG4uY20tZm9yY2UtYm9yZGVyIHsgcGFkZGluZy1yaWdodDogLjFweDsgfVxcblxcbkBtZWRpYSBwcmludCB7XFxuICAvKiBIaWRlIHRoZSBjdXJzb3Igd2hlbiBwcmludGluZyAqL1xcbiAgLkNvZGVNaXJyb3IgZGl2LkNvZGVNaXJyb3ItY3Vyc29ycyB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIH1cXG59XFxuXFxuLyogU2VlIGlzc3VlICMyOTAxICovXFxuLmNtLXRhYi13cmFwLWhhY2s6YWZ0ZXIgeyBjb250ZW50OiAnJzsgfVxcblxcbi8qIEhlbHAgdXNlcnMgdXNlIG1hcmtzZWxlY3Rpb24gdG8gc2FmZWx5IHN0eWxlIHRleHQgYmFja2dyb3VuZCAqL1xcbnNwYW4uQ29kZU1pcnJvci1zZWxlY3RlZHRleHQgeyBiYWNrZ3JvdW5kOiBub25lOyB9XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXG5cXG4gICAgTmFtZTogICAgICAgZHJhY3VsYVxcbiAgICBBdXRob3I6ICAgICBNaWNoYWVsIEthbWluc2t5IChodHRwOi8vZ2l0aHViLmNvbS9ta2FtaW5za3kxMSlcXG5cXG4gICAgT3JpZ2luYWwgZHJhY3VsYSBjb2xvciBzY2hlbWUgYnkgWmVubyBSb2NoYSAoaHR0cHM6Ly9naXRodWIuY29tL3plbm9yb2NoYS9kcmFjdWxhLXRoZW1lKVxcblxcbiovXFxuXFxuXFxuLmNtLXMtZHJhY3VsYS5Db2RlTWlycm9yLCAuY20tcy1kcmFjdWxhIC5Db2RlTWlycm9yLWd1dHRlcnMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MmEzNiAhaW1wb3J0YW50O1xcbiAgY29sb3I6ICNmOGY4ZjIgIWltcG9ydGFudDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuLmNtLXMtZHJhY3VsYSAuQ29kZU1pcnJvci1ndXR0ZXJzIHsgY29sb3I6ICMyODJhMzY7IH1cXG4uY20tcy1kcmFjdWxhIC5Db2RlTWlycm9yLWN1cnNvciB7IGJvcmRlci1sZWZ0OiBzb2xpZCB0aGluICNmOGY4ZjA7IH1cXG4uY20tcy1kcmFjdWxhIC5Db2RlTWlycm9yLWxpbmVudW1iZXIgeyBjb2xvcjogIzZEOEE4ODsgfVxcbi5jbS1zLWRyYWN1bGEgLkNvZGVNaXJyb3Itc2VsZWN0ZWQgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTApOyB9XFxuLmNtLXMtZHJhY3VsYSAuQ29kZU1pcnJvci1saW5lOjpzZWxlY3Rpb24sIC5jbS1zLWRyYWN1bGEgLkNvZGVNaXJyb3ItbGluZSA+IHNwYW46OnNlbGVjdGlvbiwgLmNtLXMtZHJhY3VsYSAuQ29kZU1pcnJvci1saW5lID4gc3BhbiA+IHNwYW46OnNlbGVjdGlvbiB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMCk7IH1cXG4uY20tcy1kcmFjdWxhIC5Db2RlTWlycm9yLWxpbmU6Oi1tb3otc2VsZWN0aW9uLCAuY20tcy1kcmFjdWxhIC5Db2RlTWlycm9yLWxpbmUgPiBzcGFuOjotbW96LXNlbGVjdGlvbiwgLmNtLXMtZHJhY3VsYSAuQ29kZU1pcnJvci1saW5lID4gc3BhbiA+IHNwYW46Oi1tb3otc2VsZWN0aW9uIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEwKTsgfVxcbi5jbS1zLWRyYWN1bGEgc3Bhbi5jbS1jb21tZW50IHsgY29sb3I6ICM2MjcyYTQ7IH1cXG4uY20tcy1kcmFjdWxhIHNwYW4uY20tc3RyaW5nLCAuY20tcy1kcmFjdWxhIHNwYW4uY20tc3RyaW5nLTIgeyBjb2xvcjogI2YxZmE4YzsgfVxcbi5jbS1zLWRyYWN1bGEgc3Bhbi5jbS1udW1iZXIgeyBjb2xvcjogI2JkOTNmOTsgfVxcbi5jbS1zLWRyYWN1bGEgc3Bhbi5jbS12YXJpYWJsZSB7IGNvbG9yOiAjNTBmYTdiOyB9XFxuLmNtLXMtZHJhY3VsYSBzcGFuLmNtLXZhcmlhYmxlLTIgeyBjb2xvcjogd2hpdGU7IH1cXG4uY20tcy1kcmFjdWxhIHNwYW4uY20tZGVmIHsgY29sb3I6ICM1MGZhN2I7IH1cXG4uY20tcy1kcmFjdWxhIHNwYW4uY20tb3BlcmF0b3IgeyBjb2xvcjogI2ZmNzljNjsgfVxcbi5jbS1zLWRyYWN1bGEgc3Bhbi5jbS1rZXl3b3JkIHsgY29sb3I6ICNmZjc5YzY7IH1cXG4uY20tcy1kcmFjdWxhIHNwYW4uY20tYXRvbSB7IGNvbG9yOiAjYmQ5M2Y5OyB9XFxuLmNtLXMtZHJhY3VsYSBzcGFuLmNtLW1ldGEgeyBjb2xvcjogI2Y4ZjhmMjsgfVxcbi5jbS1zLWRyYWN1bGEgc3Bhbi5jbS10YWcgeyBjb2xvcjogI2ZmNzljNjsgfVxcbi5jbS1zLWRyYWN1bGEgc3Bhbi5jbS1hdHRyaWJ1dGUgeyBjb2xvcjogIzUwZmE3YjsgfVxcbi5jbS1zLWRyYWN1bGEgc3Bhbi5jbS1xdWFsaWZpZXIgeyBjb2xvcjogIzUwZmE3YjsgfVxcbi5jbS1zLWRyYWN1bGEgc3Bhbi5jbS1wcm9wZXJ0eSB7IGNvbG9yOiAjNjZkOWVmOyB9XFxuLmNtLXMtZHJhY3VsYSBzcGFuLmNtLWJ1aWx0aW4geyBjb2xvcjogIzUwZmE3YjsgfVxcbi5jbS1zLWRyYWN1bGEgc3Bhbi5jbS12YXJpYWJsZS0zLCAuY20tcy1kcmFjdWxhIHNwYW4uY20tdHlwZSB7IGNvbG9yOiAjZmZiODZjOyB9XFxuXFxuLmNtLXMtZHJhY3VsYSAuQ29kZU1pcnJvci1hY3RpdmVsaW5lLWJhY2tncm91bmQgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7IH1cXG4uY20tcy1kcmFjdWxhIC5Db2RlTWlycm9yLW1hdGNoaW5nYnJhY2tldCB7IHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyBjb2xvcjogd2hpdGUgIWltcG9ydGFudDsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9ub2RlX21vZHVsZXMvY29kZW1pcnJvci90aGVtZS9kcmFjdWxhLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7OztDQU9DOzs7QUFHRDtFQUNFLG9DQUFvQztFQUNwQyx5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBQ0Esb0NBQW9DLGNBQWMsRUFBRTtBQUNwRCxtQ0FBbUMsK0JBQStCLEVBQUU7QUFDcEUsdUNBQXVDLGNBQWMsRUFBRTtBQUN2RCxxQ0FBcUMscUNBQXFDLEVBQUU7QUFDNUUsdUpBQXVKLHFDQUFxQyxFQUFFO0FBQzlMLHNLQUFzSyxxQ0FBcUMsRUFBRTtBQUM3TSxnQ0FBZ0MsY0FBYyxFQUFFO0FBQ2hELCtEQUErRCxjQUFjLEVBQUU7QUFDL0UsK0JBQStCLGNBQWMsRUFBRTtBQUMvQyxpQ0FBaUMsY0FBYyxFQUFFO0FBQ2pELG1DQUFtQyxZQUFZLEVBQUU7QUFDakQsNEJBQTRCLGNBQWMsRUFBRTtBQUM1QyxpQ0FBaUMsY0FBYyxFQUFFO0FBQ2pELGdDQUFnQyxjQUFjLEVBQUU7QUFDaEQsNkJBQTZCLGNBQWMsRUFBRTtBQUM3Qyw2QkFBNkIsY0FBYyxFQUFFO0FBQzdDLDRCQUE0QixjQUFjLEVBQUU7QUFDNUMsa0NBQWtDLGNBQWMsRUFBRTtBQUNsRCxrQ0FBa0MsY0FBYyxFQUFFO0FBQ2xELGlDQUFpQyxjQUFjLEVBQUU7QUFDakQsZ0NBQWdDLGNBQWMsRUFBRTtBQUNoRCwrREFBK0QsY0FBYyxFQUFFOztBQUUvRSxrREFBa0QsaUNBQWlDLEVBQUU7QUFDckYsNENBQTRDLDBCQUEwQixFQUFFLHVCQUF1QixFQUFFXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qXFxuXFxuICAgIE5hbWU6ICAgICAgIGRyYWN1bGFcXG4gICAgQXV0aG9yOiAgICAgTWljaGFlbCBLYW1pbnNreSAoaHR0cDovL2dpdGh1Yi5jb20vbWthbWluc2t5MTEpXFxuXFxuICAgIE9yaWdpbmFsIGRyYWN1bGEgY29sb3Igc2NoZW1lIGJ5IFplbm8gUm9jaGEgKGh0dHBzOi8vZ2l0aHViLmNvbS96ZW5vcm9jaGEvZHJhY3VsYS10aGVtZSlcXG5cXG4qL1xcblxcblxcbi5jbS1zLWRyYWN1bGEuQ29kZU1pcnJvciwgLmNtLXMtZHJhY3VsYSAuQ29kZU1pcnJvci1ndXR0ZXJzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyODJhMzYgIWltcG9ydGFudDtcXG4gIGNvbG9yOiAjZjhmOGYyICFpbXBvcnRhbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbi5jbS1zLWRyYWN1bGEgLkNvZGVNaXJyb3ItZ3V0dGVycyB7IGNvbG9yOiAjMjgyYTM2OyB9XFxuLmNtLXMtZHJhY3VsYSAuQ29kZU1pcnJvci1jdXJzb3IgeyBib3JkZXItbGVmdDogc29saWQgdGhpbiAjZjhmOGYwOyB9XFxuLmNtLXMtZHJhY3VsYSAuQ29kZU1pcnJvci1saW5lbnVtYmVyIHsgY29sb3I6ICM2RDhBODg7IH1cXG4uY20tcy1kcmFjdWxhIC5Db2RlTWlycm9yLXNlbGVjdGVkIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEwKTsgfVxcbi5jbS1zLWRyYWN1bGEgLkNvZGVNaXJyb3ItbGluZTo6c2VsZWN0aW9uLCAuY20tcy1kcmFjdWxhIC5Db2RlTWlycm9yLWxpbmUgPiBzcGFuOjpzZWxlY3Rpb24sIC5jbS1zLWRyYWN1bGEgLkNvZGVNaXJyb3ItbGluZSA+IHNwYW4gPiBzcGFuOjpzZWxlY3Rpb24geyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTApOyB9XFxuLmNtLXMtZHJhY3VsYSAuQ29kZU1pcnJvci1saW5lOjotbW96LXNlbGVjdGlvbiwgLmNtLXMtZHJhY3VsYSAuQ29kZU1pcnJvci1saW5lID4gc3Bhbjo6LW1vei1zZWxlY3Rpb24sIC5jbS1zLWRyYWN1bGEgLkNvZGVNaXJyb3ItbGluZSA+IHNwYW4gPiBzcGFuOjotbW96LXNlbGVjdGlvbiB7IGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMCk7IH1cXG4uY20tcy1kcmFjdWxhIHNwYW4uY20tY29tbWVudCB7IGNvbG9yOiAjNjI3MmE0OyB9XFxuLmNtLXMtZHJhY3VsYSBzcGFuLmNtLXN0cmluZywgLmNtLXMtZHJhY3VsYSBzcGFuLmNtLXN0cmluZy0yIHsgY29sb3I6ICNmMWZhOGM7IH1cXG4uY20tcy1kcmFjdWxhIHNwYW4uY20tbnVtYmVyIHsgY29sb3I6ICNiZDkzZjk7IH1cXG4uY20tcy1kcmFjdWxhIHNwYW4uY20tdmFyaWFibGUgeyBjb2xvcjogIzUwZmE3YjsgfVxcbi5jbS1zLWRyYWN1bGEgc3Bhbi5jbS12YXJpYWJsZS0yIHsgY29sb3I6IHdoaXRlOyB9XFxuLmNtLXMtZHJhY3VsYSBzcGFuLmNtLWRlZiB7IGNvbG9yOiAjNTBmYTdiOyB9XFxuLmNtLXMtZHJhY3VsYSBzcGFuLmNtLW9wZXJhdG9yIHsgY29sb3I6ICNmZjc5YzY7IH1cXG4uY20tcy1kcmFjdWxhIHNwYW4uY20ta2V5d29yZCB7IGNvbG9yOiAjZmY3OWM2OyB9XFxuLmNtLXMtZHJhY3VsYSBzcGFuLmNtLWF0b20geyBjb2xvcjogI2JkOTNmOTsgfVxcbi5jbS1zLWRyYWN1bGEgc3Bhbi5jbS1tZXRhIHsgY29sb3I6ICNmOGY4ZjI7IH1cXG4uY20tcy1kcmFjdWxhIHNwYW4uY20tdGFnIHsgY29sb3I6ICNmZjc5YzY7IH1cXG4uY20tcy1kcmFjdWxhIHNwYW4uY20tYXR0cmlidXRlIHsgY29sb3I6ICM1MGZhN2I7IH1cXG4uY20tcy1kcmFjdWxhIHNwYW4uY20tcXVhbGlmaWVyIHsgY29sb3I6ICM1MGZhN2I7IH1cXG4uY20tcy1kcmFjdWxhIHNwYW4uY20tcHJvcGVydHkgeyBjb2xvcjogIzY2ZDllZjsgfVxcbi5jbS1zLWRyYWN1bGEgc3Bhbi5jbS1idWlsdGluIHsgY29sb3I6ICM1MGZhN2I7IH1cXG4uY20tcy1kcmFjdWxhIHNwYW4uY20tdmFyaWFibGUtMywgLmNtLXMtZHJhY3VsYSBzcGFuLmNtLXR5cGUgeyBjb2xvcjogI2ZmYjg2YzsgfVxcblxcbi5jbS1zLWRyYWN1bGEgLkNvZGVNaXJyb3ItYWN0aXZlbGluZS1iYWNrZ3JvdW5kIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjEpOyB9XFxuLmNtLXMtZHJhY3VsYSAuQ29kZU1pcnJvci1tYXRjaGluZ2JyYWNrZXQgeyB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7IH1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmNyZWF0ZS1ibG9nLXBvc3QtY29udGVudCB7XFxyXFxuICAgIG1heC13aWR0aDogMTMwMHB4O1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHggMzBweCAyMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY3JlYXRlLWJsb2ctcG9zdC1oZWFkZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA1MnB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogNTJweDtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY3JlYXRlLWJsb2ctcG9zdC1mb3JtLWNvbnRhaW5lciB7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY3JlYXRlLWJsb2ctcG9zdC1mb3JtLXNlY3Rpb24ge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY3JlYXRlLWJsb2ctcG9zdC1mb3JtLXNlY3Rpb24tbGFiZWwge1xcclxcbiAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jcmVhdGUtYmxvZy1wb3N0LWZvcm0tc2VjdGlvbi1pbnB1dCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY3JlYXRlLWJsb2ctcG9zdC1mb3JtLXNlY3Rpb24taW5wdXQgaW5wdXQge1xcclxcbiAgICB3aWR0aDogNTc1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgcGFkZGluZzogMTAuNXB4IDA7XFxyXFxuICAgIHRleHQtaW5kZW50OiAxNHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogMC41cHggc29saWQgI2NhY2JjYztcXHJcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxyXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcclxcbiAgICBjb2xvcjogIzI2Mzk0ZDtcXHJcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNyZWF0ZS1ibG9nLXBvc3QtZm9ybS1zZWN0aW9uLWRhdGUtaW5wdXQgaW5wdXQge1xcclxcbiAgICB3aWR0aDogMzIwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgcGFkZGluZzogMTAuNXB4IDA7XFxyXFxuICAgIHRleHQtaW5kZW50OiA3LjVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNjYWNiY2M7XFxyXFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcclxcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXHJcXG4gICAgY29sb3I6ICMyNjM5NGQ7XFxyXFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jcmVhdGUtYmxvZy1wb3N0LWNvbnRlbnQtYnRucy1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY3JlYXRlLWJsb2ctcG9zdC1jb250ZW50LWJ0bnMtcm93IHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNyZWF0ZS1ibG9nLXBvc3QtY29udGVudC1idG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNlNGU0ZTQsICNmN2Y3ZjcpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZTRlNGU0LCAjZjdmN2Y3KTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2FmYWZhZjtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogNy41cHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jcmVhdGUtYmxvZy1wb3N0LWZvcm0tc2VjdGlvbi1jb2RlLWNvbnRlbnQtaW5wdXQge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY3JlYXRlLWJsb2ctcG9zdC1mb3JtLXNlY3Rpb24taW5wdXQgdGV4dGFyZWEge1xcclxcbiAgICByZXNpemU6IG5vbmU7XFxyXFxuICAgIGhlaWdodDogMTI1cHg7XFxyXFxuICAgIHdpZHRoOiA1NzVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNjYWNiY2M7XFxyXFxuICAgIHBhZGRpbmc6IDEwLjVweDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY2hhci1sZW5ndGgge1xcclxcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY2hhci1sZW5ndGguZ3JlZW4ge1xcclxcbiAgICBjb2xvcjogZ3JlZW47XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jaGFyLWxlbmd0aC5yZWQge1xcclxcbiAgICBjb2xvcjogcmdiKDE4Niw1MSw1OCwwLjg1KTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNyZWF0ZS1ibG9nLXBvc3QtZm9ybS1zZWN0aW9uLWRhdGUtaW5wdXQtbm93IHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNyZWF0ZS1ibG9nLXBvc3Qtc2VvLXNlY3Rpb24tdGl0bGUge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY3JlYXRlLWJsb2ctcG9zdC1mb3JtLWJ0bi1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMTIwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY3JlYXRlLWJsb2ctcG9zdC1mb3JtLWJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMzNTdlZGQ7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgICBwYWRkaW5nOiAxNXB4IDBweCAxNXB4IDBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNyZWF0ZS1ibG9nLXBvc3QtZm9ybS1idG4ubG9hZGluZyB7XFxyXFxuICAgIG9wYWNpdHk6IDAuOTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNyZWF0ZS1ibG9nLXBvc3QtZm9ybS1idG4ubG9hZGluZyBzcGFuOmFmdGVyIHtcXHJcXG4gICAgY29sb3I6IHJnYigyMzIsIDIzMiwgMjMyKTtcXHJcXG4gICAgY29udGVudDogJyAuJztcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGRvdHMgMS4ycyBzdGVwcyg1LCBlbmQpIGluZmluaXRlO1xcclxcbiAgICAgICAgICAgIGFuaW1hdGlvbjogZG90cyAxLjJzIHN0ZXBzKDUsIGVuZCkgaW5maW5pdGU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jcmVhdGUtYmxvZy1wb3N0LXN1Ym1pdC1lcnJvci1tc2cge1xcclxcbiAgICBjb2xvcjogcmdiKDE4Niw1MSw1OCwwLjg1KTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNyZWF0ZS1ibG9nLXBvc3Qtc3VibWl0LXN1Y2Nlc3MtbXNnIHtcXHJcXG4gICAgY29sb3I6IGdyZWVuO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbiAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvYmxvZy9jcmVhdGUtbmV3LXBvc3QuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixjQUFjO0lBQ2QsNEJBQTRCO0VBQzlCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFlBQVk7SUFDWixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsY0FBYztJQUNkLHlCQUFpQjtPQUFqQixzQkFBaUI7UUFBakIscUJBQWlCO1lBQWpCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsY0FBYztJQUNkLHlCQUFpQjtPQUFqQixzQkFBaUI7UUFBakIscUJBQWlCO1lBQWpCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxnRUFBOEQ7SUFBOUQsOERBQThEO0lBQzlELHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UseUJBQWlCO09BQWpCLHNCQUFpQjtRQUFqQixxQkFBaUI7WUFBakIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsbURBQTJDO1lBQTNDLDJDQUEyQztFQUM3Qzs7RUFFQTtJQUNFLDBCQUEwQjtJQUMxQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jcmVhdGUtYmxvZy1wb3N0LWNvbnRlbnQge1xcclxcbiAgICBtYXgtd2lkdGg6IDEzMDBweDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgcGFkZGluZzogMzBweCAyMHB4IDMwcHggMjBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNyZWF0ZS1ibG9nLXBvc3QtaGVhZGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNTJweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDUycHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNyZWF0ZS1ibG9nLXBvc3QtZm9ybS1jb250YWluZXIge1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgbWFyZ2luLXRvcDogMjVweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNyZWF0ZS1ibG9nLXBvc3QtZm9ybS1zZWN0aW9uIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNyZWF0ZS1ibG9nLXBvc3QtZm9ybS1zZWN0aW9uLWxhYmVsIHtcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY3JlYXRlLWJsb2ctcG9zdC1mb3JtLXNlY3Rpb24taW5wdXQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNyZWF0ZS1ibG9nLXBvc3QtZm9ybS1zZWN0aW9uLWlucHV0IGlucHV0IHtcXHJcXG4gICAgd2lkdGg6IDU3NXB4O1xcclxcbiAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxyXFxuICAgIHBhZGRpbmc6IDEwLjVweCAwO1xcclxcbiAgICB0ZXh0LWluZGVudDogMTRweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNjYWNiY2M7XFxyXFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcclxcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXHJcXG4gICAgY29sb3I6ICMyNjM5NGQ7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY3JlYXRlLWJsb2ctcG9zdC1mb3JtLXNlY3Rpb24tZGF0ZS1pbnB1dCBpbnB1dCB7XFxyXFxuICAgIHdpZHRoOiAzMjBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcclxcbiAgICBwYWRkaW5nOiAxMC41cHggMDtcXHJcXG4gICAgdGV4dC1pbmRlbnQ6IDcuNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogMC41cHggc29saWQgI2NhY2JjYztcXHJcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxyXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcclxcbiAgICBjb2xvcjogIzI2Mzk0ZDtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jcmVhdGUtYmxvZy1wb3N0LWNvbnRlbnQtYnRucy1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY3JlYXRlLWJsb2ctcG9zdC1jb250ZW50LWJ0bnMtcm93IHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNyZWF0ZS1ibG9nLXBvc3QtY29udGVudC1idG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZTRlNGU0LCAjZjdmN2Y3KTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2FmYWZhZjtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogNy41cHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jcmVhdGUtYmxvZy1wb3N0LWZvcm0tc2VjdGlvbi1jb2RlLWNvbnRlbnQtaW5wdXQge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY3JlYXRlLWJsb2ctcG9zdC1mb3JtLXNlY3Rpb24taW5wdXQgdGV4dGFyZWEge1xcclxcbiAgICByZXNpemU6IG5vbmU7XFxyXFxuICAgIGhlaWdodDogMTI1cHg7XFxyXFxuICAgIHdpZHRoOiA1NzVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNjYWNiY2M7XFxyXFxuICAgIHBhZGRpbmc6IDEwLjVweDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY2hhci1sZW5ndGgge1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNoYXItbGVuZ3RoLmdyZWVuIHtcXHJcXG4gICAgY29sb3I6IGdyZWVuO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY2hhci1sZW5ndGgucmVkIHtcXHJcXG4gICAgY29sb3I6IHJnYigxODYsNTEsNTgsMC44NSk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jcmVhdGUtYmxvZy1wb3N0LWZvcm0tc2VjdGlvbi1kYXRlLWlucHV0LW5vdyB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jcmVhdGUtYmxvZy1wb3N0LXNlby1zZWN0aW9uLXRpdGxlIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNyZWF0ZS1ibG9nLXBvc3QtZm9ybS1idG4tY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDEyMHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNyZWF0ZS1ibG9nLXBvc3QtZm9ybS1idG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMzU3ZWRkO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gICAgcGFkZGluZzogMTVweCAwcHggMTVweCAwcHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jcmVhdGUtYmxvZy1wb3N0LWZvcm0tYnRuLmxvYWRpbmcge1xcclxcbiAgICBvcGFjaXR5OiAwLjk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jcmVhdGUtYmxvZy1wb3N0LWZvcm0tYnRuLmxvYWRpbmcgc3BhbjphZnRlciB7XFxyXFxuICAgIGNvbG9yOiByZ2IoMjMyLCAyMzIsIDIzMik7XFxyXFxuICAgIGNvbnRlbnQ6ICcgLic7XFxyXFxuICAgIGFuaW1hdGlvbjogZG90cyAxLjJzIHN0ZXBzKDUsIGVuZCkgaW5maW5pdGU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jcmVhdGUtYmxvZy1wb3N0LXN1Ym1pdC1lcnJvci1tc2cge1xcclxcbiAgICBjb2xvcjogcmdiKDE4Niw1MSw1OCwwLjg1KTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNyZWF0ZS1ibG9nLXBvc3Qtc3VibWl0LXN1Y2Nlc3MtbXNnIHtcXHJcXG4gICAgY29sb3I6IGdyZWVuO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZWRpdC1ibG9nLXBvc3QtY29udGVudCB7XFxyXFxuICAgIG1heC13aWR0aDogMTMwMHB4O1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHggMzBweCAyMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZWRpdC1ibG9nLXBvc3QtaGVhZGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNTJweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDUycHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmVkaXQtYmxvZy1wb3N0LWZvcm0tY29udGFpbmVyIHtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAgIG1hcmdpbi10b3A6IDI1cHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5lZGl0LWJsb2ctcG9zdC1mb3JtLXNlY3Rpb24ge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZWRpdC1ibG9nLXBvc3QtZm9ybS1zZWN0aW9uLWxhYmVsIHtcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZWRpdC1ibG9nLXBvc3QtZm9ybS1zZWN0aW9uLWlucHV0IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5lZGl0LWJsb2ctcG9zdC1mb3JtLXNlY3Rpb24taW5wdXQgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXHJcXG4gICAgd2lkdGg6IDU3NXB4O1xcclxcbiAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxyXFxuICAgIHBhZGRpbmc6IDEwLjVweCAwO1xcclxcbiAgICB0ZXh0LWluZGVudDogMTRweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNjYWNiY2M7XFxyXFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcclxcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXHJcXG4gICAgY29sb3I6ICMyNjM5NGQ7XFxyXFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5lZGl0LWJsb2ctcG9zdC1mb3JtLXNlY3Rpb24taW5wdXQgaW5wdXRbdHlwZT1cXFwiZGF0ZXRpbWUtbG9jYWxcXFwiXSB7XFxyXFxuICAgIHdpZHRoOiAyNzVweDtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcclxcbiAgICBwYWRkaW5nOiAxMC41cHggMDtcXHJcXG4gICAgdGV4dC1pbmRlbnQ6IDZweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNjYWNiY2M7XFxyXFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcclxcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXHJcXG4gICAgY29sb3I6ICMyNjM5NGQ7XFxyXFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5lZGl0LWJsb2ctcG9zdC1jb250ZW50LWJ0bnMtY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmVkaXQtYmxvZy1wb3N0LWNvbnRlbnQtYnRucy1yb3cge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZWRpdC1ibG9nLXBvc3QtY29udGVudC1idG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNlNGU0ZTQsICNmN2Y3ZjcpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZTRlNGU0LCAjZjdmN2Y3KTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2FmYWZhZjtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogNy41cHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5lZGl0LWJsb2ctcG9zdC1mb3JtLXNlY3Rpb24tY29kZS1jb250ZW50LWlucHV0IHtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmVkaXQtYmxvZy1wb3N0LWZvcm0tc2VjdGlvbi1pbnB1dCB0ZXh0YXJlYSB7XFxyXFxuICAgIHJlc2l6ZTogbm9uZTtcXHJcXG4gICAgaGVpZ2h0OiAxMjVweDtcXHJcXG4gICAgd2lkdGg6IDU3NXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAgIGJvcmRlcjogMC41cHggc29saWQgI2NhY2JjYztcXHJcXG4gICAgcGFkZGluZzogMTAuNXB4O1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBmb250LXNpemU6IDE0LjVweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNoYXItbGVuZ3RoIHtcXHJcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNoYXItbGVuZ3RoLmdyZWVuIHtcXHJcXG4gICAgY29sb3I6IGdyZWVuO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY2hhci1sZW5ndGgucmVkIHtcXHJcXG4gICAgY29sb3I6IHJnYigxODYsNTEsNTgsMC44NSk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5lZGl0LWJsb2ctcG9zdC1mb3JtLXNlY3Rpb24tZGF0ZS1pbnB1dC1ub3cge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZWRpdC1ibG9nLXBvc3Qtc2VvLXNlY3Rpb24tdGl0bGUge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZWRpdC1ibG9nLXBvc3QtZm9ybS1idG5zLXNlY3Rpb24ge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZWRpdC1ibG9nLXBvc3QtZm9ybS1zdWJtaXQtYnRuLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgd2lkdGg6IDEyMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmVkaXQtYmxvZy1wb3N0LWZvcm0tYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzM1N2VkZDtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHggMHB4IDE1cHggMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZWRpdC1ibG9nLXBvc3QtZm9ybS1idG4ubG9hZGluZyB7XFxyXFxuICAgIG9wYWNpdHk6IDAuOTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmVkaXQtYmxvZy1wb3N0LWZvcm0tYnRuLmxvYWRpbmcgc3BhbjphZnRlciB7XFxyXFxuICAgIGNvbG9yOiByZ2IoMjMyLCAyMzIsIDIzMik7XFxyXFxuICAgIGNvbnRlbnQ6ICcgLic7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBkb3RzIDEuMnMgc3RlcHMoNSwgZW5kKSBpbmZpbml0ZTtcXHJcXG4gICAgICAgICAgICBhbmltYXRpb246IGRvdHMgMS4ycyBzdGVwcyg1LCBlbmQpIGluZmluaXRlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZWRpdC1ibG9nLXBvc3Qtc3VibWl0LWVycm9yLW1zZyB7XFxyXFxuICAgIGNvbG9yOiByZ2IoMTg2LDUxLDU4LDAuODUpO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZWRpdC1ibG9nLXBvc3Qtc3VibWl0LXN1Y2Nlc3MtbXNnIHtcXHJcXG4gICAgY29sb3I6IGdyZWVuO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZWRpdC1ibG9nLXBvc3QtZm9ybS1kZWxldGUge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgY29sb3I6IHJnYigxODYsNTEsNTgsMC44NSk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZWRpdC1ibG9nLXBvc3QtZm9ybS1kZWxldGU6aG92ZXIge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmVkaXQtYmxvZy1wb3N0LWdldC1kYXRhLWVycm9yLW1zZyB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMzV2aDtcXHJcXG4gIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5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b250ZW50XCI6W1wiLmVkaXQtYmxvZy1wb3N0LWNvbnRlbnQge1xcclxcbiAgICBtYXgtd2lkdGg6IDEzMDBweDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgcGFkZGluZzogMzBweCAyMHB4IDMwcHggMjBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmVkaXQtYmxvZy1wb3N0LWhlYWRlciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDUycHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiA1MnB4O1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5lZGl0LWJsb2ctcG9zdC1mb3JtLWNvbnRhaW5lciB7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZWRpdC1ibG9nLXBvc3QtZm9ybS1zZWN0aW9uIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmVkaXQtYmxvZy1wb3N0LWZvcm0tc2VjdGlvbi1sYWJlbCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmVkaXQtYmxvZy1wb3N0LWZvcm0tc2VjdGlvbi1pbnB1dCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZWRpdC1ibG9nLXBvc3QtZm9ybS1zZWN0aW9uLWlucHV0IGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxyXFxuICAgIHdpZHRoOiA1NzVweDtcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcclxcbiAgICBwYWRkaW5nOiAxMC41cHggMDtcXHJcXG4gICAgdGV4dC1pbmRlbnQ6IDE0cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjY2FjYmNjO1xcclxcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXHJcXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxyXFxuICAgIGNvbG9yOiAjMjYzOTRkO1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmVkaXQtYmxvZy1wb3N0LWZvcm0tc2VjdGlvbi1pbnB1dCBpbnB1dFt0eXBlPVxcXCJkYXRldGltZS1sb2NhbFxcXCJdIHtcXHJcXG4gICAgd2lkdGg6IDI3NXB4O1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxyXFxuICAgIHBhZGRpbmc6IDEwLjVweCAwO1xcclxcbiAgICB0ZXh0LWluZGVudDogNnB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogMC41cHggc29saWQgI2NhY2JjYztcXHJcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxyXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcclxcbiAgICBjb2xvcjogIzI2Mzk0ZDtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5lZGl0LWJsb2ctcG9zdC1jb250ZW50LWJ0bnMtY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmVkaXQtYmxvZy1wb3N0LWNvbnRlbnQtYnRucy1yb3cge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZWRpdC1ibG9nLXBvc3QtY29udGVudC1idG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZTRlNGU0LCAjZjdmN2Y3KTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2FmYWZhZjtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogNy41cHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5lZGl0LWJsb2ctcG9zdC1mb3JtLXNlY3Rpb24tY29kZS1jb250ZW50LWlucHV0IHtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmVkaXQtYmxvZy1wb3N0LWZvcm0tc2VjdGlvbi1pbnB1dCB0ZXh0YXJlYSB7XFxyXFxuICAgIHJlc2l6ZTogbm9uZTtcXHJcXG4gICAgaGVpZ2h0OiAxMjVweDtcXHJcXG4gICAgd2lkdGg6IDU3NXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAgIGJvcmRlcjogMC41cHggc29saWQgI2NhY2JjYztcXHJcXG4gICAgcGFkZGluZzogMTAuNXB4O1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBmb250LXNpemU6IDE0LjVweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNoYXItbGVuZ3RoIHtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jaGFyLWxlbmd0aC5ncmVlbiB7XFxyXFxuICAgIGNvbG9yOiBncmVlbjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNoYXItbGVuZ3RoLnJlZCB7XFxyXFxuICAgIGNvbG9yOiByZ2IoMTg2LDUxLDU4LDAuODUpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZWRpdC1ibG9nLXBvc3QtZm9ybS1zZWN0aW9uLWRhdGUtaW5wdXQtbm93IHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmVkaXQtYmxvZy1wb3N0LXNlby1zZWN0aW9uLXRpdGxlIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmVkaXQtYmxvZy1wb3N0LWZvcm0tYnRucy1zZWN0aW9uIHtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmVkaXQtYmxvZy1wb3N0LWZvcm0tc3VibWl0LWJ0bi1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHdpZHRoOiAxMjBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5lZGl0LWJsb2ctcG9zdC1mb3JtLWJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMzNTdlZGQ7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgICBwYWRkaW5nOiAxNXB4IDBweCAxNXB4IDBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmVkaXQtYmxvZy1wb3N0LWZvcm0tYnRuLmxvYWRpbmcge1xcclxcbiAgICBvcGFjaXR5OiAwLjk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5lZGl0LWJsb2ctcG9zdC1mb3JtLWJ0bi5sb2FkaW5nIHNwYW46YWZ0ZXIge1xcclxcbiAgICBjb2xvcjogcmdiKDIzMiwgMjMyLCAyMzIpO1xcclxcbiAgICBjb250ZW50OiAnIC4nO1xcclxcbiAgICBhbmltYXRpb246IGRvdHMgMS4ycyBzdGVwcyg1LCBlbmQpIGluZmluaXRlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZWRpdC1ibG9nLXBvc3Qtc3VibWl0LWVycm9yLW1zZyB7XFxyXFxuICAgIGNvbG9yOiByZ2IoMTg2LDUxLDU4LDAuODUpO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZWRpdC1ibG9nLXBvc3Qtc3VibWl0LXN1Y2Nlc3MtbXNnIHtcXHJcXG4gICAgY29sb3I6IGdyZWVuO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZWRpdC1ibG9nLXBvc3QtZm9ybS1kZWxldGUge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgY29sb3I6IHJnYigxODYsNTEsNTgsMC44NSk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZWRpdC1ibG9nLXBvc3QtZm9ybS1kZWxldGU6aG92ZXIge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmVkaXQtYmxvZy1wb3N0LWdldC1kYXRhLWVycm9yLW1zZyB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMzV2aDtcXHJcXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmJsb2ctcG9zdHMtY29udGVudCB7XFxyXFxuICAgIG1heC13aWR0aDogMTIwMHB4O1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiA0MHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuYmxvZy1wb3N0cy10b3AtaGVhZGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNTJweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDUycHg7XFxyXFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5ibG9nLXBvc3RzLXBhZ2UtbGFiZWwge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuYmxvZy1wb3N0cy1hZGQtbmV3LWJ0bi1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmJsb2ctcG9zdHMtYWRkLW5ldy1idG4tY29udGFpbmVyIGEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5ibG9nLXBvc3RzLWFkZC1uZXctYnRuIHtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICB3aWR0aDogMTQwcHg7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwLDAuNzUpO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmJsb2ctcG9zdHMtbGlzdC1jb250YWluZXIge1xcclxcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuYmxvZy1wb3N0cy1saXN0LXRhYi1idG5zIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuYmxvZy1wb3N0cy1saXN0LXRhYi1idG4tY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogNTBweDtcXHJcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmJsb2ctcG9zdHMtbGlzdC10YWItYnRuIHtcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICBjb2xvcjogcmdiKDAsMCwwLDAuOTUpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFkMWQxO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5ibG9nLXBvc3RzLWxpc3QtdGFiLWJ0bi5hY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg2LDUxLDU4LDAuODUpO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmJsb2ctcG9zdHMtbGlzdC1pdGVtcy10YWJsZSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5ibG9nLXBvc3RzLWxpc3QtaXRlbXMtdGFibGUtaGVhZGVyIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMS43NXB4IHNvbGlkICNkMWQxZDE7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBmb250LXNpemU6IDEzcHg7XFxyXFxuICAgIGNvbG9yOiByZ2IoMCwwLDAsMC45KTtcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuYmxvZy1wb3N0cy1saXN0LWl0ZW1zLXRhYmxlLWhlYWRlci1pdGVtIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuYmxvZy1wb3N0cy1saXN0LWl0ZW1zLXRhYmxlLWhlYWRlci1pdGVtLnRpdGxlIHtcXHJcXG4gICAgd2lkdGg6IDY1JTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmJsb2ctcG9zdHMtbGlzdC1pdGVtcy10YWJsZS1oZWFkZXItaXRlbS5kYXRlIHtcXHJcXG4gICAgd2lkdGg6IDI1JTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmJsb2ctcG9zdHMtbGlzdC1pdGVtcy10YWJsZS1oZWFkZXItaXRlbS5lZGl0IHtcXHJcXG4gICAgd2lkdGg6IDEwJTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmJsb2ctcG9zdHMtbGlzdC1pdGVtcy10YWJsZS1pdGVtIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMS43NXB4IHNvbGlkICNlM2UzZTM7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBjb2xvcjogcmdiKDAsMCwwLDAuOSk7XFxyXFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmJsb2ctcG9zdHMtbGlzdC1pdGVtcy10YWJsZS1pdGVtLWRhdGEge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuYmxvZy1wb3N0cy1saXN0LWl0ZW1zLXRhYmxlLWl0ZW0tZGF0YS50aXRsZSB7XFxyXFxuICAgIHdpZHRoOiA2NSU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5ibG9nLXBvc3RzLWxpc3QtaXRlbXMtdGFibGUtaXRlbS1kYXRhLmRhdGUge1xcclxcbiAgICB3aWR0aDogMjUlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuYmxvZy1wb3N0cy1saXN0LWl0ZW1zLXRhYmxlLWl0ZW0tZGF0YS5lZGl0IHtcXHJcXG4gICAgd2lkdGg6IDEwJTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmJsb2ctcG9zdHMtbGlzdC1pdGVtcy10YWJsZS1pdGVtLWRhdGEuZWRpdCBhIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmJsb2ctcG9zdHMtbGlzdC1pdGVtcy10YWJsZS1pdGVtLWRhdGEuZWRpdCBhOmhvdmVyIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5ibG9nLXBvc3RzLWxpc3QtZ2V0LWRhdGEtZXJyb3Ige1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcXHJcXG4gIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL2Jsb2cvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixjQUFjO0lBQ2QsYUFBYTtFQUNmOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIseUJBQWlCO09BQWpCLHNCQUFpQjtRQUFqQixxQkFBaUI7WUFBakIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGVBQWU7SUFDZixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQ0FBaUM7SUFDakMsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIseUJBQWlCO09BQWpCLHNCQUFpQjtRQUFqQixxQkFBaUI7WUFBakIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZUFBZTtJQUNmLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHFDQUFxQztJQUNyQyxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxtQ0FBbUM7SUFDbkMsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsbUNBQW1DO0lBQ25DLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYmxvZy1wb3N0cy1jb250ZW50IHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDQwcHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5ibG9nLXBvc3RzLXRvcC1oZWFkZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA1MnB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogNTJweDtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5ibG9nLXBvc3RzLXBhZ2UtbGFiZWwge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuYmxvZy1wb3N0cy1hZGQtbmV3LWJ0bi1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmJsb2ctcG9zdHMtYWRkLW5ldy1idG4tY29udGFpbmVyIGEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5ibG9nLXBvc3RzLWFkZC1uZXctYnRuIHtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICB3aWR0aDogMTQwcHg7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwLDAuNzUpO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmJsb2ctcG9zdHMtbGlzdC1jb250YWluZXIge1xcclxcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuYmxvZy1wb3N0cy1saXN0LXRhYi1idG5zIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuYmxvZy1wb3N0cy1saXN0LXRhYi1idG4tY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogNTBweDtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5ibG9nLXBvc3RzLWxpc3QtdGFiLWJ0biB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgY29sb3I6IHJnYigwLDAsMCwwLjk1KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QxZDFkMTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuYmxvZy1wb3N0cy1saXN0LXRhYi1idG4uYWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4Niw1MSw1OCwwLjg1KTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5ibG9nLXBvc3RzLWxpc3QtaXRlbXMtdGFibGUge1xcclxcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuYmxvZy1wb3N0cy1saXN0LWl0ZW1zLXRhYmxlLWhlYWRlciB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDEuNzVweCBzb2xpZCAjZDFkMWQxO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcclxcbiAgICBjb2xvcjogcmdiKDAsMCwwLDAuOSk7XFxyXFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmJsb2ctcG9zdHMtbGlzdC1pdGVtcy10YWJsZS1oZWFkZXItaXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmJsb2ctcG9zdHMtbGlzdC1pdGVtcy10YWJsZS1oZWFkZXItaXRlbS50aXRsZSB7XFxyXFxuICAgIHdpZHRoOiA2NSU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5ibG9nLXBvc3RzLWxpc3QtaXRlbXMtdGFibGUtaGVhZGVyLWl0ZW0uZGF0ZSB7XFxyXFxuICAgIHdpZHRoOiAyNSU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5ibG9nLXBvc3RzLWxpc3QtaXRlbXMtdGFibGUtaGVhZGVyLWl0ZW0uZWRpdCB7XFxyXFxuICAgIHdpZHRoOiAxMCU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5ibG9nLXBvc3RzLWxpc3QtaXRlbXMtdGFibGUtaXRlbSB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDEuNzVweCBzb2xpZCAjZTNlM2UzO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgY29sb3I6IHJnYigwLDAsMCwwLjkpO1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5ibG9nLXBvc3RzLWxpc3QtaXRlbXMtdGFibGUtaXRlbS1kYXRhIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmJsb2ctcG9zdHMtbGlzdC1pdGVtcy10YWJsZS1pdGVtLWRhdGEudGl0bGUge1xcclxcbiAgICB3aWR0aDogNjUlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuYmxvZy1wb3N0cy1saXN0LWl0ZW1zLXRhYmxlLWl0ZW0tZGF0YS5kYXRlIHtcXHJcXG4gICAgd2lkdGg6IDI1JTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmJsb2ctcG9zdHMtbGlzdC1pdGVtcy10YWJsZS1pdGVtLWRhdGEuZWRpdCB7XFxyXFxuICAgIHdpZHRoOiAxMCU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5ibG9nLXBvc3RzLWxpc3QtaXRlbXMtdGFibGUtaXRlbS1kYXRhLmVkaXQgYSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5ibG9nLXBvc3RzLWxpc3QtaXRlbXMtdGFibGUtaXRlbS1kYXRhLmVkaXQgYTpob3ZlciB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuYmxvZy1wb3N0cy1saXN0LWdldC1kYXRhLWVycm9yIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XFxyXFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5oZWFkZXItd3JhcHBlciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzU3ZWRkO1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgei1pbmRleDogMTAwO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuaGVhZGVyLWxvZ28ge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcXHJcXG4gICAgZm9udC1zaXplOiAxNS41cHg7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmhlYWRlci1sb2dvIGEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuaGVhZGVyLWxvZy1vdXQge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LXNpemU6IDE1LjVweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcclxcbiAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvY29tcG9uZW50cy9oZWFkZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZUFBZTtJQUNmLHlCQUFpQjtPQUFqQixzQkFBaUI7UUFBakIscUJBQWlCO1lBQWpCLGlCQUFpQjtJQUNqQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIscUJBQXFCO0VBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5oZWFkZXItd3JhcHBlciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzU3ZWRkO1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIHotaW5kZXg6IDEwMDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmhlYWRlci1sb2dvIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTUuNXB4O1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5oZWFkZXItbG9nbyBhIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmhlYWRlci1sb2ctb3V0IHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxNS41cHg7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXHJcXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmRlbGV0ZS1ibG9nLXBvc3QtbW9kYWwtd3JhcHBlciB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB0b3A6IDBweDtcXHJcXG4gICAgbGVmdDogMHB4O1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHotaW5kZXg6IDEwMDtcXHJcXG4gICAgY29sb3I6IHJnYig0MywgNDMsIDQzKTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzLCBvcGFjaXR5IDAuMDVzIGxpbmVhcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcywgb3BhY2l0eSAwLjA1cyBsaW5lYXI7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5kZWxldGUtYmxvZy1wb3N0LW1vZGFsLWNvbnRlbnQge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICB3aWR0aDogNDI1cHg7XFxyXFxuICAgIGhlaWdodDogMjYwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgY29sb3I6ICMzMjRCNUE7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5kZWxldGUtYmxvZy1wb3N0LW1vZGFsLWNsb3NlLXdyYXBwZXIge1xcclxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5kZWxldGUtYmxvZy1wb3N0LW1vZGFsLWNsb3NlLWJ1dHRvbiB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5zaG93LWRlbGV0ZS1ibG9nLXBvc3QtbW9kYWwge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMCk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5kZWxldGUtYmxvZy1wb3N0LW1vZGFsLWlubmVyLWNvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAtd2Via2l0LWZsZXg6IDEgMTtcXHJcXG4gICAgICAgICAgICBmbGV4OiAxIDE7XFxyXFxuICAgIHBhZGRpbmc6IDBweCA1MHB4IDIwcHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5kZWxldGUtYmxvZy1wb3N0LW1vZGFsLWNvbnRlbnQtdGl0bGUge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5kZWxldGUtYmxvZy1wb3N0LW1vZGFsLWNvbnRlbnQtdGV4dC13cmFwcGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5kZWxldGUtYmxvZy1wb3N0LW1vZGFsLWNvbnRlbnQtdGV4dCB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmRlbGV0ZS1ibG9nLXBvc3QtbW9kYWwtY29uZmlybS1idG4tY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5kZWxldGUtYmxvZy1wb3N0LW1vZGFsLWNvbmZpcm0tYnRuIHtcXHJcXG4gICAgd2lkdGg6IDExMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTg2LDUxLDU4LDAuOSk7XFxyXFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMDM0MWQ7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4xcztcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4xcztcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LXNpemU6IDEzLjVweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDE0cHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxNHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5kZWxldGUtYmxvZy1wb3N0LW1vZGFsLWNvbmZpcm0tYnRuOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiKDE4Niw1MSw1OCk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5kZWxldGUtYmxvZy1wb3N0LW1vZGFsLWNvbmZpcm0tYnRuLmxvYWRpbmcge1xcclxcbiAgICBvcGFjaXR5OiAwLjk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5kZWxldGUtYmxvZy1wb3N0LW1vZGFsLWNvbmZpcm0tYnRuLmxvYWRpbmcgc3BhbjphZnRlciB7XFxyXFxuICAgIGNvbG9yOiByZ2IoMjMyLCAyMzIsIDIzMik7XFxyXFxuICAgIGNvbnRlbnQ6ICcgLic7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBkb3RzIDEuMnMgc3RlcHMoNSwgZW5kKSBpbmZpbml0ZTtcXHJcXG4gICAgICAgICAgICBhbmltYXRpb246IGRvdHMgMS4ycyBzdGVwcyg1LCBlbmQpIGluZmluaXRlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZGVsZXRlLWJsb2ctcG9zdC1tb2RhbC1lcnJvci13cmFwcGVyIHtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmRlbGV0ZS1ibG9nLXBvc3QtbW9kYWwtZXJyb3ItdGl0bGUge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZGVsZXRlLWJsb2ctcG9zdC1tb2RhbC1lcnJvci10ZXh0IHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjVweDtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZGVsZXRlLWJsb2ctcG9zdC1tb2RhbC1zdWNjZXNzLXdyYXBwZXIge1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZGVsZXRlLWJsb2ctcG9zdC1tb2RhbC1zdWNjZXNzLXRleHQge1xcclxcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZGVsZXRlLWJsb2ctcG9zdC1tb2RhbC1sb2FkaW5nLXdyYXBwZXIge1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICAgIHBhZGRpbmc6IDI1cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDc1cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmRlbGV0ZS1ibG9nLXBvc3QtbW9kYWwtbG9hZGluZy1pY29uIHtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZGVsZXRlLWJsb2ctcG9zdC1tb2RhbC1sb2FkaW5nLXN1YnRleHQge1xcclxcbiAgICBmb250LXNpemU6IDE0LjVweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjVweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgICAuZGVsZXRlLWJsb2ctcG9zdC1tb2RhbC1jb250ZW50IHtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xcclxcbiAgICAgIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxuICAgIH1cXHJcXG4gIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL2NvbXBvbmVudHMvbW9kYWxzL2RlbGV0ZS1ibG9nLXBvc3QuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZUFBZTtJQUNmLHFCQUFhO0lBQWIsYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0lBQ1osUUFBUTtJQUNSLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIscUNBQXFDO0lBQ3JDLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0Qix1REFBK0M7SUFBL0MsK0NBQStDO0VBQ2pEOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHFCQUFhO0lBQWIsYUFBYTtJQUNiLDhCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsUUFBUTtJQUNSLFNBQVM7SUFDVCx3Q0FBZ0M7WUFBaEMsZ0NBQWdDO0lBQ2hDLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLHFCQUFhO0lBQWIsYUFBYTtJQUViLGlDQUF5QjtZQUF6Qix5QkFBeUI7SUFFekIsMkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLDZCQUFxQjtZQUFyQixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxxQkFBYTtJQUFiLGFBQWE7SUFDYiw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLGlCQUFZO1lBQVosU0FBWTtJQUNaLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsV0FBVztJQUNYLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsbUNBQW1DO0lBQ25DLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsMkJBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLG1EQUEyQztZQUEzQywyQ0FBMkM7RUFDN0M7O0VBRUE7SUFDRSxVQUFVO0lBQ1Ysb0NBQW9DO0lBQ3BDLHFCQUFhO0lBQWIsYUFBYTtJQUNiLDhCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLG9DQUFvQztJQUNwQyxxQkFBYTtJQUFiLGFBQWE7SUFDYiw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxVQUFVO0lBQ1Ysb0NBQW9DO0lBQ3BDLHFCQUFhO0lBQWIsYUFBYTtJQUNiLDhCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLGVBQWU7SUFDZixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRTtNQUNFLFdBQVc7TUFDWCxZQUFZO01BQ1osa0JBQWtCO01BQ2xCLGdCQUFnQjtJQUNsQjtFQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5kZWxldGUtYmxvZy1wb3N0LW1vZGFsLXdyYXBwZXIge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHRvcDogMHB4O1xcclxcbiAgICBsZWZ0OiAwcHg7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgei1pbmRleDogMTAwO1xcclxcbiAgICBjb2xvcjogcmdiKDQzLCA0MywgNDMpO1xcclxcbiAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzLCBvcGFjaXR5IDAuMDVzIGxpbmVhcjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmRlbGV0ZS1ibG9nLXBvc3QtbW9kYWwtY29udGVudCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICB3aWR0aDogNDI1cHg7XFxyXFxuICAgIGhlaWdodDogMjYwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgY29sb3I6ICMzMjRCNUE7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5kZWxldGUtYmxvZy1wb3N0LW1vZGFsLWNsb3NlLXdyYXBwZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAtd2Via2l0LWJveC1wYWNrOiBlbmQ7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZGVsZXRlLWJsb2ctcG9zdC1tb2RhbC1jbG9zZS1idXR0b24ge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuc2hvdy1kZWxldGUtYmxvZy1wb3N0LW1vZGFsIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZGVsZXRlLWJsb2ctcG9zdC1tb2RhbC1pbm5lci1jb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZmxleDogMSAxIDAlO1xcclxcbiAgICBwYWRkaW5nOiAwcHggNTBweCAyMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZGVsZXRlLWJsb2ctcG9zdC1tb2RhbC1jb250ZW50LXRpdGxlIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZGVsZXRlLWJsb2ctcG9zdC1tb2RhbC1jb250ZW50LXRleHQtd3JhcHBlciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZGVsZXRlLWJsb2ctcG9zdC1tb2RhbC1jb250ZW50LXRleHQge1xcclxcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbiAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5kZWxldGUtYmxvZy1wb3N0LW1vZGFsLWNvbmZpcm0tYnRuLWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZGVsZXRlLWJsb2ctcG9zdC1tb2RhbC1jb25maXJtLWJ0biB7XFxyXFxuICAgIHdpZHRoOiAxMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiKDE4Niw1MSw1OCwwLjkpO1xcclxcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzAzNDFkO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjFzO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTMuNXB4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTRweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDE0cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmRlbGV0ZS1ibG9nLXBvc3QtbW9kYWwtY29uZmlybS1idG46aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTg2LDUxLDU4KTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmRlbGV0ZS1ibG9nLXBvc3QtbW9kYWwtY29uZmlybS1idG4ubG9hZGluZyB7XFxyXFxuICAgIG9wYWNpdHk6IDAuOTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmRlbGV0ZS1ibG9nLXBvc3QtbW9kYWwtY29uZmlybS1idG4ubG9hZGluZyBzcGFuOmFmdGVyIHtcXHJcXG4gICAgY29sb3I6IHJnYigyMzIsIDIzMiwgMjMyKTtcXHJcXG4gICAgY29udGVudDogJyAuJztcXHJcXG4gICAgYW5pbWF0aW9uOiBkb3RzIDEuMnMgc3RlcHMoNSwgZW5kKSBpbmZpbml0ZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmRlbGV0ZS1ibG9nLXBvc3QtbW9kYWwtZXJyb3Itd3JhcHBlciB7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5kZWxldGUtYmxvZy1wb3N0LW1vZGFsLWVycm9yLXRpdGxlIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmRlbGV0ZS1ibG9nLXBvc3QtbW9kYWwtZXJyb3ItdGV4dCB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDI1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmRlbGV0ZS1ibG9nLXBvc3QtbW9kYWwtc3VjY2Vzcy13cmFwcGVyIHtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmRlbGV0ZS1ibG9nLXBvc3QtbW9kYWwtc3VjY2Vzcy10ZXh0IHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjVweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmRlbGV0ZS1ibG9nLXBvc3QtbW9kYWwtbG9hZGluZy13cmFwcGVyIHtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgICBwYWRkaW5nOiAyNXB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiA3NXB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5kZWxldGUtYmxvZy1wb3N0LW1vZGFsLWxvYWRpbmctaWNvbiB7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmRlbGV0ZS1ibG9nLXBvc3QtbW9kYWwtbG9hZGluZy1zdWJ0ZXh0IHtcXHJcXG4gICAgZm9udC1zaXplOiAxNC41cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDI1cHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG4gICAgLmRlbGV0ZS1ibG9nLXBvc3QtbW9kYWwtY29udGVudCB7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcXHJcXG4gICAgICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbiAgICB9XFxyXFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zaWRlYmFyLXdyYXBwZXIge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMzBweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuc2lkZWJhci1saXN0IHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuc2lkZWJhci1saXN0IHVsIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuc2lkZWJhci1saXN0IHVsIGEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiByZ2IoMCwwLDAsLjcpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuc2lkZWJhci1saXN0IHVsIGEuYWN0aXZlIHtcXHJcXG4gICAgY29sb3I6IHJnYigwLDAsMCwuOTUpO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnNpZGViYXItbGlzdCB1bCBsaSB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXHJcXG4gIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL2NvbXBvbmVudHMvc2lkZWJhci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLFVBQVU7SUFDVixNQUFNO0lBQ04sT0FBTztJQUNQLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIseUJBQWlCO09BQWpCLHNCQUFpQjtRQUFqQixxQkFBaUI7WUFBakIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsU0FBUztJQUNULFVBQVU7SUFDVixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixvQkFBb0I7RUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNpZGViYXItd3JhcHBlciB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEzMHB4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuc2lkZWJhci1saXN0IHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuc2lkZWJhci1saXN0IHVsIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuc2lkZWJhci1saXN0IHVsIGEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiByZ2IoMCwwLDAsLjcpO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuc2lkZWJhci1saXN0IHVsIGEuYWN0aXZlIHtcXHJcXG4gICAgY29sb3I6IHJnYigwLDAsMCwuOTUpO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnNpZGViYXItbGlzdCB1bCBsaSB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXHJcXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmltYWdlcy1jb250ZW50IHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDQwcHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5pbWFnZXMtdG9wLWhlYWRlciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDQ2cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiA0NnB4O1xcclxcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuaW1hZ2VzLXBhZ2UtaGVhZGVyLWxhYmVsIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5pbWFnZXMtYWRkLW5ldy1idG4tY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5pbWFnZXMtYWRkLW5ldy1idG4tY29udGFpbmVyIGEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5pbWFnZXMtYWRkLW5ldy1idG4ge1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDAsMC43NSk7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuaW1hZ2VzLWxpc3QtY29udGFpbmVyIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmltYWdlcy1saXN0LWl0ZW1zLXRhYmxlIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmltYWdlcy1saXN0LWl0ZW1zLXRhYmxlLWhlYWRlciB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDEuNzVweCBzb2xpZCAjZDFkMWQxO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcclxcbiAgICBjb2xvcjogcmdiKDAsMCwwLDAuOSk7XFxyXFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmltYWdlcy1saXN0LWl0ZW1zLXRhYmxlLWhlYWRlci1pdGVtIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuaW1hZ2VzLWxpc3QtaXRlbXMtdGFibGUtaGVhZGVyLWl0ZW0uZmlsZW5hbWUge1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuaW1hZ2VzLWxpc3QtaXRlbXMtdGFibGUtaGVhZGVyLWl0ZW0ubGluayB7XFxyXFxuICAgIHdpZHRoOiAzMCU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5pbWFnZXMtbGlzdC1pdGVtcy10YWJsZS1oZWFkZXItaXRlbS5lZGl0IHtcXHJcXG4gICAgd2lkdGg6IDEwJTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmltYWdlcy1saXN0LWl0ZW1zLXRhYmxlLWl0ZW0ge1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxLjc1cHggc29saWQgI2UzZTNlMztcXHJcXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGNvbG9yOiByZ2IoMCwwLDAsMC45KTtcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuaW1hZ2VzLWxpc3QtaXRlbXMtdGFibGUtaXRlbS1kYXRhIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmltYWdlcy1saXN0LWl0ZW1zLXRhYmxlLWl0ZW0tZGF0YS5maWxlbmFtZSB7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5pbWFnZXMtbGlzdC1pdGVtcy10YWJsZS1pdGVtLWRhdGEubGluayB7XFxyXFxuICAgIHdpZHRoOiAzMCU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5pbWFnZXMtbGlzdC1pdGVtcy10YWJsZS1pdGVtLWRhdGEubGluayBhLFxcclxcbiAgLmltYWdlcy1saXN0LWl0ZW1zLXRhYmxlLWl0ZW0tZGF0YS5saW5rIGE6dmlzaXRlZCB7XFxyXFxuICAgIGNvbG9yOiByZ2IoMzAsMTQ0LDI1NSk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5pbWFnZXMtbGlzdC1pdGVtcy10YWJsZS1pdGVtLWRhdGEuZWRpdCB7XFxyXFxuICAgIHdpZHRoOiAxMCU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5pbWFnZXMtbGlzdC1pdGVtcy10YWJsZS1pdGVtLWRhdGEuZWRpdCBhIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmltYWdlcy1saXN0LWl0ZW1zLXRhYmxlLWl0ZW0tZGF0YS5lZGl0IGE6aG92ZXIge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmltYWdlcy1nZXQtZGF0YS1lcnJvciB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogMzV2aDtcXHJcXG4gIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL2ltYWdlcy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGNBQWM7SUFDZCxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQix5QkFBaUI7T0FBakIsc0JBQWlCO1FBQWpCLHFCQUFpQjtZQUFqQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsWUFBWTtFQUNkOztFQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlDQUFpQztJQUNqQyxXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLG1DQUFtQztJQUNuQyxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxtQ0FBbUM7SUFDbkMsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7O0lBRUUsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5pbWFnZXMtY29udGVudCB7XFxyXFxuICAgIG1heC13aWR0aDogMTIwMHB4O1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiA0MHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuaW1hZ2VzLXRvcC1oZWFkZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA0NnB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogNDZweDtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5pbWFnZXMtcGFnZS1oZWFkZXItbGFiZWwge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmltYWdlcy1hZGQtbmV3LWJ0bi1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmltYWdlcy1hZGQtbmV3LWJ0bi1jb250YWluZXIgYSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmltYWdlcy1hZGQtbmV3LWJ0biB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCwwLjc1KTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5pbWFnZXMtbGlzdC1jb250YWluZXIge1xcclxcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuaW1hZ2VzLWxpc3QtaXRlbXMtdGFibGUge1xcclxcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuaW1hZ2VzLWxpc3QtaXRlbXMtdGFibGUtaGVhZGVyIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMS43NXB4IHNvbGlkICNkMWQxZDE7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBmb250LXNpemU6IDEzcHg7XFxyXFxuICAgIGNvbG9yOiByZ2IoMCwwLDAsMC45KTtcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuaW1hZ2VzLWxpc3QtaXRlbXMtdGFibGUtaGVhZGVyLWl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5pbWFnZXMtbGlzdC1pdGVtcy10YWJsZS1oZWFkZXItaXRlbS5maWxlbmFtZSB7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5pbWFnZXMtbGlzdC1pdGVtcy10YWJsZS1oZWFkZXItaXRlbS5saW5rIHtcXHJcXG4gICAgd2lkdGg6IDMwJTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmltYWdlcy1saXN0LWl0ZW1zLXRhYmxlLWhlYWRlci1pdGVtLmVkaXQge1xcclxcbiAgICB3aWR0aDogMTAlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuaW1hZ2VzLWxpc3QtaXRlbXMtdGFibGUtaXRlbSB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDEuNzVweCBzb2xpZCAjZTNlM2UzO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgY29sb3I6IHJnYigwLDAsMCwwLjkpO1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5pbWFnZXMtbGlzdC1pdGVtcy10YWJsZS1pdGVtLWRhdGEge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuaW1hZ2VzLWxpc3QtaXRlbXMtdGFibGUtaXRlbS1kYXRhLmZpbGVuYW1lIHtcXHJcXG4gICAgd2lkdGg6IDYwJTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmltYWdlcy1saXN0LWl0ZW1zLXRhYmxlLWl0ZW0tZGF0YS5saW5rIHtcXHJcXG4gICAgd2lkdGg6IDMwJTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmltYWdlcy1saXN0LWl0ZW1zLXRhYmxlLWl0ZW0tZGF0YS5saW5rIGEsXFxyXFxuICAuaW1hZ2VzLWxpc3QtaXRlbXMtdGFibGUtaXRlbS1kYXRhLmxpbmsgYTp2aXNpdGVkIHtcXHJcXG4gICAgY29sb3I6IHJnYigzMCwxNDQsMjU1KTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmltYWdlcy1saXN0LWl0ZW1zLXRhYmxlLWl0ZW0tZGF0YS5lZGl0IHtcXHJcXG4gICAgd2lkdGg6IDEwJTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmltYWdlcy1saXN0LWl0ZW1zLXRhYmxlLWl0ZW0tZGF0YS5lZGl0IGEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuaW1hZ2VzLWxpc3QtaXRlbXMtdGFibGUtaXRlbS1kYXRhLmVkaXQgYTpob3ZlciB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuaW1hZ2VzLWdldC1kYXRhLWVycm9yIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiAzNXZoO1xcclxcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gICAgbWFyZ2luOiAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDBweDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBpbml0aWFsO1xcclxcbiAgICBib3JkZXItY29sb3I6IGN1cnJlbnRDb2xvcjtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiBpbml0aWFsO1xcclxcbiAgICAtd2Via2l0LWJvcmRlci1pbWFnZTogbm9uZTtcXHJcXG4gICAgICAgICAgICBib3JkZXItaW1hZ2U6IG5vbmU7XFxyXFxuICAgIC13ZWJraXQtYm9yZGVyLWltYWdlOiBpbml0aWFsO1xcclxcbiAgICAgICAgICAgIGJvcmRlci1pbWFnZTogaW5pdGlhbDtcXHJcXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxyXFxuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICA6Zm9jdXMge291dGxpbmU6bm9uZTt9XFxyXFxuICA6Oi1tb3otZm9jdXMtaW5uZXIge2JvcmRlcjowO31cXHJcXG4gIFxcclxcbiAgLmxheW91dC13cmFwcGVyIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zLHN5c3RlbS11aSxCbGlua01hY1N5c3RlbUZvbnQsLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sT3h5Z2VuLFVidW50dSxDYW50YXJlbGwsRmlyYSBTYW5zLERyb2lkIFNhbnMsSGVsdmV0aWNhIE5ldWUsc2Fucy1zZXJpZjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmxheW91dC1jb250ZW50LWNvbnRhaW5lciB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDUwcHgpO1xcclxcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY5RkQ7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5Db2RlTWlycm9yIHtcXHJcXG4gICAgaGVpZ2h0OiA0NTBweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKiBHbG9iYWwgYW5pbWF0aW9uICovXFxyXFxuICBALXdlYmtpdC1rZXlmcmFtZXMgZG90cyB7XFxyXFxuICAgIDAlLCAyMCUge1xcclxcbiAgICAgIGNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSk7XFxyXFxuICAgICAgdGV4dC1zaGFkb3c6XFxyXFxuICAgICAgICAuMjVlbSAwIDAgcmdiKDI0NSwgMjQ1LCAyNDUpLFxcclxcbiAgICAgICAgLjVlbSAwIDAgcmdiKDI0NSwgMjQ1LCAyNDUpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgNDAlIHtcXHJcXG4gICAgICBjb2xvcjogI2JmYmZiZjtcXHJcXG4gICAgICB0ZXh0LXNoYWRvdzpcXHJcXG4gICAgICAgIC4yNWVtIDAgMCByZ2IoMjQ1LCAyNDUsIDI0NSksXFxyXFxuICAgICAgICAuNWVtIDAgMCByZ2IoMjQ1LCAyNDUsIDI0NSk7XFxyXFxuICAgICAgfVxcclxcbiAgICA2MCUge1xcclxcbiAgICAgIHRleHQtc2hhZG93OlxcclxcbiAgICAgICAgLjI1ZW0gMCAwICNiZmJmYmYsXFxyXFxuICAgICAgICAuNWVtIDAgMCByZ2IoMjQ1LCAyNDUsIDI0NSk7XFxyXFxuICAgICAgfVxcclxcbiAgICA4MCUsIDEwMCUge1xcclxcbiAgICAgIHRleHQtc2hhZG93OlxcclxcbiAgICAgICAgLjI1ZW0gMCAwICNiZmJmYmYsXFxyXFxuICAgICAgICAuNWVtIDAgMCAjYmZiZmJmO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICBAa2V5ZnJhbWVzIGRvdHMge1xcclxcbiAgICAwJSwgMjAlIHtcXHJcXG4gICAgICBjb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUpO1xcclxcbiAgICAgIHRleHQtc2hhZG93OlxcclxcbiAgICAgICAgLjI1ZW0gMCAwIHJnYigyNDUsIDI0NSwgMjQ1KSxcXHJcXG4gICAgICAgIC41ZW0gMCAwIHJnYigyNDUsIDI0NSwgMjQ1KTtcXHJcXG4gICAgICB9XFxyXFxuICAgIDQwJSB7XFxyXFxuICAgICAgY29sb3I6ICNiZmJmYmY7XFxyXFxuICAgICAgdGV4dC1zaGFkb3c6XFxyXFxuICAgICAgICAuMjVlbSAwIDAgcmdiKDI0NSwgMjQ1LCAyNDUpLFxcclxcbiAgICAgICAgLjVlbSAwIDAgcmdiKDI0NSwgMjQ1LCAyNDUpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgNjAlIHtcXHJcXG4gICAgICB0ZXh0LXNoYWRvdzpcXHJcXG4gICAgICAgIC4yNWVtIDAgMCAjYmZiZmJmLFxcclxcbiAgICAgICAgLjVlbSAwIDAgcmdiKDI0NSwgMjQ1LCAyNDUpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgODAlLCAxMDAlIHtcXHJcXG4gICAgICB0ZXh0LXNoYWRvdzpcXHJcXG4gICAgICAgIC4yNWVtIDAgMCAjYmZiZmJmLFxcclxcbiAgICAgICAgLjVlbSAwIDAgI2JmYmZiZjtcXHJcXG4gICAgfVxcclxcbiAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvbGF5b3V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFxQjtJQUFyQixxQkFBcUI7SUFDckIsMEJBQXFCO0lBQXJCLHFCQUFxQjtJQUNyQiwwQkFBcUI7WUFBckIsa0JBQXFCO0lBQXJCLDZCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsbUNBQW1DO0lBQ25DLG1DQUFtQztFQUNyQzs7RUFFQSxRQUFRLFlBQVksQ0FBQztFQUNyQixvQkFBb0IsUUFBUSxDQUFDOztFQUU3QjtJQUNFLFlBQVk7SUFDWixxQkFBYTtJQUFiLGFBQWE7SUFDYiw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLHdKQUF3SjtFQUMxSjs7RUFFQTtJQUNFLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG9CQUFvQjtFQUN0Qjs7RUFFQSxxQkFBcUI7RUFDckI7SUFDRTtNQUNFLHlCQUF5QjtNQUN6Qjs7bUNBRTZCO01BQzdCO0lBQ0Y7TUFDRSxjQUFjO01BQ2Q7O21DQUU2QjtNQUM3QjtJQUNGO01BQ0U7O21DQUU2QjtNQUM3QjtJQUNGO01BQ0U7O3dCQUVrQjtJQUNwQjtFQUNGO0VBdkJBO0lBQ0U7TUFDRSx5QkFBeUI7TUFDekI7O21DQUU2QjtNQUM3QjtJQUNGO01BQ0UsY0FBYztNQUNkOzttQ0FFNkI7TUFDN0I7SUFDRjtNQUNFOzttQ0FFNkI7TUFDN0I7SUFDRjtNQUNFOzt3QkFFa0I7SUFDcEI7RUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gICAgbWFyZ2luOiAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDBweDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogaW5pdGlhbDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiBpbml0aWFsO1xcclxcbiAgICBib3JkZXItaW1hZ2U6IGluaXRpYWw7XFxyXFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgOmZvY3VzIHtvdXRsaW5lOm5vbmU7fVxcclxcbiAgOjotbW96LWZvY3VzLWlubmVyIHtib3JkZXI6MDt9XFxyXFxuICBcXHJcXG4gIC5sYXlvdXQtd3JhcHBlciB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyxzeXN0ZW0tdWksQmxpbmtNYWNTeXN0ZW1Gb250LC1hcHBsZS1zeXN0ZW0sU2Vnb2UgVUksUm9ib3RvLE94eWdlbixVYnVudHUsQ2FudGFyZWxsLEZpcmEgU2FucyxEcm9pZCBTYW5zLEhlbHZldGljYSBOZXVlLHNhbnMtc2VyaWY7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5sYXlvdXQtY29udGVudC1jb250YWluZXIge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4KTtcXHJcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEzMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGOUZEO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuQ29kZU1pcnJvciB7XFxyXFxuICAgIGhlaWdodDogNDUwcHg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogR2xvYmFsIGFuaW1hdGlvbiAqL1xcclxcbiAgQGtleWZyYW1lcyBkb3RzIHtcXHJcXG4gICAgMCUsIDIwJSB7XFxyXFxuICAgICAgY29sb3I6IHJnYigyNDUsIDI0NSwgMjQ1KTtcXHJcXG4gICAgICB0ZXh0LXNoYWRvdzpcXHJcXG4gICAgICAgIC4yNWVtIDAgMCByZ2IoMjQ1LCAyNDUsIDI0NSksXFxyXFxuICAgICAgICAuNWVtIDAgMCByZ2IoMjQ1LCAyNDUsIDI0NSk7XFxyXFxuICAgICAgfVxcclxcbiAgICA0MCUge1xcclxcbiAgICAgIGNvbG9yOiAjYmZiZmJmO1xcclxcbiAgICAgIHRleHQtc2hhZG93OlxcclxcbiAgICAgICAgLjI1ZW0gMCAwIHJnYigyNDUsIDI0NSwgMjQ1KSxcXHJcXG4gICAgICAgIC41ZW0gMCAwIHJnYigyNDUsIDI0NSwgMjQ1KTtcXHJcXG4gICAgICB9XFxyXFxuICAgIDYwJSB7XFxyXFxuICAgICAgdGV4dC1zaGFkb3c6XFxyXFxuICAgICAgICAuMjVlbSAwIDAgI2JmYmZiZixcXHJcXG4gICAgICAgIC41ZW0gMCAwIHJnYigyNDUsIDI0NSwgMjQ1KTtcXHJcXG4gICAgICB9XFxyXFxuICAgIDgwJSwgMTAwJSB7XFxyXFxuICAgICAgdGV4dC1zaGFkb3c6XFxyXFxuICAgICAgICAuMjVlbSAwIDAgI2JmYmZiZixcXHJcXG4gICAgICAgIC41ZW0gMCAwICNiZmJmYmY7XFxyXFxuICAgIH1cXHJcXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmxvZ2luLXdyYXBwZXIge1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjlGRDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmxvZ2luLWNvbnRlbnQtY29udGFpbmVyIHtcXHJcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmxvZ2luLWZvcm0tY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDUwMHB4O1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDQ1cHggNDhweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgzOSw2NCw4OSwuNCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNDUlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNDUlKTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNDUlKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmxvZ2luLWZvcm0tZXJyb3ItYmxvY2sge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg0LCA2MCwgNTksIDAuOTUpO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogOHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcclxcbiAgICBjb2xvcjogI2YwZjBmMDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcclxcbiAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5sb2dpbi1mb3JtLXRvcC1oZWFkZXIge1xcclxcbiAgICBmb250LXNpemU6IDMycHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjM4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC43KTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmxvZ2luLWZvcm0tZmllbGQge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAubG9naW4tZm9ybS1maWVsZCBpbnB1dCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAubG9naW4tZm9ybS1maWVsZCBpbnB1dFt0eXBlPWVtYWlsXSxcXHJcXG4gIC5sb2dpbi1mb3JtLWZpZWxkIGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcclxcbiAgICBwYWRkaW5nOiAxN3B4IDA7XFxyXFxuICAgIHRleHQtaW5kZW50OiAyMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYWNiY2M7XFxyXFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcclxcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXHJcXG4gICAgY29sb3I6ICMyNjM5NGQ7XFxyXFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5sb2dpbi1mb3JtLWZpZWxkIGlucHV0W3R5cGU9ZW1haWxdLmVycm9yLFxcclxcbiAgLmxvZ2luLWZvcm0tZmllbGQgaW5wdXRbdHlwZT1wYXNzd29yZF0uZXJyb3Ige1xcclxcbiAgICBib3JkZXItY29sb3I6ICNjYjM4Mzc7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5sb2dpbi1mb3JtLWZpZWxkIGlucHV0W3R5cGU9ZW1haWxdOmhvdmVyLFxcclxcbiAgLmxvZ2luLWZvcm0tZmllbGQgaW5wdXRbdHlwZT1wYXNzd29yZF06aG92ZXIge1xcclxcbiAgICBib3JkZXItY29sb3I6ICMzNTdlZGQ7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5sb2dpbi1mb3JtLWZpZWxkIGlucHV0W3R5cGU9ZW1haWxdOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyLCAubG9naW4tZm9ybS1maWVsZCBpbnB1dFt0eXBlPXBhc3N3b3JkXTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxyXFxuICAgIG9wYWNpdHk6IDAuNzU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5sb2dpbi1mb3JtLWZpZWxkIGlucHV0W3R5cGU9ZW1haWxdOi1tcy1pbnB1dC1wbGFjZWhvbGRlciwgLmxvZ2luLWZvcm0tZmllbGQgaW5wdXRbdHlwZT1wYXNzd29yZF06LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXHJcXG4gICAgb3BhY2l0eTogMC43NTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmxvZ2luLWZvcm0tZmllbGQgaW5wdXRbdHlwZT1lbWFpbF06OnBsYWNlaG9sZGVyLFxcclxcbiAgLmxvZ2luLWZvcm0tZmllbGQgaW5wdXRbdHlwZT1wYXNzd29yZF06OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgb3BhY2l0eTogMC43NTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmxvZ2luLWZvcm0tZXJyb3ItbXNnIHtcXHJcXG4gICAgY29sb3I6ICNjYjM4Mzc7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmxvZ2luLWZvcm0tc3VibWl0LWJ0bi1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmxvZ2luLWZvcm0tc3VibWl0LWJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMzNTdlZGQ7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgICBwYWRkaW5nOiAxOHB4IDBweCAxOHB4IDBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmxvZ2luLWZvcm0tc3VibWl0LWJ0bi5sb2FkaW5nIHtcXHJcXG4gICAgb3BhY2l0eTogMC45O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAubG9naW4tZm9ybS1zdWJtaXQtYnRuLmxvYWRpbmcgc3BhbjphZnRlciB7XFxyXFxuICAgIGNvbG9yOiByZ2IoMjMyLCAyMzIsIDIzMik7XFxyXFxuICAgIGNvbnRlbnQ6ICcgLic7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBkb3RzIDEuMnMgc3RlcHMoNSwgZW5kKSBpbmZpbml0ZTtcXHJcXG4gICAgICAgICAgICBhbmltYXRpb246IGRvdHMgMS4ycyBzdGVwcyg1LCBlbmQpIGluZmluaXRlO1xcclxcbiAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvbG9naW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLHlCQUFpQjtPQUFqQixzQkFBaUI7UUFBakIscUJBQWlCO1lBQWpCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHlDQUF5QztJQUN6QyxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUdsQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBRVQsdUNBQXVDO0lBQ3ZDLCtCQUErQjtFQUNqQzs7RUFFQTtJQUNFLHdDQUF3QztJQUN4QyxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBOztJQUVFLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QseUJBQWlCO09BQWpCLHNCQUFpQjtRQUFqQixxQkFBaUI7WUFBakIsaUJBQWlCO0VBQ25COztFQUVBOztJQUVFLHFCQUFxQjtFQUN2Qjs7RUFFQTs7SUFFRSxxQkFBcUI7RUFDdkI7O0VBRUE7SUFFRSxhQUFhO0VBQ2Y7O0VBSEE7SUFFRSxhQUFhO0VBQ2Y7O0VBSEE7O0lBRUUsYUFBYTtFQUNmOztFQUVBO0lBQ0UsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLG1EQUEyQztZQUEzQywyQ0FBMkM7RUFDN0NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmxvZ2luLXdyYXBwZXIge1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjlGRDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmxvZ2luLWNvbnRlbnQtY29udGFpbmVyIHtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5sb2dpbi1mb3JtLWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA1MDBweDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiA0NXB4IDQ4cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMzksNjQsODksLjQpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA0NSU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC00NSUpO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTQ1JSk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTQ1JSk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5sb2dpbi1mb3JtLWVycm9yLWJsb2NrIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NCwgNjAsIDU5LCAwLjk1KTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDhweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcXHJcXG4gICAgY29sb3I6ICNmMGYwZjA7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAubG9naW4tZm9ybS10b3AtaGVhZGVyIHtcXHJcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS4zODtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNyk7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5sb2dpbi1mb3JtLWZpZWxkIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmxvZ2luLWZvcm0tZmllbGQgaW5wdXQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmxvZ2luLWZvcm0tZmllbGQgaW5wdXRbdHlwZT1lbWFpbF0sXFxyXFxuICAubG9naW4tZm9ybS1maWVsZCBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgcGFkZGluZzogMTdweCAwO1xcclxcbiAgICB0ZXh0LWluZGVudDogMjBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2FjYmNjO1xcclxcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXHJcXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxyXFxuICAgIGNvbG9yOiAjMjYzOTRkO1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmxvZ2luLWZvcm0tZmllbGQgaW5wdXRbdHlwZT1lbWFpbF0uZXJyb3IsXFxyXFxuICAubG9naW4tZm9ybS1maWVsZCBpbnB1dFt0eXBlPXBhc3N3b3JkXS5lcnJvciB7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogI2NiMzgzNztcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmxvZ2luLWZvcm0tZmllbGQgaW5wdXRbdHlwZT1lbWFpbF06aG92ZXIsXFxyXFxuICAubG9naW4tZm9ybS1maWVsZCBpbnB1dFt0eXBlPXBhc3N3b3JkXTpob3ZlciB7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogIzM1N2VkZDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmxvZ2luLWZvcm0tZmllbGQgaW5wdXRbdHlwZT1lbWFpbF06OnBsYWNlaG9sZGVyLFxcclxcbiAgLmxvZ2luLWZvcm0tZmllbGQgaW5wdXRbdHlwZT1wYXNzd29yZF06OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgb3BhY2l0eTogMC43NTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmxvZ2luLWZvcm0tZXJyb3ItbXNnIHtcXHJcXG4gICAgY29sb3I6ICNjYjM4Mzc7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmxvZ2luLWZvcm0tc3VibWl0LWJ0bi1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmxvZ2luLWZvcm0tc3VibWl0LWJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMzNTdlZGQ7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgICBwYWRkaW5nOiAxOHB4IDBweCAxOHB4IDBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmxvZ2luLWZvcm0tc3VibWl0LWJ0bi5sb2FkaW5nIHtcXHJcXG4gICAgb3BhY2l0eTogMC45O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAubG9naW4tZm9ybS1zdWJtaXQtYnRuLmxvYWRpbmcgc3BhbjphZnRlciB7XFxyXFxuICAgIGNvbG9yOiByZ2IoMjMyLCAyMzIsIDIzMik7XFxyXFxuICAgIGNvbnRlbnQ6ICcgLic7XFxyXFxuICAgIGFuaW1hdGlvbjogZG90cyAxLjJzIHN0ZXBzKDUsIGVuZCkgaW5maW5pdGU7XFxyXFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4xXG4gKiByZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSAweGVhY2E7XG5leHBvcnRzLkZyYWdtZW50ID0gMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IDB4ZWFjZTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IDB4ZWFkOTtcbnZhciBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IDB4ZWFkYTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gMHhlYWQ1O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSAweGVhZDc7XG52YXIgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSAweGVhZTA7XG52YXIgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSAweGVhZTE7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSAweGVhZTI7XG52YXIgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gMHhlYWUzO1xuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yKSB7XG4gIHZhciBzeW1ib2xGb3IgPSBTeW1ib2wuZm9yO1xuICBSRUFDVF9FTEVNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbiAgUkVBQ1RfUE9SVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnBvcnRhbCcpO1xuICBleHBvcnRzLkZyYWdtZW50ID0gc3ltYm9sRm9yKCdyZWFjdC5mcmFnbWVudCcpO1xuICBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xuICBSRUFDVF9QUk9GSUxFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm9maWxlcicpO1xuICBSRUFDVF9QUk9WSURFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm92aWRlcicpO1xuICBSRUFDVF9DT05URVhUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNvbnRleHQnKTtcbiAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2UnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG4gIFJFQUNUX01FTU9fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubWVtbycpO1xuICBSRUFDVF9MQVpZX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxhenknKTtcbiAgUkVBQ1RfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuYmxvY2snKTtcbiAgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNlcnZlci5ibG9jaycpO1xuICBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpO1xuICBSRUFDVF9TQ09QRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zY29wZScpO1xuICBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub3BhcXVlLmlkJyk7XG4gIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5kZWJ1Z190cmFjZV9tb2RlJyk7XG4gIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbiAgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sZWdhY3lfaGlkZGVuJyk7XG59XG5cbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcblxuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSBSZWFjdC5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDtcblxuZnVuY3Rpb24gZXJyb3IoZm9ybWF0KSB7XG4gIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICBwcmludFdhcm5pbmcoJ2Vycm9yJywgZm9ybWF0LCBhcmdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludFdhcm5pbmcobGV2ZWwsIGZvcm1hdCwgYXJncykge1xuICAvLyBXaGVuIGNoYW5naW5nIHRoaXMgbG9naWMsIHlvdSBtaWdodCB3YW50IHRvIGFsc29cbiAgLy8gdXBkYXRlIGNvbnNvbGVXaXRoU3RhY2tEZXYud3d3LmpzIGFzIHdlbGwuXG4gIHtcbiAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICBpZiAoc3RhY2sgIT09ICcnKSB7XG4gICAgICBmb3JtYXQgKz0gJyVzJztcbiAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICB9XG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuICcnICsgaXRlbTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuICB9XG59XG5cbi8vIEZpbHRlciBjZXJ0YWluIERPTSBhdHRyaWJ1dGVzIChlLmcuIHNyYywgaHJlZikgaWYgdGhlaXIgdmFsdWVzIGFyZSBlbXB0eSBzdHJpbmdzLlxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50IHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSB8fCB0eXBlWzBdID09PSBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIG91dGVyVHlwZS5kaXNwbGF5TmFtZSB8fCAoZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29udGV4dE5hbWUodHlwZSkge1xuICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCAnQ29udGV4dCc7XG59XG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUodHlwZSkge1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB7XG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGVycm9yKCdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lKCkuICcgKyAnVGhpcyBpcyBsaWtlbHkgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBudWxsO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBleHBvcnRzLkZyYWdtZW50OlxuICAgICAgcmV0dXJuICdGcmFnbWVudCc7XG5cbiAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgcmV0dXJuICdQb3J0YWwnO1xuXG4gICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgcmV0dXJuICdQcm9maWxlcic7XG5cbiAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N0cmljdE1vZGUnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2VMaXN0JztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICB2YXIgY29udGV4dCA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShjb250ZXh0KSArICcuQ29uc3VtZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgIHZhciBwcm92aWRlciA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShwcm92aWRlci5fY29udGV4dCkgKyAnLlByb3ZpZGVyJztcblxuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0V3JhcHBlZE5hbWUodHlwZSwgdHlwZS5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpO1xuXG4gICAgICBjYXNlIFJFQUNUX0JMT0NLX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUuX3JlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUoaW5pdChwYXlsb2FkKSk7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8vIEhlbHBlcnMgdG8gcGF0Y2ggY29uc29sZS5sb2dzIHRvIGF2b2lkIGxvZ2dpbmcgZHVyaW5nIHNpZGUtZWZmZWN0IGZyZWVcbi8vIHJlcGxheWluZyBvbiByZW5kZXIgZnVuY3Rpb24uIFRoaXMgY3VycmVudGx5IG9ubHkgcGF0Y2hlcyB0aGUgb2JqZWN0XG4vLyBsYXppbHkgd2hpY2ggd29uJ3QgY292ZXIgaWYgdGhlIGxvZyBmdW5jdGlvbiB3YXMgZXh0cmFjdGVkIGVhZ2VybHkuXG4vLyBXZSBjb3VsZCBhbHNvIGVhZ2VybHkgcGF0Y2ggdGhlIG1ldGhvZC5cbnZhciBkaXNhYmxlZERlcHRoID0gMDtcbnZhciBwcmV2TG9nO1xudmFyIHByZXZJbmZvO1xudmFyIHByZXZXYXJuO1xudmFyIHByZXZFcnJvcjtcbnZhciBwcmV2R3JvdXA7XG52YXIgcHJldkdyb3VwQ29sbGFwc2VkO1xudmFyIHByZXZHcm91cEVuZDtcblxuZnVuY3Rpb24gZGlzYWJsZWRMb2coKSB7fVxuXG5kaXNhYmxlZExvZy5fX3JlYWN0RGlzYWJsZWRMb2cgPSB0cnVlO1xuZnVuY3Rpb24gZGlzYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICBwcmV2TG9nID0gY29uc29sZS5sb2c7XG4gICAgICBwcmV2SW5mbyA9IGNvbnNvbGUuaW5mbztcbiAgICAgIHByZXZXYXJuID0gY29uc29sZS53YXJuO1xuICAgICAgcHJldkVycm9yID0gY29uc29sZS5lcnJvcjtcbiAgICAgIHByZXZHcm91cCA9IGNvbnNvbGUuZ3JvdXA7XG4gICAgICBwcmV2R3JvdXBDb2xsYXBzZWQgPSBjb25zb2xlLmdyb3VwQ29sbGFwc2VkO1xuICAgICAgcHJldkdyb3VwRW5kID0gY29uc29sZS5ncm91cEVuZDsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xOTA5OVxuXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGRpc2FibGVkTG9nLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBpbmZvOiBwcm9wcyxcbiAgICAgICAgbG9nOiBwcm9wcyxcbiAgICAgICAgd2FybjogcHJvcHMsXG4gICAgICAgIGVycm9yOiBwcm9wcyxcbiAgICAgICAgZ3JvdXA6IHByb3BzLFxuICAgICAgICBncm91cENvbGxhcHNlZDogcHJvcHMsXG4gICAgICAgIGdyb3VwRW5kOiBwcm9wc1xuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGRpc2FibGVkRGVwdGgrKztcbiAgfVxufVxuZnVuY3Rpb24gcmVlbmFibGVMb2dzKCkge1xuICB7XG4gICAgZGlzYWJsZWREZXB0aC0tO1xuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGxvZzogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkxvZ1xuICAgICAgICB9KSxcbiAgICAgICAgaW5mbzogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkluZm9cbiAgICAgICAgfSksXG4gICAgICAgIHdhcm46IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZXYXJuXG4gICAgICAgIH0pLFxuICAgICAgICBlcnJvcjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkVycm9yXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cENvbGxhcHNlZDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwQ29sbGFwc2VkXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cEVuZDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwRW5kXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPCAwKSB7XG4gICAgICBlcnJvcignZGlzYWJsZWREZXB0aCBmZWxsIGJlbG93IHplcm8uICcgKyAnVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjtcbnZhciBwcmVmaXg7XG5mdW5jdGlvbiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIGlmIChwcmVmaXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgVk0gc3BlY2lmaWMgcHJlZml4IHVzZWQgYnkgZWFjaCBsaW5lLlxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgdmFyIG1hdGNoID0geC5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtcbiAgICAgICAgcHJlZml4ID0gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XG4gICAgICB9XG4gICAgfSAvLyBXZSB1c2UgdGhlIHByZWZpeCB0byBlbnN1cmUgb3VyIHN0YWNrcyBsaW5lIHVwIHdpdGggbmF0aXZlIHN0YWNrIGZyYW1lcy5cblxuXG4gICAgcmV0dXJuICdcXG4nICsgcHJlZml4ICsgbmFtZTtcbiAgfVxufVxudmFyIHJlZW50cnkgPSBmYWxzZTtcbnZhciBjb21wb25lbnRGcmFtZUNhY2hlO1xuXG57XG4gIHZhciBQb3NzaWJseVdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IFdlYWtNYXAgOiBNYXA7XG4gIGNvbXBvbmVudEZyYW1lQ2FjaGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGNvbnN0cnVjdCkge1xuICAvLyBJZiBzb21ldGhpbmcgYXNrZWQgZm9yIGEgc3RhY2sgaW5zaWRlIGEgZmFrZSByZW5kZXIsIGl0IHNob3VsZCBnZXQgaWdub3JlZC5cbiAgaWYgKCFmbiB8fCByZWVudHJ5KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAge1xuICAgIHZhciBmcmFtZSA9IGNvbXBvbmVudEZyYW1lQ2FjaGUuZ2V0KGZuKTtcblxuICAgIGlmIChmcmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZnJhbWU7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRyb2w7XG4gIHJlZW50cnkgPSB0cnVlO1xuICB2YXIgcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZSA9IEVycm9yLnByZXBhcmVTdGFja1RyYWNlOyAvLyAkRmxvd0ZpeE1lIEl0IGRvZXMgYWNjZXB0IHVuZGVmaW5lZC5cblxuICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHVuZGVmaW5lZDtcbiAgdmFyIHByZXZpb3VzRGlzcGF0Y2hlcjtcblxuICB7XG4gICAgcHJldmlvdXNEaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50OyAvLyBTZXQgdGhlIGRpc3BhdGNoZXIgaW4gREVWIGJlY2F1c2UgdGhpcyBtaWdodCBiZSBjYWxsIGluIHRoZSByZW5kZXIgZnVuY3Rpb25cbiAgICAvLyBmb3Igd2FybmluZ3MuXG5cbiAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBudWxsO1xuICAgIGRpc2FibGVMb2dzKCk7XG4gIH1cblxuICB0cnkge1xuICAgIC8vIFRoaXMgc2hvdWxkIHRocm93LlxuICAgIGlmIChjb25zdHJ1Y3QpIHtcbiAgICAgIC8vIFNvbWV0aGluZyBzaG91bGQgYmUgc2V0dGluZyB0aGUgcHJvcHMgaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAgdmFyIEZha2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lXG5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZha2UucHJvdG90eXBlLCAncHJvcHMnLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIFdlIHVzZSBhIHRocm93aW5nIHNldHRlciBpbnN0ZWFkIG9mIGZyb3plbiBvciBub24td3JpdGFibGUgcHJvcHNcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoYXQgd29uJ3QgdGhyb3cgaW4gYSBub24tc3RyaWN0IG1vZGUgZnVuY3Rpb24uXG4gICAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgJiYgUmVmbGVjdC5jb25zdHJ1Y3QpIHtcbiAgICAgICAgLy8gV2UgY29uc3RydWN0IGEgZGlmZmVyZW50IGNvbnRyb2wgZm9yIHRoaXMgY2FzZSB0byBpbmNsdWRlIGFueSBleHRyYVxuICAgICAgICAvLyBmcmFtZXMgYWRkZWQgYnkgdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICB0cnkge1xuICAgICAgICAgIFJlZmxlY3QuY29uc3RydWN0KEZha2UsIFtdKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoZm4sIFtdLCBGYWtlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgRmFrZS5jYWxsKCk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZuLmNhbGwoRmFrZS5wcm90b3R5cGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICBjb250cm9sID0geDtcbiAgICAgIH1cblxuICAgICAgZm4oKTtcbiAgICB9XG4gIH0gY2F0Y2ggKHNhbXBsZSkge1xuICAgIC8vIFRoaXMgaXMgaW5saW5lZCBtYW51YWxseSBiZWNhdXNlIGNsb3N1cmUgZG9lc24ndCBkbyBpdCBmb3IgdXMuXG4gICAgaWYgKHNhbXBsZSAmJiBjb250cm9sICYmIHR5cGVvZiBzYW1wbGUuc3RhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBUaGlzIGV4dHJhY3RzIHRoZSBmaXJzdCBmcmFtZSBmcm9tIHRoZSBzYW1wbGUgdGhhdCBpc24ndCBhbHNvIGluIHRoZSBjb250cm9sLlxuICAgICAgLy8gU2tpcHBpbmcgb25lIGZyYW1lIHRoYXQgd2UgYXNzdW1lIGlzIHRoZSBmcmFtZSB0aGF0IGNhbGxzIHRoZSB0d28uXG4gICAgICB2YXIgc2FtcGxlTGluZXMgPSBzYW1wbGUuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIGNvbnRyb2xMaW5lcyA9IGNvbnRyb2wuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIHMgPSBzYW1wbGVMaW5lcy5sZW5ndGggLSAxO1xuICAgICAgdmFyIGMgPSBjb250cm9sTGluZXMubGVuZ3RoIC0gMTtcblxuICAgICAgd2hpbGUgKHMgPj0gMSAmJiBjID49IDAgJiYgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAvLyBXZSBleHBlY3QgYXQgbGVhc3Qgb25lIHN0YWNrIGZyYW1lIHRvIGJlIHNoYXJlZC5cbiAgICAgICAgLy8gVHlwaWNhbGx5IHRoaXMgd2lsbCBiZSB0aGUgcm9vdCBtb3N0IG9uZS4gSG93ZXZlciwgc3RhY2sgZnJhbWVzIG1heSBiZVxuICAgICAgICAvLyBjdXQgb2ZmIGR1ZSB0byBtYXhpbXVtIHN0YWNrIGxpbWl0cy4gSW4gdGhpcyBjYXNlLCBvbmUgbWF5YmUgY3V0IG9mZlxuICAgICAgICAvLyBlYXJsaWVyIHRoYW4gdGhlIG90aGVyLiBXZSBhc3N1bWUgdGhhdCB0aGUgc2FtcGxlIGlzIGxvbmdlciBvciB0aGUgc2FtZVxuICAgICAgICAvLyBhbmQgdGhlcmUgZm9yIGN1dCBvZmYgZWFybGllci4gU28gd2Ugc2hvdWxkIGZpbmQgdGhlIHJvb3QgbW9zdCBmcmFtZSBpblxuICAgICAgICAvLyB0aGUgc2FtcGxlIHNvbWV3aGVyZSBpbiB0aGUgY29udHJvbC5cbiAgICAgICAgYy0tO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgcyA+PSAxICYmIGMgPj0gMDsgcy0tLCBjLS0pIHtcbiAgICAgICAgLy8gTmV4dCB3ZSBmaW5kIHRoZSBmaXJzdCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSB3aGljaCBzaG91bGQgYmUgdGhlXG4gICAgICAgIC8vIGZyYW1lIHRoYXQgY2FsbGVkIG91ciBzYW1wbGUgZnVuY3Rpb24gYW5kIHRoZSBjb250cm9sLlxuICAgICAgICBpZiAoc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgIC8vIEluIFY4LCB0aGUgZmlyc3QgbGluZSBpcyBkZXNjcmliaW5nIHRoZSBtZXNzYWdlIGJ1dCBvdGhlciBWTXMgZG9uJ3QuXG4gICAgICAgICAgLy8gSWYgd2UncmUgYWJvdXQgdG8gcmV0dXJuIHRoZSBmaXJzdCBsaW5lLCBhbmQgdGhlIGNvbnRyb2wgaXMgYWxzbyBvbiB0aGUgc2FtZVxuICAgICAgICAgIC8vIGxpbmUsIHRoYXQncyBhIHByZXR0eSBnb29kIGluZGljYXRvciB0aGF0IG91ciBzYW1wbGUgdGhyZXcgYXQgc2FtZSBsaW5lIGFzXG4gICAgICAgICAgLy8gdGhlIGNvbnRyb2wuIEkuZS4gYmVmb3JlIHdlIGVudGVyZWQgdGhlIHNhbXBsZSBmcmFtZS4gU28gd2UgaWdub3JlIHRoaXMgcmVzdWx0LlxuICAgICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpZiB5b3UgcGFzc2VkIGEgY2xhc3MgdG8gZnVuY3Rpb24gY29tcG9uZW50LCBvciBub24tZnVuY3Rpb24uXG4gICAgICAgICAgaWYgKHMgIT09IDEgfHwgYyAhPT0gMSkge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICBzLS07XG4gICAgICAgICAgICAgIGMtLTsgLy8gV2UgbWF5IHN0aWxsIGhhdmUgc2ltaWxhciBpbnRlcm1lZGlhdGUgZnJhbWVzIGZyb20gdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICAgICAgICAvLyBUaGUgbmV4dCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSBzaG91bGQgYmUgb3VyIG1hdGNoIHRob3VnaC5cblxuICAgICAgICAgICAgICBpZiAoYyA8IDAgfHwgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgICAgICAgIC8vIFY4IGFkZHMgYSBcIm5ld1wiIHByZWZpeCBmb3IgbmF0aXZlIGNsYXNzZXMuIExldCdzIHJlbW92ZSBpdCB0byBtYWtlIGl0IHByZXR0aWVyLlxuICAgICAgICAgICAgICAgIHZhciBfZnJhbWUgPSAnXFxuJyArIHNhbXBsZUxpbmVzW3NdLnJlcGxhY2UoJyBhdCBuZXcgJywgJyBhdCAnKTtcblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIF9mcmFtZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAvLyBSZXR1cm4gdGhlIGxpbmUgd2UgZm91bmQuXG5cblxuICAgICAgICAgICAgICAgIHJldHVybiBfZnJhbWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gd2hpbGUgKHMgPj0gMSAmJiBjID49IDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIHJlZW50cnkgPSBmYWxzZTtcblxuICAgIHtcbiAgICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IHByZXZpb3VzRGlzcGF0Y2hlcjtcbiAgICAgIHJlZW5hYmxlTG9ncygpO1xuICAgIH1cblxuICAgIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZTtcbiAgfSAvLyBGYWxsYmFjayB0byBqdXN0IHVzaW5nIHRoZSBuYW1lIGlmIHdlIGNvdWxkbid0IG1ha2UgaXQgdGhyb3cuXG5cblxuICB2YXIgbmFtZSA9IGZuID8gZm4uZGlzcGxheU5hbWUgfHwgZm4ubmFtZSA6ICcnO1xuICB2YXIgc3ludGhldGljRnJhbWUgPSBuYW1lID8gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSkgOiAnJztcblxuICB7XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIHN5bnRoZXRpY0ZyYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ludGhldGljRnJhbWU7XG59XG5mdW5jdGlvbiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUoZm4sIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG91bGRDb25zdHJ1Y3QoQ29tcG9uZW50KSB7XG4gIHZhciBwcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuICByZXR1cm4gISEocHJvdG90eXBlICYmIHByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUsIHNvdXJjZSwgb3duZXJGbikge1xuXG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB7XG4gICAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZSh0eXBlLCBzaG91bGRDb25zdHJ1Y3QodHlwZSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUodHlwZSk7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlJyk7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2VMaXN0Jyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgLy8gTWVtbyBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLnR5cGUsIHNvdXJjZSwgb3duZXJGbik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIExhenkgbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGluaXQocGF5bG9hZCksIHNvdXJjZSwgb3duZXJGbik7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge31cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxudmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBlbGVtZW50KSB7XG4gIHtcbiAgICAvLyAkRmxvd0ZpeE1lIFRoaXMgaXMgb2theSBidXQgRmxvdyBkb2Vzbid0IGtub3cgaXQuXG4gICAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvciQxID0gdm9pZCAwOyAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICsgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJyArICdUaGlzIG9mdGVuIGhhcHBlbnMgYmVjYXVzZSBvZiB0eXBvcyBzdWNoIGFzIGBQcm9wVHlwZXMuZnVuY3Rpb25gIGluc3RlYWQgb2YgYFByb3BUeXBlcy5mdW5jYC4nKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVycm9yJDEgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCcpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yJDEgPSBleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxICYmICEoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMnICsgJyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IkMSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvciQxLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yJDEubWVzc2FnZV0gPSB0cnVlO1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJ0ZhaWxlZCAlcyB0eXBlOiAlcycsIGxvY2F0aW9uLCBlcnJvciQxLm1lc3NhZ2UpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bjtcbnZhciBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bjtcbnZhciBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzO1xuXG57XG4gIGRpZFdhcm5BYm91dFN0cmluZ1JlZnMgPSB7fTtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdrZXknKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAna2V5JykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZikge1xuICB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmID09PSAnc3RyaW5nJyAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50ICYmIHNlbGYgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5zdGF0ZU5vZGUgIT09IHNlbGYpIHtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAoIWRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0pIHtcbiAgICAgICAgZXJyb3IoJ0NvbXBvbmVudCBcIiVzXCIgY29udGFpbnMgdGhlIHN0cmluZyByZWYgXCIlc1wiLiAnICsgJ1N1cHBvcnQgZm9yIHN0cmluZyByZWZzIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiAnICsgJ1RoaXMgY2FzZSBjYW5ub3QgYmUgYXV0b21hdGljYWxseSBjb252ZXJ0ZWQgdG8gYW4gYXJyb3cgZnVuY3Rpb24uICcgKyAnV2UgYXNrIHlvdSB0byBtYW51YWxseSBmaXggdGhpcyBjYXNlIGJ5IHVzaW5nIHVzZVJlZigpIG9yIGNyZWF0ZVJlZigpIGluc3RlYWQuICcgKyAnTGVhcm4gbW9yZSBhYm91dCB1c2luZyByZWZzIHNhZmVseSBoZXJlOiAnICsgJ2h0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpLCBjb25maWcucmVmKTtcblxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nS2V5LFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBgcmVmYCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIG5vdCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5cblxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTsgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcblxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4vKipcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JmY3MvcHVsbC8xMDdcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKi9cblxuZnVuY3Rpb24ganN4REVWKHR5cGUsIGNvbmZpZywgbWF5YmVLZXksIHNvdXJjZSwgc2VsZikge1xuICB7XG4gICAgdmFyIHByb3BOYW1lOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cbiAgICB2YXIgcHJvcHMgPSB7fTtcbiAgICB2YXIga2V5ID0gbnVsbDtcbiAgICB2YXIgcmVmID0gbnVsbDsgLy8gQ3VycmVudGx5LCBrZXkgY2FuIGJlIHNwcmVhZCBpbiBhcyBhIHByb3AuIFRoaXMgY2F1c2VzIGEgcG90ZW50aWFsXG4gICAgLy8gaXNzdWUgaWYga2V5IGlzIGFsc28gZXhwbGljaXRseSBkZWNsYXJlZCAoaWUuIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+XG4gICAgLy8gb3IgPGRpdiBrZXk9XCJIaVwiIHsuLi5wcm9wc30gLz4gKS4gV2Ugd2FudCB0byBkZXByZWNhdGUga2V5IHNwcmVhZCxcbiAgICAvLyBidXQgYXMgYW4gaW50ZXJtZWRpYXJ5IHN0ZXAsIHdlIHdpbGwgdXNlIGpzeERFViBmb3IgZXZlcnl0aGluZyBleGNlcHRcbiAgICAvLyA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPiwgYmVjYXVzZSB3ZSBhcmVuJ3QgY3VycmVudGx5IGFibGUgdG8gdGVsbCBpZlxuICAgIC8vIGtleSBpcyBleHBsaWNpdGx5IGRlY2xhcmVkIHRvIGJlIHVuZGVmaW5lZCBvciBub3QuXG5cbiAgICBpZiAobWF5YmVLZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAga2V5ID0gJycgKyBtYXliZUtleTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZik7XG4gICAgfSAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG5cblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfSAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcblxuXG4gICAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcblxuICAgICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbnZhciBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bjtcblxue1xuICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IGZhbHNlO1xufVxuLyoqXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBAZmluYWxcbiAqL1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICB7XG4gICAgaWYgKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudCkge1xuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcbiAge1xuICAgIGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cblxuXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB7XG4gICAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICAgIGlmICghaW5mbykge1xuICAgICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG5cbiAgICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICAgIGluZm8gPSBcIlxcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPFwiICsgcGFyZW50TmFtZSArIFwiPi5cIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5mbztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xuXG4gICAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7IC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gICAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAgIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cblxuICAgIHZhciBjaGlsZE93bmVyID0gJyc7XG5cbiAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICAgIGNoaWxkT3duZXIgPSBcIiBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSBcIiArIGdldENvbXBvbmVudE5hbWUoZWxlbWVudC5fb3duZXIudHlwZSkgKyBcIi5cIjtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpO1xuXG4gICAgZXJyb3IoJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay93YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lcik7XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICB9XG59XG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAge1xuICAgIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShub2RlKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG5cbiAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgICAgLy8gVGhpcyBlbGVtZW50IHdhcyBwYXNzZWQgaW4gYSB2YWxpZCBsb2NhdGlvbi5cbiAgICAgIGlmIChub2RlLl9zdG9yZSkge1xuICAgICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobm9kZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IG5vZGUuZW50cmllcykge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcblxuICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAge1xuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcm9wVHlwZXM7XG5cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIE5vdGU6IE1lbW8gb25seSBjaGVja3Mgb3V0ZXIgcHJvcHMgaGVyZS5cbiAgICAvLyBJbm5lciBwcm9wcyBhcmUgY2hlY2tlZCBpbiB0aGUgcmVjb25jaWxlci5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9wVHlwZXMpIHtcbiAgICAgIC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG4gICAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlOyAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuXG4gICAgICB2YXIgX25hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgX25hbWUgfHwgJ1Vua25vd24nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHR5cGUuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nICYmICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCkge1xuICAgICAgZXJyb3IoJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xuICB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICBlcnJvcignSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcblxuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24ganN4V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGtleSwgaXNTdGF0aWNDaGlsZHJlbiwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpOyAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAgIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG5cbiAgICBpZiAoIXZhbGlkVHlwZSkge1xuICAgICAgdmFyIGluZm8gPSAnJztcblxuICAgICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICAgIH1cblxuICAgICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpO1xuXG4gICAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdHlwZVN0cmluZztcblxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ2FycmF5JztcbiAgICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gXCI8XCIgKyAoZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpIHx8ICdVbmtub3duJykgKyBcIiAvPlwiO1xuICAgICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlU3RyaW5nID0gdHlwZW9mIHR5cGU7XG4gICAgICB9XG5cbiAgICAgIGVycm9yKCdSZWFjdC5qc3g6IHR5cGUgaXMgaW52YWxpZCAtLSBleHBlY3RlZCBhIHN0cmluZyAoZm9yICcgKyAnYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSAnICsgJ2NvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgdHlwZVN0cmluZywgaW5mbyk7XG4gICAgfVxuXG4gICAgdmFyIGVsZW1lbnQgPSBqc3hERVYodHlwZSwgcHJvcHMsIGtleSwgc291cmNlLCBzZWxmKTsgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cbiAgICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG5cbiAgICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9IC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gICAgLy8gZG9lc24ndCBleHBlY3QgYSBub24tc3RyaW5nL2Z1bmN0aW9uIHR5cGUgYW5kIGNhbiB0aHJvdyBjb25mdXNpbmcgZXJyb3JzLlxuICAgIC8vIFdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIGJlaGF2aW9yIHRvIGRpZmZlciBiZXR3ZWVuIGRldiBhbmQgcHJvZC5cbiAgICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAgIC8vIGZpeGVkLCB0aGUga2V5IHdhcm5pbmdzIHdpbGwgYXBwZWFyLilcblxuXG4gICAgaWYgKHZhbGlkVHlwZSkge1xuICAgICAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG5cbiAgICAgIGlmIChjaGlsZHJlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChpc1N0YXRpY0NoaWxkcmVuKSB7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuW2ldLCB0eXBlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgICAgICAgICAgT2JqZWN0LmZyZWV6ZShjaGlsZHJlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yKCdSZWFjdC5qc3g6IFN0YXRpYyBjaGlsZHJlbiBzaG91bGQgYWx3YXlzIGJlIGFuIGFycmF5LiAnICsgJ1lvdSBhcmUgbGlrZWx5IGV4cGxpY2l0bHkgY2FsbGluZyBSZWFjdC5qc3hzIG9yIFJlYWN0LmpzeERFVi4gJyArICdVc2UgdGhlIEJhYmVsIHRyYW5zZm9ybSBpbnN0ZWFkLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhjaGlsZHJlbiwgdHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCkge1xuICAgICAgdmFsaWRhdGVGcmFnbWVudFByb3BzKGVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufSAvLyBUaGVzZSB0d28gZnVuY3Rpb25zIGV4aXN0IHRvIHN0aWxsIGdldCBjaGlsZCB3YXJuaW5ncyBpbiBkZXZcblxudmFyIGpzeERFViQxID0gIGpzeFdpdGhWYWxpZGF0aW9uIDtcblxuZXhwb3J0cy5qc3hERVYgPSBqc3hERVYkMTtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsTW9kdWxlKSB7XG5cdGlmICghb3JpZ2luYWxNb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0dmFyIG1vZHVsZSA9IE9iamVjdC5jcmVhdGUob3JpZ2luYWxNb2R1bGUpO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImV4cG9ydHNcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiLy8gbGF5b3V0XHJcbmltcG9ydCBcIi4uL3N0eWxlcy9sYXlvdXQuY3NzXCJcclxuaW1wb3J0IFwiLi4vc3R5bGVzL2NvbXBvbmVudHMvaGVhZGVyLmNzc1wiXHJcbmltcG9ydCBcIi4uL3N0eWxlcy9jb21wb25lbnRzL3NpZGViYXIuY3NzXCJcclxuXHJcbi8vIHBhZ2VzXHJcbmltcG9ydCBcIi4uL3N0eWxlcy9sb2dpbi5jc3NcIlxyXG5pbXBvcnQgXCIuLi9zdHlsZXMvYmxvZy9pbmRleC5jc3NcIlxyXG5pbXBvcnQgXCIuLi9zdHlsZXMvYmxvZy9jcmVhdGUtbmV3LXBvc3QuY3NzXCJcclxuaW1wb3J0IFwiLi4vc3R5bGVzL2Jsb2cvZWRpdC5jc3NcIlxyXG5pbXBvcnQgXCIuLi9zdHlsZXMvaW1hZ2VzL2luZGV4LmNzc1wiXHJcblxyXG4vLyBtb2RhbHNcclxuaW1wb3J0IFwiLi4vc3R5bGVzL2NvbXBvbmVudHMvbW9kYWxzL2RlbGV0ZS1ibG9nLXBvc3QuY3NzXCJcclxuXHJcbi8vIGNvZGVtaXJyb3JcclxuaW1wb3J0IFwiY29kZW1pcnJvci9saWIvY29kZW1pcnJvci5jc3NcIlxyXG5pbXBvcnQgXCJjb2RlbWlycm9yL3RoZW1lL2RyYWN1bGEuY3NzXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbn0iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtNi0xIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtNi0yIS4vY3JlYXRlLW5ldy1wb3N0LmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiKSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi02LTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi02LTIhLi9jcmVhdGUtbmV3LXBvc3QuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTYtMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTYtMiEuL2NyZWF0ZS1uZXctcG9zdC5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTYtMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTYtMiEuL2VkaXQuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTYtMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTYtMiEuL2VkaXQuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTYtMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTYtMiEuL2VkaXQuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi02LTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi02LTIhLi9pbmRleC5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYikge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtNi0xIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtNi0yIS4vaW5kZXguY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTYtMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTYtMiEuL2luZGV4LmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtNi0xIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtNi0yIS4vaGVhZGVyLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiKSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi02LTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi02LTIhLi9oZWFkZXIuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTYtMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTYtMiEuL2hlYWRlci5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTYtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTYtMiEuL2RlbGV0ZS1ibG9nLXBvc3QuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTYtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTYtMiEuL2RlbGV0ZS1ibG9nLXBvc3QuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTYtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTYtMiEuL2RlbGV0ZS1ibG9nLXBvc3QuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi02LTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi02LTIhLi9zaWRlYmFyLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiKSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi02LTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi02LTIhLi9zaWRlYmFyLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi02LTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi02LTIhLi9zaWRlYmFyLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtNi0xIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtNi0yIS4vaW5kZXguY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTYtMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTYtMiEuL2luZGV4LmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi02LTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi02LTIhLi9pbmRleC5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTYtMSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTYtMiEuL2xheW91dC5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYikge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtNi0xIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtNi0yIS4vbGF5b3V0LmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi02LTEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi02LTIhLi9sYXlvdXQuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi02LTEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi02LTIhLi9sb2dpbi5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYikge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtNi0xIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtNi0yIS4vbG9naW4uY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTYtMSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTYtMiEuL2xvZ2luLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9