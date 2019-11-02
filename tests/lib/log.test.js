import log from '@/lib/log';
import req from '#/mocks/req.mock';
import res from '#/mocks/res.mock';

describe('lib.log', () => {
  console.log = jest.fn();

  it('should log message', () => {
    log.message(req, res, 'foo');
    expect(console.log).toBeCalled();
  });

  it('should log error and send response', () => {
    log.error(req, res, 'foo');
    expect(console.log).toBeCalled();
    expect(res.status).toBeCalled();
    expect(res.send).toBeCalled();
  });
});
