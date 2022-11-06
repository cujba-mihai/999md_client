/* eslint-disable react-hooks/exhaustive-deps */
import style from './Product.module.scss';
import Image from '../Image';
import NextImage from 'next/image';
import Carousel from '../carousel/Carousel';
import { getKeyValue } from '@/utils/helpers';
import ButtonWithIcon from '../button/ButtonWithIcon';
import { useCallback, useEffect, useState } from 'react';
import Button from '../button/Button';

const productImages = [
  'https://i.simpalsmedia.com/999.md/BoardImages/320x240/b37c0f960015d83a2b5be91055aa8d3e.jpg',
  'https://i.simpalsmedia.com/999.md/BoardImages/320x240/aeddcfd83ff8d3fc2dd1a9ab89006a0c.jpg',
  'https://i.simpalsmedia.com/999.md/BoardImages/320x240/4fa075a7aeb5d4fef815c8baf35a1ea3.jpg',
  'https://i.simpalsmedia.com/999.md/BoardImages/320x240/2504f1651d30df6a6707a1abf87ebaf7.jpg',
];

const productDetails = {
  author: 'Mihai Cujba',
  images: productImages,
  type: 'car',
  price: {
    titleRo: 'Preț',
    titleRu: 'Preț',
    data: [
      { value: 6000, symbol: '€', currency: 'EUR' },
      { value: 5845, symbol: '$', currency: 'USD' },
      { value: 112742, symbol: 'MDL', currency: 'MDL' }
    ],
  },
  region: 'Moldova, Chișinău mun.',
  contacts: '+373 68 123456',
  general: {
    offerType: {
      titleRo: 'Tip ofertă',
      titleRu: 'Tip ofertă',
      data: {
        dataRo: 'Vând',
        dataRu: 'Vând',
      },
    },
    carBrand: {
      titleRo: 'Marcă',
      titleRu: 'Marcă',
      data: {
        dataRo: 'Toyota',
        dataRu: 'Toyota',
      },
    },
    carModel: {
      titleRo: 'Modelul',
      titleRu: 'Modelul',
      data: {
        dataRo: 'Rav 4',
        dataRu: 'Rav 4',
      },
    },
    matriculated: {
      titleRo: 'Înmatriculare',
      titleRu: 'Înmatriculare',
      data: {
        dataRo: 'Republica Moldova',
        dataRu: 'Republica Moldova',
      },
    },
    condition: {
      titleRo: 'Stare',
      titleRu: 'Stare',
      data: {
        dataRo: 'Cu rulaj',
        dataRu: 'Cu rulaj',
      },
    },
  },
  particular: {
    adAuthor: {
      titleRo: 'Autorul anunțului',
      titleRu: 'Autorul anunțului',
      data: {
        dataRo: 'Persoană fizică',
        dataRu: 'Persoană fizică',
      },
    },
    yearManufactured: {
      titleRo: 'Anul fabricației',
      titleRu: 'Anul fabricației',
      data: {
        dataRo: '2003',
        dataRu: '2003',
      },
    },
    steeringWheel: {
      titleRo: 'Volan',
      titleRu: 'Volan',
      data: {
        dataRo: 'Stânga',
        dataRu: 'Stânga',
      },
    },
    seatsNumber: {
      titleRo: 'Numărul de locuri',
      titleRu: 'Numărul de locuri',
      data: {
        dataRo: '4',
        dataRu: '4',
      },
    },
    bodyType: {
      titleRo: 'Tip caroserie',
      titleRu: 'Tip caroserie',
      data: {
        dataRo: 'SUV',
        dataRu: 'SUV',
      },
    },
    doorsNumber: {
      titleRo: 'Numărul de uși',
      titleRu: 'Numărul de uși',
      data: {
        dataRo: '3',
        dataRu: '3',
      },
    },

    tachoMeter: {
      titleRo: 'Kilometraj',
      titleRu: 'Kilometraj',
      data: {
        dataRo: '270 000 km',
        dataRu: '270 000 km',
      },
    },

    engineCapacity: {
      titleRo: 'Capacit. motor (cm³)',
      titleRu: 'Capacit. motor (cm³)',
      data: {
        dataRo: '1 998 cm³',
        dataRu: '1 998 cm³',
      },
    },

    horsePower: {
      titleRo: 'Putere (CP)',
      titleRu: 'Putere (CP)',
      data: {
        dataRo: '150',
        dataRu: '150',
      },
    },

    fuelType: {
      titleRo: 'Tip combustibil',
      titleRu: 'Tip combustibil',
      data: {
        dataRo: 'Benzină',
        dataRu: 'Benzină',
      },
    },

    gearBox: {
      titleRo: 'Cutia de viteze',
      titleRu: 'Cutia de viteze',
      data: {
        dataRo: 'Automată',
        dataRu: 'Automată',
      },
    },

    tractionType: {
      titleRo: 'Tip tracțiune',
      titleRu: 'Tip tracțiune',
      data: {
        dataRo: '4x4',
        dataRu: '4x4',
      },
    },

    color: {
      titleRo: 'Culoarea',
      titleRu: 'Culoarea',
      data: {
        dataRo: 'Negru',
        dataRu: 'Negru',
      },
    },
  },
};

type ProductGeneral = typeof productDetails.general;
type ProductParticular = typeof productDetails.particular;
type ProductGeneralKeys = keyof ProductGeneral;
type ProductParticularKeys = keyof ProductParticular;

