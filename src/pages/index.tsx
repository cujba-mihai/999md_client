import BuyOnMarket from '@/components/buy-on-market/BuyOnMarket';
import MainContent from '@/components/main-content/MainContent';
import nextI18NextConfig from 'next-i18next.config.js';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';



const Index = () => {
  return (
    <>
      <MainContent />
      <BuyOnMarket />
    </>
  );
};

Index.withLayout = true;

export default Index;

export const getStaticProps = async (context: any) => {
  return {
    props: { 
      context,
      ...(await serverSideTranslations(context.locale, ['translation', 'common'], nextI18NextConfig))
    },
    revalidate: 60 * 60 * 24, //24h
  };
};