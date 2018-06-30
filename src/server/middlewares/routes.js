import Router from 'koa-router';
import RoutesController from '../controllers/RoutesController';

export default function initRoutes(app) {
  const router = new Router();

  router.get('/anon-async-func', async ctx => {
    ctx.body = 'Hello world!';
  });

  router.get('/static-async-func', RoutesController.getHelloWorld);

  router.get('/instance-async-func', new RoutesController().getHelloWorld);

  app.use(router.routes()).use(router.allowedMethods());
}
