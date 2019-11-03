import fs from 'fs';

import setJsonStore from './setJsonStore';

/**
 * Get the contents of JSON store file.
 * @param  {String} storepath
 * @return {Object}
 */
const getJsonStore = (storepath) => {
  if (fs.existsSync(storepath)) {
    const data = fs.readFileSync(storepath, 'utf8');
    return JSON.parse(
      fs.readFileSync(storepath, 'utf8')
      || '{}'
     );
  }

  const data = {};
  setJsonStore(storepath, data);

  return data;
};

export default getJsonStore;
