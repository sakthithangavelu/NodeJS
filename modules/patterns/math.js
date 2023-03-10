/*Pattern 1 for import and export modules*/

// const add = (a,b) => {
//     return a+b;
// }

// module.exports = add;


/*pattern 2***************************/

// module.exports = (a,b) => {
//     return a+b;
// }

/*pattern 3*************************/

// const add = (a, b) => {
//   return a + b;
// };
// const subtract = (a, b) => {
//   return a - b;
// };
// module.exports = {add,subtract};

/*pattern 4************************/

// module.exports.add = (a,b) => {
//   return a+b;
// }
// module.exports.subtract = (a,b) => {
//   return a-b;
// }

/*pattern 5************************/

exports.add = (a,b) => {
  return a+b;
}
exports.subtract = (a,b) => {
  return a-b;
}