//all user written synchronous javascript code takes priority over async code that runtime would like to eventually execute

console.log("1st log");
process.nextTick(()=>console.log("process.nextTick log"));
console.log("2nd log");