//return value add need not be same as exported value add...we can change it and use.
const add = require("./add");

console.log("Hi from app in Module-exports");
const sum = add(3,2);
console.log(sum);