import Breadcrumbs from '@/components/breadcrumbs/index';
import Product from '@/components/product/Product';
import nextI18NextConfig from 'next-i18next.config.js';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Index = () => {
  return (
    <>
      <Breadcrumbs />
      <Product />
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
    revalidate: 10,
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: 'blocking', // can also be true or 'blocking'
  }
}