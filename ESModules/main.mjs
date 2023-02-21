//for pattern 1 & 2
// import add from "../ESModules/math-esm.mjs"
// console.log(add(5,8));

//for pattern 3
import math from "../ESModules/math-esm.mjs"
const {add,sub} = math;
console.log(add(5,5));
console.log(sub(5,3));
