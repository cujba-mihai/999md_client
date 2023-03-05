import Breadcrumbs from '@/components/breadcrumbs/index';
import Subcategories from '@/components/subcategories/Subcategories';
import { Category, GetCategoryByNameAndSubcategoryDocument, GetProductsBySubcategoryDocument } from '@/graphql/__generated__/graphql';
import { initializeApollo } from '@/hooks/withApollo';
import { GetCategoryByNameAndSubcategoryResponse, GetProductsBySubcategory, GetProductsBySubcategoryQueryResponse } from '@/types/subcategories';
import _ from 'lodash';
import nextI18NextConfig from 'next-i18next.config.js';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

interface IParams {
  params: {
    categoryName: string;
    subcategoryName: string, 
    category: Category,
    products: GetProductsBySubcategory[],
  },
  locale: any,
  paths: string[]
}

const Index = ({ params: { subcategoryName, products }, paths}: IParams) => {
  return (
    <>
      <Breadcrumbs paths={paths} />
      <Subcategories 
        subcategoryName={subcategoryName} 
        upperLayerProducts={products} 
      />
    </>
  );
};

Index.withLayout = true;

export default Index;

export const getServerSideProps = async (context: any) => {
  const apolloClient = initializeApollo(context);

  const [ categoryName, subcategoryName ] = _.get(context, 'params.subcategory');


  try {
    const { data }: GetCategoryByNameAndSubcategoryResponse = await apolloClient.query({
      query: GetCategoryByNameAndSubcategoryDocument,
      variables: { 
        categoryName,
        subcategoryName
      },
    })

    const subCategoryId = data.getCategoryByNameAndSubcategory.subcategories[0]?.childSubcategories?.[0]?._id;

    const {data: productsData}: GetProductsBySubcategoryQueryResponse = await apolloClient.query({
      query: GetProductsBySubcategoryDocument,
      variables: {
        listProductByCategoryInput: {
          limit: 10,
          offset: 0,
          subCategoryId
        }
      }
    })


    return {
      props: { 
        params: {
          categoryName,
          subcategoryName,
          category: data.getCategoryByNameAndSubcategory,
          products: productsData.getProductsBySubcategory,
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