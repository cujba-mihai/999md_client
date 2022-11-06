import React from 'react';
import style from './Recommended.module.scss';

const Recommended = () => {
  const RecommendedItem = () => (
    <a href="/products/1" className={style['recommended-item']}>
      <img
        src="https://i.simpalsmedia.com/999.md/BoardImages/320x240/a7906e1dd9a2ad54406d0f992499f501.jpg?metadata=%7B%22metadata_version%22%3A+1%2C+%22width%22%3A+960%2C+%22height%22%3A+1280%2C+%22mime_type%22%3A+%22image%2Fjpeg%22%2C+%22mime_type_extension%22%3A+%22.%22%2C+%22image_type%22%3A+%22regular%22%2C+%22signature%22%3A+%22a554401dcf5f4d8ca050ebea65b9dfec14cf790b%22%7D"
        alt="Toyota Prius"
        className={style['recommended-item-image']}
      />
      <p className={style['recommended-item-title']}>Mercedes E-Class</p>
      <p className={style['recommended-item-price']}>15 200 €</p>
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
