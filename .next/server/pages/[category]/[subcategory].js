(() => {
var exports = {};
exports.id = 28;
exports.ids = [28];
exports.modules = {

/***/ 9537:
/***/ ((module) => {

// Exports
module.exports = {
	"primaryColor": "#005cc3",
	"footerCol180px": "Accordion_footerCol180px__f79e9",
	"footerCol250px": "Accordion_footerCol250px__xJFlM",
	"footerCol260px": "Accordion_footerCol260px__NhY2t",
	"footerCol210px": "Accordion_footerCol210px__F0zwT",
	"footerCol100px": "Accordion_footerCol100px__fgCHj",
	"footerCol10ch": "Accordion_footerCol10ch__qtCsh",
	"footerCol12ch": "Accordion_footerCol12ch__4uDuf",
	"footerCol14ch": "Accordion_footerCol14ch__CLxnT",
	"footerCol16ch": "Accordion_footerCol16ch__T2aB8",
	"footerCol18ch": "Accordion_footerCol18ch__N8GF8",
	"footerCol20ch": "Accordion_footerCol20ch__8rkeA",
	"footerCol22ch": "Accordion_footerCol22ch__Agd6t",
	"footerCol24ch": "Accordion_footerCol24ch__vdYRy",
	"footerCol26ch": "Accordion_footerCol26ch__YK98Y",
	"footerCol28ch": "Accordion_footerCol28ch__cfDel",
	"accordion-item": "Accordion_accordion-item__qlRAU",
	"accordion-title": "Accordion_accordion-title__vqXV9",
	"accordion-toggle-el-down": "Accordion_accordion-toggle-el-down__kQmql",
	"accordion-toggle-el-up": "Accordion_accordion-toggle-el-up__RPIPR",
	"accordion-content-show": "Accordion_accordion-content-show__YA4zm",
	"accordion-content-hide": "Accordion_accordion-content-hide__9gUO0"
};


/***/ }),

/***/ 1438:
/***/ ((module) => {

// Exports
module.exports = {
	"primaryColor": "#005cc3",
	"footerCol180px": "Subcategories_footerCol180px__WcDN_",
	"footerCol250px": "Subcategories_footerCol250px__S6Qxb",
	"footerCol260px": "Subcategories_footerCol260px__DFNHh",
	"footerCol210px": "Subcategories_footerCol210px__7Ir1G",
	"footerCol100px": "Subcategories_footerCol100px__Hy9xY",
	"footerCol10ch": "Subcategories_footerCol10ch__kiFvZ",
	"footerCol12ch": "Subcategories_footerCol12ch__Qq7av",
	"footerCol14ch": "Subcategories_footerCol14ch__fW8pp",
	"footerCol16ch": "Subcategories_footerCol16ch__K6T5F",
	"footerCol18ch": "Subcategories_footerCol18ch__f8Pgq",
	"footerCol20ch": "Subcategories_footerCol20ch__XN8Bb",
	"footerCol22ch": "Subcategories_footerCol22ch__Lf9Sp",
	"footerCol24ch": "Subcategories_footerCol24ch__TE7CA",
	"footerCol26ch": "Subcategories_footerCol26ch__AohxH",
	"footerCol28ch": "Subcategories_footerCol28ch__a5t98",
	"list-style": "Subcategories_list-style__sGgZq",
	"currency": "Subcategories_currency__tVwp6",
	"product-list": "Subcategories_product-list__L1BfP",
	"product-list-container": "Subcategories_product-list-container___wPN0",
	"main-container": "Subcategories_main-container__TOv9R",
	"filters-container": "Subcategories_filters-container__CLI2q"
};


/***/ }),

/***/ 8517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _subcategory_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/breadcrumbs/index.tsx
var breadcrumbs = __webpack_require__(8332);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Image.tsx
var Image = __webpack_require__(5562);
// EXTERNAL MODULE: ./src/components/accordion/Accordion.module.scss
var Accordion_module = __webpack_require__(9537);
var Accordion_module_default = /*#__PURE__*/__webpack_require__.n(Accordion_module);
;// CONCATENATED MODULE: ./src/components/accordion/Accordion.tsx
"use client";




const Accordion = ({ title , content , Component  })=>{
    const [isActive, setIsActive] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Accordion_module_default())["accordion-item"],
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Accordion_module_default())["accordion-title"],
                    onClick: ()=>setIsActive(!isActive),
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (Accordion_module_default())[`accordion-toggle-el-${isActive ? "up" : "down"}`],
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                alt: "chevron-down",
                                src: "chevron-down.svg",
                                height: 6,
                                width: 10
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Accordion_module_default())[`accordion-content-${isActive ? "show" : "hide"}`],
                children: content || Component || null
            })
        ]
    });
};
/* harmony default export */ const accordion_Accordion = (Accordion);

// EXTERNAL MODULE: ./src/components/buy-on-market/BuyOnMarket.tsx
var BuyOnMarket = __webpack_require__(9086);
// EXTERNAL MODULE: ./src/components/categories/Categories.tsx + 2 modules
var Categories = __webpack_require__(3370);
// EXTERNAL MODULE: ./src/components/subcategories/Subcategories.module.scss
var Subcategories_module = __webpack_require__(1438);
var Subcategories_module_default = /*#__PURE__*/__webpack_require__.n(Subcategories_module);
;// CONCATENATED MODULE: ./src/components/subcategories/Subcategories.tsx






const Subcategories = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Categories/* Header */.h, {
                text: "Automobile"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Subcategories_module_default())["main-container"],
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Subcategories_module_default())["product-list-container"],
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Subcategories_module_default())["list-style"],
                                children: " кратко | подробно | фото "
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Subcategories_module_default())["product-list"],
                                children: Array.from({
                                    length: 6
                                }).map((_, index)=>/*#__PURE__*/ jsx_runtime_.jsx(BuyOnMarket/* Product240Pixels */.DB, {
                                        imgSrc: `ex${index + 1}.jpg`,
                                        price: ~~((index + 1) * 242.35).toFixed(2),
                                        productUrl: `/products/${index + 1}`,
                                        title: "Transport",
                                        alt: "Transport"
                                    }, index))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Subcategories_module_default())["filters-container"],
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Subcategories_module_default()).currency,
                                children: " валюта | € | $ | лей "
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "filters",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(accordion_Accordion, {
                                    title: "CATEGORIES",
                                    Component: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        children: "GOOD EVENING"
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const subcategories_Subcategories = (Subcategories);

// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(5460);
;// CONCATENATED MODULE: ./src/pages/[category]/[subcategory]/index.tsx




const Index = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(breadcrumbs/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(subcategories_Subcategories, {})
        ]
    });
};
Index.withLayout = true;
/* harmony default export */ const _subcategory_ = (Index);
const getStaticProps = async (context)=>{
    return {
        props: {
            context,
            ...await (0,serverSideTranslations_.serverSideTranslations)(context.locale)
        },
        revalidate: 10
    };
};
const getStaticPaths = async ()=>{
    return {
        paths: [
            {
                params: {
                    category: "transport",
                    subcategory: "cars"
                }
            },
            {
                params: {
                    category: "real-estate",
                    subcategory: "cars"
                }
            }
        ],
        fallback: true
    };
};


/***/ }),

/***/ 5460:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 4695:
/***/ ((module) => {

"use strict";
module.exports = require("nuka-carousel");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,675,676,664,905,562,113,86,370], () => (__webpack_exec__(8517)));
module.exports = __webpack_exports__;

})();