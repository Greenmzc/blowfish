const config = require('./config');
const sign = require('./api/v1/sign');
const koaBody = require('koa-body')();

const router = require('koa-router')({
  prefix: '/api'
});

router.use(koaBody);
router.post('/signup', sign.signup);
router.post('/signout', sign.signout);

module.exports = router;
