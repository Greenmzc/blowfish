const assign = require('object-assign');
const config = require('../../config');
const User = require('../../proxy/user');
console.log(config.cookie_opts);
exports.signup = function* () {
  if (config.allow_signup) {
    this.cookies.set(config.auth_cookie_name, 'what', config.cookie_opts);
    this.body = {
      isSuccess: true,
      data: {}
    }
  } else {
    this.body = {
      isSuccess: false,
      message: '暂时不能注册'
    }
  }
};

exports.signout = function* () {
  this.session = null;
  var options = assign({}, config.cookie_opts, { expires: new Date(0) });
  this.cookies.set(config.auth_cookie_name, '', options);

  this.body = {
    isSuccess: true,
    data: {}
  }
};
