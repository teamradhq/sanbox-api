import ResourceStore from './ResourceStore';
import ObjectEntryValidator from '@/lib/ObjectEntryValidator';

const collection = Symbol.for('App.ResourceStoreCollection');

const validate = new ObjectEntryValidator([
  'id',
  'name',
]);

class UserStore {
  constructor() {
    this[collection] = new ResourceStore('users');
  }

  get items() {
    return this[collection].items
      .map(item => validate.parse(item));
  }

  set items(payload) {
    this[collection].items = payload;
  }

  get length() {
    return this[collection].length;
  }

  getItem(id) {
    const item = this[collection].getItem(id);

    if (item) {
      delete item.key;
      delete item.secret;
    }

    return item;
  }

  setItem(payload) {
    this[collection].setItem({
      ...this.getItem(payload.id) || {},
      ...payload,
    });
  }
}

export default UserStore;
