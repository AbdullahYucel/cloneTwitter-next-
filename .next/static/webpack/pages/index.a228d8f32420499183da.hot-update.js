webpackHotUpdate_N_E("pages/index",{

/***/ "./components/modal-tweet/base.js":
/*!****************************************!*\
  !*** ./components/modal-tweet/base.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modal_tweet_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-tweet.module.css */ "./components/modal-tweet/modal-tweet.module.css");
/* harmony import */ var _modal_tweet_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modal_tweet_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _photo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../photo */ "./components/photo.js");
/* harmony import */ var _icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon-button */ "./components/icon-button.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons */ "./components/icons/index.js");
/* harmony import */ var _theme_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme-button */ "./components/theme-button.js");
var _jsxFileName = "C:\\Users\\YUCEL\\Desktop\\clone\\components\\modal-tweet\\base.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var layout = [];
var yeni = ["HOŞGELDİNİZ"];

function Base(_ref) {
  var _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick;
  return __jsx("div", {
    className: _modal_tweet_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.modal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _modal_tweet_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, __jsx(_icon_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_4__["Close"], {
    className: _modal_tweet_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.close,
    onClick: onClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }
  }))), __jsx("div", {
    className: _modal_tweet_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _modal_tweet_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.photo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, __jsx(_photo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    big: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  })), __jsx("textarea", {
    placeholder: "What's happening ..?",
    rows: "4",
    className: _modal_tweet_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.text,
    value: idea,
    onChange: function onChange(e) {
      setIdea(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: _modal_tweet_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, __jsx(_theme_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: _modal_tweet_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.twit,
    onClick: onSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  })));
}

_c = Base;
/* harmony default export */ __webpack_exports__["default"] = (Base);

var _c;

$RefreshReg$(_c, "Base");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/modal-tweet/modal-tweet.js":
/*!***********************************************!*\
  !*** ./components/modal-tweet/modal-tweet.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modal_tweet_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-tweet.module.css */ "./components/modal-tweet/modal-tweet.module.css");
/* harmony import */ var _modal_tweet_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modal_tweet_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _photo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../photo */ "./components/photo.js");
/* harmony import */ var _icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon-button */ "./components/icon-button.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons */ "./components/icons/index.js");
/* harmony import */ var _theme_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme-button */ "./components/theme-button.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./base */ "./components/modal-tweet/base.js");
var _jsxFileName = "C:\\Users\\YUCEL\\Desktop\\clone\\components\\modal-tweet\\modal-tweet.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var layout = [];
var yeni = ["HOŞGELDİNİZ"];

function ModalTweet(_ref) {
  _s();

  var _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      idea = _useState[0],
      setIdea = _useState[1];

  var onSubmit = function onSubmit(e) {
    var yesyeni = [];
    yesyeni = JSON.parse(sessionStorage.getItem('TEXT'));
    yesyeni && yesyeni.forEach(function (e, i) {
      layout[i] = e;
    });
    e.preventDefault();
    layout.push(idea);
    sessionStorage.setItem('TEXT', JSON.stringify(layout));
    onClick(false);
    window.location.reload();
  };

  return __jsx("div", {
    className: _modal_tweet_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.overlay,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx(_base__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }));
}

_s(ModalTweet, "648nu8/3/06zYNvoUTm9pKpnIds=");

_c = ModalTweet;
/* harmony default export */ __webpack_exports__["default"] = (ModalTweet);

var _c;

