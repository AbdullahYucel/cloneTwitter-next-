webpackHotUpdate_N_E("pages/index",{

/***/ "./components/tweet/index.js":
/*!***********************************!*\
  !*** ./components/tweet/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.module.css */ "./components/tweet/index.module.css");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var date_fns_formatDistanceToNowStrict__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/formatDistanceToNowStrict */ "./node_modules/date-fns/esm/formatDistanceToNowStrict/index.js");
/* harmony import */ var _photo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../photo */ "./components/photo.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons */ "./components/icons/index.js");
/* harmony import */ var _icon_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icon-button */ "./components/icon-button.js");
var _jsxFileName = "C:\\Users\\YUCEL\\Desktop\\clone\\components\\tweet\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






 // var gelen=["HOŞGELDİNİZ", "ILK TWITINIZI ATABILIRSINIZ"]

var text = [];

function StructureTweet(_ref) {
  _s();

  var _this = this;

  var name = _ref.name,
      mention = _ref.mention,
      date = _ref.date,
      children = _ref.children,
      big = _ref.big;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      tampon = _useState[0],
      setTampon = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      newText = _useState2[0],
      setNewText = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var gelen = ['HOŞGELDINIZ', 'NASILSINIZ?'];
    gelen = JSON.parse(sessionStorage.getItem('TEXT'));
    gelen && gelen.forEach(function (e, i) {
      text[i] = e;
    });
    setTimeout(setTampon(false), 900); //  console.log('ILK:',gelen);
    //  gelen=[...gelen, JSON.parse(sessionStorage.getItem('TEXT'))]
    //  console.log('GELEN:',gelen);
    //  gelen.forEach((e,i)=>  text[i]=e)
  }, []);
  return !tampon && text.reverse().map(function (tweet, index) {
    var like = Math.floor(Math.random() * 20);
    var comment = Math.floor(Math.random() * 20);
    var rt = Math.floor(Math.random() * 20);
    var untilNow = Object(date_fns_formatDistanceToNowStrict__WEBPACK_IMPORTED_MODULE_2__["default"])(date);
    return __jsx("article", {
      className: _index_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.article,
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _index_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.photoDiv,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }
    }, __jsx(_photo__WEBPACK_IMPORTED_MODULE_3__["default"], {
      big: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: _index_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.body,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }
    }, __jsx("header", {
      className: _index_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.header,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: _index_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 21
      }
    }, name), "  ", __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 66
      }
    }, "@", mention, " "), " \u2022 ", __jsx("span", {
      className: _index_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.date,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 94
      }
    }, untilNow), " "), __jsx("p", {
      className: _index_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }
    }, tweet), __jsx("footer", {
      className: _index_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _index_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.buttonFooter,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }
    }, __jsx(_icon_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: _index_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.iconButton,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 21
      }
    }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_4__["Reply"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 25
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 25
      }
    }, comment))), __jsx("div", {
      className: _index_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.buttonFooter,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 21
      }
    }, __jsx(_icon_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: _index_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.iconButton,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 21
      }
    }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_4__["Retweet"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 25
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 25
      }
    }, rt))), __jsx("div", {
      className: _index_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.buttonFooter,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 21
      }
    }, __jsx(_icon_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: _index_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.iconButton,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 21
      }
    }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_4__["Like"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 25
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 25
      }
    }, like))), __jsx("div", {
      className: _index_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.buttonFooter,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 21
      }
    }, __jsx(_icon_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: _index_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.iconButton,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 21
      }
    }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_4__["Share"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 25
      }
    }))))));
  });
}

_s(StructureTweet, "eK4P4r9L0WK/gJ8omEFgHFEEThE=");

_c = StructureTweet;
/* harmony default export */ __webpack_exports__["default"] = (StructureTweet);

var _c;

