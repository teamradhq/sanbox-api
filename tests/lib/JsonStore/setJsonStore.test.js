import * as fs from 'fs';
import setJsonStore from '@/lib/JsonStore/setJsonStore';

fs.default.writeFile = jest.fn();

describe('setJsonStore', () => {
  it('should write file to filesystem', () => {
    setJsonStore({});
    expect(fs.default.writeFile).toBeCalled();
  });
});
