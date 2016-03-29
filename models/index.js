const mongoose = require('mongoose');
const config = require('../config');

mongoose.connect(config.db, {

}, (err) => {
  if (err) {
console.log(err);
    process.exit(1);
  }
});

require('./user');

exports.User = mongoose.model('User');
