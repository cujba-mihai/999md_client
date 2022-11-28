import Carousel from 'nuka-carousel';
import style from './Carousel.module.scss';
import React from 'react';

interface IProps {
    children: JSX.Element[];
    slidesToShow: number;
}

const CarouselNoPreview = ({
    children,
    slidesToShow
}: IProps): JSX.Element => {

    return   (
        <div>
            <Carousel 
            style={{...style, display: 'flex', gap: '10px'}}
            wrapAround={true} 
            slidesToShow={slidesToShow}
            cellSpacing={10}
            className={style.carousel}
            renderCenterLeftControls={({ previousSlide }) => (
                <i className={style.arrowLeft} onClick={previousSlide}></i>
              )}
            renderCenterRightControls={({  nextSlide }) => (
                <i className={style.arrowRight} onClick={nextSlide} >
                </i>
              )}
            renderBottomCenterControls={() => undefined}
            >{children}</Carousel>

        </div>
    )
}

export default CarouselNoPreview;