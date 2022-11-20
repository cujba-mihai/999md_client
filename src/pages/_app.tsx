/* eslint-disable react/jsx-props-no-spreading */
import '../styles/global.scss';

import '../i18n/i18n';
import { withSSR } from 'react-i18next';
import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
import MainLayout from '@/components/layout/_MainLayout';
import { useRouter } from 'next/router';
import dictionary from '@/i18n/dictionary';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
  withLayout: boolean | undefined;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};



const App = ({ Component, pageProps }: AppPropsWithLayout): JSX.Element => {
  const { locale } = useRouter();
  const t =  (locale === 'en' || locale === 'ro' || locale === 'ru') ? dictionary[locale] : dictionary.ro;
  console.log('LOCALE IS: ', t);  

  if (Component?.withLayout) {
    Component.getLayout = function (page: ReactElement) {
      return <MainLayout>{page}</MainLayout>;
    };
  }


  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />) as JSX.Element;
};


const ExtendedApp = withSSR()(App);


export default ExtendedApp;
