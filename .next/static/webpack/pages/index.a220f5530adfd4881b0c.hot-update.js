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
/* harmony import */ var _base_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.module.css */ "./components/modal-tweet/base.module.css");
/* harmony import */ var _base_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_base_module_css__WEBPACK_IMPORTED_MODULE_1__);
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
    className: _base_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.modal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _base_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _base_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.photo,
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
    className: _base_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.text,
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
    className: _base_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx(_theme_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: _base_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.twit,
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

/***/ "./components/modal-tweet/base.module.css":
/*!************************************************!*\
  !*** ./components/modal-tweet/base.module.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./base.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/modal-tweet/base.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./base.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/modal-tweet/base.module.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./base.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/modal-tweet/base.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/modal-tweet/base.module.css":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./components/modal-tweet/base.module.css ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".base_overlay__34YaN {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: var(--c-overlay);\r\n  display: -webkit-flex;\r\n  display: flex;\r\n  -webkit-align-items: center;\r\n          align-items: center;\r\n  -webkit-justify-content: center;\r\n          justify-content: center;\r\n}\r\n.base_modal__PJ2Xw {\r\n  max-width: 450px;\r\n  width: 100%;\r\n\r\n  background-color: var(--c-primary);\r\n  border-radius: 20px;\r\n  padding: 20px;\r\n  display: block;\r\n}\r\n\r\n.base_content__2ml3k {\r\n  display: -webkit-flex;\r\n  display: flex;\r\n  -webkit-justify-content: center;\r\n          justify-content: center;\r\n  padding: 15px 0;\r\n  border-color: white;\r\n\r\n  border-top: 1px solid;\r\n  border-bottom: 1px solid;\r\n  border-color: var(--c-gray);\r\n}\r\n\r\n.base_text__10vvc {\r\n  resize: none;\r\n  outline: none;\r\n  color: var(--c-text-color);\r\n  background-color: transparent;\r\n  font-size: 1.5em;\r\n  margin-left: 15px;\r\n  display: block;\r\n  width: 100%;\r\n}\r\n.base_header__2_9Jm {\r\n  -webkit-justify-content: flex-start;\r\n          justify-content: flex-start;\r\n  padding: 0 0 5px 0;\r\n}\r\n.base_footer__3M8Sg {\r\n  -webkit-justify-content: flex-end;\r\n          justify-content: flex-end;\r\n  -webkit-align-items: flex-end;\r\n          align-items: flex-end;\r\n  -webkit-align-content: flex-end;\r\n          align-content: flex-end;\r\n  display: -webkit-flex;\r\n  display: flex;\r\n}\r\n.base_close__1xfa8 {\r\n  margin-right: 0;\r\n  color: var(--c-gray);\r\n}\r\n.base_twit__1Z-zr {\r\n  margin-left: 0;\r\n  margin-top: 5px;\r\n  right: 0;\r\n}\r\n", "",{"version":3,"sources":["webpack://components/modal-tweet/base.module.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,kCAAkC;EAClC,qBAAa;EAAb,aAAa;EACb,2BAAmB;UAAnB,mBAAmB;EACnB,+BAAuB;UAAvB,uBAAuB;AACzB;AACA;EACE,gBAAgB;EAChB,WAAW;;EAEX,kCAAkC;EAClC,mBAAmB;EACnB,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,qBAAa;EAAb,aAAa;EACb,+BAAuB;UAAvB,uBAAuB;EACvB,eAAe;EACf,mBAAmB;;EAEnB,qBAAqB;EACrB,wBAAwB;EACxB,2BAA2B;AAC7B;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,0BAA0B;EAC1B,6BAA6B;EAC7B,gBAAgB;EAChB,iBAAiB;EACjB,cAAc;EACd,WAAW;AACb;AACA;EACE,mCAA2B;UAA3B,2BAA2B;EAC3B,kBAAkB;AACpB;AACA;EACE,iCAAyB;UAAzB,yBAAyB;EACzB,6BAAqB;UAArB,qBAAqB;EACrB,+BAAuB;UAAvB,uBAAuB;EACvB,qBAAa;EAAb,aAAa;AACf;AACA;EACE,eAAe;EACf,oBAAoB;AACtB;AACA;EACE,cAAc;EACd,eAAe;EACf,QAAQ;AACV","sourcesContent":[".overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: var(--c-overlay);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.modal {\r\n  max-width: 450px;\r\n  width: 100%;\r\n\r\n  background-color: var(--c-primary);\r\n  border-radius: 20px;\r\n  padding: 20px;\r\n  display: block;\r\n}\r\n\r\n.content {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 15px 0;\r\n  border-color: white;\r\n\r\n  border-top: 1px solid;\r\n  border-bottom: 1px solid;\r\n  border-color: var(--c-gray);\r\n}\r\n\r\n.text {\r\n  resize: none;\r\n  outline: none;\r\n  color: var(--c-text-color);\r\n  background-color: transparent;\r\n  font-size: 1.5em;\r\n  margin-left: 15px;\r\n  display: block;\r\n  width: 100%;\r\n}\r\n.header {\r\n  justify-content: flex-start;\r\n  padding: 0 0 5px 0;\r\n}\r\n.footer {\r\n  justify-content: flex-end;\r\n  align-items: flex-end;\r\n  align-content: flex-end;\r\n  display: flex;\r\n}\r\n.close {\r\n  margin-right: 0;\r\n  color: var(--c-gray);\r\n}\r\n.twit {\r\n  margin-left: 0;\r\n  margin-top: 5px;\r\n  right: 0;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"overlay": "base_overlay__34YaN",
	"modal": "base_modal__PJ2Xw",
	"content": "base_content__2ml3k",
	"text": "base_text__10vvc",
	"header": "base_header__2_9Jm",
	"footer": "base_footer__3M8Sg",
	"close": "base_close__1xfa8",
	"twit": "base_twit__1Z-zr"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2RhbC10d2VldC9iYXNlLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21vZGFsLXR3ZWV0L2Jhc2UubW9kdWxlLmNzcz8yZjI0Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21vZGFsLXR3ZWV0L2Jhc2UubW9kdWxlLmNzcyJdLCJuYW1lcyI6WyJsYXlvdXQiLCJ5ZW5pIiwiQmFzZSIsIm9uQ2xpY2siLCJ1c2VTdGF0ZSIsImlkZWEiLCJzZXRJZGVhIiwib25TdWJtaXQiLCJlIiwieWVzeWVuaSIsIkpTT04iLCJwYXJzZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImZvckVhY2giLCJpIiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwic3R5bGVzIiwibW9kYWwiLCJjb250ZW50IiwicGhvdG8iLCJ0ZXh0IiwidGFyZ2V0IiwidmFsdWUiLCJmb290ZXIiLCJ0d2l0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlBLE1BQU0sR0FBRSxFQUFaO0FBQ0EsSUFBSUMsSUFBSSxHQUFDLENBQUMsYUFBRCxDQUFUOztBQUdBLFNBQVNDLElBQVQsT0FBbUM7QUFBQTs7QUFBQSwwQkFBcEJDLE9BQW9CO0FBQUEsTUFBcEJBLE9BQW9CLDZCQUFYLFlBQU0sQ0FBRSxDQUFHOztBQUFBLGtCQUNWQyxzREFBUSxDQUFDLEVBQUQsQ0FERTtBQUFBLE1BQ3hCQyxJQUR3QjtBQUFBLE1BQ25CQyxPQURtQjs7QUFJL0IsTUFBTUMsUUFBUSxHQUFFLFNBQVZBLFFBQVUsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ25CLFFBQUlDLE9BQU8sR0FBQyxFQUFaO0FBQ0FBLFdBQU8sR0FBRUMsSUFBSSxDQUFDQyxLQUFMLENBQVdDLGNB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Q0FBZ0MsK0JBQStCLGtDQUFrQyxLQUFLLGVBQWUsbUJBQW1CLG9CQUFvQixpQ0FBaUMsb0NBQW9DLHVCQUF1Qix3QkFBd0IscUJBQXFCLGtCQUFrQixLQUFLLGFBQWEsa0NBQWtDLHlCQUF5QixLQUFLLGFBQWEsZ0NBQWdDLDRCQUE0Qiw4QkFBOEIsb0JBQW9CLEtBQUssWUFBWSxzQkFBc0IsMkJBQTJCLEtBQUssV0FBVyxxQkFBcUIsc0JBQXNCLGVBQWUsS0FBSyx1QkFBdUI7QUFDaG5IO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hMjIwZjU1MzBhZGZkNDg4MWIwYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYmFzZS5tb2R1bGUuY3NzJ1xyXG5cclxuaW1wb3J0IFBob3RvIGZyb20gJy4uL3Bob3RvJ1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICcuLi9pY29uLWJ1dHRvbidcclxuaW1wb3J0IHtDbG9zZX0gZnJvbSAnLi4vaWNvbnMnXHJcbmltcG9ydCBUaGVtZUJ1dHRvbiBmcm9tICcuLi90aGVtZS1idXR0b24nXHJcbnZhciBsYXlvdXQ9IFtdXHJcbnZhciB5ZW5pPVtcIkhPxZ5HRUxExLBOxLBaXCJdXHJcblxyXG5cclxuZnVuY3Rpb24gQmFzZSh7b25DbGljaz0gKCkgPT4ge319KSB7XHJcbiAgICBjb25zdCBbaWRlYSxzZXRJZGVhXT11c2VTdGF0ZShbXSlcclxuICAgIFxyXG4gICAgXHJcbiAgICBjb25zdCBvblN1Ym1pdD0gKGUpID0+IHtcclxuICAgICAgICB2YXIgeWVzeWVuaT1bXVxyXG4gICAgICAgIHllc3llbmk9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnVEVYVCcpKVxyXG4gICAgICB5ZXN5ZW5pICYmIHllc3llbmkuZm9yRWFjaCgoZSxpKT0+IHtcclxuICAgICAgICBsYXlvdXRbaV09ZVxyXG4gICAgICAgfSlcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBsYXlvdXQucHVzaCggaWRlYSlcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdURVhUJyxKU09OLnN0cmluZ2lmeShsYXlvdXQpKVxyXG4gICAgICAgIG9uQ2xpY2soZmFsc2UpXHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgIFxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWx9PlxyXG4gICAgICAgIFxyXG4gICAgICAgIHsvKiBDb250ZW50ICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG99PlxyXG4gICAgICAgIDxQaG90byBiaWcvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICBcclxuICAgICAgICA8dGV4dGFyZWEgcGxhY2Vob2xkZXI9XCJXaGF0J3MgaGFwcGVuaW5nIC4uP1wiIHJvd3M9XCI0XCIgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0gdmFsdWU9e2lkZWF9IG9uQ2hhbmdlPXsoZSk9PntzZXRJZGVhKGUudGFyZ2V0LnZhbHVlKX19Lz5cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIEZvb3RlciAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XHJcbiAgICAgICAgICAgIDxUaGVtZUJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy50d2l0fSBvbkNsaWNrPXtvblN1Ym1pdH0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2VcclxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPz9fX25leHRqc19wb3N0Y3NzIS4vYmFzZS5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPz9fX25leHRqc19wb3N0Y3NzIS4vYmFzZS5tb2R1bGUuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPz9fX25leHRqc19wb3N0Y3NzIS4vYmFzZS5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5iYXNlX292ZXJsYXlfXzM0WWFOIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWMtb3ZlcmxheSk7XFxyXFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi5iYXNlX21vZGFsX19QSjJYdyB7XFxyXFxuICBtYXgtd2lkdGg6IDQ1MHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jLXByaW1hcnkpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmJhc2VfY29udGVudF9fMm1sM2sge1xcclxcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTVweCAwO1xcclxcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXHJcXG5cXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcXHJcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYy1ncmF5KTtcXHJcXG59XFxyXFxuXFxyXFxuLmJhc2VfdGV4dF9fMTB2dmMge1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jLXRleHQtY29sb3IpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBmb250LXNpemU6IDEuNWVtO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4uYmFzZV9oZWFkZXJfXzJfOUptIHtcXHJcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBwYWRkaW5nOiAwIDAgNXB4IDA7XFxyXFxufVxcclxcbi5iYXNlX2Zvb3Rlcl9fM004U2cge1xcclxcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG4gIC13ZWJraXQtYWxpZ24tY29udGVudDogZmxleC1lbmQ7XFxyXFxuICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuLmJhc2VfY2xvc2VfXzF4ZmE4IHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jLWdyYXkpO1xcclxcbn1cXHJcXG4uYmFzZV90d2l0X18xWi16ciB7XFxyXFxuICBtYXJnaW4tbGVmdDogMDtcXHJcXG4gIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vY29tcG9uZW50cy9tb2RhbC10d2VldC9iYXNlLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULGtDQUFrQztFQUNsQyxxQkFBYTtFQUFiLGFBQWE7RUFDYiwyQkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLCtCQUF1QjtVQUF2Qix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXOztFQUVYLGtDQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQkFBYTtFQUFiLGFBQWE7RUFDYiwrQkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixtQkFBbUI7O0VBRW5CLHFCQUFxQjtFQUNyQix3QkFBd0I7RUFDeEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLFdBQVc7QUFDYjtBQUNBO0VBQ0UsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGlDQUF5QjtVQUF6Qix5QkFBeUI7RUFDekIsNkJBQXFCO1VBQXJCLHFCQUFxQjtFQUNyQiwrQkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHFCQUFhO0VBQWIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLFFBQVE7QUFDVlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIub3ZlcmxheSB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jLW92ZXJsYXkpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLm1vZGFsIHtcXHJcXG4gIG1heC13aWR0aDogNDUwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWMtcHJpbWFyeSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxNXB4IDA7XFxyXFxuICBib3JkZXItY29sb3I6IHdoaXRlO1xcclxcblxcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xcclxcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jLWdyYXkpO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dCB7XFxyXFxuICByZXNpemU6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgY29sb3I6IHZhcigtLWMtdGV4dC1jb2xvcik7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuICBtYXJnaW4tbGVmdDogMTVweDtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi5oZWFkZXIge1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgcGFkZGluZzogMCAwIDVweCAwO1xcclxcbn1cXHJcXG4uZm9vdGVyIHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxuICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcbi5jbG9zZSB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxyXFxuICBjb2xvcjogdmFyKC0tYy1ncmF5KTtcXHJcXG59XFxyXFxuLnR3aXQge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICByaWdodDogMDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwib3ZlcmxheVwiOiBcImJhc2Vfb3ZlcmxheV9fMzRZYU5cIixcblx0XCJtb2RhbFwiOiBcImJhc2VfbW9kYWxfX1BKMlh3XCIsXG5cdFwiY29udGVudFwiOiBcImJhc2VfY29udGVudF9fMm1sM2tcIixcblx0XCJ0ZXh0XCI6IFwiYmFzZV90ZXh0X18xMHZ2Y1wiLFxuXHRcImhlYWRlclwiOiBcImJhc2VfaGVhZGVyX18yXzlKbVwiLFxuXHRcImZvb3RlclwiOiBcImJhc2VfZm9vdGVyX18zTThTZ1wiLFxuXHRcImNsb3NlXCI6IFwiYmFzZV9jbG9zZV9fMXhmYThcIixcblx0XCJ0d2l0XCI6IFwiYmFzZV90d2l0X18xWi16clwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=