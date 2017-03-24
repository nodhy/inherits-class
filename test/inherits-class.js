'use strict';

import assert  from 'assert';
import inherits from '../src/inherits-class';

describe('inherits multipul class test.', () => {
  it('extends 2 classes and 1 object.', () => {
    class FirstClass {
      first() {
        return 'first func';
      }
    };
    class SecondClass {
      second() {
        throw new Error('second is not implement!');
      }
    };

    let ThirdObj = {
      third: () => {
        return 'third func';
      }
    }
    class Base extends inherits(FirstClass, SecondClass, ThirdObj) {
      constructor() {
        super();
      }
      base() {
        return 'base func';
      }
    }
    let base = new Base();
    // assert
    assert.equal('first func', base.first());
    assert.throws(
      base.second,
      (error) => {
        assert(error.message === 'second is not implement!');
        return true;
      }
    );
    assert.equal('third func', base.third());
    assert.equal('base func', base.base());
  });
});
