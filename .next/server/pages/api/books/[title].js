"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/books/[title]";
exports.ids = ["pages/api/books/[title]"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/books/[title].js":
/*!************************************!*\
  !*** ./pages/api/books/[title].js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n    const { title  } = req.query;\n    const booksPath = path__WEBPACK_IMPORTED_MODULE_0___default().join(process.cwd(), \"json\", \"books.json\");\n    const books = JSON.parse(await fs__WEBPACK_IMPORTED_MODULE_1__.promises.readFile(booksPath, \"utf8\"));\n    const data = books.filter((book)=>book.title === title);\n    res.status(200).json(data);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYm9va3MvW3RpdGxlXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3QjtBQUNVO0FBQ25CLGVBQWVHLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFDO0lBQzNDLE1BQU0sRUFBQ0MsTUFBSyxFQUFDLEdBQUdGLElBQUlHLEtBQUs7SUFDekIsTUFBTUMsWUFBWVIsZ0RBQVMsQ0FBQ1UsUUFBUUMsR0FBRyxJQUFJLFFBQVE7SUFDbkQsTUFBTUMsUUFBUUMsS0FBS0MsS0FBSyxDQUFDLE1BQU1aLGlEQUFXLENBQUNNLFdBQVc7SUFDdEQsTUFBTVEsT0FBT0osTUFBTUssTUFBTSxDQUFDQyxDQUFBQSxPQUFRQSxLQUFLWixLQUFLLEtBQUtBO0lBQ2pERCxJQUFJYyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDSjtBQUN6QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2Jvb2tzL1t0aXRsZV0uanM/MzdkMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7cHJvbWlzZXMgYXMgZnN9IGZyb20gJ2ZzJztcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpe1xuICAgIGNvbnN0IHt0aXRsZX0gPSByZXEucXVlcnk7XG4gICAgY29uc3QgYm9va3NQYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdqc29uJywgJ2Jvb2tzLmpzb24nKTtcbiAgICBjb25zdCBib29rcyA9IEpTT04ucGFyc2UoYXdhaXQgZnMucmVhZEZpbGUoYm9va3NQYXRoLCAndXRmOCcpKTtcbiAgICBjb25zdCBkYXRhID0gYm9va3MuZmlsdGVyKGJvb2sgPT4gYm9vay50aXRsZSA9PT0gdGl0bGUpO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRhdGEpO1xufSJdLCJuYW1lcyI6WyJwYXRoIiwicHJvbWlzZXMiLCJmcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJ0aXRsZSIsInF1ZXJ5IiwiYm9va3NQYXRoIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJib29rcyIsIkpTT04iLCJwYXJzZSIsInJlYWRGaWxlIiwiZGF0YSIsImZpbHRlciIsImJvb2siLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/books/[title].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/books/[title].js"));
module.exports = __webpack_exports__;

})();