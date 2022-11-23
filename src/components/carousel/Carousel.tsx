import style from './Carousel.module.scss';
import React, { useEffect, useState } from 'react';
import { ICarouselItem, ICarousel, IPreview } from './types';

export const CarouselItem = ({
  children,
  width,
  height,
  order
}: ICarouselItem): JSX.Element => {
  const $height = height ? { height } : {};
  return (
    <div className={style['carousel-item']} style={{ width, order }}>
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

  const [itemOrder, setItemOrder ] = useState<number[]>([]);


  useEffect(() => {
    const indexes = React.Children.toArray(children).map((_, i) => i);

    setItemOrder(indexes);
  }, []);

  const handleItemOrder = (type: 'left' | 'right' | 'reset') => {
    if(type === 'left') {
      setItemOrder((order) => {
        return order.map(ord => {
          if(ord === order.length) {
            return 0;
          }

          return ord + 1;
        } )
      })
    }

    if(type === 'right') {
      setItemOrder((order) => {
        return order.map(ord => {
          if(ord) {
            return ord - 1;
          }

          return order.length;
        } )
      })
    }

    if(type === 'reset') {
      setItemOrder((order) => {
        return order.map((_, index) =>  index )
      })
    }
  }

  if (childrenHeight && Number.isInteger(childrenHeight)) {
    previewStyles.height = childrenHeight / 5;
  }

  if (Number.isInteger(childrenWidth)) {
    previewStyles.width = childrenWidth / 5;
  }

  const updateIndex = (newIndex: number) => {
    const childrenCount = React.Children.count(children) - 1;

    if (newIndex < 0) {
      handleItemOrder('reset');
      newIndex = 0;
    } else if (newIndex > childrenCount) {
      newIndex = childrenCount;
      handleItemOrder('right');

    } else if (newIndex === childrenCount) {
      newIndex = childrenCount - 1;
      handleItemOrder('left');

    }

    setActiveIndex(newIndex);
  };

  return (
    <>
      <div className={style.carousel}>
        <i
          className={style.arrowLeft}
          onClick={() => updateIndex(activeIndex - 1)}
        ></i>
        <div
          className={style.inner}
          style={{
            transform: `translateX(-${activeIndex * Number(childrenWidth)}px)`,
          }}
        >
          {React.Children.map(children, (child, index) => {
            return (
              <CarouselItem width={childrenWidth} height={childrenHeight} order={itemOrder[index]}>
                {React.cloneElement(child, {
                  width: childrenWidth,
                  height: childrenHeight,
                })}
              </CarouselItem>
            );
          })}
        </div>
        <i
          className={style.arrowRight}
          onClick={() => updateIndex(activeIndex + 1)}
        ></i>
      </div>
      {withPreview && (
        <div className={style.carouselImgList}>
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
