const path = require('path')
const webpack = require('webpack');

const HTMLWebpackPlugin = require('html-webpack-plugin')
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: './app/index.html',
  filename: 'index.html',
  inject: 'body'
})

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ExtractTextPluginConfig = new ExtractTextPlugin({
  filename: 'bundle.css',
  disable: false,
  allChunks: true
})

module.exports = {
  entry: [
    'font-awesome/scss/font-awesome.scss',
    'bootstrap/scss/bootstrap.scss',
    './app/index.js'
  ],
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.(sass|scss|css)$/,
        loader: ExtractTextPluginConfig.extract({
          fallback: 'style-loader',
          use: 'css-loader!sass-loader'
        })
      },
      {
        test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    HTMLWebpackPluginConfig,
    ExtractTextPluginConfig,
    new webpack.ProvidePlugin({ // inject ES5 modules as global vars
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Tether: 'tether'
    })
  ]
}
