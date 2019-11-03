import { resolve } from 'path';

import JsonStore from '@/lib/JsonStore';
import storeData from '#/mocks/storeData.mock';

const storePath = resolve(process.env.JSON_STORE_PATH || '');
console.log(storePath);

const store = {
  getResource: resource => store[resource](),
  getResourceItem: (resource, id) => store[resource]()
    .find(item => item.id === id),
} 

const resources = [
  'users',
  'posts',
  'categories',
];

resources.forEach((resource) => {
  store[resource] = (() => {
    const storepath = resolve(storePath, `${resource}.json`);
    const jsonStore = new JsonStore(storepath);

    if (!jsonStore.length) {
      jsonStore.data = storeData[resource] || [];
    }


    return () => jsonStore.data;
  })();
});

export default store;