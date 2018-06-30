import Koa from 'koa';

const debug = require('debug')('server');

const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello world!';
});

app.listen(process.env.NODE_PORT, () => {
  debug(`Server running at port ${process.env.NODE_PORT}`);
});
