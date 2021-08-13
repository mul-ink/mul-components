const { setup: setupDevServer } = require('jest-dev-server')
const { setup: setupPuppeteer } = require('jest-environment-puppeteer')

module.exports = async function globalSetup(globalConfig) {
  await setupPuppeteer(globalConfig)
  await setupDevServer({
    command: `npm start`,
    launchTimeout: 30000,
    port: 8080,
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
    browserContext: 'default'
  })
  // Your global setup
}