import CategoriesProduct from '@/components/advertising/CategoriesProduct';
import React from 'react';
import nextI18NextConfig from 'next-i18next.config.js';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next';
import { ICategory, IProductAddProps, ISubcategory } from '@/types/pages';


const Add = ({ categories, subcategories, subcategory, category }: IProductAddProps) => {

  return (

          <CategoriesProduct
            subcategory={subcategory}
            category={category}
            subcategories={subcategories} 
            categories={categories} 
          />
  )
}

Add.withLayout = true;

export default Add;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { categories, subcategories } = require('../../../../../components/advertising/dummyData');

  const asPath = context.req.url || '';
  const path = asPath.replace(/\?.*/, '');

  const [subcategory, category] = path.split('/').filter(Boolean).reverse();

  return {
    props: {
      category,
      subcategory,
      categories: categories.map((_category: ICategory) => _category.name),
      subcategories: subcategories.map((_subcategory: ISubcategory) => _subcategory.name),
      ...(await serverSideTranslations(context.locale || 'en', ['translation', 'common'], nextI18NextConfig))
    },
  }
};