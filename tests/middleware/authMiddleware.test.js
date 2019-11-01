import req from '#/mocks/req.mock';
import res from '#/mocks/res.mock';

import authMiddleware from '@/middleware/authMiddleware';

const next = jest.fn();
const AUTH = {
  AUTH_KEY: req.body.key,
  AUTH_SECRET: req.body.secret,
};

describe('authMiddleware', () => {
   it('should not call next if unathorised', () => {
     authMiddleware(AUTH)({ body: {} }, res, next);
     expect(res.status).toBeCalled();
     expect(res.send).toBeCalled();
     expect(next).not.toBeCalled();
   });

   it('should call next if athorised', () => {
     authMiddleware(AUTH)(req, res, next);
     expect(res.status).not.toBeCalled();
     expect(res.send).not.toBeCalled();
     expect(next).toBeCalled();
   });
});
