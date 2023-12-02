"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Nav/Nav.js":
/*!*******************************!*\
  !*** ./components/Nav/Nav.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Nav: function() { return /* binding */ Nav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/react */ \"./node_modules/@iconify/react/dist/iconify.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst navigation = [\n    {\n        name: \"Особенности\",\n        to: \"#features\",\n        href: \"/#features\"\n    },\n    {\n        name: \"FAQ?\",\n        to: \"#faq\",\n        href: \"/#faq\"\n    },\n    {\n        name: \"Nargiza\",\n        href: \"https://github.com/proemistayafr\",\n        isArrow: true,\n        target: \"_blank\"\n    },\n    {\n        name: \"Adilzhan\",\n        href: \"https://github.com/proemistayafr\",\n        isArrow: true,\n        target: \"_blank\"\n    },\n    {\n        name: \"Rustem\",\n        href: \"https://github.com/proemistayafr\",\n        isArrow: true,\n        target: \"_blank\"\n    },\n    {\n        name: \"Kosai\",\n        href: \"https://github.com/proemistayafr\",\n        isArrow: true,\n        target: \"_blank\"\n    },\n    {\n        name: \"Contact\",\n        href: \"https://github.com/proemistayafr\",\n        isArrow: true,\n        target: \"_blank\"\n    }\n];\nconst Nav = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [isNavOpen, setIsNavOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const closeNav = ()=>{\n        setIsNavOpen(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"header-nav\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"header-nav--container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>setIsNavOpen(!isNavOpen),\n                    \"data-collapse-toggle\": \"navbar-default\",\n                    type: \"button\",\n                    className: \"mobile-menu\",\n                    \"aria-controls\": \"navbar-dropdown\",\n                    \"aria-expanded\": \"false\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"sr-only\",\n                            children: \"Open main menu\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\admin\\\\another\\\\components\\\\Nav\\\\Nav.js\",\n                            lineNumber: 59,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {\n                            icon: \"material-symbols:menu-rounded\",\n                            className: \"h-6 w-auto text-black\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\admin\\\\another\\\\components\\\\Nav\\\\Nav.js\",\n                            lineNumber: 60,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\admin\\\\another\\\\components\\\\Nav\\\\Nav.js\",\n                    lineNumber: 51,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"header-nav--menu-container z-20 \".concat(isNavOpen ? \"show\" : \"hide\"),\n                    id: \"navbar-default\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"header-nav--menu\",\n                        children: navigation.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"header-nav--menu-item\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    to: item.to,\n                                    href: item.href,\n                                    className: \"menu-item--link flex items-center\\n                    \".concat(router.pathname === item.href ? \"active\" : \"\", \"\\n                  \"),\n                                    onClick: closeNav,\n                                    target: item.target ? item.target : \"_self\",\n                                    children: [\n                                        item.name,\n                                        item.isArrow && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"ml-2 inline-block text-sm font-medium text-inherit\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {\n                                                icon: \"material-symbols:arrow-outward\",\n                                                className: \"h-6 w-auto\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\admin\\\\another\\\\components\\\\Nav\\\\Nav.js\",\n                                                lineNumber: 90,\n                                                columnNumber: 45\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\admin\\\\another\\\\components\\\\Nav\\\\Nav.js\",\n                                            lineNumber: 89,\n                                            columnNumber: 41\n                                        }, undefined)\n                                    ]\n                                }, item.name, true, {\n                                    fileName: \"C:\\\\Users\\\\admin\\\\another\\\\components\\\\Nav\\\\Nav.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 33\n                                }, undefined)\n                            }, item.name, false, {\n                                fileName: \"C:\\\\Users\\\\admin\\\\another\\\\components\\\\Nav\\\\Nav.js\",\n                                lineNumber: 73,\n                                columnNumber: 29\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin\\\\another\\\\components\\\\Nav\\\\Nav.js\",\n                        lineNumber: 71,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\admin\\\\another\\\\components\\\\Nav\\\\Nav.js\",\n                    lineNumber: 65,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\admin\\\\another\\\\components\\\\Nav\\\\Nav.js\",\n            lineNumber: 50,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\admin\\\\another\\\\components\\\\Nav\\\\Nav.js\",\n        lineNumber: 49,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Nav, \"eHTfxnGjsKh4loHoZl89v0mVDIk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Nav;\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi9OYXYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ0o7QUFDUztBQUNFO0FBRXhDLE1BQU1JLGFBQWE7SUFDZjtRQUFFQyxNQUFNO1FBQWVDLElBQUk7UUFBYUMsTUFBTTtJQUFhO0lBQzNEO1FBQUVGLE1BQU07UUFBUUMsSUFBSTtRQUFRQyxNQUFNO0lBQVE7SUFDMUM7UUFDSUYsTUFBTTtRQUNORSxNQUFNO1FBQ05DLFNBQVM7UUFDVEMsUUFBUTtJQUNaO0lBQ0E7UUFDSUosTUFBTTtRQUNORSxNQUFNO1FBQ05DLFNBQVM7UUFDVEMsUUFBUTtJQUNaO0lBQ0E7UUFDSUosTUFBTTtRQUNORSxNQUFNO1FBQ05DLFNBQVM7UUFDVEMsUUFBUTtJQUNaO0lBQ0E7UUFDSUosTUFBTTtRQUNORSxNQUFNO1FBQ05DLFNBQVM7UUFDVEMsUUFBUTtJQUNaO0lBQ0E7UUFDSUosTUFBTTtRQUNORSxNQUFNO1FBQ05DLFNBQVM7UUFDVEMsUUFBUTtJQUNaO0NBQ0g7QUFFTSxNQUFNQyxNQUFNOztJQUNmLE1BQU1DLFNBQVNSLHNEQUFTQTtJQUN4QixNQUFNLENBQUNTLFdBQVdDLGFBQWEsR0FBR2IsK0NBQVFBLENBQUM7SUFFM0MsTUFBTWMsV0FBVztRQUNiRCxhQUFhO0lBQ2pCO0lBQ0EscUJBQ0ksOERBQUNFO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNDO1lBQUlELFdBQVU7OzhCQUNYLDhEQUFDRTtvQkFDR0MsU0FBUyxJQUFNTixhQUFhLENBQUNEO29CQUM3QlEsd0JBQXFCO29CQUNyQkMsTUFBSztvQkFDTEwsV0FBVTtvQkFDVk0saUJBQWM7b0JBQ2RDLGlCQUFjOztzQ0FFZCw4REFBQ0M7NEJBQUtSLFdBQVU7c0NBQVU7Ozs7OztzQ0FDMUIsOERBQUNkLGdEQUFJQTs0QkFDRHVCLE1BQUs7NEJBQ0xULFdBQVU7Ozs7Ozs7Ozs7Ozs4QkFHbEIsOERBQUNDO29CQUNHRCxXQUFXLG1DQUVWLE9BREdKLFlBQVksU0FBUztvQkFFekJjLElBQUc7OEJBRUgsNEVBQUNDO3dCQUFHWCxXQUFVO2tDQUNUWixXQUFXd0IsR0FBRyxDQUFDLENBQUNDLHFCQUNiLDhEQUFDQztnQ0FFR2QsV0FBVTswQ0FFViw0RUFBQ2U7b0NBRUd6QixJQUFJdUIsS0FBS3ZCLEVBQUU7b0NBQ1hDLE1BQU1zQixLQUFLdEIsSUFBSTtvQ0FDZlMsV0FBVywwREFDcUIsT0FBOUNMLE9BQU9xQixRQUFRLEtBQUtILEtBQUt0QixJQUFJLEdBQUcsV0FBVyxJQUFHO29DQUVoQ1ksU0FBU0w7b0NBQ1RMLFFBQVFvQixLQUFLcEIsTUFBTSxHQUFHb0IsS0FBS3BCLE1BQU0sR0FBRzs7d0NBRW5Db0IsS0FBS3hCLElBQUk7d0NBQ1R3QixLQUFLckIsT0FBTyxrQkFDVCw4REFBQ2dCOzRDQUFLUixXQUFVO3NEQUNaLDRFQUFDZCxnREFBSUE7Z0RBQ0R1QixNQUFLO2dEQUNMVCxXQUFVOzs7Ozs7Ozs7Ozs7bUNBZGpCYSxLQUFLeEIsSUFBSTs7Ozs7K0JBSmJ3QixLQUFLeEIsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4QjlDLEVBQUU7R0EvRFdLOztRQUNNUCxrREFBU0E7OztLQURmTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdi9OYXYuanM/MzgwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IEljb24gfSBmcm9tIFwiQGljb25pZnkvcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBuYXZpZ2F0aW9uID0gW1xyXG4gICAgeyBuYW1lOiBcItCe0YHQvtCx0LXQvdC90L7RgdGC0LhcIiwgdG86IFwiI2ZlYXR1cmVzXCIsIGhyZWY6IFwiLyNmZWF0dXJlc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiRkFRP1wiLCB0bzogXCIjZmFxXCIsIGhyZWY6IFwiLyNmYXFcIiB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiTmFyZ2l6YVwiLFxyXG4gICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL3Byb2VtaXN0YXlhZnJcIixcclxuICAgICAgICBpc0Fycm93OiB0cnVlLFxyXG4gICAgICAgIHRhcmdldDogXCJfYmxhbmtcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkFkaWx6aGFuXCIsXHJcbiAgICAgICAgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vcHJvZW1pc3RheWFmclwiLFxyXG4gICAgICAgIGlzQXJyb3c6IHRydWUsXHJcbiAgICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiUnVzdGVtXCIsXHJcbiAgICAgICAgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vcHJvZW1pc3RheWFmclwiLFxyXG4gICAgICAgIGlzQXJyb3c6IHRydWUsXHJcbiAgICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiS29zYWlcIixcclxuICAgICAgICBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9wcm9lbWlzdGF5YWZyXCIsXHJcbiAgICAgICAgaXNBcnJvdzogdHJ1ZSxcclxuICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJDb250YWN0XCIsXHJcbiAgICAgICAgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vcHJvZW1pc3RheWFmclwiLFxyXG4gICAgICAgIGlzQXJyb3c6IHRydWUsXHJcbiAgICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiXHJcbiAgICB9XHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgTmF2ID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBbaXNOYXZPcGVuLCBzZXRJc05hdk9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGNsb3NlTmF2ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldElzTmF2T3BlbihmYWxzZSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImhlYWRlci1uYXZcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbmF2LS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc05hdk9wZW4oIWlzTmF2T3Blbil9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1jb2xsYXBzZS10b2dnbGU9XCJuYXZiYXItZGVmYXVsdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW9iaWxlLW1lbnVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJuYXZiYXItZHJvcGRvd25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPk9wZW4gbWFpbiBtZW51PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJtYXRlcmlhbC1zeW1ib2xzOm1lbnUtcm91bmRlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNiB3LWF1dG8gdGV4dC1ibGFja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGhlYWRlci1uYXYtLW1lbnUtY29udGFpbmVyIHotMjAgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNOYXZPcGVuID8gXCJzaG93XCIgOiBcImhpZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwibmF2YmFyLWRlZmF1bHRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJoZWFkZXItbmF2LS1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtuYXZpZ2F0aW9uLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyLW5hdi0tbWVudS1pdGVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e2l0ZW0udG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2l0ZW0uaHJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbWVudS1pdGVtLS1saW5rIGZsZXggaXRlbXMtY2VudGVyXHJcbiAgICAgICAgICAgICAgICAgICAgJHtyb3V0ZXIucGF0aG5hbWUgPT09IGl0ZW0uaHJlZiA/IFwiYWN0aXZlXCIgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbG9zZU5hdn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PXtpdGVtLnRhcmdldCA/IGl0ZW0udGFyZ2V0IDogXCJfc2VsZlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uaXNBcnJvdyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0yIGlubGluZS1ibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtaW5oZXJpdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJtYXRlcmlhbC1zeW1ib2xzOmFycm93LW91dHdhcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTYgdy1hdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJMaW5rIiwiSWNvbiIsInVzZVJvdXRlciIsIm5hdmlnYXRpb24iLCJuYW1lIiwidG8iLCJocmVmIiwiaXNBcnJvdyIsInRhcmdldCIsIk5hdiIsInJvdXRlciIsImlzTmF2T3BlbiIsInNldElzTmF2T3BlbiIsImNsb3NlTmF2IiwibmF2IiwiY2xhc3NOYW1lIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsImRhdGEtY29sbGFwc2UtdG9nZ2xlIiwidHlwZSIsImFyaWEtY29udHJvbHMiLCJhcmlhLWV4cGFuZGVkIiwic3BhbiIsImljb24iLCJpZCIsInVsIiwibWFwIiwiaXRlbSIsImxpIiwiYSIsInBhdGhuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Nav/Nav.js\n"));

/***/ })

});