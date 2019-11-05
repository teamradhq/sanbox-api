import fs from 'fs';
import path from 'path';

import getJsonStore from './getJsonStore';
import setJsonStore from './setJsonStore';

const cached = Symbol.for('JsonStoreCachedResults');
const cachedPath = Symbol.for('JsonStoreCachePath');

/**
 * Use JsonStore to store a mock resource collection
 * and store it in a JsonFile.
 */
class JsonStore {
  /**
   * Set the location of JsonStore file.
   * @param  {String} storepath Full path to json file.
   */
  constructor(storepath) {
    if (!fs.existsSync(path.dirname(storepath))) {
      throw Error('Store path should point to an existing location');
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
    this[cached] = payload;
    setJsonStore(this[cachedPath], payload);
  }
}

export default JsonStore;
