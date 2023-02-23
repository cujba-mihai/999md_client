import { IHomePageProps } from '@/pages';
import React from 'react';
import Categories from './categories/Categories';
import style from './MainContent.module.scss';
import Recommended from './recommended/Recommended';


const MainContent = ({ categories }: IHomePageProps) => {
  return (
    <main className={style['main-container']}>
      <Categories categories={categories}/>
      <Recommended />
    </main>
  );
};

export default MainContent;
