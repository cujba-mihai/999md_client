import React from 'react';
import Categories from './categories/Categories';
import style from './MainContent.module.scss';
import Recommended from './recommended/Recommended';

const MainContent = () => {
  return (
    <main className={style['main-container']}>
      <Categories />
      <Recommended />
    </main>
  );
};

export default MainContent;
