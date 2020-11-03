const config = require('./config.js')
const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js')

const devCofig = {
  mode: 'development',
  devtool: 'cheap-module-evel-source-map',
  devServer: {
    contentBase: false,
    host: '127.0.0.1',
    publicPath: process.env.NODE_ENV == 'development' ? config.dev.publicPath : config.build.publicPath,
    open: true,
    port: 8083,
    // 是否热更新
    hot: true
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_models/,
      loader: 'babel-loader',
    }, {
      test: /\.(jpg|png|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          name: '[name]_[hash].[ext]',
          outputPath: 'images/',
          limit: 1024
        }
      }
    }, {
      test: /\.(eot|ttf|svg)$/,
      use: {
        loader: 'file-loader'
      }
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2
          }
        },
        'sass-loader',
        'postcss-loader'
      ]
    }, {
      test: /\.css/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader'
      ]
    }]
  },
  plugins: []
}
module.exports = merge.merge(commonConfig, devCofig)