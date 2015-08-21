var ExtractTextPlugin = require('extract-text-webpack-plugin')
  , webpack = require('webpack')
  , CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin

module.exports = {
  entry: './app/app.js',
  output: {
    path: './build',
    publicPath: '/build/',
    filename: 'app.js'
  },
  resolve: {
    alias: {
      Vue: '../static/bower_components/vue/dist/vue.min.js'
    }
  },
  module: {
    loaders: [
      {
        test: /\.(css|scss)$/,
        loader: ExtractTextPlugin.extract('style','css!sass')
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=8192'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('app.css'),
    new CommonsChunkPlugin('vendor.js')
  ]
}
