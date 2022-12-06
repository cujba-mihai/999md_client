exports.id = 857;
exports.ids = [857];
exports.modules = {

/***/ 7909:
/***/ ((module) => {

// Exports
module.exports = {
	"primaryColor": "#005cc3",
	"footerCol180px": "Product_footerCol180px__asi0O",
	"footerCol250px": "Product_footerCol250px__LVxv1",
	"footerCol260px": "Product_footerCol260px__Tmdm5",
	"footerCol210px": "Product_footerCol210px__b65pm",
	"footerCol100px": "Product_footerCol100px__m4Llk",
	"footerCol10ch": "Product_footerCol10ch__Np3a3",
	"footerCol12ch": "Product_footerCol12ch__p1kkq",
	"footerCol14ch": "Product_footerCol14ch__VNyrD",
	"footerCol16ch": "Product_footerCol16ch__BlEkR",
	"footerCol18ch": "Product_footerCol18ch__XBo2Q",
	"footerCol20ch": "Product_footerCol20ch__Mh_Vg",
	"footerCol22ch": "Product_footerCol22ch__yY6bf",
	"footerCol24ch": "Product_footerCol24ch__QbxhX",
	"footerCol26ch": "Product_footerCol26ch__e3_7Q",
	"footerCol28ch": "Product_footerCol28ch__6voCj",
	"title": "Product_title__P1sLq",
	"title-container": "Product_title-container__f1lw4",
	"favorite": "Product_favorite__hqepI",
	"main-wrapper": "Product_main-wrapper__Ti1Sg",
	"main-container": "Product_main-container__Q3i_6",
	"product-container": "Product_product-container__1I0SF",
	"product-description": "Product_product-description__rg_Hu",
	"description-ul": "Product_description-ul__0m8nU",
	"description-type": "Product_description-type__7UfMn",
	"description-list-item": "Product_description-list-item__jAJtY",
	"description-list-title": "Product_description-list-title__GMvER",
	"description-list-desc": "Product_description-list-desc__8_d4W",
	"price-container": "Product_price-container__SDh6c",
	"price-label": "Product_price-label__1gtjT",
	"price-product": "Product_price-product__WZ81B",
	"price-product-container": "Product_price-product-container__zb7jh",
	"region-container": "Product_region-container__PQMXX",
	"region-label": "Product_region-label__Lk_5u",
	"region-value": "Product_region-value__VYJaj",
	"product-details-container": "Product_product-details-container__gFUpm",
	"phone-number-star": "Product_phone-number-star__vvS5O",
	"product-negotiation": "Product_product-negotiation__G5RXC",
	"negotiation-card": "Product_negotiation-card__5tYB5",
	"negotiation-img-container": "Product_negotiation-img-container__JcDSP",
	"negotiation-image": "Product_negotiation-image__DMFyi",
	"contact-author": "Product_contact-author__aaPIs",
	"contact-author-textarea": "Product_contact-author-textarea__E_Q_5"
};


/***/ }),

/***/ 1857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ product_Product)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/product/Product.module.scss
var Product_module = __webpack_require__(7909);
var Product_module_default = /*#__PURE__*/__webpack_require__.n(Product_module);
// EXTERNAL MODULE: ./src/components/Image.tsx
var Image = __webpack_require__(5562);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/utils/helpers.ts
const getKeyValue = (key)=>{
    return (obj)=>obj[key];
};

// EXTERNAL MODULE: external "nuka-carousel"
var external_nuka_carousel_ = __webpack_require__(4695);
var external_nuka_carousel_default = /*#__PURE__*/__webpack_require__.n(external_nuka_carousel_);
// EXTERNAL MODULE: ./src/components/carousel/Carousel.module.scss
var Carousel_module = __webpack_require__(1695);
var Carousel_module_default = /*#__PURE__*/__webpack_require__.n(Carousel_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./src/components/carousel/Carousel2.tsx
"use client";




const Carousel2 = ({ children , childrenWidth , childrenHeight , withBottomControls  })=>{
    const previewStyles = {};
    if (Number.isInteger(childrenWidth)) {
        previewStyles.width = childrenWidth / 5;
    }
    if (childrenHeight && Number.isInteger(childrenHeight)) {
        previewStyles.height = childrenHeight / 5;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx((external_nuka_carousel_default()), {
            style: {
                ...(Carousel_module_default()),
                display: "flex",
                gap: "10px"
            },
            wrapAround: true,
            slidesToShow: 2.1,
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
            renderBottomLeftControls: (props)=>{
                return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                    children: withBottomControls && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            position: "absolute",
                            bottom: "-50px"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (Carousel_module_default()).carouselImgList,
                            children: external_react_default().Children.map(children, (child, index)=>{
                                return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (Carousel_module_default()).bottomControls,
                                    onClick: ()=>props.goToSlide(index),
                                    children: /*#__PURE__*/ external_react_default().cloneElement(child, {
                                        ...previewStyles,
                                        key: `image-${index}-${new Date().getTime()}`
                                    })
                                }, `image-preview-${index}-${new Date().getTime()}`);
                            })
                        })
                    })
                });
            },
            children: children
        })
    });
};
/* harmony default export */ const carousel_Carousel2 = (Carousel2);

