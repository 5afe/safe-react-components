module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|js)x?$/,
    exclude: [/node_modules/],
    use: {
      loader: 'ts-loader',
    },
  });

  config.module.rules.push({
    test: /\.css$/i,
    use: ['style-loader', 'css-loader'],
  });

  // remove svg from existing rule
  config.module.rules = config.module.rules.map((rule) => {
    if (
      String(rule.test) ===
      String(
        /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/
      )
    ) {
      return {
        ...rule,
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,
      };
    }

    return rule;
  });

  config.module.rules.push({
    test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
    type: 'asset/resource',
    generator: {
      filename: '[name][ext][query]',
    },
  });

  config.module.rules.push({
    test: /\.(png|jpg)$/i,
    type: 'asset/inline',
  });

  config.resolve.extensions.push('.ts', '.tsx', 'woff2');

  return config;
};
