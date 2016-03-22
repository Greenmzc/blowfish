const path = require('path');
const app = require('koa')();
const config = require('./config');
const webRouter = require('./web_router');
const apiRouter = require('./api_router_v1');
const serve = require('koa-static');

app.use(serve(path.resolve(config.static_dir)));
app.use(webRouter.routes());
app.use(apiRouter.routes());

app.listen(config.port, function() {
  console.log(`listening on port: %d`, config.port);
});
