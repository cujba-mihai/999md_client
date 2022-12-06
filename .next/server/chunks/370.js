exports.id = 370;
exports.ids = [370];
exports.modules = {

/***/ 6108:
/***/ ((module) => {

// Exports
module.exports = {
	"primaryColor": "#005cc3",
	"footerCol180px": "Categories_footerCol180px___xPlP",
	"footerCol250px": "Categories_footerCol250px__Lnuhu",
	"footerCol260px": "Categories_footerCol260px__i4Tdg",
	"footerCol210px": "Categories_footerCol210px__9qb85",
	"footerCol100px": "Categories_footerCol100px__OGNI2",
	"footerCol10ch": "Categories_footerCol10ch__BsvSy",
	"footerCol12ch": "Categories_footerCol12ch__Y3Qjk",
	"footerCol14ch": "Categories_footerCol14ch__nTUSb",
	"footerCol16ch": "Categories_footerCol16ch__vpkV7",
	"footerCol18ch": "Categories_footerCol18ch__MpWo_",
	"footerCol20ch": "Categories_footerCol20ch__ZAiG7",
	"footerCol22ch": "Categories_footerCol22ch__GBA_j",
	"footerCol24ch": "Categories_footerCol24ch__vxqyf",
	"footerCol26ch": "Categories_footerCol26ch__UDT9_",
	"footerCol28ch": "Categories_footerCol28ch__5N78J",
	"header": "Categories_header__xL1Lw",
	"h3": "Categories_h3__41McG",
	"lisublist": "Categories_lisublist__komYM",
	"link": "Categories_link__IPshg",
	"count": "Categories_count__0FRB1",
	"ulsublist": "Categories_ulsublist__6W_NW",
	"products-container": "Categories_products-container__sum8J",
	"ul": "Categories_ul__Ggr6x"
};


/***/ }),

/***/ 3370:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* binding */ Header),
  "Z": () => (/* binding */ categories_Categories)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/buy-on-market/BuyOnMarket.tsx
var BuyOnMarket = __webpack_require__(9086);
// EXTERNAL MODULE: ./src/components/categories/Categories.module.scss
var Categories_module = __webpack_require__(6108);
var Categories_module_default = /*#__PURE__*/__webpack_require__.n(Categories_module);
// EXTERNAL MODULE: external "nuka-carousel"
var external_nuka_carousel_ = __webpack_require__(4695);
var external_nuka_carousel_default = /*#__PURE__*/__webpack_require__.n(external_nuka_carousel_);
// EXTERNAL MODULE: ./src/components/carousel/Carousel.module.scss
var Carousel_module = __webpack_require__(1695);
var Carousel_module_default = /*#__PURE__*/__webpack_require__.n(Carousel_module);
;// CONCATENATED MODULE: ./src/components/carousel/CarouselNoPreview.tsx
"use client";




