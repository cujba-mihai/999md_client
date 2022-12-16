import Breadcrumbs from '@/components/breadcrumbs/index';
import Categories from '@/components/categories/Categories';
import nextI18NextConfig from 'next-i18next.config.js';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Index = () => {
  return (
    <>
      <Breadcrumbs />
      <Categories />
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

export type TSupportedLocales = 'en' | 'ro' | 'ru';
export type TLocales = TSupportedLocales[];

export const getStaticPaths = async ({ locales }: { locales: TLocales}) => {
  const categories = ['transport', 'real-estate' ];

  const paths = locales.map((locale: TSupportedLocales) => categories.map(category => ({ params: { category: category }, locale })) ).flat()

  console.log('PATHS: ', paths)
  return {
    paths,
    fallback: true, // can also be true or 'blocking'
  }
}