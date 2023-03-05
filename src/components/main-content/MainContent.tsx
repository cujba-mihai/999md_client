import { IHomePageProps } from '@/pages';
import React from 'react';
import Categories from './categories/Categories';
import style from './MainContent.module.scss';
import Recommended from './recommended/Recommended';


const MainContent = ({ categories, products }: IHomePageProps) => {
  return (
    <main className={style['main-container']}>
      <Categories categories={categories} />
      <Recommended products={products} />
    </main>
  );
};

export default MainContent;
