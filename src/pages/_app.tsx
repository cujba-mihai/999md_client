/* eslint-disable react/jsx-props-no-spreading */
import '@/styles/global.scss';
import '@/styles/layout.scss';

import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
