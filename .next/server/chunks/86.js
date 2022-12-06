exports.id = 86;
exports.ids = [86];
exports.modules = {

/***/ 5698:
/***/ ((module) => {

// Exports
module.exports = {
	"primaryColor": "#005cc3",
	"footerCol180px": "BuyOnMarkset_footerCol180px__8yviY",
	"footerCol250px": "BuyOnMarkset_footerCol250px__wdQK9",
	"footerCol260px": "BuyOnMarkset_footerCol260px__5Bhg2",
	"footerCol210px": "BuyOnMarkset_footerCol210px__DzrV2",
	"footerCol100px": "BuyOnMarkset_footerCol100px__TPRB7",
	"footerCol10ch": "BuyOnMarkset_footerCol10ch__bdn8K",
	"footerCol12ch": "BuyOnMarkset_footerCol12ch__hBtRX",
	"footerCol14ch": "BuyOnMarkset_footerCol14ch__sGhbi",
	"footerCol16ch": "BuyOnMarkset_footerCol16ch__K3CE6",
	"footerCol18ch": "BuyOnMarkset_footerCol18ch__G6tN7",
	"footerCol20ch": "BuyOnMarkset_footerCol20ch__o_WLE",
	"footerCol22ch": "BuyOnMarkset_footerCol22ch__Or5uy",
	"footerCol24ch": "BuyOnMarkset_footerCol24ch__E5evn",
	"footerCol26ch": "BuyOnMarkset_footerCol26ch__IEPgP",
	"footerCol28ch": "BuyOnMarkset_footerCol28ch__ND09Q",
	"main-container": "BuyOnMarkset_main-container__mWpzl",
	"buy-on-market-head-container": "BuyOnMarkset_buy-on-market-head-container__lHNwN",
	"buy-on-market-title": "BuyOnMarkset_buy-on-market-title__W33hs",
	"buy-on-market-all-products": "BuyOnMarkset_buy-on-market-all-products__a2_P6",
	"all-products-container": "BuyOnMarkset_all-products-container__01aeF",
	"all-products-arrow-right": "BuyOnMarkset_all-products-arrow-right__fGr8n",
	"popular-categories-wrapper": "BuyOnMarkset_popular-categories-wrapper__KckYn",
	"popular-categories-container": "BuyOnMarkset_popular-categories-container__bPDb_",
	"popular-categories-title": "BuyOnMarkset_popular-categories-title__NVurS",
	"popular-categories-image": "BuyOnMarkset_popular-categories-image__ueHj_",
	"category-item-title": "BuyOnMarkset_category-item-title__2r0DB",
	"category-item-container": "BuyOnMarkset_category-item-container__TDoPJ",
	"category-item-image": "BuyOnMarkset_category-item-image__7Hqe8",
	"category-item-price": "BuyOnMarkset_category-item-price__f3aRD",
	"category-item-wrapper": "BuyOnMarkset_category-item-wrapper__MBVAk"
};


/***/ }),

/***/ 9086:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DB": () => (/* binding */ Product240Pixels),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export CategoryTitle */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5562);
/* harmony import */ var _BuyOnMarkset_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5698);
/* harmony import */ var _BuyOnMarkset_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_BuyOnMarkset_module_scss__WEBPACK_IMPORTED_MODULE_4__);





const Product240Pixels = ({ imgSrc , alt , productUrl , price , title  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: productUrl,
        className: (_BuyOnMarkset_module_scss__WEBPACK_IMPORTED_MODULE_4___default()["category-item-container"]),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Image__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                src: imgSrc,
                alt: alt,
                className: (_BuyOnMarkset_module_scss__WEBPACK_IMPORTED_MODULE_4___default()["category-item-image"])
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: (_BuyOnMarkset_module_scss__WEBPACK_IMPORTED_MODULE_4___default()["category-item-name"]),
                children: [
                    " ",
                    title,
                    " "
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: (_BuyOnMarkset_module_scss__WEBPACK_IMPORTED_MODULE_4___default()["category-item-price"]),
                children: [
                    price,
                    " леев"
                ]
            })
        ]
    });
};
const CategoryTitle = ({ value  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
        className: (_BuyOnMarkset_module_scss__WEBPACK_IMPORTED_MODULE_4___default()["category-item-title"]),
        children: value
    });
const BuyOnMarket = ()=>{
    const PopularCategories = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_BuyOnMarkset_module_scss__WEBPACK_IMPORTED_MODULE_4___default()["popular-categories-wrapper"]),
            children: Array.from({
                length: 7
            }).map((_, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_BuyOnMarkset_module_scss__WEBPACK_IMPORTED_MODULE_4___default()["popular-categories-container"]),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: (_BuyOnMarkset_module_scss__WEBPACK_IMPORTED_MODULE_4___default()["popular-categories-title"]),
                            children: "Аксессуары для авто"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Image__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            src: "car.png",
                            alt: "Car category",
                            className: (_BuyOnMarkset_module_scss__WEBPACK_IMPORTED_MODULE_4___default()["popular-categories-image"])
                        })
                    ]
                }, index))
        });
    const CategoryWithItems = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CategoryTitle, {
                        value: "Готовимся к холодам"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_BuyOnMarkset_module_scss__WEBPACK_IMPORTED_MODULE_4___default()["category-item-wrapper"]),
                    children: Array.from({
                        length: 12
                    }).map((_, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Product240Pixels, {
                            alt: "Calorifer",
                            title: "Конвектор Zanussi Zch/S-1500 Er",
                            price: 2550,
                            imgSrc: "calorifer.jpg",
                            productUrl: "/products/1/"
                        }, index))
                })
            ]
        });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_BuyOnMarkset_module_scss__WEBPACK_IMPORTED_MODULE_4___default()["main-container"]),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_BuyOnMarkset_module_scss__WEBPACK_IMPORTED_MODULE_4___default()["buy-on-market-head-container"]),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: (_BuyOnMarkset_module_scss__WEBPACK_IMPORTED_MODULE_4___default()["buy-on-market-title"]),
                        children: "Купить онлайн на Market"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_BuyOnMarkset_module_scss__WEBPACK_IMPORTED_MODULE_4___default()["all-products-container"]),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "#",
                                className: (_BuyOnMarkset_module_scss__WEBPACK_IMPORTED_MODULE_4___default()["buy-on-market-all-products"]),
                                children: "Все товары"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Image__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                src: "arrow-to-delivery.svg",
                                alt: "Arrow right",
                                className: (_BuyOnMarkset_module_scss__WEBPACK_IMPORTED_MODULE_4___default()["all-products-arrow-right"])
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PopularCategories, {}),
            Array.from({
                length: 5
            }).map((_, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CategoryWithItems, {}, index))
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BuyOnMarket);


/***/ })

};
;