const router = require('koa-router')();
const path = require('path');
const auth = require('./middlewares/auth');
const sign = require('./controllers/sign');
const admin = require('./controllers/admin');
const site = require('./controllers/site');

router.use(auth.authUser);

router.get('/', site.showIndex);
router.get('/admin', auth.adminRequired, admin.showAdmin);
router.get('/signup', sign.signup);
router.get('/signin', sign.signin);

module.exports = router;
