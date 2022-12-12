import BuyOnMarket from '@/components/buy-on-market/BuyOnMarket';
import MainContent from '@/components/main-content/MainContent';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next/types';



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

export const getServerSideProps: GetServerSideProps = async ({ locale }: any) => ({
  props: {
    ...await serverSideTranslations(locale as string),
  },
})