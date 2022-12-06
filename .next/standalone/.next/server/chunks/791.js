exports.id = 791;
exports.ids = [791];
exports.modules = {

/***/ 2714:
/***/ ((module) => {

// Exports
module.exports = {
	"primaryColor": "#005cc3",
	"footerCol180px": "Button_footerCol180px__AIz9n",
	"footerCol250px": "Button_footerCol250px__utFd8",
	"footerCol260px": "Button_footerCol260px__hm06z",
	"footerCol210px": "Button_footerCol210px__laSdL",
	"footerCol100px": "Button_footerCol100px__m5N6H",
	"footerCol10ch": "Button_footerCol10ch__kgcXl",
	"footerCol12ch": "Button_footerCol12ch__864Vw",
	"footerCol14ch": "Button_footerCol14ch__f9Bqq",
	"footerCol16ch": "Button_footerCol16ch__Xov6P",
	"footerCol18ch": "Button_footerCol18ch__8_ehh",
	"footerCol20ch": "Button_footerCol20ch__8LYnZ",
	"footerCol22ch": "Button_footerCol22ch__6gbWk",
	"footerCol24ch": "Button_footerCol24ch__0P2sz",
	"footerCol26ch": "Button_footerCol26ch__5NuoE",
	"footerCol28ch": "Button_footerCol28ch__6KTrs",
	"button-success": "Button_button-success__X8Pbw",
	"button-primary": "Button_button-primary__LeRH_",
	"button-ghost": "Button_button-ghost__0U5IV",
	"button-icon": "Button_button-icon___HxQp",
	"button-icon-start": "Button_button-icon-start__NVKte",
	"button-icon-end": "Button_button-icon-end__qTCmq",
	"button-primary-start": "Button_button-primary-start__R8vWV",
	"button-primary-end": "Button_button-primary-end__A9gtb"
};


/***/ }),

/***/ 6151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2714);
/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Button_module_scss__WEBPACK_IMPORTED_MODULE_2__);
"use client";



const Button = ({ btnText , isLoading =false , isDisabled =false , isSubmit =false , type ="primary" , onClick , customClass =""  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: `${(_Button_module_scss__WEBPACK_IMPORTED_MODULE_2___default())["button-" + type]} ${customClass}`,
        type: isSubmit ? "submit" : "button",
        onClick: onClick,
        disabled: isDisabled,
        children: isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            children: "Loading..."
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
            className: "button-text",
            children: [
                " ",
                btnText,
                " "
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 1951:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2714);
/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Button_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);




const ButtonWithIcon = ({ src , iconW =20 , iconH =20 , iconPosition ="start" , btnText , type ="primary" , customClass ="" , onClick  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        className: `${(_Button_module_scss__WEBPACK_IMPORTED_MODULE_3___default())[`button-${type}-${iconPosition}`]} ${customClass}`,
        onClick: onClick,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                className: (_Button_module_scss__WEBPACK_IMPORTED_MODULE_3___default())[`button-icon-${iconPosition}`],
                src: __webpack_require__(9211)(`./${src}`).default.src,
                width: iconW,
                height: iconH,
                alt: btnText
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: "button-text",
                children: [
                    " ",
                    btnText,
                    " "
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonWithIcon);


/***/ })

};
;