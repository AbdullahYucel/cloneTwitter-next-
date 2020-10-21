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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2RhbC10d2VldC9tb2RhbC10d2VldC5qcyJdLCJuYW1lcyI6WyJsYXlvdXQiLCJ5ZW5pIiwiTW9kYWxUd2VldCIsIm9uQ2xpY2siLCJ1c2VTdGF0ZSIsImlkZWEiLCJzZXRJZGVhIiwib25TdWJtaXQiLCJlIiwieWVzeWVuaSIsIkpTT04iLCJwYXJzZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImZvckVhY2giLCJpIiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwic3R5bGVzIiwib3ZlcmxheSIsIm1vZGFsIiwiaGVhZGVyIiwiY2xvc2UiLCJjb250ZW50IiwicGhvdG8iLCJ0ZXh0IiwidGFyZ2V0IiwidmFsdWUiLCJmb290ZXIiLCJ0d2l0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlBLE1BQU0sR0FBRSxFQUFaO0FBQ0EsSUFBSUMsSUFBSSxHQUFDLENBQUMsYUFBRCxDQUFUOztBQUdBLFNBQVNDLFVBQVQsT0FBeUM7QUFBQTs7QUFBQSwwQkFBcEJDLE9BQW9CO0FBQUEsTUFBcEJBLE9BQW9CLDZCQUFYLFlBQU0sQ0FBRSxDQUFHOztBQUFBLGtCQUNoQkMsc0RBQVEsQ0FBQyxFQUFELENBRFE7QUFBQSxNQUM5QkMsSUFEOEI7QUFBQSxNQUN6QkMsT0FEeUI7O0FBSXJDLE1BQU1DLFFBQVEsR0FBRSxTQUFWQSxRQUFVLENBQUNDLENBQUQsRUFBTztBQUNuQixRQUFJQyxPQUFPLEdBQUMsRUFBWjtBQUNBQSxXQUFPLEdBQUVDLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxjQUFjLENBQUNDLE9BQWYsQ0FBdUIsTUFBdkIsQ0FBWCxDQUFUO0FBQ0ZKLFdBQU8sSUFBSUEsT0FBTyxDQUFDSyxPQUFSLENBQWdCLFVBQUNOLENBQUQsRUFBR08sQ0FBSCxFQUFRO0FBQ2pDZixZQUFNLENBQUNlLENBQUQsQ0FBTixHQUFVUCxDQUFWO0FBQ0EsS0FGUyxDQUFYO0FBR0VBLEtBQUMsQ0FBQ1EsY0FBRjtBQUNBaEIsVUFBTSxDQUFDaUIsSUFBUCxDQUFhWixJQUFiO0FBQ0FPLGtCQUFjLENBQUNNLE9BQWYsQ0FBdUIsTUFBdkIsRUFBOEJSLElBQUksQ0FBQ1MsU0FBTCxDQUFlbkIsTUFBZixDQUE5QjtBQUNBRyxXQUFPLENBQUMsS0FBRCxDQUFQO0FBQ0FpQixVQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWhCO0FBRUgsR0FaRDs7QUFlQSxTQUNJO0FBQUssYUFBUyxFQUFFQyw4REFBTSxDQUFDQyxPQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUVELDhEQUFNLENBQUNFLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSTtBQUFLLGFBQVMsRUFBRUYsOERBQU0sQ0FBQ0csTUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsNENBQUQ7QUFBTyxhQUFTLEVBQUVILDhEQUFNLENBQUNJLEtBQXpCO0FBQWdDLFdBQU8sRUFBRXhCLE9BQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLENBRkosRUFTSTtBQUFLLGFBQVMsRUFBRW9CLDhEQUFNLENBQUNLLE9BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFQTtBQUFLLGFBQVMsRUFBRUwsOERBQU0sQ0FBQ00sS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsOENBQUQ7QUFBTyxPQUFHLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLENBRkEsRUFPQTtBQUFVLGVBQVcsRUFBQyxzQkFBdEI7QUFBNkMsUUFBSSxFQUFDLEdBQWxEO0FBQXNELGFBQVMsRUFBRU4sOERBQU0sQ0FBQ08sSUFBeEU7QUFBOEUsU0FBSyxFQUFFekIsSUFBckY7QUFBMkYsWUFBUSxFQUFFLGtCQUFDRyxDQUFELEVBQUs7QUFBQ0YsYUFBTyxDQUFDRSxDQUFDLENBQUN1QixNQUFGLENBQVNDLEtBQVYsQ0FBUDtBQUF3QixLQUFuSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEEsQ0FUSixFQXFCSTtBQUFLLGFBQVMsRUFBRVQsOERBQU0sQ0FBQ1UsTUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMscURBQUQ7QUFBYSxhQUFTLEVBQUVWLDhEQUFNLENBQUNXLElBQS9CO0FBQXFDLFdBQU8sRUFBRTNCLFFBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQXJCSixDQURKLENBREo7QUErQkg7O0dBbERRTCxVOztLQUFBQSxVO0FBcURNQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hNmI0MzRkOTg3YzVkNWEyZDRmOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbW9kYWwtdHdlZXQubW9kdWxlLmNzcydcclxuXHJcbmltcG9ydCBQaG90byBmcm9tICcuLi9waG90bydcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnLi4vaWNvbi1idXR0b24nXHJcbmltcG9ydCB7Q2xvc2V9IGZyb20gJy4uL2ljb25zJ1xyXG5pbXBvcnQgVGhlbWVCdXR0b24gZnJvbSAnLi4vdGhlbWUtYnV0dG9uJ1xyXG52YXIgbGF5b3V0PSBbXVxyXG52YXIgeWVuaT1bXCJIT8WeR0VMRMSwTsSwWlwiXVxyXG5cclxuXHJcbmZ1bmN0aW9uIE1vZGFsVHdlZXQoe29uQ2xpY2s9ICgpID0+IHt9fSkge1xyXG4gICAgY29uc3QgW2lkZWEsc2V0SWRlYV09dXNlU3RhdGUoW10pXHJcbiAgICBcclxuICAgIFxyXG4gICAgY29uc3Qgb25TdWJtaXQ9IChlKSA9PiB7XHJcbiAgICAgICAgdmFyIHllc3llbmk9W11cclxuICAgICAgICB5ZXN5ZW5pPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ1RFWFQnKSlcclxuICAgICAgeWVzeWVuaSAmJiB5ZXN5ZW5pLmZvckVhY2goKGUsaSk9PiB7XHJcbiAgICAgICAgbGF5b3V0W2ldPWVcclxuICAgICAgIH0pXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgbGF5b3V0LnB1c2goIGlkZWEpXHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnVEVYVCcsSlNPTi5zdHJpbmdpZnkobGF5b3V0KSlcclxuICAgICAgICBvbkNsaWNrKGZhbHNlKVxyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICBcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm92ZXJsYXl9PiBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbH0+XHJcbiAgICAgICAgICAgICAgICB7LyogSGVhZGVyICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENsb3NlIGNsYXNzTmFtZT17c3R5bGVzLmNsb3NlfSBvbkNsaWNrPXtvbkNsaWNrfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIENvbnRlbnQgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG99PlxyXG4gICAgICAgICAgICAgICAgPFBob3RvIGJpZy8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBwbGFjZWhvbGRlcj1cIldoYXQncyBoYXBwZW5pbmcgLi4/XCIgcm93cz1cIjRcIiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fSB2YWx1ZT17aWRlYX0gb25DaGFuZ2U9eyhlKT0+e3NldElkZWEoZS50YXJnZXQudmFsdWUpfX0vPlxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogRm9vdGVyICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaGVtZUJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy50d2l0fSBvbkNsaWNrPXtvblN1Ym1pdH0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbFR3ZWV0XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=