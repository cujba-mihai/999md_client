import React from 'react';
import CarouselNoPreview from '../carousel/CarouselNoPreview';
import TextTranslate from '../typography/TextTranslate';
import style from './BuyOnMarket.module.scss';
import Product240Pixels from './Product240Pixels';

const CategoryWithItems = () => (
    <>
      <div>
        <TextTranslate value="getRdyForWinter" tag='h3' className={style['category-item-title']}/>
      </div>

      <div className={style['category-item-wrapper']}>
        <CarouselNoPreview showArrows={false} slidesToShow={2.5} autoplay={false}>
          {Array.from({ length: 12 }).map((_, index) => (
            <Product240Pixels alt="Calorifer" title='Конвектор Zanussi Zch/S-1500 Er' price={2550} currency='MDL' imgSrc='calorifer.jpg' key={index} productUrl='/products/1/' />
          ))}

        </CarouselNoPreview>
      </div>
    </>
  );

export default CategoryWithItems