/* eslint-disable no-unused-vars */

import JsonStore from '@/lib/JsonStore';
import * as getJsonStore from '@/lib/JsonStore/getJsonStore';
import * as setJsonStore from '@/lib/JsonStore/setJsonStore';

getJsonStore.default = jest.fn(() => [1]);
setJsonStore.default = jest.fn();

describe('JsonStore', () => {
  let store;

  beforeEach(() => {
    store = new JsonStore('test-file-path');
  });

  it('should throw error if storepath is not passed', () => {
    expect(() => new JsonStore()).toThrow();
  });

  it('should get json store from filesystem', () => {
    const { data } = store;
    expect(getJsonStore.default).toBeCalled();
  });

  it('should set json store to filesystem', () => {
    store.data = {};
    expect(setJsonStore.default).toBeCalled();
  });

  it('should have a length of 1', () => {
    const { data } = store;
    expect(store.length).toBe(1);
  });
});
