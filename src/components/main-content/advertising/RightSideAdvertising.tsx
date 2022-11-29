import Image from '@/components/Image';
import React from 'react';
import style from './Advertising.module.scss';

const RightSideAdvertising = () => {
  return (
    <aside className={style['advertising-container']}>
      <Image
        src={require('@/public/temp/adv.png').default.src}
        alt="Advertising-1"
        className={style['advertising-upper-img']}
      />
      <Image
        src={require('@/public/temp/canvas.png').default.src}
        alt="Advertising-1"
        className={style['advertising-bottom-img']}
      />
    </aside>
  );
};

export default RightSideAdvertising;
