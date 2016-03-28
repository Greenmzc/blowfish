const config = require('./config');

const router = require('koa-router')({
  prefix: '/api'
});

router.post('/signup', function* () {
  if (config.allow_signup) {

    //1209600000 = 2 weeks
    this.cookies.set(config.auth_cookie_name, 'sndn', {
      expires: new Date(Date.now() + config.cookie_expires_time),
      httpOnly: true,
      signed: true,
      path: '/',
      domain: '.blowfish.com'
    });

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

module.exports = router;
