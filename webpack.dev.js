const path = require('path');
const webpack = require('webpack');
const {merge} = require('webpack-merge');

const webpackCommonConfig = require('./webpack.common.js');

module.exports = merge( webpackCommonConfig, {
  devServer: {
    static: 'src',
    historyApiFallback: true
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js'
  }
});

