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
  swcMinify: true,
  experimental: {
    appDir: true,
    swcMinify: true,
    forceSwcTransforms: true
  },
  images: {
        // limit of 25 deviceSizes values
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        // limit of 25 imageSizes values
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        // path prefix for Image Optimization API, useful with `loader`
        path: '/_next/image',
        // loader can be 'default', 'imgix', 'cloudinary', 'akamai', or 'custom'
        loader: 'default',
        // file with `export default function loader({src, width, quality})`
        loaderFile: '/src/utils/imageLoader.ts',
        // disable static imports for image files
        disableStaticImages: false,
        // minimumCacheTTL is in seconds, must be integer 0 or more
        minimumCacheTTL: 60,
        // ordered list of acceptable optimized image formats (mime types)
        formats: ['image/webp'],
        // enable dangerous use of SVG images
        dangerouslyAllowSVG: false,
        // set the Content-Security-Policy header
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        // limit of 50 objects
        // when true, every image will be unoptimized
        unoptimized: false,
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'i.simpalsmedia.com',
            pathname: '/999.md/**',
          },
        ],
  },
  sassOptions: {
    includePaths: [
      // path.join(__dirname, 'src', 'styles'),
      path.join(__dirname, 'src', 'components', '*.scss'),
    ],
    additionalData:
      "@import 'src/styles/_variables.scss'; @import 'src/styles/_mixins.scss';  @import 'src/styles/_functions.scss';",
  },
  i18n: {
    locales: ['default','en', 'ro', 'ru'],
    defaultLocale: 'default',
    localeDetection: false,
  },
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: false,
  output: "standalone"
});
