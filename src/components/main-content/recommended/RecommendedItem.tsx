import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import style from './Recommended.module.scss';

const RecommendedItem = () => (
    <Link href="/products/1" className={style['recommended-item']}>
      <Image
        src="https://i.simpalsmedia.com/999.md/BoardImages/320x240/a7906e1dd9a2ad54406d0f992499f501.jpg"
        alt="Toyota Prius"
        className={style['recommended-item-image']}
        width={140}
        height={105}
      />
      <p className={style['recommended-item-title']}>Mercedes E-Class</p>
      <p className={style['recommended-item-price']}>15 200 €</p>
    </Link>
  );

export default RecommendedItem