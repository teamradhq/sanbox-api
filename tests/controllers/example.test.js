import exampleController from '@/controllers/example';

import req from '#/mocks/req.mock';
import res from '#/mocks/res.mock';

const actionTests = [
  ['indexAction', 'redirect'],
  ['listAction', 'send'],
  ['viewAction', 'send'],
];

describe('exampleController', () => {
  describe.each(actionTests)('%s', (action, method) => {
    it(`should call res.${method}`, () => {
      exampleController[action](req, res);

      expect(res[method]).toBeCalled();
    });
  });
});
