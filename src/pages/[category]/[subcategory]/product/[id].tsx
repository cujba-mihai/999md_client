import Breadcrumbs from '@/components/breadcrumbs/index';
import NextBreadcrumbs from '@/components/breadcrumbs/NextCrumbs';
import Product from '@/components/product/Product';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Index = () => {
  return (
    <>
      <NextBreadcrumbs />
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
      ...(await serverSideTranslations(context.locale))
    },
    revalidate: 10,
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { category: 'transport', 'subcategory': 'cars', id: '1' } }, { params: { category: 'transport', 'subcategory': 'cars', id: '2' } }],
    fallback: 'blocking', // can also be true or 'blocking'
  }
}