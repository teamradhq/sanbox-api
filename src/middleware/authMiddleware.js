const authMiddleware = ({ AUTH_KEY, AUTH_SECRET }) => (req, res, next) => {
  const { key, secret } = req.body;

  if (key !== AUTH_KEY || secret !== AUTH_SECRET) {
    res.status(403);
    res.send('forbidden');

    return;
  }

  next();
};

export default authMiddleware;
