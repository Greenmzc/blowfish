const models = require('../models');
const User = models.User;

exports.createCount = function(username, password, email) {
  const user = new User();
  user.username = username;
  user.password = password;
  user.email = email;

  return user.save();
};
