# CLI TEMPLATE

> CLI Template - Libraries Configurations

---

## LIB BOILERPLATE

```js
/**
 * @imports
 */
const myLib = require('my-lib');
/**
 * @host
 * -
 * @name -
 * @desc -
 * @file ~/lib/-.js
 */
const config = { "a": "b" };
/**
 * @exports
 */
// module.exports = new myLib(config);
module.exports = myLib;
```