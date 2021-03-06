import fs from 'fs';
import path from 'path';
import 'dotenv/config';

/** @type {String}   Auth key, secret pair. */
const AUTH_KEY = process.env.AUTH_KEY || 'foo';
const AUTH_SECRET = process.env.AUTH_SECRET || 'bar';

/** @type {String}   HTTP scheme. */
const APP_NAME = process.env.APP_NAME || 'sandbox';

const API_SCHEME = process.env.API_SCHEME || 'http';

/** @type {String}   App hostname. */
const API_HOST = process.env.API_HOST || 'localhost';

/** @type {Number}   App listening port. */
const API_PORT = process.env.API_PORT || 3000;

/** @type {String}   Base url for app requests. */
const BASE_URL = process.env.BASE_URL || `${API_SCHEME}://${API_HOST}:${API_PORT}`;

/** @type {String}   Relative path to cache. */
const JSON_STORE_PATH = path.resolve(process.env.JSON_STORE_PATH || 'cache');
/* Make non-existent cache dir. */
if(!fs.existsSync(JSON_STORE_PATH)) {
   fs.mkdirSync(JSON_STORE_PATH);
}

process.env = {
  ...process.env,
  AUTH_KEY,
  AUTH_SECRET,
  API_PORT,
  API_SCHEME,
  API_HOST,
  APP_NAME,
  BASE_URL,
  JSON_STORE_PATH,
};
