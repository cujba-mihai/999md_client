// import { GetServerSideProps } from 'next'
import SubcategoriesAdd from '@/components/advertising/SubcategoriesAdd';
import React from 'react'
import nextI18NextConfig from 'next-i18next.config.js';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next';

interface ISubcategory {
  name: string;
}

interface ICategory extends ISubcategory {
  icon: string;
}


interface IProps {
  category: string;
  subcategory: string;
  categories: string[];
  subcategories: string[];
}
const SubcategoryAdd = ({ categories, subcategories, category, subcategory }: IProps) => {

  return (<SubcategoriesAdd category={category} subcategories={subcategories} />)
}

SubcategoryAdd.withLayout = true;

export default SubcategoryAdd;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { categories, subcategories } = require('../../../../components/advertising/dummyData');

  const asPath = context.req.url || '';
  const path = asPath.replace(/\?.*/, '');

  const [ category ] = path.split('/').filter(Boolean).reverse();

  return {
    props: {
      category,
      categories,
      subcategories,
      ...(await serverSideTranslations(context.locale || 'en', ['translation', 'common'], nextI18NextConfig))
    },
  }
};