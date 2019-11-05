import exampleController from '@/controllers/example';
import * as store from '@/server/store';

import req from '#/mocks/req.mock';
import res from '#/mocks/res.mock';
import storeMock from '#/mocks/store.mock';

store.default = storeMock;

const actionTests = [
  ['indexAction', 'redirect'],
  ['listAction', 'send'],
  ['viewAction', 'send'],
];

describe('exampleController foo', () => {
  describe.each(actionTests)('%s', (action, method) => {
    it(`should call res.${method}`, () => {
      exampleController[action](req, res);

      expect(res[method]).toBeCalled();
    });
  });
});
