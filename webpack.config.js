/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.min.js',
    sourceMapFilename: '[file].map',
    libraryTarget: 'umd',
    library: JSON.stringify(require('./package.json').name),
    globalObject: 'this',
  },
  resolve: {
    fallback: {
      fs: false,
    },
    extensions: ['.ts', '.tsx', '.js'],
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(svg|png|jpg)$/i,
        use: {
          loader: 'url-loader',
          options: {},
        },
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: [/node_modules/],
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
  externals: [
    {
      react: {
        commonjs: 'react',
        commonjs2: 'react',
      },
      'react-dom': {
        commonjs: 'react-dom',
        commonjs2: 'react-dom',
      },
    },
  ],
  optimization: {
    minimize: false,
  },
};
