import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'next-i18next';
import Image from '../Image';
import style from './BuyOnMarket.module.scss';
import CategoryWithItems from './CategoryWithItems';
import PopularCategories from './PopularCategories';

const BuyOnMarket = () => {
  const { t } = useTranslation();

  return (
    <div className={style['main-container']}>

      <div className={style['buy-on-market-head-container']}>
        <h1 className={style['buy-on-market-title']}>{t('buyOnMarket')}</h1>
        <div className={style['all-products-container']}>

          <Link href="#" className={style['buy-on-market-all-products']}> {t('allProducts')} </Link>

          <Image
            src="arrow-to-delivery.svg"
            alt="Arrow right"
            className={style['all-products-arrow-right']}
          />
        </div>
      </div>

      <hr />

      <PopularCategories />

      {Array.from({ length: 5 }).map((_, index) => ( <CategoryWithItems key={index} /> ))}
    </div>
  );
};

export default BuyOnMarket;
