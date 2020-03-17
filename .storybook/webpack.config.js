module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader')
      },
      // Optional
      {
        loader: require.resolve('react-docgen-typescript-loader')
      }
    ]
  });
  config.module.rules.push({
    test: /\.svg$/,
    use: {
      loader: 'svg-url-loader',
      options: {}
    }
  }),
    config.resolve.extensions.push('.ts', '.tsx');
  config.node = {
    fs: 'empty',
    child_process: 'empty'
  };
  return config;
};
