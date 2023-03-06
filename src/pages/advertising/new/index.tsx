import CategoriesAdd from '@/components/advertising/CategoriesAdd';
import nextI18NextConfig from 'next-i18next.config.js';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ICategoryAddProps } from '@/types/pages';
import { GetCategoriesOnlyDocument } from '@/graphql/__generated__/graphql';
import { initializeApollo } from '@/hooks/withApollo';

const Categories = ({ params: { categories } }: ICategoryAddProps) => {

  console.log('CATEGORIES IN DOCUMENT: ', categories);

  return (<CategoriesAdd categories={categories} />)
}

Categories.withLayout = true;

export default Categories;


export const getStaticProps = async (context: any) => {
  const apolloClient = initializeApollo(context);


  try {
    const { data: { getCategories: categories } }  = await apolloClient.query({
      query: GetCategoriesOnlyDocument,
      context
    })

  console.log('CATEGORY NAMES: ', categories)

  return {
    props: { 
      params: {
        categories: categories
      },
      context,
      ...(await serverSideTranslations(context.locale, ['translation', 'common'], nextI18NextConfig)),
    },
    // revalidate: 60 * 60 * 60 // 1 hour
  };
  } catch( err ) {
    console.error('Error occurred in /categories. ', err);

    return {}

  }
};

export type TSupportedLocales = 'en' | 'ro' | 'ru';
export type TLocales = TSupportedLocales[];

// interface IGetStaticPathsResponse {
//   data: {
//     getCategories: Category[]
//   }
// }

// interface IProductPaths {
//   params: {
//     _id: string;
//       category: string;
//   };
//   locale: TSupportedLocales;
// }

// export const getStaticPaths = async (context: any) => {
//   const { locales }: { locales: TLocales} = context;
//   const apolloClient = initializeApollo(context);
  
//   let categories: Category[] = [];

//   try {
//     const { data }: IGetStaticPathsResponse = await apolloClient.query({
//       query: GetCategoriesOnlyDocument,
//     })

//     categories = data.getCategories;

//   } catch( err ) {
//     console.error('Error occurred in /[category]. ', err);
//   }

//   const categoriesPaths = categories.reduce((acc: IProductPaths[], category) => {
//     const id = category._id; 
//     const name = category.name;

//     const paths = locales.map((locale: TSupportedLocales) => ({ params: { category: name, _id: id }, locale }));

//     acc.push(...paths);

//     return acc;
//   }, [])

//   return {
//     paths: categoriesPaths,
//     fallback: 'blocking', // can also be true or 'blocking'
//   }
// } 