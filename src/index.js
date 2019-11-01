import '@/init';
import server from '@/server';

const {
  API_PORT,
  APP_NAME,
  BASE_URL,
} = process.env;

server.listen(API_PORT, () => console.log(`${APP_NAME} api listening at ${BASE_URL}!`));
