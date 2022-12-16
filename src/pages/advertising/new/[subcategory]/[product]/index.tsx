/* eslint-disable @typescript-eslint/no-shadow */
import CategoriesProduct from '@/components/advertising/CategoriesProduct';
import { FormikProvider, useFormik } from 'formik';
// import { GetServerSideProps } from 'next';
import React from 'react';
import nextI18NextConfig from 'next-i18next.config.js';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next';
import { ICategory, IProductAddProps, ISubcategory } from '@/types/pages';


const Add = ({ categories, subcategories, category, subcategory }: IProductAddProps) => {

  const formik = useFormik({
    initialValues: {
      category,
      subcategory
    },
    onSubmit:() => {}
  });

  return (
    <FormikProvider value={formik}>

          <CategoriesProduct 
            formik={formik}
            subcategories={subcategories} 
            categories={categories} 
          />

    </FormikProvider>
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
      categories: categories.map((category: ICategory) => category.name),
      subcategories: subcategories.map((subcategory: ISubcategory) => subcategory.name),
      ...(await serverSideTranslations(context.locale || 'en', ['translation', 'common'], nextI18NextConfig))
    },
  }
};