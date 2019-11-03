import { resolve } from 'path';

import JsonStore from '@/lib/JsonStore';

const storePath = resolve(process.env.JSON_STORE_PATH || '');
const collection = Symbol.for('App.ResourceStoreCollection');
const location = Symbol.for('App.ResourceStoreLocation');

class ResourceStore {
  constructor(type) {
    this.type = type;
    this[location] = resolve(storePath, `${type}.json`);
    this[collection] = new JsonStore(this[location]);
  }

  get items() {
    return this[collection].data;
  }

  set items(payload) {
    this[collection].data = payload;
  }

  get length() {
    return this.items.length
      || Object.keys(this.items).length;
  }

  getItem(id) {
    return this.items[id];
  }

  setItem(payload) {
    const data = this.items;
    data[payload.id] = payload;
    this.items = data;
  }
}

export default ResourceStore;
