# help-object
> Small js package I use to help me dealing with objects

[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
[![GitHub workflow status](https://img.shields.io/github/workflow/status/pnxdxt/help-object/CI)](https://github.com/pnxdxt/help-object)
[![npm bundle size](https://img.shields.io/bundlephobia/min/help-object)](https://bundlephobia.com/package/help-object)
[![npm downloads](https://img.shields.io/npm/dt/help-object)](https://www.npmjs.com/package/help-object)

## Install
```
$ npm install help-object
```
## Import

This package is pure [ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules). It cannot be `require()`'d from CommonJS.

Use `import foo from 'foo'` instead of `const foo = require('foo')` to import the package.

```js
// Load entire build
import * as helpObject from 'help-object';

// Load by method
import {main} from 'help-object';
```
If the package is used in an async context, you could use [`await import(…)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#dynamic_imports) from CommonJS instead of `require(…)`.

**You also need to make sure you're on the latest minor version of Node.js. At minimum Node.js 12.20, 14.14, or 16.0.**

Read more here: [sindresorhus/esm-package](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)


## Usage

```js
const object = { 'a': { 'b': 2 } }
const other = create({ 'a': create({ 'b': 2 }) })

helpObject.has(object, 'a')
// => true

helpObject.has(other, 'a')
// => false
```

## API

`forEachEntry` : The function will be called with (`key`, `value`) as arguments.

`functions` : Creates an array of function property names from own enumerable properties of `object`.

`has` : Checks if `key` is a direct property of `object`.

`invert` : Creates an object composed of the inverted keys and values of `object`.

`invertBy` : This method is like `invert` except that the inverted object is generated from the results of running each element of `object` thru `iteratee`. 

`keysIn` : Creates an array of the own and inherited enumerable property names of `object`.

`mapKey` : The opposite of `mapValue` this method creates an object with the same values as `object` and keys generated by running each own enumerable string keyed property of `object` thru `iteratee`.

`mapObject` : Creates an array of values by running each property of `object` thru `iteratee`.

`mapValue` : Creates an object with the same keys as `object` and values generated by running each own enumerable string keyed property of `object` thru `iteratee`.

`toPlainObject` : Converts `value` to a plain object flattening inherited enumerable string keyed properties of `value` to own properties of the plain object.

## License

MIT © [Paul Nodet](https://pnodet.com)
