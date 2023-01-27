/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    publicPath: '',
    path: path.join(__dirname, '/dist'),
    filename: 'index.min.js',
    sourceMapFilename: '[file].map',
    libraryTarget: 'umd',
    library: JSON.stringify(require('./package.json').name),
    globalObject: 'this',
  },
  resolve: {
    alias: {
      react: path.resolve('./node_modules/react'),
      '@mui/material': path.resolve('./node_modules/@mui/material'),
    },
    fallback: {
      fs: false,
    },
    extensions: ['.ts', '.tsx', '.js'],
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: [/node_modules/],
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.css$/i,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource',
        generator: {
          filename: '[name][ext][query]',
        },
      },
      {
        test: /\.(png|jpg)$/i,
        type: 'asset/inline',
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'src/assets/fonts/fonts.css' }],
    }),
    // new BundleAnalyzerPlugin(),
  ],
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
    minimize: true,
  },
};
