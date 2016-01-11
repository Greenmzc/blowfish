const router = require('koa-router')();
const views = require('co-views');
const path = require('path');

const render = views(path.resolve(__dirname, 'views'), {
  cache: true,
  default: 'ejs',
  map: {
    tpl: 'ejs'
  }
});

router.get('/', function* () {
  this.body = yield render('index', {});
});

module.exports = router;
