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
exports.id = "pages/api/books";
exports.ids = ["pages/api/books"];
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

/***/ "(api)/./pages/api/books/index.js":
/*!**********************************!*\
  !*** ./pages/api/books/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n    const booksPath = path__WEBPACK_IMPORTED_MODULE_0___default().join(process.cwd(), \"json\", \"books.json\");\n    const books = JSON.parse(await fs__WEBPACK_IMPORTED_MODULE_1__.promises.readFile(booksPath, \"utf8\"));\n    res.status(200).json(books);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYm9va3MvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0I7QUFDVTtBQUNuQixlQUFlRyxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBQztJQUMzQyxNQUFNQyxZQUFZTixnREFBUyxDQUFDUSxRQUFRQyxHQUFHLElBQUksUUFBUTtJQUNuRCxNQUFNQyxRQUFRQyxLQUFLQyxLQUFLLENBQUMsTUFBTVYsaURBQVcsQ0FBQ0ksV0FBVztJQUN0REQsSUFBSVMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0w7QUFDekIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9ib29rcy9pbmRleC5qcz82NzYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHtwcm9taXNlcyBhcyBmc30gZnJvbSAnZnMnO1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcyl7XG4gICAgY29uc3QgYm9va3NQYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdqc29uJywgJ2Jvb2tzLmpzb24nKTtcbiAgICBjb25zdCBib29rcyA9IEpTT04ucGFyc2UoYXdhaXQgZnMucmVhZEZpbGUoYm9va3NQYXRoLCAndXRmOCcpKTtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihib29rcyk7XG59Il0sIm5hbWVzIjpbInBhdGgiLCJwcm9taXNlcyIsImZzIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImJvb2tzUGF0aCIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiYm9va3MiLCJKU09OIiwicGFyc2UiLCJyZWFkRmlsZSIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/books/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/books/index.js"));
module.exports = __webpack_exports__;

})();