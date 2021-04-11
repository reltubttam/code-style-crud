import { PORT } from './config';
import Koa from 'koa';
import koaBody  from 'koa-body';
import contactsRouter from './routes/contacts';
import errorHandler from './middleware/errorHandler';
import logger from './lib/logger';

const app = new Koa();
app.use(errorHandler);
app.use(koaBody());

app.use(contactsRouter.routes());
app.listen(PORT);

logger.info(`listening on port ${PORT}`);