const Product = () => {
  const [phoneNumber, setPhoneNumber] = useState('+373 78 ********');

  const togglePhNumber = useCallback(() => {
    setPhoneNumber((number) => {
      if(number.includes('*')) {
        return productDetails.contacts;
      } 

      const arr = phoneNumber.split(' ');
      arr[arr.length - 1] = '*'.repeat(9);

      return arr.join(' ');
    })
  }, [phoneNumber])

  useEffect(() => {
    togglePhNumber();
  }, [])

  return (
    <main className={style['main-wrapper']} aria-label="product information">
      <div className={style['title-container']}>
        <h1 className={style.title}>Toyota Rav 4</h1>
        <Image
          className={style.favorite}
          src="favourite.svg"
          alt="Adaugă în favorite"
        />
      </div>
      <div className={style['main-container']}>
        <article className={style['product-container']}>
          <Carousel childrenWidth={320} childrenHeight={240} withPreview>
            {productImages &&
              productImages.map((imageUrl) => {
                return (
                  <NextImage
                    key={`${new Date().getTime()}-${imageUrl}`}
                    src={imageUrl}
                    width={320}
                    height={240}
                    alt="Masina"
                  />
                );
              })}
          </Carousel>
          <div className={style['product-description']}>
            <div className={style['product-general']}>
              <h3 className={style['description-type']}>General</h3>
              <ul className={style['description-ul']}>
                {productDetails?.general &&
                  Object.keys(productDetails.general).map(
                    (property: any, index: number): JSX.Element => {
                      const pointer = getKeyValue<
                        ProductGeneral,
                        ProductGeneralKeys
                      >(property)(productDetails.general);
                      const titleLen = pointer.titleRo.replace(/s/g, '').length;

                      const titleMaxW = titleLen > 30 ? '30ch' : `${titleLen}ch`

                      return (
                        <li
                          className={style['description-list-item']}
                          key={`${new Date().getTime()}-${index}`}
                        >
                          <span
                            className={style['description-list-title']}
                            style={{ maxWidth: titleMaxW }}
                          >
                            {pointer.titleRo}
                          </span>
                          <span className={style['description-list-desc']}>
                            {pointer.data.dataRo}
                          </span>
                        </li>
                      );
                    },
                  )}
              </ul>
            </div>
            <div className={style['product-particular']}>
              <h3 className={style['description-type']}>Particularități</h3>
              <ul className={style['description-ul']}>
                {productDetails?.particular &&
                  Object.keys(productDetails.particular).map(
                    (property: any, index: number): JSX.Element => {
                      const pointer = getKeyValue<
                        ProductParticular,
                        ProductParticularKeys
                      >(property)(productDetails.particular);
                      const titleLen = pointer.titleRo.replace(/s/g, '').length;

                      const titleMaxW = titleLen > 30 ? '30ch' : `${titleLen}ch`

                      return (
                        <li
                          className={style['description-list-item']}
                          key={`${new Date().getTime()}-${index}`}
                        >
                          <span
                            className={style['description-list-title']}
                            style={{ maxWidth: titleMaxW }}
                          >
                            {pointer.titleRo}
                          </span>
                          <span className={style['description-list-desc']}>
                            {pointer.data.dataRo}
                          </span>
                        </li>
                      );
                    },
                  )}
              </ul>
            </div>
          </div>
          <div className={style["product-details-container"]}>
          {
            productDetails.price && (
              <div className={style['price-container']}>

                <div className={style['price-label']}>
                  <span>Preț:</span>
                </div>
                <ul  className={style['price-product-container']}>
                  {
                    productDetails.price.data.map(price => {
                      return (
                        <li
                        key={`${new Date().getTime()}-${JSON.stringify(price)}`} 
                        className={style["price-product"]}
                        >
                          <span>{String(price.value).split('').reduceRight((rezultat, val, index) => {
                            const value = Number(val);
                            if( index % 3 !== 0) {
                              rezultat += value;
                            } else {
                              rezultat += ` ${value}`
                            }

                            return rezultat;
                          },'').split(' ').reverse().join(' ')                       
                          } </span>
                          <span>{price.symbol}</span>
                        </li>
                      )
                    })
                  }
                </ul  >
              </div>

            )
          }

          {
            productDetails.region && (
              <div className={style['region-container']}>
                  <span className={style['region-label']}>Regiunea: </span>
                  <span className={style["region-value"]}>{productDetails.region}</span>
                </div>
            )
          }

          {
            productDetails.contacts && (
              <>
              <div className={style['region-container']}>
                  <span className={style['region-label']}>Contacte: </span>
                  <span className={style["region-value"]}>{
                  /\*/.test(phoneNumber) 
                  ? (phoneNumber.replace(/\*/g, '') && (Array.from(phoneNumber).map(num => {
                    if(num === '*') {
                      return <i className={style['phone-number-star']} key={`${Math.random()}-${new Date().getTime()}`}></i>
                    } else {
                      return null;
                    }
                  })))
                  : phoneNumber
                  }</span>
                </div>

              <ButtonWithIcon src='view-number.svg'  btnText={`${/\*/.test(phoneNumber) ? 'Arată' : 'Ascunde'} numărul`} onClick={togglePhNumber} />

              </>
            )
          }
          </div>

          <div className={style["product-negotiation"]}>
            <div className={style["negotiation-card"]}>
            <span className={style['negotiation-text']}>Propuneți vânzătorului prețul Dvs.</span>
            <Button btnText='Negociati' type='success' onClick={() => {}} />
           <div className={style["negotiation-img-container"]}>
           <Image src="negotiation.svg" alt="Negotiate" className={style['negotiation-image']}/>
           </div>
            </div>
          </div>


          <div className={style["contact-author"]}>
            <textarea placeholder={`Mesaj pentru ${productDetails.author}`} name="contact-author" id="contact-author" cols={30} rows={10} className={style['contact-author-textarea']}></textarea>
            <Button btnText='Trimite mesaj' onClick={() => {}} type="primary" />
          </div>

        </article>
        <aside className="author-container"></aside>
      </div>
    </main>
  );
};

export default Product;
