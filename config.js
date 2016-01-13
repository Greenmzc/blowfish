const path = require('path');

const config = {
  debug: true,
  port: 2016,
  public_dir: path.resolve(__dirname, 'client/dev')
};

module.exports = config;
