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
exports.id = "pages/api/authors";
exports.ids = ["pages/api/authors"];
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

/***/ "(api)/./pages/api/authors/index.js":
/*!************************************!*\
  !*** ./pages/api/authors/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n//Sends back all authors from books.json\n\n\nasync function handler(req, res) {\n    const booksPath = path__WEBPACK_IMPORTED_MODULE_0___default().join(process.cwd(), \"json\", \"books.json\");\n    const books = JSON.parse(await fs__WEBPACK_IMPORTED_MODULE_1__.promises.readFile(booksPath, \"utf8\"));\n    const authors = books.map((book)=>book.author);\n    const uniqueAuthors = [\n        ...new Set(authors)\n    ];\n    res.status(200).json(uniqueAuthors);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aG9ycy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHdDQUF3QztBQUNoQjtBQUNVO0FBQ25CLGVBQWVHLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFDO0lBQzNDLE1BQU1DLFlBQVlOLGdEQUFTLENBQUNRLFFBQVFDLEdBQUcsSUFBSSxRQUFRO0lBQ25ELE1BQU1DLFFBQVFDLEtBQUtDLEtBQUssQ0FBQyxNQUFNVixpREFBVyxDQUFDSSxXQUFXO0lBQ3RELE1BQU1RLFVBQVVKLE1BQU1LLEdBQUcsQ0FBQ0MsQ0FBQUEsT0FBUUEsS0FBS0MsTUFBTTtJQUM3QyxNQUFNQyxnQkFBZ0I7V0FBSSxJQUFJQyxJQUFJTDtLQUFTO0lBQzNDVCxJQUFJZSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDSDtBQUN6QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2F1dGhvcnMvaW5kZXguanM/MzMwMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvL1NlbmRzIGJhY2sgYWxsIGF1dGhvcnMgZnJvbSBib29rcy5qc29uXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7cHJvbWlzZXMgYXMgZnN9IGZyb20gJ2ZzJztcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpe1xuICAgIGNvbnN0IGJvb2tzUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnanNvbicsICdib29rcy5qc29uJyk7XG4gICAgY29uc3QgYm9va3MgPSBKU09OLnBhcnNlKGF3YWl0IGZzLnJlYWRGaWxlKGJvb2tzUGF0aCwgJ3V0ZjgnKSk7XG4gICAgY29uc3QgYXV0aG9ycyA9IGJvb2tzLm1hcChib29rID0+IGJvb2suYXV0aG9yKTtcbiAgICBjb25zdCB1bmlxdWVBdXRob3JzID0gWy4uLm5ldyBTZXQoYXV0aG9ycyldO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHVuaXF1ZUF1dGhvcnMpO1xufSJdLCJuYW1lcyI6WyJwYXRoIiwicHJvbWlzZXMiLCJmcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJib29rc1BhdGgiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImJvb2tzIiwiSlNPTiIsInBhcnNlIiwicmVhZEZpbGUiLCJhdXRob3JzIiwibWFwIiwiYm9vayIsImF1dGhvciIsInVuaXF1ZUF1dGhvcnMiLCJTZXQiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/authors/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/authors/index.js"));
module.exports = __webpack_exports__;

})();