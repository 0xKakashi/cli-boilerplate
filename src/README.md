# CLI TEMPLATE

> CLI Template - Source Code API

---

```js
/**
 * @imports
 */
const myLib = require('my-lib');
/**
 * @module
 * -
 * @name -
 * @desc -
 * @file ~/lib/-.js
 */
class MyClass {
  /**
   * @constructor
   * @prop { Object } mine - property
   */
  constructor() {
    this.mine = new myLib();
  }
  /**
   * @func
   * @name   func
   * @desc   class function
   * @param  { String } _ - parameter for function
   * @return { String } 
   * @throws error
   */
  func(_) {
    return `${_}`;
  }
}
/**
 * @method
 * -
 * @name   method
 * @desc   class prototype method
 * @param  { String } _ - parameter for method
 * @return { String }
 * @throws error
 */
MyClass.prototype.method = (_) => {
  return `${_}`;
}
/**
 * @exports
 */
// module.exports = new MyClass();
module.exports = MyClass;
```