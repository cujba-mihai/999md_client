import Breadcrumbs from '@/components/breadcrumbs/index';
import Product from '@/components/product/Product';
import { Product as ProductType, ProductDocument, ProductIdsDocument, ProductQueryResult } from '@/graphql/__generated__/graphql';
import { initializeApollo } from '@/hooks/withApollo';
import nextI18NextConfig from 'next-i18next.config.js';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { TLocales, TSupportedLocales } from '../categories/[category]';

const Index = (props: ProductQueryResult) => {

  const router = useRouter()

  const product = props.data?.product;
  const subcategory = product?.subcategory?.name
  const category = product?.category?.name;

  const path = [ '/categories/' + category, subcategory, product?.name]

  useEffect(() => {

    if(!product) {
      router.push("/404")
    }

  }, [])



  return (
    <>
      <Breadcrumbs paths={path.filter(Boolean) as string[]} />
     {
      product &&  <Product product={product as unknown as ProductType} />
     }
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
      query: ProductDocument,
      variables: { 
        "productId": {
          "_id": `${context.params.id}`
        }
      },
    })

  } catch( err ) {
    console.error('Error occurred in /products/[id]. ', err);

  }

  return {
    props: { 
      ...result,
      context,
      ...(await serverSideTranslations(context.locale, ['translation', 'common'], nextI18NextConfig))
    },
    revalidate: 10,
  };
};


interface IGetStaticPathsResponse {
  data: {
    products: Pick<ProductType, '_id'>[]
  }
}

interface IProductPaths {
  params: {
      id: string;
  };
  locale: TSupportedLocales;
}

export const getStaticPaths = async (context: any) => {
  const { locales }: { locales: TLocales} = context;
  const apolloClient = initializeApollo(context);

  let products: Pick<ProductType, '_id'>[] = [];

  try {
    const { data }: IGetStaticPathsResponse = await apolloClient.query({
      query: ProductIdsDocument,
    })

    products = data.products;
  } catch( err ) {
    console.error('Error occurred in /products. ', err);
  }

  const productPaths = products.reduce((acc: IProductPaths[], product) => {
    const id = product._id;

    const paths = locales.map((locale: TSupportedLocales) => ({ params: { id }, locale }));

    acc.push(...paths);

    return acc;
  }, [])


  return {
    paths: productPaths,
    fallback: 'blocking', // can also be true or 'blocking'
  }
}