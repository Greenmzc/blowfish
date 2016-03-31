var config = require('../config');

var env = process.env.NODE_ENV || 'development';
var log4js = require('log4js');

log4js.configure({
  appenders: [
    { type: 'console' },
    { type: 'file', filename: 'logs/blowfish.log', category: 'blowfish' }
  ]
});

var logger = log4js.getLogger('blowfish');
logger.setLevel(env !== 'development' ? 'DEBUG': 'ERROR');

module.exports = logger;
