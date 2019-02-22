const withCSS = require('@zeit/next-css');

const assetPrefix = process.env.ASSET_PREFIX || '';

module.exports = withCSS({
  target: 'serverless',
  assetPrefix: assetPrefix,
  env: {
    ASSET_PREFIX: assetPrefix,
  },
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  }
});
