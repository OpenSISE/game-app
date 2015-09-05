var ExtractTextPlugin = require('extract-text-webpack-plugin')
  , webpack = require('webpack')
  , vue = require('vue-loader')

var path                 = require('path');
var AssetsPlugin         = require('assets-webpack-plugin');
var assetsPluginInstance = new AssetsPlugin();

module.exports = {
  entry: './app/app.js',
  output: {
    path: './build',
    publicPath: '/build/',
    filename: 'app-[hash].js'
  },
  module: {
    loaders: [
      {
        test: /\.(css|scss)$/,
        loader: ExtractTextPlugin.extract('style','css!sass')
      },
      {
        test: /\.(png|jpg|swf)$/,
        loader: 'url?limit=8192'
      },
      { test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('app-[hash].css'),
    assetsPluginInstance,
    new webpack.optimize.UglifyJsPlugin({
      minimize: false
    })
  ]
}
