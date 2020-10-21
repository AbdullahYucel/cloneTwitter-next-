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
/* harmony import */ var _components_modal_tweet_base__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/modal-tweet/base */ "./components/modal-tweet/base.js");
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
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx(_components_modal_tweet_base__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
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
      lineNumber: 31,
      columnNumber: 14
    }
  }), __jsx("article", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.article,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 14
    }
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.photoDiv,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx(_components_photo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    big: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.body,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx("header", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }, name), "  ", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 66
    }
  }, "@", mention, " "), " \u2022 ", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 93
    }
  }, untilNow), " "), __jsx("p", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, "MERHABA"), __jsx("footer", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.footer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonFooter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, __jsx(_components_icon_button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.iconButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, __jsx(_components_icons__WEBPACK_IMPORTED_MODULE_5__["Reply"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 25
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 25
    }
  }, "5"))), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonFooter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }, __jsx(_components_icon_button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.iconButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, __jsx(_components_icons__WEBPACK_IMPORTED_MODULE_5__["Retweet"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 25
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 25
    }
  }, "12"))), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonFooter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }, __jsx(_components_icon_button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.iconButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }, __jsx(_components_icons__WEBPACK_IMPORTED_MODULE_5__["Like"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 25
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 25
    }
  }, "8"))), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonFooter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }, __jsx(_components_icon_button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.iconButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }, __jsx(_components_icons__WEBPACK_IMPORTED_MODULE_5__["Share"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJkYXRlIiwiRGF0ZSIsIm5hbWUiLCJtZW50aW9uIiwidW50aWxOb3ciLCJmb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0IiwibGlrZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNvbW1lbnQiLCJydCIsInN0eWxlcyIsImFydGljbGUiLCJwaG90b0RpdiIsImJvZHkiLCJoZWFkZXIiLCJjb250ZW50IiwiZm9vdGVyIiwiYnV0dG9uRm9vdGVyIiwiaWNvbkJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsR0FBaUI7QUFDYixNQUFNQyxJQUFJLEdBQUUsSUFBSUMsSUFBSixDQUFTLElBQVQsRUFBYyxDQUFkLEVBQWdCLEVBQWhCLENBQVo7QUFDQSxNQUFNQyxJQUFJLEdBQUMsVUFBWDtBQUNBLE1BQU1DLE9BQU8sR0FBQyxTQUFkO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQyxrRkFBeUIsQ0FBQ0wsSUFBRCxDQUExQztBQUVBLE1BQUlNLElBQUksR0FBQ0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFjLEVBQXpCLENBQVQ7QUFDQSxNQUFJQyxPQUFPLEdBQUNILElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBYyxFQUF6QixDQUFaO0FBQ0EsTUFBSUUsRUFBRSxHQUFDSixJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWMsRUFBekIsQ0FBUDtBQUdBLFNBQ0ksTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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RUFBRVAsd0RBQU0sQ0FBQ1EsVUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREEsQ0F0QkosQ0FKSixDQU5DLENBSkwsQ0FESjtBQW1ESDs7S0E5RFFyQixLO0FBa0VNQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43NmYyMmEwZWQ5ZTY5YzE3ZDdiOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXHJcbmltcG9ydCBTdHJ1Y3R1cmVUd2VldCBmcm9tICcuLi9jb21wb25lbnRzL3R3ZWV0L2luZGV4J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW5kZXgubW9kdWxlLmNzcydcclxuXHJcblxyXG5cclxuaW1wb3J0IFBob3RvIGZyb20gJy4uL2NvbXBvbmVudHMvcGhvdG8nXHJcbmltcG9ydCAqIGFzIElDT04gZnJvbSAnLi4vY29tcG9uZW50cy9pY29ucydcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9pY29uLWJ1dHRvbidcclxuaW1wb3J0IGZvcm1hdERpc3RhbmNlVG9Ob3dTdHJpY3QgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0RGlzdGFuY2VUb05vd1N0cmljdCdcclxuaW1wb3J0IHsgZ2V0SG91cnMgfSBmcm9tICdkYXRlLWZucydcclxuaW1wb3J0IE1vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvbW9kYWwtdHdlZXQvbW9kYWwtdHdlZXQnXHJcbmltcG9ydCBCYXNlIGZyb20gJy4uL2NvbXBvbmVudHMvbW9kYWwtdHdlZXQvYmFzZSdcclxuXHJcbmZ1bmN0aW9uIEluZGV4KCkge1xyXG4gICAgY29uc3QgZGF0ZT0gbmV3IERhdGUoMjAyMCw5LDIxKVxyXG4gICAgY29uc3QgbmFtZT0nVXNlcm5hbWUnXHJcbiAgICBjb25zdCBtZW50aW9uPSdNZW50aW9uJ1xyXG4gICAgY29uc3QgdW50aWxOb3cgPSBmb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0KGRhdGUpXHJcblxyXG4gICAgdmFyIGxpa2U9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjIwKVxyXG4gICAgdmFyIGNvbW1lbnQ9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjIwKVxyXG4gICAgdmFyIHJ0PU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoyMClcclxuICAgIFxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxCYXNlLz5cclxuICAgICAgICAgICAgIDxTdHJ1Y3R1cmVUd2VldCBuYW1lPXtuYW1lfSBtZW50aW9uPXttZW50aW9ufSBkYXRlPXtkYXRlfSBiaWcgLz4gXHJcblxyXG4gICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aWNsZX0gPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBob3RvRGl2fSA+XHJcbiAgICAgICAgICAgICAgICA8UGhvdG8gYmlnLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogQkHFnkxBICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvZHl9ID5cclxuICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT57bmFtZX08L3NwYW4+ICA8c3Bhbj5Ae21lbnRpb259IDwvc3Bhbj4g4oCiIDxzcGFuPnt1bnRpbE5vd308L3NwYW4+IDwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+TUVSSEFCQTwvcD5cclxuICAgICAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT4gXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbkZvb3Rlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuaWNvbkJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJQ09OLlJlcGx5Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+NTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25Gb290ZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmljb25CdXR0b259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SUNPTi5SZXR3ZWV0Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+MTI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbkZvb3Rlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuaWNvbkJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJQ09OLkxpa2UvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj44PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbkZvb3Rlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuaWNvbkJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJQ09OLlNoYXJlLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBCxLBUxLBSICovfVxyXG5cclxuICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==