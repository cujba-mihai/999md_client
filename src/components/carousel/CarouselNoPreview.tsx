'use client';

import Carousel from 'nuka-carousel';
import style from './Carousel.module.scss';
import React from 'react';

interface IProps {
    children: JSX.Element[];
    slidesToShow: number;
    showArrows?: boolean;
    autoplay?: boolean;
}

const CarouselNoPreview = ({
    children,
    slidesToShow,
    showArrows = true,
    autoplay = false,
}: IProps): JSX.Element => {

    const disableDrag = (e: React.SyntheticEvent) => {
        e.preventDefault();
        return false;
    }

    return   (
        <Carousel
        style={{...style, width: '100%', overflow: 'hidden', display: 'flex', gap: '10px',
    }}
       onDragStart={disableDrag}
        wrapAround={true} 
        slidesToShow={slidesToShow}
        cellSpacing={10}
        className={style.carousel}
        renderCenterLeftControls={({ previousSlide }) => (
            showArrows && <i className={style.arrowLeft} onClick={previousSlide}></i>
          )}
        renderCenterRightControls={({  nextSlide }) => (
            showArrows && <i className={style.arrowRight} onClick={nextSlide} >
            </i>
          )}
        renderBottomCenterControls={() => undefined}
        autoplay={autoplay}
>
{
children

}
</Carousel>
    )
}

export default CarouselNoPreview;