const CarouselNoPreview = ({ children , slidesToShow  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((external_nuka_carousel_default()), {
        style: {
            ...(Carousel_module_default()),
            width: "100%",
            overflow: "hidden",
            display: "flex",
            gap: "10px"
        },
        wrapAround: true,
        slidesToShow: slidesToShow,
        cellSpacing: 10,
        className: (Carousel_module_default()).carousel,
        renderCenterLeftControls: ({ previousSlide  })=>/*#__PURE__*/ jsx_runtime_.jsx("i", {
                className: (Carousel_module_default()).arrowLeft,
                onClick: previousSlide
            }),
        renderCenterRightControls: ({ nextSlide  })=>/*#__PURE__*/ jsx_runtime_.jsx("i", {
                className: (Carousel_module_default()).arrowRight,
                onClick: nextSlide
            }),
        renderBottomCenterControls: ()=>undefined,
        autoplay: true,
        children: children
    });
};
/* harmony default export */ const carousel_CarouselNoPreview = (CarouselNoPreview);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/categories/DummyData.ts
const DUMMY_DATA = {
    "Mijloace de transport": [
        {
            header: "Mijloace de transport",
            subcat: "Autoturisme",
            feed: 60
        },
        {
            header: "Hoverboard-uri, trotinete electrice 1 329",
            subcat: "Alte mijloace de transport",
            feed: 232
        },
        {
            header: "Remorci, rulote 1 333",
            subcat: "Tehnică specializată",
            feed: 558
        },
        {
            header: "Autochimie",
            subcat: "Uleiuri de motor",
            feed: 304
        },
        {
            header: "Antigel 40",
            subcat: "Lichide de spălat",
            feed: 12
        },
        {
            header: "Aditivi \xeen ulei 43",
            subcat: "Aditivi pentru uleiul de viteze",
            feed: 9
        },
        {
            header: "Polish auto 32",
            subcat: "Soluții protecție caroserie",
            feed: 23
        }
    ],
    "Alte mijloace de transport": [
        {
            header: "Portbagaje auto 508",
            subcat: "Carinaj",
            feed: 22
        },
        {
            header: "Auto multimedia",
            subcat: "Radiocasetofoane  și DVD",
            feed: 620
        },
        {
            header: "Camere video auto 661",
            subcat: "Detectoare radar, alarme",
            feed: 230
        },
        {
            header: "Cricuri 154",
            subcat: "Ascensoare",
            feed: 46
        },
        {
            header: "Aparate de spălat cu presiune 116",
            subcat: "Echipamente de diagnoză",
            feed: 484
        },
        {
            header: "Unelte de lubrifiere 21",
            subcat: "Echipamente de caroserie",
            feed: 51
        },
        {
            header: "Piese de schimb și dezmembrare autoturisme 36 268",
            subcat: "Jante și anvelope",
            feed: 168
        },
        {
            header: "Piese moto 1 480",
            subcat: "Scaune auto pentru copii",
            feed: 127
        },
        {
            header: "Autoservice 7 559",
            subcat: "Мotoservice și veloservice",
            feed: 316
        }
    ],
    Autochimie: [
        {
            header: "Hoverboard-uri, trotinete electrice 1 329",
            subcat: "Alte mijloace de transport",
            feed: 232
        },
        {
            header: "Remorci, rulote 1 333",
            subcat: "Tehnică specializată",
            feed: 558
        },
        {
            header: "Autochimie",
            subcat: "Uleiuri de motor",
            feed: 304
        },
        {
            header: "Antigel 40",
            subcat: "Lichide de spălat",
            feed: 12
        },
        {
            header: "Aditivi \xeen ulei 43",
            subcat: "Aditivi pentru uleiul de viteze",
            feed: 9
        },
        {
            header: "Polish auto 32",
            subcat: "Soluții protecție caroserie",
            feed: 23
        },
        {
            header: "Cosmetice curățare caroserie",
            subcat: "Accesorii spălat auto",
            feed: 2321
        }
    ],
    Aditivi: [
        {
            header: "Remorci, rulote 1 333",
            subcat: "Tehnică specializată",
            feed: 558
        },
        {
            header: "Autochimie",
            subcat: "Uleiuri de motor",
            feed: 304
        },
        {
            header: "Antigel 40",
            subcat: "Lichide de spălat",
            feed: 12
        },
        {
            header: "Aditivi \xeen ulei 43",
            subcat: "Aditivi pentru uleiul de viteze",
            feed: 9
        },
        {
            header: "Polish auto 32",
            subcat: "Soluții protecție caroserie",
            feed: 23
        }
    ],
    "Cosmetică auto": [
        {
            header: "Mijloace de transport",
            subcat: "Autoturisme",
            feed: 60
        },
        {
            header: "Hoverboard-uri, trotinete electrice 1 329",
            subcat: "Alte mijloace de transport",
            feed: 232
        },
        {
            header: "Remorci, rulote 1 333",
            subcat: "Tehnică specializată",
            feed: 558
        },
        {
            header: "Autochimie",
            subcat: "Uleiuri de motor",
            feed: 304
        },
        {
            header: "Antigel 40",
            subcat: "Lichide de spălat",
            feed: 12
        },
        {
            header: "Aditivi \xeen ulei 43",
            subcat: "Aditivi pentru uleiul de viteze",
            feed: 9
        },
        {
            header: "Polish auto 32",
            subcat: "Soluții protecție caroserie",
            feed: 23
        },
        {
            header: "Cosmetice curățare caroserie",
            subcat: "Accesorii spălat auto",
            feed: 2321
        },
        {
            header: "Accesorii pentru salon 714",
            subcat: "Covorașe pentru mașină",
            feed: 206
        }
    ],
    "Cosmetice curățare caroserie": [
        {
            header: "Camere video auto 661",
            subcat: "Detectoare radar, alarme",
            feed: 230
        },
        {
            header: "Cricuri 154",
            subcat: "Ascensoare",
            feed: 46
        },
        {
            header: "Aparate de spălat cu presiune 116",
            subcat: "Echipamente de diagnoză",
            feed: 484
        },
        {
            header: "Unelte de lubrifiere 21",
            subcat: "Echipamente de caroserie",
            feed: 51
        },
        {
            header: "Piese de schimb și dezmembrare autoturisme 36 268",
            subcat: "Jante și anvelope",
            feed: 168
        },
        {
            header: "Piese moto 1 480",
            subcat: "Scaune auto pentru copii",
            feed: 127
        },
        {
            header: "Autoservice 7 559",
            subcat: "Мotoservice și veloservice",
            feed: 316
        }
    ],
    "Accesorii auto": [
        {
            header: "Piese de schimb și dezmembrare autoturisme 36 268",
            subcat: "Jante și anvelope",
            feed: 168
        },
        {
            header: "Piese moto 1 480",
            subcat: "Scaune auto pentru copii",
            feed: 127
        },
        {
            header: "Autoservice 7 559",
            subcat: "Мotoservice și veloservice",
            feed: 316
        }
    ],
    "Auto multimedia": [
        {
            header: "Aditivi \xeen ulei 43",
            subcat: "Aditivi pentru uleiul de viteze",
            feed: 9
        },
        {
            header: "Polish auto 32",
            subcat: "Soluții protecție caroserie",
            feed: 23
        },
        {
            header: "Cosmetice curățare caroserie",
            subcat: "Accesorii spălat auto",
            feed: 2321
        },
        {
            header: "Accesorii pentru salon 714",
            subcat: "Covorașe pentru mașină",
            feed: 206
        },
        {
            header: "Portbagaje auto 508",
            subcat: "Carinaj",
            feed: 22
        }
    ],
    "Piese și accesorii auto": [
        {
            header: "Auto multimedia",
            subcat: "Radiocasetofoane  și DVD",
            feed: 620
        },
        {
            header: "Camere video auto 661",
            subcat: "Detectoare radar, alarme",
            feed: 230
        },
        {
            header: "Cricuri 154",
            subcat: "Ascensoare",
            feed: 46
        },
        {
            header: "Aparate de spălat cu presiune 116",
            subcat: "Echipamente de diagnoză",
            feed: 484
        },
        {
            header: "Unelte de lubrifiere 21",
            subcat: "Echipamente de caroserie",
            feed: 51
        }
    ],
    "Servicii auto, transport": [
        {
            header: "Aditivi \xeen ulei 43",
            subcat: "Aditivi pentru uleiul de viteze",
            feed: 9
        },
        {
            header: "Polish auto 32",
            subcat: "Soluții protecție caroserie",
            feed: 23
        },
        {
            header: "Cosmetice curățare caroserie",
            subcat: "Accesorii spălat auto",
            feed: 2321
        },
        {
            header: "Accesorii pentru salon 714",
            subcat: "Covorașe pentru mașină",
            feed: 206
        },
        {
            header: "Portbagaje auto 508",
            subcat: "Carinaj",
            feed: 22
        },
        {
            header: "Auto multimedia",
            subcat: "Radiocasetofoane  și DVD",
            feed: 620
        }
    ],
    "Diverse": [
        {
            header: "Diverse",
            subcat: "Diverse",
            feed: 620
        }
    ]
};
/* harmony default export */ const DummyData = (DUMMY_DATA);

;// CONCATENATED MODULE: ./src/components/categories/Categories.tsx







const Header = ({ text  })=>/*#__PURE__*/ jsx_runtime_.jsx("header", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
            className: (Categories_module_default()).header,
            children: text
        })
    });
