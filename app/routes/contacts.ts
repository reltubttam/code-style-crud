import { Contact } from '../db';
import Router from 'koa-router';
const router = Router();

router.post('/contacts', async (ctx) => {
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
  const contact = await Contact.findOne({
    where: {
      id: ctx.params.contactId,
    },
  });

  if (!contact) {
    throw new Error('NOT FOUND');
  }

  ctx.body = {
    contact,
    success: true,
  };
});

router.put('/contacts/:contactId', async (ctx) => {
  const contact = await Contact.update(ctx.request.body.contact, {
    where: {
      id: ctx.params.contactId,
    },
    returning: true,
  });

  if (!contact) {
    throw new Error('NOT FOUND');
  }

  ctx.body = {
    contact,
    success: true,
  };
});

router.delete('/contacts/:contactId', async (ctx) => {
  const contact = await Contact.findOne({
    where: {
      id: ctx.params.contactId,
    },
  });

  if (!contact) {
    throw new Error('NOT FOUND');
  }

  await Contact.destroy({
    where: {
      id: ctx.params.contactId,
    },
  });

  ctx.body = {
    contact,
    success: true,
  };
});

export default router;
