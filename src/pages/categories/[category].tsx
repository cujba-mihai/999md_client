import Breadcrumbs from '@/components/breadcrumbs/index';
import Categories from '@/components/categories/Categories';
import {  Category, CategoryPageDocument } from '@/graphql/__generated__/graphql';
import { initializeApollo } from '@/hooks/withApollo';
import _ from 'lodash';
import nextI18NextConfig from 'next-i18next.config.js';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Index = ( props: any) => {
  const category = props.data?.getCategoryByName as Category;
  const breadCrumbs = props.breadCrumbs;

  return (
    <>
      <Breadcrumbs paths={breadCrumbs} />
      <Categories category={category} />
    </>
  );
};

Index.withLayout = true;

export default Index;

export const getStaticProps = async (context: any) => {
  const apolloClient = initializeApollo(context);

  let result = {};

  try {
    result = await apolloClient.query({
      query: CategoryPageDocument,
      variables: { 
        categoryName: context.params.category
      },
      context
    })

  } catch( err ) {
    console.error('Error occured in /categories. ', err);
    
    return {
      redirect: {
        destination: "/",
      },
    }
  }

  const categoryName = _.get(result, 'data.getCategoryByName.name');

  return {
    props: { 
      ...result,
      context,
      breadCrumbs: [ categoryName] ,
      ...(await serverSideTranslations(context.locale, ['translation', 'common'], nextI18NextConfig))
    },
    revalidate: 10,
  };
};

export type TSupportedLocales = 'en' | 'ro' | 'ru';
export type TLocales = TSupportedLocales[];

export const getStaticPaths = async (context: any) => {
  const { locales }: { locales: TLocales} = context;

  const paths = locales.map((locale: TSupportedLocales) => [].map((category: Category) => ({ 
    params: { 
      category: category.name, 
      id: category.id 
    }, 
    locale })) 
    ).flat()

  return {
    paths,
    fallback: 'blocking', // can also be true or 'blocking'
  }
} 