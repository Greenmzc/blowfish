const path = require('path');

const config = {
  port: 2017,
  static_dir: path.resolve(__dirname, 'static/dev'),
  allow_signup: true,
  security_key: ['blowfish is handsome'],

  //2 weeks
  cookie_expires_time: 1209600000,
  auth_cookie_name: 'blowfish'
};

module.exports = config;
