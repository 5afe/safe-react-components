const mainConfig = require('../webpack.config.js');

module.exports = ({ config }) => {
  config.module.rules = mainConfig.module.rules;

  config.resolve.extensions.push('.ts', '.tsx', '.svg', 'woff2');

  return config;
};
