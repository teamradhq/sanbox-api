import express from 'express';

import logMiddleware from '@/middleware/logMiddleware';
import example from '@/routes/example';

const server = express();
server.use(express.json());

if (process.env.NODE_ENV !== 'test') {
  server.use(logMiddleware);
}

server.get('/', (req, res) => {
  const data = { data: 'Hello Sandbox' };
  res.send({ data });
});

server.use('/example', example);

export default server;
