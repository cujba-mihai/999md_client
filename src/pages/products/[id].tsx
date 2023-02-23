import Breadcrumbs from '@/components/breadcrumbs/index';
import Product from '@/components/product/Product';
import { Product as ProductType, ProductDocument, ProductIdsDocument, ProductQueryResult } from '@/graphql/__generated__/graphql';
import { initializeApollo } from '@/hooks/withApollo';
import nextI18NextConfig from 'next-i18next.config.js';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { TLocales, TSupportedLocales } from '../categories/[category]';

const Index = (props: ProductQueryResult) => {

  const router = useRouter()

  const product = props.data?.product;
  const subcategory = product?.subcategory.name
  const category = product?.category.name;

  const path = [ category, subcategory, product?.name]

  if(!product) {
    router.push("/")
  }

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
            "id": context.params.id
        }
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

  return {
    props: { 
      ...result,
      context,
      ...(await serverSideTranslations(context.locale, ['translation', 'common'], nextI18NextConfig))
    },
    revalidate: 10,
  };
};


export const getStaticPaths = async (context: any) => {
  const { locales }: { locales: TLocales} = context;
  const apolloClient = initializeApollo(context);

  const result = [];

  try {
    const { data } = await apolloClient.query({
      query: ProductIdsDocument,
    })

    result.push(...data.products)

  } catch( err ) {
    console.error('Error occured in /categories. ', err);
    
    return {
      redirect: {
        destination: "/",
      },
    }
  }

  const productIds = result.map(product => product._id)


  const paths = locales.map((locale: TSupportedLocales) => productIds.map(id => ({ params: { id }, locale })) ).flat()

  return {
    paths,
    fallback: 'blocking', // can also be true or 'blocking'
  }
}