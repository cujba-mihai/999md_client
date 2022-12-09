import AuthForm from '@/components/auth-form/AuthForm';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Index = () => {
  return (
    <>
      <AuthForm />
    </>
  );
};

export default Index;


export const getStaticProps = async (context: any) => {
  return {
    props: { 
      context,
      ...(await serverSideTranslations(context.locale))
    },
    revalidate: 60 * 60 * 24, //24h
  };
};