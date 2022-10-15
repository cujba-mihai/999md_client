import React from 'react';
import style from './Advertising.module.scss';

const Advertising = () => {
  return (
    <aside className={style['advertising-container']}>
      <img
        src={require('@/public/temp/adv.png').default.src}
        alt="Advertising-1"
        width="100%"
        height="100%"
        className={style['advertising-upper-img']}
      />
      <img
        src={require('@/public/temp/canvas.png').default.src}
        alt="Advertising-1"
        width="100%"
        height="100%"
        className={style['advertising-bottom-img']}
      />
    </aside>
  );
};

export default Advertising;
