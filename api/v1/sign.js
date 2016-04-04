const assign = require('object-assign');
const config = require('../../config');
const User = require('../../proxy').User;

exports.signup = function* () {
  if (!config.allow_signup) {
    this.body = {
      isSuccess: false,
      message: '暂时不能注册'
    }
    return;
  }

  const body = this.request.body;
  const username = body.username;
  const password = body.password;
  const email = body.email;

  try {
    const isExist = yield User.getUsersByQuery([{ username: username }, { email: email }]);

    if (isExist && isExist.length > 0) {
      this.body = {
        isSuccess: false,
        message: '用户名或邮箱已被占用'
      }
      return;
    }

    const user = yield User.createCount(username, password, email);
    this.cookies.set(config.auth_cookie_name, user._id, config.cookie_opts);
    this.body = {
      isSuccess: true,
      data: {}
    }
  } catch(e) {
    this.body = {
      isSuccess: false,
      message: 'internal error'
    }
  }

};

exports.signin = function* () {
  this.body = {
    isSuccess: true,
    data: {}
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
