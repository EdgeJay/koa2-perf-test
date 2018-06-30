import Koa from 'koa';
import initRoutes from './middlewares/routes';

const debug = require('debug')('server');

const app = new Koa();

initRoutes(app);

app.listen(process.env.NODE_PORT, () => {
  debug(`Server running at port ${process.env.NODE_PORT}`);
});
