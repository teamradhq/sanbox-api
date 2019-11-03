import { resolve } from 'path';

import ResourceStore from '@/server/store/ResourceStore';
import UserStore from '@/server/store/UserStore';
import storeData from '#/mocks/storeData.mock';

const storePath = resolve(process.env.JSON_STORE_PATH || '');

const store = {
};

store.users = new UserStore();
store.users.setItem({
  id: 1,
  name: 'JimmyBob',
  key: 'baz',
  secret: 'blitz',
});

const resources = [
  'posts',
  'categories',
];

resources.forEach((resource) => {
  store[resource] = new ResourceStore(resource);

  /* Add existing mock data if empty. */
  if (store[resource].items.length === 0) {
    store[resource].items = storeData[resource] || [];
  }
});

export default store;
