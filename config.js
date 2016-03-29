const path = require('path');

const config = {
  port: 2017,
  static_dir: path.resolve(__dirname, 'static/dev'),
  allow_signup: true,
  security_key: ['blowfish is handsome'],

  cookie_options: {
    expires: new Date(Date.now() + 1209600000), //2 weeks
    httpOnly: true,
    signed: true,
    path: '/',
    domain: '.fangyi.me'
  },
  auth_cookie_name: 'blowfish'
};

module.exports = config;
