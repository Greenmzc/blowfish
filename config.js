const path = require('path');

const config = {
  port: 2017,
  static_dir: path.resolve(__dirname, 'static/dev'),
  allow_signup: true,
  security_key: ['blowfish is handsome'],

  cookie_opts: {
    expires: new Date(Date.now() + 1209600000), //2 weeks
    httpOnly: true,
    signed: true,
    path: '/',
    domain: 'fangyi.me'
  },
  auth_cookie_name: 'blowfish',
  db: 'mongodb://127.0.0.1/blowfish'
};

module.exports = config;
