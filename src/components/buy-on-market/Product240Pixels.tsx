import React from 'react'
import Link from 'next/link';
import Image from '../Image';
import style from './BuyOnMarket.module.scss';
import TextTranslate from '../typography/TextTranslate';

export type TCurrency = 'MDL' | 'EUR' | 'USD';

interface IProductProps {
    imgSrc: string;
    price: number;
    productUrl: string;
    title: string;
    alt: string;
    currency: TCurrency
}

const Product240Pixels = ({ imgSrc, alt, productUrl, price, title, currency }: IProductProps) => {
    return (
      <Link href={productUrl} className={style['category-item-container']}>
      <Image
        src={imgSrc}
        alt={alt}
        className={style['category-item-image']}
      />
      <TextTranslate tag='p' className={style['category-item-name']} value={title}/>
      <span className={style['category-item-price-primary']}>
        {price.toFixed(0)}
        <TextTranslate tag='p' className={style['category-item-name']} value={currency}/>
      </span>
    </Link>
    )
};

export  default Product240Pixels;