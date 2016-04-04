exports.signup = function* () {
  if (this.session.user) {
    return this.redirect('/admin');
  }
  yield this.render('signup', {});
};

exports.signin = function* () {
  if (this.session.user) {
    return this.redirect('/admin');
  }
  yield this.render('signin', {});
};
