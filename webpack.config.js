var ExtractTextPlugin = require('extract-text-webpack-plugin')
  , webpack = require('webpack')
  , vue = require('vue-loader')

module.exports = {
  entry: './app/app.js',
  output: {
    path: './build',
    publicPath: '/build/',
    filename: 'app.js'
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
        loader: vue.withLoaders({
          html: 'html-loader?minimize=false'
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('app.css')
  ]
}
