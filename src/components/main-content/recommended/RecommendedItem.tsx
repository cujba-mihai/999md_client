import { Product } from '@/graphql/__generated__/graphql';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import style from './Recommended.module.scss';

const RecommendedItem = ({ product}: {product: Product}) => (
    <Link unselectable="on" href={`/products/${product._id}`} className={style['recommended-item']}>
      <Image
        src={product.thumbnail}
        alt={product.name}
        className={style['recommended-item-image']}
        width={140}
        height={105}
        loading="lazy"
      />
      <p className={style['recommended-item-title']}>{product.name}</p>
      <p className={style['recommended-item-price']}>{product.price} {product.currency || 'MDL'}</p>
    </Link>
  );

export default RecommendedItem