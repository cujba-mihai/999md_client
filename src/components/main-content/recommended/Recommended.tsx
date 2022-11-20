import { useRouter } from 'next/router';
import React from 'react';
import style from './Recommended.module.scss';

const Recommended = () => {
  const { locale } = useRouter();

  const RecommendedItem = () => (
    <a href={`${locale}/products/1`} className={style['recommended-item']}>
      <img
        src="https://i.simpalsmedia.com/999.md/BoardImages/320x240/a7906e1dd9a2ad54406d0f992499f501.jpg"
        alt="Toyota Prius"
        className={style['recommended-item-image']}
      />
      <p className={style['recommended-item-title']}>Mercedes E-Class</p>
      <p className={style['recommended-item-price']}>15 200 €</p>
    </a>
  );

  return (
    <section className={style['recommended-container']}>
      <h2 className={style['recommended-container-label']}>Рекомендованные</h2>
      <div className={style['recommended-items-container']}>
        {Array.from({ length: 12 }).map((_, index) => (
          <RecommendedItem key={index} />
        ))}
      </div>
    </section>
  );
};

export default Recommended;
