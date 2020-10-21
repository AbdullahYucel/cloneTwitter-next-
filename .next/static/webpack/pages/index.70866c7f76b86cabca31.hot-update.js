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
var _jsxFileName = "C:\\Users\\YUCEL\\Desktop\\clone\\components\\modal-tweet\\base.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var layout = [];
var yeni = ["HOŞGELDİNİZ"];

function Base(_ref) {
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
    className: _modal_tweet_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.modal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _modal_tweet_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _modal_tweet_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.photo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx(_photo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    big: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
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
      lineNumber: 43,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: _modal_tweet_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx(_theme_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: _modal_tweet_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.twit,
    onClick: onSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  })));
}

_s(Base, "648nu8/3/06zYNvoUTm9pKpnIds=");

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
  }, __jsx(_components_tweet_index__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2RhbC10d2VldC9iYXNlLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJsYXlvdXQiLCJ5ZW5pIiwiQmFzZSIsIm9uQ2xpY2siLCJ1c2VTdGF0ZSIsImlkZWEiLCJzZXRJZGVhIiwib25TdWJtaXQiLCJlIiwieWVzeWVuaSIsIkpTT04iLCJwYXJzZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImZvckVhY2giLCJpIiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwic3R5bGVzIiwibW9kYWwiLCJjb250ZW50IiwicGhvdG8iLCJ0ZXh0IiwidGFyZ2V0IiwidmFsdWUiLCJmb290ZXIiLCJ0d2l0IiwiSW5kZXgiLCJkYXRlIiwiRGF0ZSIsIm5hbWUiLCJtZW50aW9uIiwidW50aWxOb3ciLCJmb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0IiwibGlrZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNvbW1lbnQiLCJydCIsImFydGljbGUiLCJwaG90b0RpdiIsImJvZHkiLCJoZWFkZXIiLCJidXR0b25Gb290ZXIiLCJpY29uQnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlBLE1BQU0sR0FBRSxFQUFaO0FBQ0EsSUFBSUMsSUFBSSxHQUFDLENBQUMsYUFBRCxDQUFUOztBQUdBLFNBQVNDLElBQVQsT0FBbUM7QUFBQTs7QUFBQSwwQkFBcEJDLE9BQW9CO0FBQUEsTUFBcEJBLE9BQW9CLDZCQUFYLFlBQU0sQ0FBRSxDQUFHOztBQUFBLGtCQUNWQyxzREFBUSxDQUFDLEVBQUQsQ0FERTtBQUFBLE1BQ3hCQyxJQUR3QjtBQUFBLE1BQ25CQyxPQURtQjs7QUFJL0IsTUFBTUMsUUFB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Qix3REFBTSxDQUFDMEIsWUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsK0RBQUQ7QUFBWSxhQUFTLEVBQUUxQix3REFBTSxDQUFDMkIsVUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREEsQ0F0QkosQ0FKSixDQU5DLENBSkwsQ0FESjtBQW1ESDs7S0E5RFFsQixLO0FBa0VNQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43MDg2NmM3Zjc2Yjg2Y2FiY2EzMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbW9kYWwtdHdlZXQubW9kdWxlLmNzcydcclxuXHJcbmltcG9ydCBQaG90byBmcm9tICcuLi9waG90bydcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnLi4vaWNvbi1idXR0b24nXHJcbmltcG9ydCB7Q2xvc2V9IGZyb20gJy4uL2ljb25zJ1xyXG5pbXBvcnQgVGhlbWVCdXR0b24gZnJvbSAnLi4vdGhlbWUtYnV0dG9uJ1xyXG52YXIgbGF5b3V0PSBbXVxyXG52YXIgeWVuaT1bXCJIT8WeR0VMRMSwTsSwWlwiXVxyXG5cclxuXHJcbmZ1bmN0aW9uIEJhc2Uoe29uQ2xpY2s9ICgpID0+IHt9fSkge1xyXG4gICAgY29uc3QgW2lkZWEsc2V0SWRlYV09dXNlU3RhdGUoW10pXHJcbiAgICBcclxuICAgIFxyXG4gICAgY29uc3Qgb25TdWJtaXQ9IChlKSA9PiB7XHJcbiAgICAgICAgdmFyIHllc3llbmk9W11cclxuICAgICAgICB5ZXN5ZW5pPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ1RFWFQnKSlcclxuICAgICAgeWVzeWVuaSAmJiB5ZXN5ZW5pLmZvckVhY2goKGUsaSk9PiB7XHJcbiAgICAgICAgbGF5b3V0W2ldPWVcclxuICAgICAgIH0pXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgbGF5b3V0LnB1c2goIGlkZWEpXHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnVEVYVCcsSlNPTi5zdHJpbmdpZnkobGF5b3V0KSlcclxuICAgICAgICBvbkNsaWNrKGZhbHNlKVxyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICBcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsfT5cclxuICAgICAgICBcclxuICAgICAgICB7LyogQ29udGVudCAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBob3RvfT5cclxuICAgICAgICA8UGhvdG8gYmlnLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgPHRleHRhcmVhIHBsYWNlaG9sZGVyPVwiV2hhdCdzIGhhcHBlbmluZyAuLj9cIiByb3dzPVwiNFwiIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9IHZhbHVlPXtpZGVhfSBvbkNoYW5nZT17KGUpPT57c2V0SWRlYShlLnRhcmdldC52YWx1ZSl9fS8+XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsvKiBGb290ZXIgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxyXG4gICAgICAgICAgICA8VGhlbWVCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMudHdpdH0gb25DbGljaz17b25TdWJtaXR9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYXNlXHJcbiIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCx1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xyXG5pbXBvcnQgU3RydWN0dXJlVHdlZXQgZnJvbSAnLi4vY29tcG9uZW50cy90d2VldC9pbmRleCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2luZGV4Lm1vZHVsZS5jc3MnXHJcblxyXG5cclxuXHJcbmltcG9ydCBQaG90byBmcm9tICcuLi9jb21wb25lbnRzL3Bob3RvJ1xyXG5pbXBvcnQgKiBhcyBJQ09OIGZyb20gJy4uL2NvbXBvbmVudHMvaWNvbnMnXHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvaWNvbi1idXR0b24nXHJcbmltcG9ydCBmb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0IGZyb20gJ2RhdGUtZm5zL2Zvcm1hdERpc3RhbmNlVG9Ob3dTdHJpY3QnXHJcbmltcG9ydCB7IGdldEhvdXJzIH0gZnJvbSAnZGF0ZS1mbnMnXHJcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9jb21wb25lbnRzL21vZGFsLXR3ZWV0L21vZGFsLXR3ZWV0J1xyXG5pbXBvcnQgQmFzZSBmcm9tICcuLi9jb21wb25lbnRzL21vZGFsLXR3ZWV0L2Jhc2UnXHJcblxyXG5mdW5jdGlvbiBJbmRleCgpIHtcclxuICAgIGNvbnN0IGRhdGU9IG5ldyBEYXRlKDIwMjAsOSwyMSlcclxuICAgIGNvbnN0IG5hbWU9J1VzZXJuYW1lJ1xyXG4gICAgY29uc3QgbWVudGlvbj0nTWVudGlvbidcclxuICAgIGNvbnN0IHVudGlsTm93ID0gZm9ybWF0RGlzdGFuY2VUb05vd1N0cmljdChkYXRlKVxyXG5cclxuICAgIHZhciBsaWtlPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoyMClcclxuICAgIHZhciBjb21tZW50PU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoyMClcclxuICAgIHZhciBydD1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMjApXHJcbiAgICBcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgIDxTdHJ1Y3R1cmVUd2VldCBuYW1lPXtuYW1lfSBtZW50aW9uPXttZW50aW9ufSBkYXRlPXtkYXRlfSBiaWcgLz4gXHJcblxyXG4gICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aWNsZX0gPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBob3RvRGl2fSA+XHJcbiAgICAgICAgICAgICAgICA8UGhvdG8gYmlnLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogQkHFnkxBICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvZHl9ID5cclxuICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT57bmFtZX08L3NwYW4+ICA8c3Bhbj5Ae21lbnRpb259IDwvc3Bhbj4g4oCiIDxzcGFuPnt1bnRpbE5vd308L3NwYW4+IDwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+TUVSSEFCQTwvcD5cclxuICAgICAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT4gXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbkZvb3Rlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuaWNvbkJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJQ09OLlJlcGx5Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+NTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25Gb290ZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmljb25CdXR0b259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SUNPTi5SZXR3ZWV0Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+MTI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbkZvb3Rlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuaWNvbkJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJQ09OLkxpa2UvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj44PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbkZvb3Rlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuaWNvbkJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJQ09OLlNoYXJlLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBCxLBUxLBSICovfVxyXG5cclxuICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==