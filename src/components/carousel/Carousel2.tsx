import Carousel from 'nuka-carousel';
import style from './Carousel.module.scss';
import React, {  } from 'react';
import { ICarousel2, IPreview } from './types';


const Carousel2 = ({
    children,
    childrenWidth,
    childrenHeight,
    withBottomControls,
}: ICarousel2): JSX.Element => {
    const previewStyles: IPreview = {};

    if (Number.isInteger(childrenWidth)) {
        previewStyles.width = childrenWidth / 5;
      }

      if (childrenHeight && Number.isInteger(childrenHeight)) {
        previewStyles.height = childrenHeight / 5;
      }

    return   (
        <div>
            <Carousel 
            style={{...style, display: 'flex', gap: '10px'}}
            wrapAround={true} 
            slidesToShow={2.1}
            cellSpacing={10}
            className={style.carousel}
            renderCenterLeftControls={({ previousSlide }) => (
                <i className={style['arrow-left']} onClick={previousSlide}></i>
              )}
            renderCenterRightControls={({  nextSlide }) => (
                <i className={style['arrow-right']} onClick={nextSlide} >
                </i>
              )}
            renderBottomCenterControls={() => undefined}
            renderBottomLeftControls={(props) => {
                return (
                    <>
                    {
                        withBottomControls && (<div style={{position: 'absolute', bottom: '-50px'}}>
                        <div className={style['carousel-img-list']}>
                            {
                                React.Children.map(children, (child, index) => {
                                    return (
                                      <div
                                        className={style['bottom-controls']}
                                        key={`image-preview-${index}-${new Date().getTime()}`}
                                        onClick={() => props.goToSlide(index)}
                                      >
                                        {React.cloneElement(child, {
                                          ...previewStyles,
                                          key: `image-${index}-${new Date().getTime()}`,
                                        })}
                                      </div>
                                    );
                                  })
                            }
                        </div>
                        </div>)
                    }
                    </>
                    
                )
            }}
            >{children}</Carousel>

        </div>
    )
}

export default Carousel2;