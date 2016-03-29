const config = require('../config');

exports.adminRequired = function* (next) {
console.log(this.session.user);
  if (this.session.user == undefined) {
    this.redirect('/signup');
  } else {
    yield next;
  }
};

exports.authUser = function* (next) {
  if (this.session.user) {
console.log(this.session.user);
  } else {
    //signed设置成true会去匹配blowfish.sig,如果不匹配返回undefined
    this.session.user = this.cookies.get(config.auth_cookie_name, {
      signed: true
    });
  }

  yield next;
}