$RefreshReg$(_c, "StructureTweet");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90d2VldC9pbmRleC5qcyJdLCJuYW1lcyI6WyJ0ZXh0IiwiU3RydWN0dXJlVHdlZXQiLCJuYW1lIiwibWVudGlvbiIsImRhdGUiLCJjaGlsZHJlbiIsImJpZyIsInVzZVN0YXRlIiwidGFtcG9uIiwic2V0VGFtcG9uIiwibmV3VGV4dCIsInNldE5ld1RleHQiLCJ1c2VFZmZlY3QiLCJnZWxlbiIsIkpTT04iLCJwYXJzZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImZvckVhY2giLCJlIiwiaSIsInNldFRpbWVvdXQiLCJyZXZlcnNlIiwibWFwIiwidHdlZXQiLCJpbmRleCIsImxpa2UiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjb21tZW50IiwicnQiLCJ1bnRpbE5vdyIsImZvcm1hdERpc3RhbmNlVG9Ob3dTdHJpY3QiLCJzdHlsZXMiLCJhcnRpY2xlIiwicGhvdG9EaXYiLCJib2R5IiwiaGVhZGVyIiwiY29udGVudCIsImZvb3RlciIsImJ1dHRvbkZvb3RlciIsImljb25CdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0EsSUFBSUEsSUFBSSxHQUFDLEVBQVQ7O0FBSUEsU0FBU0MsY0FBVCxPQUEwRDtBQUFBOztBQUFBOztBQUFBLE1BQWpDQyxJQUFpQyxRQUFqQ0EsSUFBaUM7QUFBQSxNQUE1QkMsT0FBNEIsUUFBNUJBLE9BQTRCO0FBQUEsTUFBcEJDLElBQW9CLFFBQXBCQSxJQUFvQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUFBLE1BQU5DLEdBQU0sUUFBTkEsR0FBTTs7QUFBQSxrQkFDN0JDLHNEQUFRLENBQUMsSUFBRCxDQURxQjtBQUFBLE1BQy9DQyxNQUQrQztBQUFBLE1BQ3hDQyxTQUR3Qzs7QUFBQSxtQkFFM0JGLHNEQUFRLENBQUMsRUFBRCxDQUZtQjtBQUFBLE1BRS9D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QyxjOztLQUFBQSxjO0FBZ0ZNQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45Y2YxODIzOGY3MjJlMDg5ZWU2MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IG1lbW8gfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2luZGV4Lm1vZHVsZS5jc3MnXHJcbmltcG9ydCBmb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0IGZyb20gJ2RhdGUtZm5zL2Zvcm1hdERpc3RhbmNlVG9Ob3dTdHJpY3QnXHJcbmltcG9ydCBQaG90byBmcm9tICcuLi9waG90bydcclxuaW1wb3J0ICogYXMgSUNPTiBmcm9tICcuLi9pY29ucydcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnLi4vaWNvbi1idXR0b24nXHJcbmltcG9ydCB7dXNlRWZmZWN0LHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuXHJcbi8vIHZhciBnZWxlbj1bXCJIT8WeR0VMRMSwTsSwWlwiLCBcIklMSyBUV0lUSU5JWkkgQVRBQklMSVJTSU5JWlwiXVxyXG52YXIgdGV4dD1bXVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBTdHJ1Y3R1cmVUd2VldCh7bmFtZSxtZW50aW9uLGRhdGUsY2hpbGRyZW4sYmlnfSkge1xyXG4gICAgY29uc3QgW3RhbXBvbixzZXRUYW1wb25dPXVzZVN0YXRlKHRydWUpXHJcbiAgICBjb25zdCBbbmV3VGV4dCxzZXROZXdUZXh0XT11c2VTdGF0ZShbXSlcclxuXHJcblxyXG4gICAgXHJcblxyXG4gICAgIHVzZUVmZmVjdCgoKT0+IHtcclxuICAgICAgICB2YXIgZ2VsZW49WydIT8WeR0VMRElOSVonLCdOQVNJTFNJTklaPyddXHJcbiAgICAgICAgZ2VsZW49IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnVEVYVCcpKVxyXG4gICAgICAgIGdlbGVuICYmIGdlbGVuLmZvckVhY2goKGUsaSk9PiB7XHJcbiAgICAgICAgdGV4dFtpXT1lXHJcbiAgICAgICB9KVxyXG4gICAgICAgICBzZXRUaW1lb3V0KHNldFRhbXBvbihmYWxzZSksOTAwKVxyXG4gICAgICAgIC8vICBjb25zb2xlLmxvZygnSUxLOicsZ2VsZW4pO1xyXG4gICAgICAgIC8vICBnZWxlbj1bLi4uZ2VsZW4sIEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnVEVYVCcpKV1cclxuICAgICAgICAvLyAgY29uc29sZS5sb2coJ0dFTEVOOicsZ2VsZW4pO1xyXG4gICAgICAgIC8vICBnZWxlbi5mb3JFYWNoKChlLGkpPT4gIHRleHRbaV09ZSlcclxuICAgICAgICAgXHJcbiAgICAgIH0sW10pXHJcbiAgICByZXR1cm4gICghdGFtcG9uICYmdGV4dC5yZXZlcnNlKCkubWFwKCh0d2VldCxpbmRleCk9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGxpa2U9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjIwKVxyXG4gICAgICAgIHZhciBjb21tZW50PU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoyMClcclxuICAgICAgICB2YXIgcnQ9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjIwKVxyXG4gICAgXHJcbiAgICAgICAgY29uc3QgdW50aWxOb3cgPSBmb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0KGRhdGUpXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aWNsZX0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9EaXZ9ID5cclxuICAgICAgICAgICAgICAgIDxQaG90byBiaWcvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBCQcWeTEEgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9keX0gPlxyXG4gICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9PntuYW1lfTwvc3Bhbj4gIDxzcGFuID5Ae21lbnRpb259IDwvc3Bhbj4g4oCiIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRhdGV9Pnt1bnRpbE5vd308L3NwYW4+IDwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+e3R3ZWV0fTwvcD5cclxuICAgICAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT4gXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbkZvb3Rlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuaWNvbkJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJQ09OLlJlcGx5Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2NvbW1lbnR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbkZvb3Rlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuaWNvbkJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJQ09OLlJldHdlZXQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cnR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25Gb290ZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmljb25CdXR0b259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SUNPTi5MaWtlLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2xpa2V9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbkZvb3Rlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuaWNvbkJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJQ09OLlNoYXJlLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBCxLBUxLBSICovfVxyXG5cclxuICAgICAgICA8L2FydGljbGU+XHJcblxyXG4gICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICApIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RydWN0dXJlVHdlZXRcclxuXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=