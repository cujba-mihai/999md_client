// import { GetServerSideProps } from 'next'
import React from 'react'
import nextI18NextConfig from 'next-i18next.config.js';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetCategoryByNameResponse, ISubcategoryAddProps } from '@/types/pages';
import {  GetCategoryByNameDocument } from '@/graphql/__generated__/graphql';
import { initializeApollo } from '@/hooks/withApollo';
import _ from 'lodash';
import { DisplaySubcategories } from '@/components/categories/Categories';


const SubcategoryAdd = ({ params: { subcategories } }: ISubcategoryAddProps) => {

  return (<DisplaySubcategories subcategories={subcategories} />)
}

SubcategoryAdd.withLayout = true;

export default SubcategoryAdd;

export const getServerSideProps = async (context: any) => {
  const apolloClient = initializeApollo(context);

  const categoryName = _.get(context, 'params.subcategory');

  try {
    const { data: { getCategoryByName: categories } }: GetCategoryByNameResponse = await apolloClient.query({
      query: GetCategoryByNameDocument,
      variables: { 
        categoryName,
      },
    })

    return {
      props: { 
        params: {
          categoryName,
          subcategories: categories.subcategories
        },
        paths: [ ...context.params.subcategory] ,
        ...(await serverSideTranslations(context.locale, ['translation', 'common'], nextI18NextConfig))
      },
    };

  } catch( err ) {
    console.error('Error occurred in /categories/[...subcategory]. ', err);

    return {}
  }


};