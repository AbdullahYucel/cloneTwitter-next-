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
  }, __jsx(_components_tweet_index__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJkYXRlIiwiRGF0ZSIsIm5hbWUiLCJtZW50aW9uIiwidW50aWxOb3ciLCJmb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0IiwibGlrZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNvbW1lbnQiLCJydCIsInN0eWxlcyIsImFydGljbGUiLCJwaG90b0RpdiIsImJvZHkiLCJoZWFkZXIiLCJjb250ZW50IiwiZm9vdGVyIiwiYnV0dG9uRm9vdGVyIiwiaWNvbkJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsR0FBaUI7QUFDYixNQUFNQyxJQUFJLEdBQUUsSUFBSUMsSUFBSixDQUFTLElBQVQsRUFBYyxDQUFkLEVBQWdCLEVBQWhCLENBQVo7QUFDQSxNQUFNQyxJQUFJLEdBQUMsVUFBWDtBQUNBLE1BQU1DLE9BQU8sR0FBQyxTQUFkO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQyxrRkFBeUIsQ0FBQ0wsSUFBRCxDQUExQztBQUVBLE1BQUlNLElBQUksR0FBQ0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFjLEVBQXpCLENBQVQ7QUFDQSxNQUFJQyxPQUFPLEdBQUNILElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBYyxFQUF6QixDQUFaO0FBQ0EsTUFBSUUsRUFBRSxHQUFDSixJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWMsRUFBekIsQ0FBUDtBQUdBLFNBQ0ksTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUssTUFBQywrREFBRDtBQUFnQixRQUFJLEVBQUVQLElBQXRCO0FBQTRCLFdBQU8sRUFB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SSxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURBLENBdEJKLENBSkosQ0FOQyxDQUpMLENBREo7QUFtREg7O0tBOURRckIsSztBQWtFTUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGNjYTQ0MjY4MWE5ODdhYTViOTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCx1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xyXG5pbXBvcnQgU3RydWN0dXJlVHdlZXQgZnJvbSAnLi4vY29tcG9uZW50cy90d2VldC9pbmRleCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2luZGV4Lm1vZHVsZS5jc3MnXHJcblxyXG5cclxuXHJcbmltcG9ydCBQaG90byBmcm9tICcuLi9jb21wb25lbnRzL3Bob3RvJ1xyXG5pbXBvcnQgKiBhcyBJQ09OIGZyb20gJy4uL2NvbXBvbmVudHMvaWNvbnMnXHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvaWNvbi1idXR0b24nXHJcbmltcG9ydCBmb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0IGZyb20gJ2RhdGUtZm5zL2Zvcm1hdERpc3RhbmNlVG9Ob3dTdHJpY3QnXHJcbmltcG9ydCB7IGdldEhvdXJzIH0gZnJvbSAnZGF0ZS1mbnMnXHJcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9jb21wb25lbnRzL21vZGFsLXR3ZWV0L21vZGFsLXR3ZWV0J1xyXG5cclxuZnVuY3Rpb24gSW5kZXgoKSB7XHJcbiAgICBjb25zdCBkYXRlPSBuZXcgRGF0ZSgyMDIwLDksMjEpXHJcbiAgICBjb25zdCBuYW1lPSdVc2VybmFtZSdcclxuICAgIGNvbnN0IG1lbnRpb249J01lbnRpb24nXHJcbiAgICBjb25zdCB1bnRpbE5vdyA9IGZvcm1hdERpc3RhbmNlVG9Ob3dTdHJpY3QoZGF0ZSlcclxuXHJcbiAgICB2YXIgbGlrZT1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMjApXHJcbiAgICB2YXIgY29tbWVudD1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMjApXHJcbiAgICB2YXIgcnQ9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjIwKVxyXG4gICAgXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuXHJcbiAgICAgICAgICAgICA8U3RydWN0dXJlVHdlZXQgbmFtZT17bmFtZX0gbWVudGlvbj17bWVudGlvbn0gZGF0ZT17ZGF0ZX0gYmlnIC8+IFxyXG5cclxuICAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17c3R5bGVzLmFydGljbGV9ID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5waG90b0Rpdn0gPlxyXG4gICAgICAgICAgICAgICAgPFBob3RvIGJpZy8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIEJBxZ5MQSAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib2R5fSA+XHJcbiAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubmFtZX0+e25hbWV9PC9zcGFuPiAgPHNwYW4+QHttZW50aW9ufSA8L3NwYW4+IOKAoiA8c3Bhbj57dW50aWxOb3d9PC9zcGFuPiA8L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9Pk1FUkhBQkE8L3A+XHJcbiAgICAgICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+IFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25Gb290ZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmljb25CdXR0b259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SUNPTi5SZXBseS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uRm9vdGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5pY29uQnV0dG9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElDT04uUmV0d2VldC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjEyPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25Gb290ZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmljb25CdXR0b259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SUNPTi5MaWtlLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+ODwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25Gb290ZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmljb25CdXR0b259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SUNPTi5TaGFyZS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogQsSwVMSwUiAqL31cclxuXHJcbiAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=