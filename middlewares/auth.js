const mongoose = require('mongoose');
const UserModel = mongoose.model('User');
const config = require('../config');
const eventproxy = require('eventproxy');
const UserProxy = require('../proxy/user');

exports.adminRequired = function* (next) {
  if (this.session.user == undefined) {
    this.redirect('/signin');
  } else {
    yield next;
  }
};

exports.authUser = function* (next) {
  const ep = new eventproxy();

  ep.fail(err => {
// console.log('err', err);
    return;
  });

  ep.all('get_user', user => {
    if (!user) {
      return;
    }
// console.log('a user', user);
    user = this.session.user = new UserModel(user);
// console.log('enhanced user', user);
  });

  if (this.session.user) {
// console.log('user', this.session.user);
    ep.emit('get_user', this.session.user);
  } else {
    //signed设置成true会去匹配blowfish.sig,如果不匹配返回undefined
    const user_id = this.cookies.get(config.auth_cookie_name, {
      signed: true
    });

    if (!user_id) {
// console.log('no user_id');
      return yield next;
    }

    try {
      const user = yield UserProxy.getUserById(user_id);
// console.log('mongoose user', user);
      ep.emit('get_user', user);
    } catch(err) {
// console.log('mongoose err', err);
      ep.emit('error', err);
    }
  }

  yield next;
};
