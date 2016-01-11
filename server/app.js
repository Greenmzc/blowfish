const path = require('path');
const app = require('koa')();
const config = require('../config');
const webRouter = require('./web_router');
const apiRouter = require('./api_router_v1');
const serve = require('koa-static');

app.use(serve(path.resolve(__dirname)));
app.use(webRouter.routes());
app.use(apiRouter.routes());

app.listen(config.port, function() {
  console.log(`listen on port: %d`, config.port);
});
