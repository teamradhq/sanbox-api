import fs from 'fs';

/**
 * Write {payload} to JSON store file.
 * @param  {String} storepath
 * @param  {Object} payload
 */
const setJsonStore = (storepath, payload) => {
  const json = JSON.stringify(payload, null, 2);

  fs.writeFile(storepath, json, (err) => {
    console.log(err);
  });
};

export default setJsonStore;
