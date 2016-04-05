const models = require('../models');
const User = models.User;

exports.createCount = function(username, password, email) {
  const user = new User();
  user.username = username;
  user.password = password;
  user.email = email;

  return user.save();
};

exports.getUsersByQuery = function(query) {
  return User.find(query).exec();
};

exports.getUserById = function(id) {
  return User.findOne({ _id: id }).exec();
};
