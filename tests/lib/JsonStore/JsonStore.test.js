/* eslint-disable no-unused-vars */

import * as fs from 'fs';
fs.default.existsSync = jest.fn(bool => bool !== false);

import JsonStore from '@/lib/JsonStore';
import * as getJsonStore from '@/lib/JsonStore/getJsonStore';
import * as setJsonStore from '@/lib/JsonStore/setJsonStore';

const get = jest.fn(() => [1]);
const set = jest.fn();

getJsonStore.default = get;
setJsonStore.default = set;

const cached = Symbol.for('JsonStoreCachedResults');
const cachedPath = Symbol.for('JsonStoreCachePath');

describe('JsonStore', () => {
  let store;

  beforeEach(() => {
    store = new JsonStore('test-file-path');
  });

  describe('should throw if storepath', () => {
    it('is not passed', () => {
      expect(() => new JsonStore()).toThrow();
    });

    it('directory does not exist', () => {
       expect(() => new JsonStore(false)).toThrow();   
    });
  });

  it('should have a length of 1', () => {
    const { data } = store;
    expect(store.length).toBe(get().length);
  });

  describe('get data', () => {
    it('should get from filesystem', () => {
      const { data } = store;
      expect(getJsonStore.default).toBeCalled();
    });

    it('should get from cache', () => {
      const a = store.data;
      const b = store.data;
      expect(getJsonStore.default).toBeCalledTimes(1);
    });
  });

  describe('set data', () => {
    it('should update cache', () => {
      const expected = { foo: 'bar' };
      store.data = expected;
      expect(store[cached]).toEqual(expected);
    });

    it('should store to filesystem', () => {
      store.data = {};
      expect(setJsonStore.default).toBeCalled();
    });
  });
});
