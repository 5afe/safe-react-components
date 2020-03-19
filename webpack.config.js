const path = require('path');

module.exports = {
  entry: './src/index.ts',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.min.js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.woff2$/,
        use: {
          loader: 'file-loader',
          options: {}
        }
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  externals: [        
    {      
      react: {
        commonjs: 'react',
        commonjs2: 'react'
      },
      'react-dom': {
        commonjs: 'react-dom',
        commonjs2: 'react-dom'
      },
      'styled-components': {
        commonjs: 'styled-components',
        commonjs2: 'styled-components'
      }
    },
    "@material-ui/core", "@material-ui/icons", /@material-ui\/core\/*./, /@material-ui\/icons\/*./        
  ],
  node: {
    fs: 'empty',
    child_process: 'empty'
  },
};
