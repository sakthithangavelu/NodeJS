//most of the async methods from the built in modules queue the callback function in the I/O queue


//here callbacks in the microtask queues are executef before callbacks in the I/O queue
const fs = require("fs");

fs.readFile(__filename,() => {
    console.log("this is readfile 1");
});

process.nextTick(()=>console.log("this is process.nexTick 1"))
Promise.resolve().then(()=>console.log("this is promise.resolve 1"))