import React from 'react';
import Svg from '../Svg';
import style from './BuyOnMarkset.module.scss';

const BuyOnMarket = () => {
  const PopularCategories = () => (
    <div className={style['popular-categories-wrapper']}>
      {Array.from({ length: 7 }).map((_, index) => (
        <div key={index} className={style['popular-categories-container']}>
          <h3 className={style['popular-categories-title']}>
            Аксессуары для авто
          </h3>
          <Svg
            src="car.png"
            alt="Car category"
            className={style['popular-categories-image']}
          />
        </div>
      ))}
    </div>
  );

  const CategoryWithItems = () => (
    <>
      <div>
        <h3 className={style['category-item-title']}>Готовимся к холодам</h3>
      </div>
      <div className={style['category-item-wrapper']}>
        {Array.from({ length: 12 }).map((_, index) => (
          <a key={index} href="#" className={style['category-item-container']}>
            <Svg
              src="calorifer.jpg"
              alt="Calorifer"
              className={style['category-item-image']}
            />
            <p className={style['category-item-name']}>
              Конвектор Zanussi Zch/S-1500 Er
            </p>
            <p className={style['category-item-price']}>2 699 леев</p>
          </a>
        ))}
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
          <a href="#" className={style['buy-on-market-all-products']}>
            Все товары
          </a>

          <Svg
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
