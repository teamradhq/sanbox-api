import req from '#/mocks/req.mock';
import res from '#/mocks/res.mock';
import logMock from '#/mocks/log.mock';

import * as log from '@/log';
import logMiddleware from '@/middleware/logMiddleware';

const next = jest.fn();

describe('logMiddleware', () => {
  log.default = logMock;

  it('should log request to console', () => {
    logMiddleware(req, res, next);
    expect(log.default.message).toBeCalled();
    expect(next).toBeCalled();
  });
});
