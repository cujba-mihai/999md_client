import BuyOnMarket from '@/components/buy-on-market/BuyOnMarket';
import MainContent from '@/components/main-content/MainContent';
import { Category, HomePageDocument } from '@/graphql/__generated__/graphql';
import { initializeApollo } from '@/hooks/withApollo';
import nextI18NextConfig from 'next-i18next.config.js';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export interface IHomePageProps {
  categories: Category[]
}

const Index = ({ categories }: IHomePageProps) => {

  return (
    <>
      <MainContent categories={categories} />
      <BuyOnMarket />
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
      categories: data.getCategories
    },
    revalidate: 60 * 60 * 24, //24h
  };
};