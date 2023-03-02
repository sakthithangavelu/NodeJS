const util = require('util');

// Example 1: inspecting objects
const obj = { name: 'John', age: 30 };
console.log(util.inspect(obj));

// Example 2: formatting strings
const greeting = util.format('Hello %s!', 'world');
console.log(greeting);

// Example 3: logging debug messages
const debugLog = util.debuglog('myapp');
debugLog('This is a debug message');

// Example 4: creating custom errors
class MyError extends Error {
  constructor(message) {
    super(message);
    this.name = 'MyError';
  }
}
const myError = new MyError('Something went wrong');
console.error(util.inspect(myError));