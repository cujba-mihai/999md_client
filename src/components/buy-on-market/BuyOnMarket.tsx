import Link from 'next/link';
import React from 'react';
import CarouselNoPreview from '../carousel/CarouselNoPreview';
import Image from '../Image';
import style from './BuyOnMarkset.module.scss';

interface IProductProps {
  imgSrc: string;
  price: number;
  productUrl: string;
  title: string;
  alt: string;
}

export const Product240Pixels = ({ imgSrc, alt, productUrl, price, title }: IProductProps) => {
  return (
    <Link href={productUrl} className={style['category-item-container']}>
    <Image
      src={imgSrc}
      alt={alt}
      className={style['category-item-image']}
    />
    <p className={style['category-item-name']}> {title} </p>
    <p className={style['category-item-price']}>{price} леев</p>
  </Link>
  )
}

export const CategoryTitle = ({value}: {value: string;}) => (<h3 className={style['category-item-title']}>{value}</h3>)

const BuyOnMarket = () => {
  const PopularCategories = () => (
    <div className={style['popular-categories-wrapper']}>
      <CarouselNoPreview slidesToShow={3} showArrows={false}>
        {Array.from({ length: 7 }).map((_, index) => (
              <div key={index} className={style['popular-categories-container']}>
              <p className={style['popular-categories-title']}>
                Аксессуары для авто
              </p>
              <Image
                src="car.png"
                alt="Car category"
                className={style['popular-categories-image']}
              />
            </div>
        ))}
      </CarouselNoPreview>
    </div>
  );

  const CategoryWithItems = () => (
    <>
      <div>
        <CategoryTitle value="Готовимся к холодам" />
      </div>
      <div className={style['category-item-wrapper']}>
        <CarouselNoPreview showArrows={false} slidesToShow={2.5} autoplay={false}>
          {Array.from({ length: 12 }).map((_, index) => (
            <Product240Pixels alt={"Calorifer"} title='Конвектор Zanussi Zch/S-1500 Er' price={2550} imgSrc='calorifer.jpg' key={index} productUrl='/products/1/' />
          ))}
        </CarouselNoPreview>
      </div>
    </>
  );

  return (
    <div className={style['main-container']}>
      <div className={style['buy-on-market-head-container']}>
        <h1 className={style['buy-on-market-title']}>
          Купить онлайн на Market
        </h1>
        <div className={style['all-products-container']}>
          <Link href="#" className={style['buy-on-market-all-products']}>
            Все товары
          </Link>

          <Image
            src="arrow-to-delivery.svg"
            alt="Arrow right"
            className={style['all-products-arrow-right']}
          />
        </div>
      </div>
      <hr />

      <PopularCategories />
      {Array.from({ length: 5 }).map((_, index) => (
        <CategoryWithItems key={index} />
      ))}
    </div>
  );
};

export default BuyOnMarket;
