import express from 'express';

import app from '@/app';
import logMiddleware from '@/middleware/logMiddleware';
import example from '@/routes/example';

import store from '@/server/store';
console.log(store);
const server = express();
server.use(express.json());

if (process.env.NODE_ENV !== 'test') {
  server.use(logMiddleware);
}

server.get('/', (req, res) => {
  res.send(app);
});

server.use('/example', example);

export default server;
