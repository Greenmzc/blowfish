var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var precss = require('precss');
var autoprefixer = require('autoprefixer');

var entries = {};
var rootPath = path.join(__dirname, 'apps/');

(function loop(pathStr) {
  var state = fs.statSync(pathStr);

  if (state.isFile()) {
    if (/index.js$/.test(pathStr)) {
      var key = pathStr.replace(rootPath, '').replace('/index.js', '');
      entries[key] = pathStr;
    }
  } else if (state.isDirectory()) {
    var subDirs = fs.readdirSync(pathStr);

    subDirs.forEach(function(subDir) {
      loop(path.resolve(pathStr, subDir));
    });
  }
}(rootPath));

entries.vendor = ['react', 'react-dom'];

module.exports = {
  entry: entries,
  module: {
    loaders: [
      { test: /\.js$/, exclude: ['node_modules'], loader: 'babel' },
      //css modules https://github.com/css-modules/webpack-demo
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader",
        "css-loader?modules&importLoaders=1&localIdentName=[1]-[2]-[local]&localIdentRegExp=.*\/.*\/(.*)\/(.*)\/!postcss-loader") }
    ]
  },
  postcss() {
    return {
      defaults: [autoprefixer, precss],
    };
  },
  output: {
    path: path.join(__dirname, "dev"),
    filename: '[name].js',
    chunckFilename: '[chunkhash].js'
  },
  resolve: {
    alias: {
      'components': path.resolve(__dirname, 'components'),
      'mixins': path.resolve(__dirname, 'mixins'),
      'base': path.resolve(__dirname, 'base')
    },
    extensions: ['', '.js', 'jsx']
  },
  watch: true,
  devtool: "source-map",
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new ExtractTextPlugin('[name].css', { allChunks: true })
  ]
};
