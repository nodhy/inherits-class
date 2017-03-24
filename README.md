# inherits-class
This is es2015 library for inherits multiple "class's function".
<a name="inherits"></a>

## Install
```
$ npm install inherits-class
```
<a name="inherits"></a>

## JSDoc
### inherits(...clss) ⇒ <code>Object</code>
inherits multipule "class's function"

**Kind**: global function  
**Returns**: <code>Object</code> - inherited class  

| Param | Type | Description |
| --- | --- | --- |
| ...clss | <code>Object</code> | class or Object |

## Example
```
class FirstClass {
  first() {
    return 'first func';
  }
};
class SecondClass {
  second() {
    // For Example. Abstract this function.
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
base.first();  // 'first func'
base.second(); // throws error
base.third();  // 'third func'
base.base();   // 'base func'
```

## Development
```
# watch
npm run watch
# build
npm run build
# test
npm run test
```

## Contributing
1. Please Fork it!
2. Create your feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request :D

## License
MIT
