import React from 'react';
import CarouselNoPreview from '../carousel/CarouselNoPreview';
import Image from '../Image';
import style from './BuyOnMarket.module.scss';


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

export default PopularCategories