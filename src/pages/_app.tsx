/* eslint-disable react/jsx-props-no-spreading */
import '../styles/global.scss';

import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
import MainLayout from '@/components/layout/_MainLayout';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
  withLayout: boolean | undefined;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  if (Component?.withLayout) {
    Component.getLayout = function (page: ReactElement) {
      return <MainLayout>{page}</MainLayout>;
    };
  }

  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
};

export default MyApp;
