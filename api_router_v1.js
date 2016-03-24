const router = require('koa-router')({
  prefix: '/api'
});

router.post('/signup', function* () {
  this.body = {
    a: 1
  }
});

module.exports = router;
