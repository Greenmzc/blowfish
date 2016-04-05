const assign = require('object-assign');
const config = require('../../config');
const User = require('../../proxy').User;
const util = require('../../common/util');
const eventproxy = require('eventproxy');

exports.signup = function* () {
  const ep = new eventproxy();
  ep.on('signup_err', msg => this.body = {
    isSuccess: false,
    msg: msg
  });

  if (!config.allow_signup) {
    ep.emit('signup_err', '暂时不能注册。');
    return;
  }

  const body = this.request.body;
  const username = body.username;
  const password = body.password;
  const email = body.email;

  if ([username, password, email].some(item => item == '' || item == undefined)) {
    ep.emit('signup_err', '信息不完整。');
    return;
  }

  if (!util.emailValidate(email)) {
    ep.emit('signup_err', '邮箱格式不正确。');
    return;
  }

  if (!util.usernameValidate(username)) {
    ep.emit('signup_err', '用户名格式不正确');
    return;
  }

  try {
    const existed = yield User.getUsersByQuery({ $or: [{ username: username }, { email: email }] });

    if (existed && existed.length > 0) {
      ep.emit('signup_err', '用户名或邮箱已被占用。');
      return;
    }

    const user = yield User.createCount(username, password, email);
    this.cookies.set(config.auth_cookie_name, user._id, config.cookie_opts);
    this.body = {
      isSuccess: true,
      data: {}
    }
  } catch(e) {
    ep.emit('signup_err', e.message);
  }

};

exports.signin = function* () {
  const ep = new eventproxy();
  const body = this.request.body;
  const email = body.email;
  const password = body.password;
  
  ep.on('signin_err', msg => this.body = {
    isSuccess: false,
    msg: msg
  });

  if ([password, email].some(item => item == '' || item == undefined)) {
    ep.emit('signin_err', '信息不完整。');
    return;
  }

  if (!util.emailValidate(email)) {
    ep.emit('signin_err', '邮箱格式不正确。');
    return;
  }

  try {
    const userArr = yield User.getUsersByQuery({ $and: [{ email: email }, { password: password }] });

    if (userArr && userArr.length == 1) {
      const user = userArr[0];
      this.cookies.set(config.auth_cookie_name, user._id, config.cookie_opts);
      return this.body = {
        isSuccess: true,
        data: {}
      }
    } else {
      ep.emit('signin_err', '密码或邮箱错误。');
      return;
    }
  } catch (e) {
    ep.emit('signin_err', e.message);
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
