const models = require('../models');
const User = models.User;

exports.createCount = function(username, password, email, callback) {
  const user = new User();
  user.username = username;
  user.password = password;
  user.email = email;

  user.save(callback);
};
