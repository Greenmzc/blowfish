const router = require('koa-router')();
const views = require('co-views');
const path = require('path');
const auth = require('./middlewares/auth');
const render = views(path.resolve(__dirname, 'views'), {
  cache: true,
  default: 'ejs',
  map: {
    tpl: 'ejs'
  }
});

router.use(auth.authUser);

router.get('/', function* () {
  this.body = yield render('index', {});
});

router.get('/admin', auth.adminRequired, function* () {
  this.body = yield render('admin', {});
});

router.get('/signup', function* () {
  this.body = yield render('signup', {});
});

module.exports = router;