$RefreshReg$(_c, "ModalTweet");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2RhbC10d2VldC9iYXNlLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21vZGFsLXR3ZWV0L21vZGFsLXR3ZWV0LmpzIl0sIm5hbWVzIjpbImxheW91dCIsInllbmkiLCJCYXNlIiwib25DbGljayIsInN0eWxlcyIsIm1vZGFsIiwiaGVhZGVyIiwiY2xvc2UiLCJjb250ZW50IiwicGhvdG8iLCJ0ZXh0IiwiaWRlYSIsImUiLCJzZXRJZGVhIiwidGFyZ2V0IiwidmFsdWUiLCJmb290ZXIiLCJ0d2l0Iiwib25TdWJtaXQiLCJNb2RhbFR3ZWV0IiwidXNlU3RhdGUiLCJ5ZXN5ZW5pIiwiSlNPTiIsInBhcnNlIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiZm9yRWFjaCIsImkiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2giLCJzZXRJdGVtIiwic3RyaW5naWZ5Iiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJvdmVybGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJQSxNQUFNLEdBQUUsRUFBWjtBQUNBLElBQUlDLElBQUksR0FBQyxDQUFDLGFBQUQsQ0FBVDs7QUFHQSxTQUFTQyxJQUFULE9BQW1DO0FBQUEsMEJBQXBCQyxPQUFvQjtBQUFBLE1BQXBCQSxPQUFvQiw2QkFBWCxZQUFNLENBQUUsQ0FBRztBQUcvQixTQUVRO0FBQUssYUFBUyxFQUFFQyw4REFBTSxDQUFDQyxLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUk7QUFBSyxhQUFTLEVBQUVELDhEQUFNLENBQUNFLE1BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDRDQUFE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LFU7QUEyQk1BLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmEyMjhkOGYzMjQyMDQ5OTE4M2RhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9tb2RhbC10d2VldC5tb2R1bGUuY3NzJ1xyXG5cclxuaW1wb3J0IFBob3RvIGZyb20gJy4uL3Bob3RvJ1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICcuLi9pY29uLWJ1dHRvbidcclxuaW1wb3J0IHtDbG9zZX0gZnJvbSAnLi4vaWNvbnMnXHJcbmltcG9ydCBUaGVtZUJ1dHRvbiBmcm9tICcuLi90aGVtZS1idXR0b24nXHJcbnZhciBsYXlvdXQ9IFtdXHJcbnZhciB5ZW5pPVtcIkhPxZ5HRUxExLBOxLBaXCJdXHJcblxyXG5cclxuZnVuY3Rpb24gQmFzZSh7b25DbGljaz0gKCkgPT4ge319KSB7XHJcbiAgIFxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsfT5cclxuICAgICAgICAgICAgICAgIHsvKiBIZWFkZXIgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2xvc2UgY2xhc3NOYW1lPXtzdHlsZXMuY2xvc2V9IG9uQ2xpY2s9e29uQ2xpY2t9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogQ29udGVudCAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5waG90b30+XHJcbiAgICAgICAgICAgICAgICA8UGhvdG8gYmlnLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHBsYWNlaG9sZGVyPVwiV2hhdCdzIGhhcHBlbmluZyAuLj9cIiByb3dzPVwiNFwiIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9IHZhbHVlPXtpZGVhfSBvbkNoYW5nZT17KGUpPT57c2V0SWRlYShlLnRhcmdldC52YWx1ZSl9fS8+XHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiBGb290ZXIgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRoZW1lQnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnR3aXR9IG9uQ2xpY2s9e29uU3VibWl0fS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2VcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbW9kYWwtdHdlZXQubW9kdWxlLmNzcydcclxuXHJcbmltcG9ydCBQaG90byBmcm9tICcuLi9waG90bydcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnLi4vaWNvbi1idXR0b24nXHJcbmltcG9ydCB7Q2xvc2V9IGZyb20gJy4uL2ljb25zJ1xyXG5pbXBvcnQgVGhlbWVCdXR0b24gZnJvbSAnLi4vdGhlbWUtYnV0dG9uJ1xyXG5pbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnXHJcbnZhciBsYXlvdXQ9IFtdXHJcbnZhciB5ZW5pPVtcIkhPxZ5HRUxExLBOxLBaXCJdXHJcblxyXG5cclxuZnVuY3Rpb24gTW9kYWxUd2VldCh7b25DbGljaz0gKCkgPT4ge319KSB7XHJcbiAgICBjb25zdCBbaWRlYSxzZXRJZGVhXT11c2VTdGF0ZShbXSlcclxuICAgIFxyXG4gICAgXHJcbiAgICBjb25zdCBvblN1Ym1pdD0gKGUpID0+IHtcclxuICAgICAgICB2YXIgeWVzeWVuaT1bXVxyXG4gICAgICAgIHllc3llbmk9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnVEVYVCcpKVxyXG4gICAgICB5ZXN5ZW5pICYmIHllc3llbmkuZm9yRWFjaCgoZSxpKT0+IHtcclxuICAgICAgICBsYXlvdXRbaV09ZVxyXG4gICAgICAgfSlcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBsYXlvdXQucHVzaCggaWRlYSlcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdURVhUJyxKU09OLnN0cmluZ2lmeShsYXlvdXQpKVxyXG4gICAgICAgIG9uQ2xpY2soZmFsc2UpXHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgIFxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3ZlcmxheX0+IFxyXG4gICAgICAgICAgICA8QmFzZS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbFR3ZWV0XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=