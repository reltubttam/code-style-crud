import Lru from 'lru-cache';
import stringify from 'json-stable-stringify';

export const LruCache = (maxEntries) => {
  const lru = new Lru({
    max: maxEntries,
  });

  return {
    getOrSet: async (keyPrefix, func, ...args) => {
      const key = `${keyPrefix}_${stringify(args)}`;
      let result = lru.get(key);
      if (result) {
        return result;
      }

      result = func(...args);
      lru.set(key, result);
      return result;
    },
    del: (keyPrefix, ...args) => {
      const key = `${keyPrefix}_${stringify(args)}`;
      lru.del(key);
    },
  }
}