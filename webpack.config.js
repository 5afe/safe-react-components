/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'index.min.js',
    sourceMapFilename: '[file].map',
    path: path.join(__dirname, '/dist'),
    libraryTarget: 'umd',
    library: JSON.stringify(require('./package.json').name),
  },
  resolve: {
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
      'styled-components': {
        commonjs: 'styled-components',
        commonjs2: 'styled-components',
      },
    },
    /@material-ui\/core\/.*/,
  ],
  node: {
    fs: 'empty',
    child_process: 'empty',
  },
};
