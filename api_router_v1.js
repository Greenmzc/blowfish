const config = require('./config');
const sign = require('./api/v1/sign');

const router = require('koa-router')({
  prefix: '/api'
});

router.post('/signup', sign.signup);
router.post('/signout', sign.signout);

module.exports = router;
