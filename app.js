const path = require('path');
const app = require('koa')();
const config = require('./config');
const webRouter = require('./web_router');
const apiRouter = require('./api_router_v1');
const serve = require('koa-static');
const session = require('koa-generic-session');
const redisStore = require('koa-redis');
const views = require('koa-views');

app.use(views(path.resolve(__dirname, 'views'), {
  cache: true,
  extension: 'ejs',
  map: {
    html: 'ejs'
  }
}));

app.keys = config.security_key;
app.use(session({
  store: redisStore()
}));

app.use(serve(path.resolve(config.static_dir)));
//页面路由
app.use(webRouter.routes());
//接口路由
app.use(apiRouter.routes());

app.listen(config.port, function() {
  console.log(`listening on port: %d`, config.port);
});
