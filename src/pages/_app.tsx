/* eslint-disable react/jsx-props-no-spreading */
import '../styles/reset.scss';
import '../styles/global.scss';
import '../styles/buttons.scss';

import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
import MainLayout from '@/components/layout/_MainLayout';
import { appWithTranslation } from 'next-i18next';


export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
  withLayout: boolean | undefined;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};


const App = ({ Component, pageProps }: AppPropsWithLayout): JSX.Element => {

  if (Component?.withLayout) {
    Component.getLayout = function (page: ReactElement) {
      return <MainLayout>{page}</MainLayout>;
    };
  }

  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />) as JSX.Element;
};

const MyApp = appWithTranslation(App)


export default MyApp;
