# is-length-between
Determine if a value length is between a min and max value

## Install
```
$ npm install --save is-length-between
```

## Usage
```js
const isBetween = require('is-length-between');

console.log(isBetween('Hello!', 1, 10));
//=> true

console.log(isBetween('Hello!'));
//=> true
// Why this returned true? Because if you don't inform the min number it'll automatically be set as 0,
// and if will not be inform the max value it will be set as Infinity.
// I don't know why you would do that but you could :).

console.log(isBetween('Hello', 6, 10));
//=> false
```

## License
MIT © [Bruno Queiros](https://github.com/brunoqueiros)