// EXTERNAL MODULE: ./src/components/button/ButtonWithIcon.tsx
var ButtonWithIcon = __webpack_require__(1951);
;// CONCATENATED MODULE: ./src/components/product/PhoneNumber.tsx
"use client";




const productDetails = {
    contacts: "+373 68 123456"
};
const PhoneNumber = ()=>{
    const [phoneNumber, setPhoneNumber] = (0,external_react_.useState)("+373 78 ********");
    const togglePhNumber = (0,external_react_.useCallback)(()=>{
        setPhoneNumber((number)=>{
            if (number.includes("*")) {
                return productDetails.contacts;
            }
            const arr = phoneNumber.split(" ");
            arr[arr.length - 1] = "*".repeat(9);
            return arr.join(" ");
        });
    }, [
        phoneNumber
    ]);
    (0,external_react_.useEffect)(()=>{
        togglePhNumber();
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: productDetails.contacts && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Product_module_default())["region-container"],
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: (Product_module_default())["region-label"],
                            children: "Contacte: "
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: (Product_module_default())["region-value"],
                            children: /\*/.test(phoneNumber) ? phoneNumber.replace(/\*/g, "") && Array.from(phoneNumber).map((num)=>{
                                if (num === "*") {
                                    return /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: (Product_module_default())["phone-number-star"]
                                    }, `${Math.random()}-${new Date().getTime()}`);
                                } else {
                                    return null;
                                }
                            }) : phoneNumber
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(ButtonWithIcon/* default */.Z, {
                    src: "view-number.svg",
                    btnText: `${/\*/.test(phoneNumber) ? "Arată" : "Ascunde"} numărul`,
                    onClick: togglePhNumber
                })
            ]
        })
    });
};
/* harmony default export */ const product_PhoneNumber = (PhoneNumber);

// EXTERNAL MODULE: ./src/components/button/Button.tsx
var Button = __webpack_require__(6151);
;// CONCATENATED MODULE: ./src/components/product/NegotiateButton.tsx
"use client";



const NegotiateButton = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
        btnText: "Negociati",
        type: "success",
        onClick: ()=>{}
    });
};
/* harmony default export */ const product_NegotiateButton = (NegotiateButton);

;// CONCATENATED MODULE: ./src/components/product/SendMsgBtn.tsx
"use client";



const SendMsgBtn = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
        btnText: "Trimite mesaj",
        onClick: ()=>{},
        type: "primary"
    });
};
/* harmony default export */ const product_SendMsgBtn = (SendMsgBtn);

// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: ./src/components/product/Product.tsx
/* eslint-disable react-hooks/exhaustive-deps */ 









