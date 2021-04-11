import { PORT } from './config';
import Koa from 'koa';
import koaBody  from 'koa-body';
import contactsRouter from './routes/contacts';
import errorHandler from './middleware/errorHandler';

const app = new Koa();
app.use(errorHandler);
app.use(koaBody());

app.use(contactsRouter.routes());
app.listen(PORT);

console.log(`listening on port ${PORT}`);
