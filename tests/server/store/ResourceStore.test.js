it('should be true', () => {
  expect(true).toBe(true);
})

import ResourceStore from '@/server/store/ResourceStore';
import JsonStore from '@/lib/JsonStore';

jest.mock('@/lib/JsonStore');

const length = jest.fn();
const getter = jest.fn(() => [0,1]);
const setter = jest.fn();

describe('ResourceStore', () => {
  beforeAll(() => {
    JsonStore.mockImplementation(() => {
      const obj = {};

      Object.defineProperties(obj, {
        length: {
          get: length
        },
        data: {
          set: setter,
          get: getter,
        },
      });

      return obj;
    });
  });

  it('should create store when constructed', () => {
    const store = new ResourceStore('test');
    expect(JsonStore).toBeCalled();
  });

  it('should set its type', () => {
    expect(new ResourceStore('test').type)
      .toBe('test');
  });

  it('should have a length of 1', () => {
    expect(new ResourceStore('test').length)
      .toBe(getter().length);
  });

  it('should get all items', () => {
    expect(new ResourceStore('test').items)
      .toEqual(getter());
  });

  it('should get item by id', () => {
    expect(new ResourceStore('test').getItem(0))
      .toEqual(0);
  });

  it('should set an item to store', () => {
    const store = new ResourceStore('test');
    store.setItem({id: 2});
    
    expect(setter).toBeCalled();
  });
});