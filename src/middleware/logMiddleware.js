import log from '@/lib/log';

const logMiddleware = (req, res, next) => {
  const { method, originalUrl: url } = req;

  log.message(req, res, `${method} ${url}`);
  next();
};


export default logMiddleware;
