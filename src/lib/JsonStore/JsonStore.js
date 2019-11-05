import getJsonStore from './getJsonStore';
import setJsonStore from './setJsonStore';

const cached = Symbol.for('JsonStoreCachedResults');
const cachedPath = Symbol.for('JsonStoreCachePath');

class JsonStore {
  constructor(storepath) {
    if (!storepath) {
      throw Error('A store path is required');
    }
    
    this[cachedPath] = storepath;
  }

  get length() {
    return Object.keys(this.data).length;
  }

  get data() {
    if (!this[cached]) {
      this[cached] = getJsonStore(this[cachedPath]);
    }

    return this[cached];
  }

  set data(payload) {
    setJsonStore(this[cachedPath], payload);
  }
}

export default JsonStore;
