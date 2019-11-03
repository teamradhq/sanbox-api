import * as fs from 'fs';
import getJsonStore from '@/lib/JsonStore/getJsonStore';
import * as setJsonStore from '@/lib/JsonStore/setJsonStore';

const existingFile = 'foo';
const missingFile = 'bar';
const expectedData = 'baz';

fs.default.existsSync = jest.fn(str => str === existingFile);
fs.default.readFileSync = jest.fn(() => expectedData);
JSON.parse = jest.fn(() => expectedData);

setJsonStore.default = jest.fn();

describe('getJsonStore', () => {
  it('should check if storepath exists', () => {
    getJsonStore();
  });

  describe('existing file', () => {
    it('should retrieve and parse existing file', () => {
      getJsonStore(existingFile);
      expect(fs.default.readFileSync).toBeCalled();
      expect(JSON.parse).toBeCalled();
    });

    it('should retrieve and parse existing file', () => {
      expect(getJsonStore(existingFile)).toBe(expectedData);
    });

    it('should not write store file', () => {
      getJsonStore(existingFile);
      expect(setJsonStore.default).not.toBeCalled();
    });
  });

  describe('missing file', () => {
    it('should not attempt file retrieval', () => {
      getJsonStore(missingFile);
      expect(fs.default.readFileSync).not.toBeCalled();
      expect(JSON.parse).not.toBeCalled();
    });

    it('should return empty object', () => {
      expect(getJsonStore(missingFile)).toEqual({});
    });

    it('should create a new store file', () => {
      getJsonStore(missingFile);
      expect(setJsonStore.default).toBeCalled();
    });
  });
});
