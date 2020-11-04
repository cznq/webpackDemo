const config = require('./config.js')
const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack')

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name]_chunk_.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: process.env.NODE_ENV == 'development' ? config.dev.publicPath : config.build.publicPath
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      minChunks: 2,//至少引用几次
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        common: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'src/index.html',
      // chunks: ['index']
    }),
    new CleanWebpackPlugin(),
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   _: 'lodash '
    // })
  ]
}

