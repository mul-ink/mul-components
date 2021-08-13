module.exports = {
  launch: {
    dumpio: false,
    headless: true,
    ignoreHTTPSErrors: true,
    product: 'chrome',
    exitOnPageError: false,
    defaultViewport: {
      width: 1280,
      height: 1024,
    },
  },
  // connect: {
  //   browserURL: 'http://127.0.0.1:9222',
  //   defaultViewport: null
  // },
  browserContext: 'default',
};