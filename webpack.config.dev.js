var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var entries = {};
var rootPath = path.join(__dirname, 'client/apps/');

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

module.exports = {
  entry: entries,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: ['node_modules'],
        loader: 'babel'
      }
    ]
  },
  output: {
    path: path.join(__dirname, "client/dev"),
    filename: '[name].js',
    chunckFilename: '[chunkhash].js'
  },
  resolve: {
    extensions: ['', '.js']
  },
  watch: true,
  devtool: "source-map"
};
