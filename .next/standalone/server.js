
const NextServer = require('next/dist/server/next-server').default
const http = require('http')
const path = require('path')
process.env.NODE_ENV = 'production'
process.chdir(__dirname)

// Make sure commands gracefully respect termination signals (e.g. from Docker)
// Allow the graceful termination to be manually configurable
if (!process.env.NEXT_MANUAL_SIG_HANDLE) {
  process.on('SIGTERM', () => process.exit(0))
  process.on('SIGINT', () => process.exit(0))
}

let handler

const server = http.createServer(async (req, res) => {
  try {
    await handler(req, res)
  } catch (err) {
    console.error(err);
    res.statusCode = 500
    res.end('internal server error')
  }
})
const currentPort = parseInt(process.env.PORT, 10) || 3000

server.listen(currentPort, (err) => {
  if (err) {
    console.error("Failed to start server", err)
    process.exit(1)
  }
  const nextServer = new NextServer({
    hostname: 'localhost',
    port: currentPort,
    dir: path.join(__dirname),
    dev: false,
    customServer: false,
    conf: {"env":{},"webpackDevMiddleware":null,"eslint":{"ignoreDuringBuilds":false,"dirs":["."]},"typescript":{"ignoreBuildErrors":false,"tsconfigPath":"tsconfig.json"},"distDir":"./.next","cleanDistDir":true,"assetPrefix":"","configOrigin":"next.config.js","useFileSystemPublicRoutes":true,"generateEtags":true,"pageExtensions":["tsx","ts","jsx","js"],"target":"server","poweredByHeader":false,"compress":true,"analyticsId":"","images":{"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image/","loader":"custom","loaderFile":"/home/mihai/Documents/999md_client/src/utils/imageLoader.ts","domains":[],"disableStaticImages":false,"minimumCacheTTL":60,"formats":["image/webp"],"dangerouslyAllowSVG":false,"contentSecurityPolicy":"default-src 'self'; script-src 'none'; sandbox;","remotePatterns":[{"protocol":"https","hostname":"i.simpalsmedia.com","pathname":"/999.md/**"}],"unoptimized":false},"devIndicators":{"buildActivity":true,"buildActivityPosition":"bottom-right"},"onDemandEntries":{"maxInactiveAge":15000,"pagesBufferLength":2},"amp":{"canonicalBase":""},"basePath":"","sassOptions":{"includePaths":["/home/mihai/Documents/999md_client/src/components/*.scss"],"additionalData":"@import 'src/styles/_variables.scss'; @import 'src/styles/_mixins.scss';  @import 'src/styles/_functions.scss';"},"trailingSlash":true,"i18n":{"locales":["en","ro","ru","ru-MD","ru-mo","ru-RU","ro-MD","ro-RO","en-AU","en-BZ","en-CA","en-cb","en-GB","en-IE","en-IN","en-JM","en-MT","en-MY","en-NZ","en-PH","en-SG","en-TT","en-US","en-ZA","en-ZW"],"defaultLocale":"en"},"productionBrowserSourceMaps":false,"optimizeFonts":true,"excludeDefaultMomentLocales":true,"serverRuntimeConfig":{},"publicRuntimeConfig":{},"reactStrictMode":false,"httpAgentOptions":{"keepAlive":true},"outputFileTracing":true,"staticPageGenerationTimeout":60,"swcMinify":true,"output":"standalone","experimental":{"middlewarePrefetch":"flexible","optimisticClientCache":true,"manualClientBasePath":false,"legacyBrowsers":false,"newNextLinkBehavior":true,"cpus":7,"sharedPool":true,"profiling":false,"isrFlushToDisk":true,"workerThreads":false,"pageEnv":false,"optimizeCss":false,"nextScriptWorkers":false,"scrollRestoration":false,"externalDir":false,"disableOptimizedLoading":false,"gzipSize":true,"swcFileReading":true,"craCompat":false,"esmExternals":true,"appDir":true,"isrMemoryCacheSize":52428800,"fullySpecified":false,"outputFileTracingRoot":"","swcTraceProfiling":false,"forceSwcTransforms":true,"largePageDataBytes":128000,"enableUndici":true,"adjustFontFallbacks":false,"adjustFontFallbacksWithSizeAdjust":false,"swcMinify":true,"trustHostHeader":false},"configFileName":"next.config.js"},
  })
  handler = nextServer.getRequestHandler()

  console.log(
    'Listening on port',
    currentPort,
    'url: http://localhost:' + currentPort
  )
})