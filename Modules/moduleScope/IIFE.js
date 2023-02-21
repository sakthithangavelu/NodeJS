//Immediately Invoked Funciton Expression (IIFE) in Node.js
//(function(){}) ();
//each function has its own private scope
(function (message) {
  const technology = "ReactJs";
  console.log(message,technology);
})("Learned"); //specify parameters and  passing arguments to each invoked function

(function (message) {
  const technology = "NodeJs";
  console.log(message,technology);
})("Learning");

