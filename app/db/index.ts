import { Contact as ContactModel } from './models/contacts';
import { CachedModel } from './cachedModel';

export const Contact = CachedModel(ContactModel);
