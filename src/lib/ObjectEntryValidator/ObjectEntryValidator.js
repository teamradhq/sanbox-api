const isValid = valid => ([key]) => valid.includes(key);

const pushEntry = (obj, [key, val]) => ({
  ...obj,
  [key]: val,
});

const reducer = validate => (obj, entry) => (validate(entry)
  ? pushEntry(obj, entry)
  : obj
);

export {
  isValid,
  pushEntry,
  reducer,
};

const validate = Symbol.for('App.ObjectEntryValidatorTest');

class ObjectEntryValidator {
  constructor(valid) {
    this[validate] = isValid(valid);
  }

  parse(obj) {
    return Object.entries(obj)
      .reduce(reducer(this[validate]), {});
  }
}

export default ObjectEntryValidator;
