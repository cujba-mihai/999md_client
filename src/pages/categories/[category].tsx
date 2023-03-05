import Breadcrumbs from '@/components/breadcrumbs/index';
import Categories from '@/components/categories/Categories';
import {  Category, CategoryPageDocument, GetAllCategoriesDocument, GetProductsByCategoryDocument } from '@/graphql/__generated__/graphql';
import { initializeApollo } from '@/hooks/withApollo';
import _ from 'lodash';
import nextI18NextConfig from 'next-i18next.config.js';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Index = ( props: any) => {
  const category = _.get(props, 'params.category');
  const products = _.get(props, 'params.products');
  const breadCrumbs = _.get(props, 'params.breadCrumbs');

  return ( 
    <>
      <Breadcrumbs paths={breadCrumbs} />
      <Categories products={products} category={category} />
    </>
  );
};

Index.withLayout = true;

export default Index;

export const getStaticProps = async (context: any) => {
  const apolloClient = initializeApollo(context);


  try {
    const { data: { getCategoryByName: category, getProducts: alternativeProducts } }  = await apolloClient.query({
      query: CategoryPageDocument,
      variables: { 
        categoryName: context.params.category
      },
      context
    })
  const categoryName = _.get(category, 'name');
  const categoryId = _.get(category, '_id');

  const { data: { getProductsByCategory: products} } = await apolloClient.query({
    query: GetProductsByCategoryDocument,
    variables: {
      listProductByCategoryInput: {
        categoryId,
        limit: 10,
        offset: 0
      }
    }
  })

  return {
    props: { 
      params: {
        category,
        products: products.length ? products : alternativeProducts,
        breadCrumbs: [ categoryName ]
      },
      context,
      ...(await serverSideTranslations(context.locale, ['translation', 'common'], nextI18NextConfig)),
    },
    revalidate: 60 * 60 * 60 // 1 hour
  };
  } catch( err ) {
    console.error('Error occurred in /categories. ', err);

    return {}

  }






};

export type TSupportedLocales = 'en' | 'ro' | 'ru';
export type TLocales = TSupportedLocales[];

interface IGetStaticPathsResponse {
  data: {
    getCategories: Category[]
  }
}

interface IProductPaths {
  params: {
    _id: string;
      category: string;
  };
  locale: TSupportedLocales;
}

export const getStaticPaths = async (context: any) => {
  const { locales }: { locales: TLocales} = context;
  const apolloClient = initializeApollo(context);
  
  let categories: Category[] = [];

  try {
    const { data }: IGetStaticPathsResponse = await apolloClient.query({
      query: GetAllCategoriesDocument,
      variables: {
        categoryName: context?.params?.category
      }
    })

    categories = data.getCategories;

  } catch( err ) {
    console.error('Error occurred in /[category]. ', err);
  }

  const categoriesPaths = categories.reduce((acc: IProductPaths[], category) => {
    const id = category._id; 
    const name = category.name;

    const paths = locales.map((locale: TSupportedLocales) => ({ params: { category: name, _id: id }, locale }));

    acc.push(...paths);

    return acc;
  }, [])

  return {
    paths: categoriesPaths,
    fallback: 'blocking', // can also be true or 'blocking'
  }
} 