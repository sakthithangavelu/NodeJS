//Check queue callbacks are executed after microtask queues callback, timer queue callback and I/O queue callbacks are executed
const fs = require("fs");

fs.readFile(__filename,() => {
    console.log("this is readfile 1");
    setImmediate(()=> console.log("this is setImmediate 1 inside readfile"))
    process.nextTick(()=>console.log("this is process.nexTick inside readFile"))
    Promise.resolve().then(()=>console.log("this is promise.resolve inside readFile"))
});

process.nextTick(()=>console.log("this is process.nexTick 1"))
Promise.resolve().then(()=>console.log("this is promise.resolve 1"))
setTimeout(()=> console.log("this is set Timeout1"),0)
