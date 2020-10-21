webpackHotUpdate_N_E("pages/index",{

/***/ "./components/modal-tweet/base.js":
/*!****************************************!*\
  !*** ./components/modal-tweet/base.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

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
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_base__WEBPACK_IMPORTED_MODULE_6__);
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
  }, __jsx(_base__WEBPACK_IMPORTED_MODULE_6___default.a, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2RhbC10d2VldC9tb2RhbC10d2VldC5qcyJdLCJuYW1lcyI6WyJsYXlvdXQiLCJ5ZW5pIiwiTW9kYWxUd2VldCIsIm9uQ2xpY2siLCJ1c2VTdGF0ZSIsImlkZWEiLCJzZXRJZGVhIiwib25TdWJtaXQiLCJlIiwieWVzeWVuaSIsIkpTT04iLCJwYXJzZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImZvckVhY2giLCJpIiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwic3R5bGVzIiwib3ZlcmxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJQSxNQUFNLEdBQUUsRUFBWjtBQUNBLElBQUlDLElBQUksR0FBQyxDQUFDLGFBQUQsQ0FBVDs7QUFHQSxTQUFTQyxVQUFULE9BQXlDO0FBQUE7O0FBQUEsMEJBQXBCQyxPQUFvQjtBQUFBLE1BQXBCQSxPQUFvQiw2QkFBWCxZQUFNLENBQUUsQ0FBRzs7QUFBQSxrQkFDaEJDLHNEQUFRLENBQUMsRUFBRCxDQURRO0FBQUEsTUFDOUJDLElBRDhCO0FBQUEsTUFDekJDLE9BRHlCOztBQUlyQyxNQUFNQyxRQUFRLEdBQUUsU0FBVkEsUUFBVSxDQUFDQyxDQUFELEVBQU87QUFDbkIsUUFBSUMsT0FBTyxHQUFDLEVBQVo7QUFDQUEsV0FBTyxHQUFFQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsY0FBYyxDQUFDQyxPQUFmLENBQXVCLE1BQXZCLENBQVgsQ0FBVDtBQUNGSixXQUFPLElBQUlBLE9BQU8sQ0FBQ0ssT0FBUixDQUFnQixVQUFDTixDQUFELEVBQUdPLENBQUgsRUFBUTtBQUNqQ2YsWUFBTSxDQUFDZSxDQUFELENBQU4sR0FBVVAsQ0FBVjtBQUNBLEtBRlMsQ0FBWDtBQUdFQSxLQUFDLENBQUNRLGNBQUY7QUFDQWhCLFVBQU0sQ0FBQ2lCLElBQVAsQ0FBYVosSUFBYjtBQUNBTyxrQkFBYyxDQUFDTSxPQUFmLENBQXVCLE1BQXZCLEVBQThCUixJQUFJLENBQUNTLFNBQUwsQ0FBZW5CLE1BQWYsQ0FBOUI7QUFDQUcsV0FBTyxDQUFDLEtBQUQsQ0FBUDtBQUNBaUIsVUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQjtBQUVILEdBWkQ7O0FBZUEsU0FDSTtBQUFLLGFBQVMsRUFBRUMsOERBQU0sQ0FBQ0MsT0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREo7QUFLSDs7R0F4QlF0QixVOztLQUFBQSxVO0FBMkJNQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zNWU2MDMzZTgyYmU2MmZiODBlNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbW9kYWwtdHdlZXQubW9kdWxlLmNzcydcclxuXHJcbmltcG9ydCBQaG90byBmcm9tICcuLi9waG90bydcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnLi4vaWNvbi1idXR0b24nXHJcbmltcG9ydCB7Q2xvc2V9IGZyb20gJy4uL2ljb25zJ1xyXG5pbXBvcnQgVGhlbWVCdXR0b24gZnJvbSAnLi4vdGhlbWUtYnV0dG9uJ1xyXG5pbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnXHJcbnZhciBsYXlvdXQ9IFtdXHJcbnZhciB5ZW5pPVtcIkhPxZ5HRUxExLBOxLBaXCJdXHJcblxyXG5cclxuZnVuY3Rpb24gTW9kYWxUd2VldCh7b25DbGljaz0gKCkgPT4ge319KSB7XHJcbiAgICBjb25zdCBbaWRlYSxzZXRJZGVhXT11c2VTdGF0ZShbXSlcclxuICAgIFxyXG4gICAgXHJcbiAgICBjb25zdCBvblN1Ym1pdD0gKGUpID0+IHtcclxuICAgICAgICB2YXIgeWVzeWVuaT1bXVxyXG4gICAgICAgIHllc3llbmk9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnVEVYVCcpKVxyXG4gICAgICB5ZXN5ZW5pICYmIHllc3llbmkuZm9yRWFjaCgoZSxpKT0+IHtcclxuICAgICAgICBsYXlvdXRbaV09ZVxyXG4gICAgICAgfSlcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBsYXlvdXQucHVzaCggaWRlYSlcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdURVhUJyxKU09OLnN0cmluZ2lmeShsYXlvdXQpKVxyXG4gICAgICAgIG9uQ2xpY2soZmFsc2UpXHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgIFxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3ZlcmxheX0+IFxyXG4gICAgICAgICAgICA8QmFzZS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbFR3ZWV0XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=