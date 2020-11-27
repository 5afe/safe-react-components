module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader')
      },
      {
        loader: require.resolve('react-docgen-typescript-loader')
      }
    ]
  });

  // There was a problem with the fonts not being loaded
  // I took the fix from here: https://github.com/storybookjs/storybook/issues/5936#issuecomment-532902187
  config.module.rules = config.module.rules.map(rule => {
    if (rule.test && rule.test.toString().includes('woff')) {
      return {
        ...rule,
        test: /\.(svg|ico|jpg|jpeg|png|gif|webp|cur|ani|pdf)(\?.*)?$/
      }
    }
    return rule
  })

  config.module.rules.push({
    test: /\.(woff|woff2|eot|ttf)$/,
    use: [
      {
        loader: 'file-loader',
        query: {
          name: '[name].[ext]'
        }
      }
    ]
  });

  config.module.rules.push({
    test: /\.(svg|png|jpg)$/i,
    use: [
      {
        loader: 'url-loader',
        query: {
          name: '[name].[ext]'
        }
      }
    ]
  });

  config.resolve.extensions.push('.ts', '.tsx', 'woff2');

  config.node = {
    fs: 'empty',
    child_process: 'empty'
  };

  return config;
};
