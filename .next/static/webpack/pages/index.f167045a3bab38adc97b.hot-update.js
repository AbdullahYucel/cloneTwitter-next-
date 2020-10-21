webpackHotUpdate_N_E("pages/index",{

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
  }, __jsx("div", {
    className: _modal_tweet_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.modal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _modal_tweet_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, __jsx(_icon_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_4__["Close"], {
    className: _modal_tweet_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.close,
    onClick: onClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 25
    }
  }))), __jsx("div", {
    className: _modal_tweet_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _modal_tweet_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.photo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, __jsx(_photo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    big: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
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
      lineNumber: 50,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: _modal_tweet_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, __jsx(_theme_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: _modal_tweet_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.twit,
    onClick: onSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2RhbC10d2VldC9tb2RhbC10d2VldC5qcyJdLCJuYW1lcyI6WyJsYXlvdXQiLCJ5ZW5pIiwiTW9kYWxUd2VldCIsIm9uQ2xpY2siLCJ1c2VTdGF0ZSIsImlkZWEiLCJzZXRJZGVhIiwib25TdWJtaXQiLCJlIiwieWVzeWVuaSIsIkpTT04iLCJwYXJzZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImZvckVhY2giLCJpIiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwic3R5bGVzIiwib3ZlcmxheSIsIm1vZGFsIiwiaGVhZGVyIiwiY2xvc2UiLCJjb250ZW50IiwicGhvdG8iLCJ0ZXh0IiwidGFyZ2V0IiwidmFsdWUiLCJmb290ZXIiLCJ0d2l0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlBLE1BQU0sR0FBRSxFQUFaO0FBQ0EsSUFBSUMsSUFBSSxHQUFDLENBQUMsYUFBRCxDQUFUOztBQUdBLFNBQVNDLFVBQVQsT0FBeUM7QUFBQTs7QUFBQSwwQkFBcEJDLE9BQW9CO0FBQUEsTUFBcEJBLE9BQW9CLDZCQUFYLFlBQU0sQ0FBRSxDQUFHOztBQUFBLGtCQUNoQkMsc0RBQVEsQ0FBQyxFQUFELENBRFE7QUFBQSxNQUM5QkMsSUFEOEI7QUFBQSxNQUN6QkMsT0FEeUI7O0FBSXJDLE1BQU1DLFFBQVEsR0FBRSxTQUFWQSxRQUFVLENBQUNDLENBQUQsRUFBTztBQUNuQixRQUFJQyxPQUFPLEdBQUMsRUFBWjtBQUNBQSxXQUFPLEdBQUVDLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxjQUFjLENBQUNDLE9BQWYsQ0FBdUIsTUFBdkIsQ0FBWCxDQUFUO0FBQ0ZKLFdBQU8sSUFBSUEsT0FBTyxDQUFDSyxPQUFSLENBQWdCLFVBQUNOLENBQUQsRUFBR08sQ0FBSCxFQUFRO0FBQ2pDZixZQUFNLENBQUNlLENBQUQsQ0FBTixHQUFVUCxDQUFWO0FBQ0EsS0FGUyxDQUFYO0FBR0VBLEtBQUMsQ0FBQ1EsY0FBRjtBQUNBaEIsVUFBTSxDQUFDaUIsSUFBUCxDQUFhWixJQUFiO0FBQ0FPLGtCQUFjLENBQUNNLE9BQWYsQ0FBdUIsTUFBdkIsRUFBOEJSLElBQUksQ0FBQ1MsU0FBTCxDQUFlbkIsTUFBZixDQUE5QjtBQUNBRyxXQUFPLENBQUMsS0FBRCxDQUFQO0FBQ0FpQixVQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWhCO0FBRUgsR0FaRDs7QUFlQSxTQUNJO0FBQUssYUFBUyxFQUFFQyw4REFBTSxDQUFDQyxPQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUVELDhEQUFNLENBQUNFLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSTtBQUFLLGFBQVMsRUFBRUYsOERBQU0sQ0FBQ0csTUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsNENBQUQ7QUFBTyxhQUFTLEVBQUVILDhEQUFNLENBQUNJLEtBQXpCO0FBQWdDLFdBQU8sRUFBRXhCLE9BQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLENBRkosRUFTSTtBQUFLLGFBQVMsRUFBRW9CLDhEQUFNLENBQUNLLE9BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFQTtBQUFLLGFBQVMsRUFBRUwsOERBQU0sQ0FBQ00sS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsOENBQUQ7QUFBTyxPQUFHLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLENBRkEsRUFPQTtBQUFVLGVBQVcsRUFBQyxzQkFBdEI7QUFBNkMsUUFBSSxFQUFDLEdBQWxEO0FBQXNELGFBQVMsRUFBRU4sOERBQU0sQ0FBQ08sSUFBeEU7QUFBOEUsU0FBSyxFQUFFekIsSUFBckY7QUFBMkYsWUFBUSxFQUFFLGtCQUFDRyxDQUFELEVBQUs7QUFBQ0YsYUFBTyxDQUFDRSxDQUFDLENBQUN1QixNQUFGLENBQVNDLEtBQVYsQ0FBUDtBQUF3QixLQUFuSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEEsQ0FUSixFQXFCSTtBQUFLLGFBQVMsRUFBRVQsOERBQU0sQ0FBQ1UsTUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMscURBQUQ7QUFBYSxhQUFTLEVBQUVWLDhEQUFNLENBQUNXLElBQS9CO0FBQXFDLFdBQU8sRUFBRTNCLFFBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQXJCSixDQURKLENBREo7QUErQkg7O0dBbERRTCxVOztLQUFBQSxVO0FBcURNQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mMTY3MDQ1YTNiYWIzOGFkYzk3Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbW9kYWwtdHdlZXQubW9kdWxlLmNzcydcclxuXHJcbmltcG9ydCBQaG90byBmcm9tICcuLi9waG90bydcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnLi4vaWNvbi1idXR0b24nXHJcbmltcG9ydCB7Q2xvc2V9IGZyb20gJy4uL2ljb25zJ1xyXG5pbXBvcnQgVGhlbWVCdXR0b24gZnJvbSAnLi4vdGhlbWUtYnV0dG9uJ1xyXG5pbXBvcnQgQmFzZSBmcm9tICcuL2Jhc2UnXHJcbnZhciBsYXlvdXQ9IFtdXHJcbnZhciB5ZW5pPVtcIkhPxZ5HRUxExLBOxLBaXCJdXHJcblxyXG5cclxuZnVuY3Rpb24gTW9kYWxUd2VldCh7b25DbGljaz0gKCkgPT4ge319KSB7XHJcbiAgICBjb25zdCBbaWRlYSxzZXRJZGVhXT11c2VTdGF0ZShbXSlcclxuICAgIFxyXG4gICAgXHJcbiAgICBjb25zdCBvblN1Ym1pdD0gKGUpID0+IHtcclxuICAgICAgICB2YXIgeWVzeWVuaT1bXVxyXG4gICAgICAgIHllc3llbmk9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnVEVYVCcpKVxyXG4gICAgICB5ZXN5ZW5pICYmIHllc3llbmkuZm9yRWFjaCgoZSxpKT0+IHtcclxuICAgICAgICBsYXlvdXRbaV09ZVxyXG4gICAgICAgfSlcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBsYXlvdXQucHVzaCggaWRlYSlcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdURVhUJyxKU09OLnN0cmluZ2lmeShsYXlvdXQpKVxyXG4gICAgICAgIG9uQ2xpY2soZmFsc2UpXHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgIFxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3ZlcmxheX0+IFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsfT5cclxuICAgICAgICAgICAgICAgIHsvKiBIZWFkZXIgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2xvc2UgY2xhc3NOYW1lPXtzdHlsZXMuY2xvc2V9IG9uQ2xpY2s9e29uQ2xpY2t9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogQ29udGVudCAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5waG90b30+XHJcbiAgICAgICAgICAgICAgICA8UGhvdG8gYmlnLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHBsYWNlaG9sZGVyPVwiV2hhdCdzIGhhcHBlbmluZyAuLj9cIiByb3dzPVwiNFwiIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9IHZhbHVlPXtpZGVhfSBvbkNoYW5nZT17KGUpPT57c2V0SWRlYShlLnRhcmdldC52YWx1ZSl9fS8+XHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiBGb290ZXIgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRoZW1lQnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnR3aXR9IG9uQ2xpY2s9e29uU3VibWl0fS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGFsVHdlZXRcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==