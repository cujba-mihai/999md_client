const withImages = require('next-images');
module.exports = withImages();

/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const path = require('path');

module.exports = withBundleAnalyzer({
  eslint: {
    dirs: ['.'],
  },
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'src', 'components', '*.scss'), 
      path.join(__dirname, 'src', 'styles'),
    ],
  },
  i18n: {
    locales: ['en-US', 'ro-RO', 'ru-RU'],
    defaultLocale: 'en-US',
  },
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
});