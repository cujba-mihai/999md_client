import Breadcrumbs from '@/components/breadcrumbs/index';
import Subcategories from '@/components/subcategories/Subcategories';
import { Category, GetAllCategoriesDocument, Product, Subcategory, SubcategoryPageDocument, SubcategoryPageQueryResult } from '@/graphql/__generated__/graphql';
import { initializeApollo } from '@/hooks/withApollo';
import _ from 'lodash';
import nextI18NextConfig from 'next-i18next.config.js';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { TLocales, TSupportedLocales } from '../[category]';

interface IParams {
  params: {
    categoryId: string,
    categoryName: string,
    category: string;
    subcategory: any[];
  },
  locale: any
}

const Index = (props: SubcategoryPageQueryResult & { paths: string[]}) => {
  return (
    <>
      <Breadcrumbs paths={props.paths} />
      <Subcategories 
        subcategoryName={props.data?.subcategory.name || 'Subcategory'} 
        upperLayerProducts={props.data?.getProductsBySubcategory as Partial<Product>[]} 
      />
    </>
  );
};

Index.withLayout = true;

export default Index;

export const getStaticProps = async (context: any) => {
  const apolloClient = initializeApollo(context);

  const subCategoryId = _.last(_.get(context, 'params.subcategory'))

  const [ category, subcategory ] = context.params.subcategory;

  let result = {};

  try {
    result = await apolloClient.query({
      query: SubcategoryPageDocument,
      variables: { 
        listProductByCategoryInput: {
          subCategoryId
        },
        subcategoryId: {
          "id": subCategoryId
        },
        "filter": {
          "category": category,
          "subcategory": subcategory
        }
      },
    })

  } catch( err ) {
    console.error('Error occured in /categories/[...subcategory]. ', err);
  }

  return {
    props: { 
      ...result,
      context,
      paths: [ ...context.params.subcategory] ,
      ...(await serverSideTranslations(context.locale, ['translation', 'common'], nextI18NextConfig))
    },
    revalidate: 10,
  };
};

export const getStaticPaths = async (context: any) => {
  const { locales }: { locales: TLocales} = context;
  const apolloClient = initializeApollo(context);

  let result = {};

  try {
    result = await apolloClient.query({
      query: GetAllCategoriesDocument,
    })

  } catch( err ) {
    console.error('Error occured in /categories/[...subcategory]. ', err);
  }

  const categories: Category[] = _.get(result, 'data.getCategories', []);
  const paths: IParams[] = []

  locales.forEach((locale: TSupportedLocales) => categories.forEach((category: Category) => 
   {
    (category?.subcategories || []).forEach((subcategory: Subcategory) => {
      paths.push({
        params: {
          categoryId: category.id,
          category: category.name,
          categoryName: category.name,
          subcategory: (subcategory.childSubcategories || []).map(childSubcat => childSubcat.id)
        },
        locale
      })
    })

   }))

  return {
    paths,
    fallback: 'blocking', // can also be true or 'blocking'
  }
}