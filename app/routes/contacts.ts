import { Contact } from '../db';
import Router from 'koa-router';
const router = Router();
import { isContact } from '../lib/validation/contacts';
import { MalformedEntityError, EntityNotFoundError } from '../lib/errors';

router.post('/contacts', async (ctx) => {
  if (!isContact(ctx.request.body.contact)){
    throw MalformedEntityError();
  }

  const contact = await Contact.create(ctx.request.body.contact);

  ctx.body = {
    contact,
    success: true,
  };
});

router.get('/contacts', async (ctx) => {
  const contacts = await Contact.findAll();

  ctx.body = {
    contacts,
    success: true,
  };
});

router.get('/contacts/:contactId', async (ctx) => {
  const contact = await Contact.findOne(ctx.params.contactId);

  if (!contact) {
    throw EntityNotFoundError();
  }

  ctx.body = {
    contact,
    success: true,
  };
});

router.put('/contacts/:contactId', async (ctx) => {
  if (!isContact(ctx.request.body.contact)){
    throw MalformedEntityError();
  }

  const contact = await Contact.update(ctx.params.contactId, ctx.request.body.contact);

  if (!contact) {
    throw EntityNotFoundError();
  }

  ctx.body = {
    contact,
    success: true,
  };
});

router.delete('/contacts/:contactId', async (ctx) => {
  const contact = await Contact.findOne(ctx.params.contactId);

  if (!contact) {
    throw EntityNotFoundError();
  }

  await Contact.destroy(ctx.params.contactId);

  ctx.body = {
    contact,
    success: true,
  };
});

export default router;
