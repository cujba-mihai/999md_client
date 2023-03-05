
import MainContent from '@/components/main-content/MainContent';
import { Category, HomePageDocument, Product } from '@/graphql/__generated__/graphql';
import { initializeApollo } from '@/hooks/withApollo';
import nextI18NextConfig from 'next-i18next.config.js';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';

const BuyOnMarketLazy = dynamic(() => import('@/components/buy-on-market/BuyOnMarket'));

export interface IHomePageProps {
  categories: Category[];
  products: Product[];
}

const Index = ({ categories, products }: IHomePageProps) => {

  return (
    <>
      <MainContent categories={categories} products={products} />
      <BuyOnMarketLazy  />
    </>
  );
};

Index.withLayout = true;

export default Index;

export const getStaticProps = async (context: any) => {
  const apolloClient = initializeApollo(context);

  // Fetch the categories data
  const { data } = await apolloClient.query({
    query: HomePageDocument,
  });

  return {
    props: { 
      context,
      ...(await serverSideTranslations(context.locale, ['translation', 'common'], nextI18NextConfig)),
      categories: data.getCategories || [],
      products: data.getProducts || []
    },
    revalidate: 30, // 30 seconds
  };
};