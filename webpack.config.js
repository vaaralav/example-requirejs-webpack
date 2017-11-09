const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackHtmlPlugin = require('webpack-html-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'main'
  },
  plugins:[
    new CopyWebpackPlugin([
      {from: 'src/index.html'},
      {from: 'assets', to: 'assets'}
      ]),
    ],
  externals: {
    jquery: 'jquery'
  },
  module: {rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    },
    {
      test: /\.html$/,
      use: {
        loader: 'raw-loader'
      }
    }
  ]}
}