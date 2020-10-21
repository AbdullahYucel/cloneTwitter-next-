webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_tweet_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/tweet/index */ "./components/tweet/index.js");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.css */ "./pages/index.module.css");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_photo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/photo */ "./components/photo.js");
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/icons */ "./components/icons/index.js");
/* harmony import */ var _components_icon_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/icon-button */ "./components/icon-button.js");
/* harmony import */ var date_fns_formatDistanceToNowStrict__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns/formatDistanceToNowStrict */ "./node_modules/date-fns/esm/formatDistanceToNowStrict/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var _components_modal_tweet_modal_tweet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/modal-tweet/modal-tweet */ "./components/modal-tweet/modal-tweet.js");
var _jsxFileName = "C:\\Users\\YUCEL\\Desktop\\clone\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











function Index() {
  var date = new Date(2020, 9, 21);
  var name = 'Username';
  var mention = 'Mention';
  var untilNow = Object(date_fns_formatDistanceToNowStrict__WEBPACK_IMPORTED_MODULE_7__["default"])(date);
  var like = Math.floor(Math.random() * 20);
  var comment = Math.floor(Math.random() * 20);
  var rt = Math.floor(Math.random() * 20);
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx(_components_modal_tweet_modal_tweet__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }), __jsx(_components_tweet_index__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: name,
    mention: mention,
    date: date,
    big: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 14
    }
  }), __jsx("article", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.article,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 14
    }
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.photoDiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx(_components_photo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    big: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.body,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx("header", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }, name), "  ", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 66
    }
  }, "@", mention, " "), " \u2022 ", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 93
    }
  }, untilNow), " "), __jsx("p", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, "MERHABA"), __jsx("footer", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.footer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonFooter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, __jsx(_components_icon_button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.iconButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }, __jsx(_components_icons__WEBPACK_IMPORTED_MODULE_5__["Reply"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 25
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 25
    }
  }, "5"))), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonFooter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }, __jsx(_components_icon_button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.iconButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }, __jsx(_components_icons__WEBPACK_IMPORTED_MODULE_5__["Retweet"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 25
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 25
    }
  }, "12"))), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonFooter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }, __jsx(_components_icon_button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.iconButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }, __jsx(_components_icons__WEBPACK_IMPORTED_MODULE_5__["Like"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 25
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 25
    }
  }, "8"))), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonFooter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }, __jsx(_components_icon_button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.iconButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }, __jsx(_components_icons__WEBPACK_IMPORTED_MODULE_5__["Share"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 25
    }
  })))))));
}

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJkYXRlIiwiRGF0ZSIsIm5hbWUiLCJtZW50aW9uIiwidW50aWxOb3ciLCJmb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0IiwibGlrZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNvbW1lbnQiLCJydCIsInN0eWxlcyIsImFydGljbGUiLCJwaG90b0RpdiIsImJvZHkiLCJoZWFkZXIiLCJjb250ZW50IiwiZm9vdGVyIiwiYnV0dG9uRm9vdGVyIiwiaWNvbkJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsR0FBaUI7QUFDYixNQUFNQyxJQUFJLEdBQUUsSUFBSUMsSUFBSixDQUFTLElBQVQsRUFBYyxDQUFkLEVBQWdCLEVBQWhCLENBQVo7QUFDQSxNQUFNQyxJQUFJLEdBQUMsVUFBWDtBQUNBLE1BQU1DLE9BQU8sR0FBQyxTQUFkO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQyxrRkFBeUIsQ0FBQ0wsSUFBRCxDQUExQztBQUVBLE1BQUlNLElBQUksR0FBQ0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFjLEVBQXpCLENBQVQ7QUFDQSxNQUFJQyxPQUFPLEdBQUNILElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBYyxFQUF6QixDQUFaO0FBQ0EsTUFBSUUsRUFBRSxHQUFDSixJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWMsRUFBekIsQ0FBUDtBQUdBLFNBQ0ksTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywyRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSyxNQUFDLCtEQUFEO0FBQWdCLFFBQUksRUFBRVAsSUFBdEI7QUFBNEIsV0FBTyxFQUFFQyxPQUFyQztBQUE4QyxRQUFJLEVBQUVILElBQXBEO0FBQTBELE9BQUcsTUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZMLEVBSUs7QUFBUyxhQUFTLEVBQUVZLHdEQUFNLENBQUNDLE9BQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRDtBQUFLLGFBQVMsRUFBRUQsd0RBQU0sQ0FBQ0UsUUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMseURBQUQ7QUFBTyxPQUFHLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREMsRUFNRDtBQUFLLGFBQVMsRUFBRUYsd0RBQU0sQ0FBQ0csSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQVEsYUFBUyxFQUFFSCx3REFBTSxDQUFDSSxNQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTSxhQUFTLEVBQUVKLHdEQUFNLENBQUNWLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBK0JBLElBQS9CLENBREosUUFDaUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFRQyxPQUFSLE1BRGpELGNBQzRFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT0MsUUFBUCxDQUQ1RSxNQURKLEVBR0k7QUFBRyxhQUFTLEVBQUVRLHdEQUFNLENBQUNLLE9BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISixFQUlJO0FBQVEsYUFBUyxFQUFFTCx3REFBTSxDQUFDTSxNQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBSyxhQUFTLEVBQUVOLHdEQUFNLENBQUNPLFlBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLCtEQUFEO0FBQVksYUFBUyxFQUFFUCx3REFBTSxDQUFDUSxVQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRkosQ0FESixDQURBLEVBUUk7QUFBSyxhQUFTLEVBQUVSLHdEQUFNLENBQUNPLFlBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLCtEQUFEO0FBQVksYUFBUyxFQUFFUCx3REFBTSxDQUFDUSxVQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRkosQ0FEQSxDQVJKLEVBZUk7QUFBSyxhQUFTLEVBQUVSLHdEQUFNLENBQUNPLFlBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLCtEQUFEO0FBQVksYUFBUyxFQUFFUCx3REFBTSxDQUFDUSxVQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRkosQ0FEQSxDQWZKLEVBc0JJO0FBQUssYUFBUyxFQUFFUix3REFBTSxDQUFDTyxZQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQywrREFBRDtBQUFZLGFBQVMsRUFBRVAsd0RBQU0sQ0FBQ1EsVUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREEsQ0F0QkosQ0FKSixDQU5DLENBSkwsQ0FESjtBQW1ESDs7S0E5RFFyQixLO0FBa0VNQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41YjNlOGE0YTYzYTBmODBkZjNkZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXHJcbmltcG9ydCBTdHJ1Y3R1cmVUd2VldCBmcm9tICcuLi9jb21wb25lbnRzL3R3ZWV0L2luZGV4J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW5kZXgubW9kdWxlLmNzcydcclxuXHJcblxyXG5cclxuaW1wb3J0IFBob3RvIGZyb20gJy4uL2NvbXBvbmVudHMvcGhvdG8nXHJcbmltcG9ydCAqIGFzIElDT04gZnJvbSAnLi4vY29tcG9uZW50cy9pY29ucydcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9pY29uLWJ1dHRvbidcclxuaW1wb3J0IGZvcm1hdERpc3RhbmNlVG9Ob3dTdHJpY3QgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0RGlzdGFuY2VUb05vd1N0cmljdCdcclxuaW1wb3J0IHsgZ2V0SG91cnMgfSBmcm9tICdkYXRlLWZucydcclxuaW1wb3J0IE1vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvbW9kYWwtdHdlZXQvbW9kYWwtdHdlZXQnXHJcblxyXG5mdW5jdGlvbiBJbmRleCgpIHtcclxuICAgIGNvbnN0IGRhdGU9IG5ldyBEYXRlKDIwMjAsOSwyMSlcclxuICAgIGNvbnN0IG5hbWU9J1VzZXJuYW1lJ1xyXG4gICAgY29uc3QgbWVudGlvbj0nTWVudGlvbidcclxuICAgIGNvbnN0IHVudGlsTm93ID0gZm9ybWF0RGlzdGFuY2VUb05vd1N0cmljdChkYXRlKVxyXG5cclxuICAgIHZhciBsaWtlPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoyMClcclxuICAgIHZhciBjb21tZW50PU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoyMClcclxuICAgIHZhciBydD1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMjApXHJcbiAgICBcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8TW9kYWwvPlxyXG4gICAgICAgICAgICAgPFN0cnVjdHVyZVR3ZWV0IG5hbWU9e25hbWV9IG1lbnRpb249e21lbnRpb259IGRhdGU9e2RhdGV9IGJpZyAvPiBcclxuXHJcbiAgICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e3N0eWxlcy5hcnRpY2xlfSA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9EaXZ9ID5cclxuICAgICAgICAgICAgICAgIDxQaG90byBiaWcvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBCQcWeTEEgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9keX0gPlxyXG4gICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9PntuYW1lfTwvc3Bhbj4gIDxzcGFuPkB7bWVudGlvbn0gPC9zcGFuPiDigKIgPHNwYW4+e3VudGlsTm93fTwvc3Bhbj4gPC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5NRVJIQUJBPC9wPlxyXG4gICAgICAgICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PiBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uRm9vdGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5pY29uQnV0dG9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElDT04uUmVwbHkvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj41PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbkZvb3Rlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuaWNvbkJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJQ09OLlJldHdlZXQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4xMjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uRm9vdGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5pY29uQnV0dG9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElDT04uTGlrZS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uRm9vdGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5pY29uQnV0dG9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElDT04uU2hhcmUvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIELEsFTEsFIgKi99XHJcblxyXG4gICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleFxyXG4iXSwic291cmNlUm9vdCI6IiJ9