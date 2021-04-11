import { LruCache } from '../lib/lru';
import { LRU_MAX_ENTRIES } from '../config';

export const CachedModel = (model) => {
  const lruCache = LruCache(LRU_MAX_ENTRIES);

  return {
    create: (instance) => model.create(instance),

    findAll: () => model.findAll(),

    findOne: (id) => lruCache.getOrSet(
      'findOne', 
      (...args) => model.findOne(...args), 
      {
        where: {
          id,
        },
      }),

    update: (id, newInstance) => {
      lruCache.del('findOne', {
        where: {
          id,
        },
      });

      return model.update(newInstance, {
        where: {
          id,
        },
        returning: true,
      });
    },

    destroy: (id) => {
      lruCache.del('findOne', {
        where: {
          id,
        },
      });

      return model.destroy({
        where: {
          id,
        },
      })
    },
  }
};