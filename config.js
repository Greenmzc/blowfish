const path = require('path');

const config = {
  debug: true,
  port: 2017,
  static_dir: path.resolve(__dirname, 'static/dev')
};

module.exports = config;
