exports.showAdmin = function* () {
  yield this.render('admin', { username: this.session.user.username });
};
