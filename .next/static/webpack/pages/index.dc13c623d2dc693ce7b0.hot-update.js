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
var _jsxFileName = "C:\\Users\\YUCEL\\Desktop\\clone\\components\\modal-tweet\\modal-tweet.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var layout = [];
var yeni = ["HOŞGELDİNİZ"];

function ModalTweet(_ref) {
  _s();

  var _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,
      _ref$overlay = _ref.overlay,
      overlay = _ref$overlay === void 0 ? false : _ref$overlay;

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
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _modal_tweet_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.modal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _modal_tweet_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, __jsx(_icon_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_4__["Close"], {
    className: _modal_tweet_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.close,
    onClick: onClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 25
    }
  }))), __jsx("div", {
    className: _modal_tweet_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _modal_tweet_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.photo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, __jsx(_photo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    big: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
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
      lineNumber: 49,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: _modal_tweet_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, __jsx(_theme_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: _modal_tweet_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.twit,
    onClick: onSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2RhbC10d2VldC9tb2RhbC10d2VldC5qcyJdLCJuYW1lcyI6WyJsYXlvdXQiLCJ5ZW5pIiwiTW9kYWxUd2VldCIsIm9uQ2xpY2siLCJvdmVybGF5IiwidXNlU3RhdGUiLCJpZGVhIiwic2V0SWRlYSIsIm9uU3VibWl0IiwiZSIsInllc3llbmkiLCJKU09OIiwicGFyc2UiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJmb3JFYWNoIiwiaSIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsInN0eWxlcyIsIm1vZGFsIiwiaGVhZGVyIiwiY2xvc2UiLCJjb250ZW50IiwicGhvdG8iLCJ0ZXh0IiwidGFyZ2V0IiwidmFsdWUiLCJmb290ZXIiLCJ0d2l0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlBLE1BQU0sR0FBRSxFQUFaO0FBQ0EsSUFBSUMsSUFBSSxHQUFDLENBQUMsYUFBRCxDQUFUOztBQUdBLFNBQVNDLFVBQVQsT0FBd0Q7QUFBQTs7QUFBQSwwQkFBbkNDLE9BQW1DO0FBQUEsTUFBbkNBLE9BQW1DLDZCQUExQixZQUFNLENBQUUsQ0FBa0I7QUFBQSwwQkFBaEJDLE9BQWdCO0FBQUEsTUFBaEJBLE9BQWdCLDZCQUFSLEtBQVE7O0FBQUEsa0JBQy9CQyxzREFBUSxDQUFDLEVBQUQsQ0FEdUI7QUFBQSxNQUM3Q0MsSUFENkM7QUFBQSxNQUN4Q0MsT0FEd0M7O0FBSXBELE1BQU1DLFFBQVEsR0FBRSxTQUFWQSxRQUFVLENBQUNDLENBQUQsRUFBTztBQUNuQixRQUFJQyxPQUFPLEdBQUMsRUFBWjtBQUNBQSxXQUFPLEdBQUVDLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxjQUFjLENBQUNDLE9BQWYsQ0FBdUIsTUFBdkIsQ0FBWCxDQUFUO0FBQ0ZKLFdBQU8sSUFBSUEsT0FBTyxDQUFDSyxPQUFSLENBQWdCLFVBQUNOLENBQUQsRUFBR08sQ0FBSCxFQUFRO0FBQ2pDaEIsWUFBTSxDQUFDZ0IsQ0FBRCxDQUFOLEdBQVVQLENBQVY7QUFDQSxLQUZTLENBQVg7QUFHRUEsS0FBQyxDQUFDUSxjQUFGO0FBQ0FqQixVQUFNLENBQUNrQixJQUFQLENBQWFaLElBQWI7QUFDQU8sa0JBQWMsQ0FBQ00sT0FBZixDQUF1QixNQUF2QixFQUE4QlIsSUFBSSxDQUFDUyxTQUFMLENBQWVwQixNQUFmLENBQTlCO0FBQ0FHLFdBQU8sQ0FBQyxLQUFELENBQVA7QUFDQWtCLFVBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEI7QUFFSCxHQVpEOztBQWVBLFNBQ0k7QUFBSyxhQUFTLEVBQUVDLDhEQUFNLENBQUNwQixPQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUVvQiw4REFBTSxDQUFDQyxLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUk7QUFBSyxhQUFTLEVBQUVELDhEQUFNLENBQUNFLE1BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDRDQUFEO0FBQU8sYUFBUyxFQUFFRiw4REFBTSxDQUFDRyxLQUF6QjtBQUFnQyxXQUFPLEVBQUV4QixPQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixDQUZKLEVBU0k7QUFBSyxhQUFTLEVBQUVxQiw4REFBTSxDQUFDSSxPQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUE7QUFBSyxhQUFTLEVBQUVKLDhEQUFNLENBQUNLLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLDhDQUFEO0FBQU8sT0FBRyxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEQSxDQUZBLEVBT0E7QUFBVSxlQUFXLEVBQUMsc0JBQXRCO0FBQTZDLFFBQUksRUFBQyxHQUFsRDtBQUFzRCxhQUFTLEVBQUVMLDhEQUFNLENBQUNNLElBQXhFO0FBQThFLFNBQUssRUFBRXhCLElBQXJGO0FBQTJGLFlBQVEsRUFBRSxrQkFBQ0csQ0FBRCxFQUFLO0FBQUNGLGFBQU8sQ0FBQ0UsQ0FBQyxDQUFDc0IsTUFBRixDQUFTQyxLQUFWLENBQVA7QUFBd0IsS0FBbkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBBLENBVEosRUFxQkk7QUFBSyxhQUFTLEVBQUVSLDhEQUFNLENBQUNTLE1BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHFEQUFEO0FBQWEsYUFBUyxFQUFFVCw4REFBTSxDQUFDVSxJQUEvQjtBQUFxQyxXQUFPLEVBQUUxQixRQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FyQkosQ0FESixDQURKO0FBK0JIOztHQWxEUU4sVTs7S0FBQUEsVTtBQXFETUEseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGMxM2M2MjNkMmRjNjkzY2U3YjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL21vZGFsLXR3ZWV0Lm1vZHVsZS5jc3MnXHJcblxyXG5pbXBvcnQgUGhvdG8gZnJvbSAnLi4vcGhvdG8nXHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJy4uL2ljb24tYnV0dG9uJ1xyXG5pbXBvcnQge0Nsb3NlfSBmcm9tICcuLi9pY29ucydcclxuaW1wb3J0IFRoZW1lQnV0dG9uIGZyb20gJy4uL3RoZW1lLWJ1dHRvbidcclxudmFyIGxheW91dD0gW11cclxudmFyIHllbmk9W1wiSE/FnkdFTETEsE7EsFpcIl1cclxuXHJcblxyXG5mdW5jdGlvbiBNb2RhbFR3ZWV0KHtvbkNsaWNrPSAoKSA9PiB7fSwgb3ZlcmxheT1mYWxzZX0pIHtcclxuICAgIGNvbnN0IFtpZGVhLHNldElkZWFdPXVzZVN0YXRlKFtdKVxyXG4gICAgXHJcbiAgICBcclxuICAgIGNvbnN0IG9uU3VibWl0PSAoZSkgPT4ge1xyXG4gICAgICAgIHZhciB5ZXN5ZW5pPVtdXHJcbiAgICAgICAgeWVzeWVuaT0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdURVhUJykpXHJcbiAgICAgIHllc3llbmkgJiYgeWVzeWVuaS5mb3JFYWNoKChlLGkpPT4ge1xyXG4gICAgICAgIGxheW91dFtpXT1lXHJcbiAgICAgICB9KVxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGxheW91dC5wdXNoKCBpZGVhKVxyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ1RFWFQnLEpTT04uc3RyaW5naWZ5KGxheW91dCkpXHJcbiAgICAgICAgb25DbGljayhmYWxzZSlcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcclxuICAgICAgICBcclxuICAgIH1cclxuICAgXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vdmVybGF5fT4gXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgey8qIEhlYWRlciAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZSBjbGFzc05hbWU9e3N0eWxlcy5jbG9zZX0gb25DbGljaz17b25DbGlja30vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiBDb250ZW50ICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBob3RvfT5cclxuICAgICAgICAgICAgICAgIDxQaG90byBiaWcvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgcGxhY2Vob2xkZXI9XCJXaGF0J3MgaGFwcGVuaW5nIC4uP1wiIHJvd3M9XCI0XCIgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0gdmFsdWU9e2lkZWF9IG9uQ2hhbmdlPXsoZSk9PntzZXRJZGVhKGUudGFyZ2V0LnZhbHVlKX19Lz5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIEZvb3RlciAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8VGhlbWVCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMudHdpdH0gb25DbGljaz17b25TdWJtaXR9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWxUd2VldFxyXG4iXSwic291cmNlUm9vdCI6IiJ9