const Categories = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(carousel_CarouselNoPreview, {
                slidesToShow: 4,
                children: Array.from({
                    length: 6
                }).map((_, index)=>/*#__PURE__*/ jsx_runtime_.jsx(BuyOnMarket/* Product240Pixels */.DB, {
                        imgSrc: `ex${index + 1}.jpg`,
                        price: ~~((index + 1) * 242.35).toFixed(2),
                        productUrl: `/products/${index + 1}`,
                        title: "Transport",
                        alt: "Transport"
                    }, index))
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: (Categories_module_default()).header,
                    children: "Transport "
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: (Categories_module_default()).ul,
                children: Object.keys(DummyData).map((data, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        className: (Categories_module_default()).li,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: (Categories_module_default()).h3,
                                children: data
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                className: (Categories_module_default()).ulsublist,
                                children: DummyData?.[data].map((el, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: (Categories_module_default()).lisublist,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "#",
                                                className: (Categories_module_default()).link,
                                                children: el.subcat
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: (Categories_module_default()).count,
                                                children: "48 060"
                                            })
                                        ]
                                    }, `${el.subcat} - ${i}`))
                            })
                        ]
                    }, `${data} - ${index}`))
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Categories_module_default())["products-container"],
                children: Array.from({
                    length: 32
                }).map((_, index)=>/*#__PURE__*/ jsx_runtime_.jsx(BuyOnMarket/* Product240Pixels */.DB, {
                        imgSrc: `ex${Math.floor(Math.random() * 6 + 1).toFixed(0)}.jpg`,
                        price: ~~((index + 1) * 242.35).toFixed(2),
                        productUrl: `/products/${index + 1}`,
                        title: "Transport",
                        alt: "Transport"
                    }, index))
            })
        ]
    });
};
/* harmony default export */ const categories_Categories = (Categories);


/***/ })

};
;