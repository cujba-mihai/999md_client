import Breadcrumbs from '@/components/breadcrumbs/index';
import Subcategories from '@/components/subcategories/Subcategories';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Index = () => {
  return (
    <>
      <Breadcrumbs />
      <Subcategories />
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
    paths: [{ params: { category: 'transport', subcategory: 'cars' } }, { params: { category: 'real-estate', subcategory: 'cars' } }],
    fallback: true, // can also be true or 'blocking'
  }
}