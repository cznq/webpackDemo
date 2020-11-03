const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js')
const optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')


const MiniCssExtractPlugin = require('mini-css-extract-plugin')
console.log('MiniCssExtractPlugin:444', new MiniCssExtractPlugin());

const production = {
  mode: 'production',
  // devtool: 'cheap-module-source-map',
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
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2
          }
        },
        'sass-loader',
        // 'postcss-loader'
      ]
    }, {
      test: /\.css/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        // 'postcss-loader'
      ]
    }]
  },
  optimization: {
    minimizer: [new optimizeCssAssetsWebpackPlugin({})]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]_[hash].css'
    }),
    new CleanWebpackPlugin(),
  ]
}
module.exports = merge(production, commonConfig)