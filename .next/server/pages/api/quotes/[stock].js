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
exports.id = "pages/api/quotes/[stock]";
exports.ids = ["pages/api/quotes/[stock]"];
exports.modules = {

/***/ "finnhub":
/*!**************************!*\
  !*** external "finnhub" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("finnhub");

/***/ }),

/***/ "(api)/./pages/api/quotes/[stock].ts":
/*!*************************************!*\
  !*** ./pages/api/quotes/[stock].ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nconst finnhub = __webpack_require__(/*! finnhub */ \"finnhub\");\nconst apiToken = \"bv4mnbf48v6qpate9n30\"; // I would never display a token like this!\nconst api_key = finnhub.ApiClient.instance.authentications[\"api_key\"];\napi_key.apiKey = apiToken;\nconst finnhubClient = new finnhub.DefaultApi();\nconst config = {\n    api: {\n        externalResolver: true\n    }\n};\nconst handler = async (req, res)=>{\n    const { query: { stock  }  } = req;\n    try {\n        finnhubClient.quote(stock, (error, data, response)=>{\n            if (error) return res.status(202).json({\n                error\n            });\n            return res.status(200).json({\n                data,\n                response\n            });\n        });\n    } catch (e) {\n        return res.status(201).json({\n            error: e\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcXVvdGVzL1tzdG9ja10udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw2RUFBNkU7QUFFN0UsTUFBTUEsVUFBVUMsbUJBQU9BLENBQUM7QUFDeEIsTUFBTUMsV0FBVyx3QkFBd0IsMkNBQTJDO0FBQ3BGLE1BQU1DLFVBQVVILFFBQVFJLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDQyxlQUFlLENBQUMsVUFBVTtBQUNyRUgsUUFBUUksTUFBTSxHQUFHTDtBQUNqQixNQUFNTSxnQkFBZ0IsSUFBSVIsUUFBUVMsVUFBVTtBQUVyQyxNQUFNQyxTQUFTO0lBQ3BCQyxLQUFLO1FBQ0hDLGtCQUFrQixJQUFJO0lBQ3hCO0FBQ0YsRUFBQztBQVVELE1BQU1DLFVBQVUsT0FBT0MsS0FBcUJDLE1BQStCO0lBQ3pFLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxNQUFLLEVBQUUsR0FBRSxHQUFHSDtJQUM3QixJQUFJO1FBQ0ZOLGNBQWNVLEtBQUssQ0FBQ0QsT0FBTyxDQUFDRSxPQUFZQyxNQUFXQyxXQUFrQjtZQUNuRSxJQUFJRixPQUFPLE9BQU9KLElBQUlPLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVKO1lBQU07WUFDL0MsT0FBT0osSUFBSU8sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUg7Z0JBQU1DO1lBQVM7UUFDL0M7SUFDRixFQUFFLE9BQU9HLEdBQUc7UUFDVixPQUFPVCxJQUFJTyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVKLE9BQU9LO1FBQUU7SUFDekM7QUFDRjtBQUVBLGlFQUFlWCxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RvY2stcXVvdGVzLy4vcGFnZXMvYXBpL3F1b3Rlcy9bc3RvY2tdLnRzP2IyZjAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuY29uc3QgZmlubmh1YiA9IHJlcXVpcmUoJ2Zpbm5odWInKTtcbmNvbnN0IGFwaVRva2VuID0gJ2J2NG1uYmY0OHY2cXBhdGU5bjMwJzsgLy8gSSB3b3VsZCBuZXZlciBkaXNwbGF5IGEgdG9rZW4gbGlrZSB0aGlzIVxuY29uc3QgYXBpX2tleSA9IGZpbm5odWIuQXBpQ2xpZW50Lmluc3RhbmNlLmF1dGhlbnRpY2F0aW9uc1snYXBpX2tleSddO1xuYXBpX2tleS5hcGlLZXkgPSBhcGlUb2tlbjtcbmNvbnN0IGZpbm5odWJDbGllbnQgPSBuZXcgZmlubmh1Yi5EZWZhdWx0QXBpKClcblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgYXBpOiB7XG4gICAgZXh0ZXJuYWxSZXNvbHZlcjogdHJ1ZSxcbiAgfSxcbn1cblxudHlwZSBEYXRhID0ge1xuICBtZXRob2Q/OiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gIHN0b2NrPzogc3RyaW5nfCBzdHJpbmdbXSB8IHVuZGVmaW5lZCxcbiAgZXJyb3I/OiBhbnksXG4gIGRhdGE/OiBhbnksXG4gIHJlc3BvbnNlPzogYW55XG59O1xuXG5jb25zdCBoYW5kbGVyID0gYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlPERhdGE+KSA9PiB7XG4gIGNvbnN0IHsgcXVlcnk6IHsgc3RvY2sgfSB9ID0gcmVxO1xuICB0cnkge1xuICAgIGZpbm5odWJDbGllbnQucXVvdGUoc3RvY2ssIChlcnJvcjogYW55LCBkYXRhOiBhbnksIHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgIGlmIChlcnJvcikgcmV0dXJuIHJlcy5zdGF0dXMoMjAyKS5qc29uKHsgZXJyb3IgfSk7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBkYXRhLCByZXNwb25zZSB9KTtcbiAgICB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMSkuanNvbih7IGVycm9yOiBlIH0pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xuIl0sIm5hbWVzIjpbImZpbm5odWIiLCJyZXF1aXJlIiwiYXBpVG9rZW4iLCJhcGlfa2V5IiwiQXBpQ2xpZW50IiwiaW5zdGFuY2UiLCJhdXRoZW50aWNhdGlvbnMiLCJhcGlLZXkiLCJmaW5uaHViQ2xpZW50IiwiRGVmYXVsdEFwaSIsImNvbmZpZyIsImFwaSIsImV4dGVybmFsUmVzb2x2ZXIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicXVlcnkiLCJzdG9jayIsInF1b3RlIiwiZXJyb3IiLCJkYXRhIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJqc29uIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/quotes/[stock].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/quotes/[stock].ts"));
module.exports = __webpack_exports__;

})();