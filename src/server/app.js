import Koa from 'koa';

const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello world!';
});

app.listen(process.env.NODE_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running at port ${process.env.NODE_PORT}`);
});
