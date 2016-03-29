const config = require('./config');
const assign = require('object-assign');

const router = require('koa-router')({
  prefix: '/api'
});

router.post('/signup', function* () {
  if (config.allow_signup) {
    this.cookies.set(config.auth_cookie_name, 'what', config.cookie_options);
    this.body = {
      isSuccess: true,
      data: {}
    }
  } else {
    this.body = {
      isSuccess: false,
      message: '暂时不能注册'
    }
  }
});

router.post('/signout', function* () {
  this.session = null;
  var options = assign(config.cookie_options, { expires: new Date(0) });
  this.cookies.set(config.auth_cookie_name, '', options);

  this.body = {
    isSuccess: true,
    data: {}
  }
});

module.exports = router;
