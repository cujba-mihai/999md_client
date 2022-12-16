import CategoriesAdd from '@/components/advertising/CategoriesAdd';
import nextI18NextConfig from 'next-i18next.config.js';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next';
import { ICategoryAddProps } from '@/types/pages';

const Categories = ({ categories }: ICategoryAddProps) => {


  return (<CategoriesAdd categories={categories} />)
}

Categories.withLayout = true;

export default Categories;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { categories, subcategories } = require('../../../components/advertising/dummyData');

  const asPath = context.req.url || '';
  const path = asPath.replace(/\?.*/, '');

  const [subcategory, category] = path.split('/').filter(Boolean).reverse();

  return {
    props: {
      category,
      subcategory,
      categories,
      subcategories,
      ...(await serverSideTranslations(context.locale || 'en', ['translation', 'common'], nextI18NextConfig))
    },
  }
};