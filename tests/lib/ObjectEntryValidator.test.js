import ObjectEntryValidator from '@/lib/ObjectEntryValidator';

import {
  isValid,
  pushEntry,
  reducer,
} from '@/lib/ObjectEntryValidator/ObjectEntryValidator';

const validKeys = ['a', 'b', 'c'];

describe('ObjectEntryValidator', () => {
  let validate;
  beforeEach(() => {
    validate = new ObjectEntryValidator(validKeys);
  });

  it('should only parse valid props', () => {
    expect(validate.parse({ a: 0, b: 0, c: 0, d: 0 }))
      .toEqual({ a: 0, b: 0, c: 0 })
  })
});