const productImages = [
    "https://i.simpalsmedia.com/999.md/BoardImages/320x240/b37c0f960015d83a2b5be91055aa8d3e.jpg",
    "https://i.simpalsmedia.com/999.md/BoardImages/320x240/aeddcfd83ff8d3fc2dd1a9ab89006a0c.jpg",
    "https://i.simpalsmedia.com/999.md/BoardImages/320x240/4fa075a7aeb5d4fef815c8baf35a1ea3.jpg",
    "https://i.simpalsmedia.com/999.md/BoardImages/320x240/2504f1651d30df6a6707a1abf87ebaf7.jpg"
];
const Product_productDetails = {
    author: "Mihai Cujba",
    images: productImages,
    type: "car",
    description: "",
    category: "asdasd",
    subCategory: "asdasd",
    price: {
        titleRo: "Preț",
        titleRu: "Preț",
        data: [
            {
                value: 6000,
                symbol: "€",
                currency: "EUR"
            },
            {
                value: 5845,
                symbol: "$",
                currency: "USD"
            },
            {
                value: 112742,
                symbol: "MDL",
                currency: "MDL"
            }
        ]
    },
    region: "Moldova, Chișinău mun.",
    contacts: "+373 68 123456",
    general: {
        offerType: {
            titleRo: "Tip ofertă",
            titleRu: "Tip ofertă",
            data: {
                dataRo: "V\xe2nd",
                dataRu: "V\xe2nd"
            }
        },
        carBrand: {
            titleRo: "Marcă",
            titleRu: "Marcă",
            data: {
                dataRo: "Toyota",
                dataRu: "Toyota"
            }
        },
        carModel: {
            titleRo: "Modelul",
            titleRu: "Modelul",
            data: {
                dataRo: "Rav 4",
                dataRu: "Rav 4"
            }
        },
        matriculated: {
            titleRo: "\xcenmatriculare",
            titleRu: "\xcenmatriculare",
            data: {
                dataRo: "Republica Moldova",
                dataRu: "Republica Moldova"
            }
        },
        condition: {
            titleRo: "Stare",
            titleRu: "Stare",
            data: {
                dataRo: "Cu rulaj",
                dataRu: "Cu rulaj"
            }
        }
    },
    particular: {
        adAuthor: {
            titleRo: "Autorul anunțului",
            titleRu: "Autorul anunțului",
            data: {
                dataRo: "Persoană fizică",
                dataRu: "Persoană fizică"
            }
        },
        yearManufactured: {
            titleRo: "Anul fabricației",
            titleRu: "Anul fabricației",
            data: {
                dataRo: "2003",
                dataRu: "2003"
            }
        },
        steeringWheel: {
            titleRo: "Volan",
            titleRu: "Volan",
            data: {
                dataRo: "St\xe2nga",
                dataRu: "St\xe2nga"
            }
        },
        seatsNumber: {
            titleRo: "Numărul de locuri",
            titleRu: "Numărul de locuri",
            data: {
                dataRo: "4",
                dataRu: "4"
            }
        },
        bodyType: {
            titleRo: "Tip caroserie",
            titleRu: "Tip caroserie",
            data: {
                dataRo: "SUV",
                dataRu: "SUV"
            }
        },
        doorsNumber: {
            titleRo: "Numărul de uși",
            titleRu: "Numărul de uși",
            data: {
                dataRo: "3",
                dataRu: "3"
            }
        },
        tachoMeter: {
            titleRo: "Kilometraj",
            titleRu: "Kilometraj",
            data: {
                dataRo: "270 000 km",
                dataRu: "270 000 km"
            }
        },
        engineCapacity: {
            titleRo: "Capacit. motor (cm\xb3)",
            titleRu: "Capacit. motor (cm\xb3)",
            data: {
                dataRo: "1 998 cm\xb3",
                dataRu: "1 998 cm\xb3"
            }
        },
        horsePower: {
            titleRo: "Putere (CP)",
            titleRu: "Putere (CP)",
            data: {
                dataRo: "150",
                dataRu: "150"
            }
        },
        fuelType: {
            titleRo: "Tip combustibil",
            titleRu: "Tip combustibil",
            data: {
                dataRo: "Benzină",
                dataRu: "Benzină"
            }
        },
        gearBox: {
            titleRo: "Cutia de viteze",
            titleRu: "Cutia de viteze",
            data: {
                dataRo: "Automată",
                dataRu: "Automată"
            }
        },
        tractionType: {
            titleRo: "Tip tracțiune",
            titleRu: "Tip tracțiune",
            data: {
                dataRo: "4x4",
                dataRu: "4x4"
            }
        },
        color: {
            titleRo: "Culoarea",
            titleRu: "Culoarea",
            data: {
                dataRo: "Negru",
                dataRu: "Negru"
            }
        }
    }
};
const Product = ()=>{
    const { t  } = (0,external_next_i18next_.useTranslation)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
        className: (Product_module_default())["main-wrapper"],
        "aria-label": "product information",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Product_module_default())["title-container"],
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: (Product_module_default()).title,
                        children: "Toyota Rav 4"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                        className: (Product_module_default()).favorite,
                        src: "favourite.svg",
                        alt: t("addToFav"),
                        width: 24,
                        height: 24
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Product_module_default())["main-container"],
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                        className: (Product_module_default())["product-container"],
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(carousel_Carousel2, {
                                childrenWidth: 320,
                                childrenHeight: 240,
                                withBottomControls: true,
                                show: 2,
                                infiniteLoop: false,
                                children: productImages && productImages.map((imageUrl)=>{
                                    return /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: imageUrl,
                                        width: 320,
                                        height: 240,
                                        alt: "Masina"
                                    }, `${new Date().getTime()}-${imageUrl}`);
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Product_module_default())["product-description"],
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (Product_module_default())["product-general"],
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: (Product_module_default())["description-type"],
                                                children: t("general")
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                className: (Product_module_default())["description-ul"],
                                                children: Product_productDetails?.general && Object.keys(Product_productDetails.general).map((property, index)=>{
                                                    const pointer = getKeyValue(property)(Product_productDetails.general);
                                                    const titleLen = pointer.titleRo.replace(/s/g, "").length;
                                                    const titleMaxW = titleLen > 30 ? "30ch" : `${titleLen}ch`;
                                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        className: (Product_module_default())["description-list-item"],
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: (Product_module_default())["description-list-title"],
                                                                style: {
                                                                    maxWidth: titleMaxW
                                                                },
                                                                children: pointer.titleRo
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: (Product_module_default())["description-list-desc"],
                                                                children: pointer.data.dataRo
                                                            })
                                                        ]
                                                    }, `${new Date().getTime()}-${index}`);
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (Product_module_default())["product-particular"],
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: (Product_module_default())["description-type"],
                                                children: t("particularities")
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                className: (Product_module_default())["description-ul"],
                                                children: Product_productDetails?.particular && Object.keys(Product_productDetails.particular).map((property, index)=>{
                                                    const pointer = getKeyValue(property)(Product_productDetails.particular);
                                                    const titleLen = pointer.titleRo.replace(/s/g, "").length;
                                                    const titleMaxW = titleLen > 30 ? "30ch" : `${titleLen}ch`;
                                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        className: (Product_module_default())["description-list-item"],
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: (Product_module_default())["description-list-title"],
                                                                style: {
                                                                    maxWidth: titleMaxW
                                                                },
                                                                children: pointer.titleRo
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: (Product_module_default())["description-list-desc"],
                                                                children: pointer.data.dataRo
                                                            })
                                                        ]
                                                    }, `${new Date().getTime()}-${index}`);
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Product_module_default())["product-details-container"],
                                children: [
                                    Product_productDetails.price && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (Product_module_default())["price-container"],
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: (Product_module_default())["price-label"],
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Preț:"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                className: (Product_module_default())["price-product-container"],
                                                children: Product_productDetails.price.data.map((price)=>{
                                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        className: (Product_module_default())["price-product"],
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                children: [
                                                                    String(price.value).split("").reduceRight((rezultat, val, index)=>{
                                                                        const value = Number(val);
                                                                        if (index % 3 !== 0) {
                                                                            rezultat += value;
                                                                        } else {
                                                                            rezultat += ` ${value}`;
                                                                        }
                                                                        return rezultat;
                                                                    }, "").split(" ").reverse().join(" "),
                                                                    " "
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: price.symbol
                                                            })
                                                        ]
                                                    }, `${new Date().getTime()}-${JSON.stringify(price)}`);
                                                })
                                            })
                                        ]
                                    }),
                                    Product_productDetails.region && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (Product_module_default())["region-container"],
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: (Product_module_default())["region-label"],
                                                children: "Regiunea: "
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: (Product_module_default())["region-value"],
                                                children: Product_productDetails.region
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(product_PhoneNumber, {})
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Product_module_default())["product-negotiation"],
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (Product_module_default())["negotiation-card"],
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: (Product_module_default())["negotiation-text"],
                                            children: "Propuneți v\xe2nzătorului prețul Dvs."
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(product_NegotiateButton, {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (Product_module_default())["negotiation-img-container"],
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Image/* default */.Z, {
                                                src: "negotiation.svg",
                                                alt: "Negotiate",
                                                width: 24,
                                                height: 24,
                                                className: (Product_module_default())["negotiation-image"]
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Product_module_default())["contact-author"],
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                        placeholder: `Mesaj pentru ${Product_productDetails.author}`,
                                        name: "contact-author",
                                        id: "contact-author",
                                        cols: 30,
                                        rows: 10,
                                        className: (Product_module_default())["contact-author-textarea"]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(product_SendMsgBtn, {})
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("aside", {
                        className: "author-container"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const product_Product = (Product);


/***/ })

};
;