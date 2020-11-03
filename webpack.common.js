const config = require('./config.js')
const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack')

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name]_[hash:5].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: process.env.NODE_ENV == 'development' ? config.dev.publicPath : config.build.publicPath
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      minChunks: 1,//至少引用几次
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        }
      }
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'src/index.html'
    }),
    // new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      _: 'lodash '
    })
  ]
}

