import style from './Carousel.module.scss';
import React, { useState } from 'react';
import { ICarouselItem, ICarousel, IPreview } from './types';

export const CarouselItem = ({
  children,
  width,
  height,
}: ICarouselItem): JSX.Element => {
  const $height = height ? { height } : {};
  return (
    <div className={style['carousel-item']} style={{ width }}>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { width: Number(width), ...$height });
      })}
    </div>
  );
};

const Carousel = ({
  children,
  childrenWidth,
  childrenHeight,
  withPreview,
}: ICarousel): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);
  const previewStyles: IPreview = {};

  if (childrenHeight && Number.isInteger(childrenHeight)) {
    previewStyles.height = childrenHeight / 5;
  }

  if (Number.isInteger(childrenWidth)) {
    previewStyles.width = childrenWidth / 5;
  }

  const updateIndex = (newIndex: number) => {
    const childrenCount = React.Children.count(children) - 1;
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex > childrenCount) {
      newIndex = childrenCount;
    } else if (newIndex === childrenCount) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  return (
    <>
      <div className={style.carousel}>
        <i
          className={style['arrow-left']}
          onClick={() => updateIndex(activeIndex - 1)}
        ></i>
        <div
          className={style.inner}
          style={{
            transform: `translateX(-${activeIndex * Number(childrenWidth)}px)`,
          }}
        >
          {React.Children.map(children, (child) => {
            return (
              <CarouselItem width={childrenWidth} height={childrenHeight}>
                {React.cloneElement(child, {
                  width: childrenWidth,
                  height: childrenHeight,
                })}
              </CarouselItem>
            );
          })}
        </div>
        <i
          className={style['arrow-right']}
          onClick={() => updateIndex(activeIndex + 1)}
        ></i>
      </div>
      {withPreview && (
        <div className={style['carousel-img-list']}>
          {React.Children.map(children, (child, index) => {
            return (
              <div
                key={`image-preview-${index}-${new Date().getTime()}`}
                onClick={() => updateIndex(index)}
              >
                {React.cloneElement(child, {
                  ...previewStyles,
                  key: `image-${index}-${new Date().getTime()}`,
                })}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Carousel;
