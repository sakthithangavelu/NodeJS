//here  I/O queue callbacks are executed after microtask queues and timer queue callbacks
const fs = require("fs");

fs.readFile(__filename,() => {
    console.log("this is readfile 1");
});

process.nextTick(()=>console.log("this is process.nexTick 1"))
Promise.resolve().then(()=>console.log("this is promise.resolve 1"))

setTimeout(()=>console.log("this is settimeout 1"),0);