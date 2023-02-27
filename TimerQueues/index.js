//callbacks in the microtask queues are executed before the timer queue callbacks

setTimeout(()=>console.log("setTimeout 1"),0);
setTimeout(()=>console.log("setTimeout 2"),0);
setTimeout(()=>console.log("setTimeout 3"),0);

process.nextTick(()=>console.log("process.nextTick log1"));
process.nextTick(()=>{
    console.log("process.nextTick log2")
    process.nextTick(()=>console.log("process.nextTick  inner log"));
});
process.nextTick(()=>console.log("process.nextTick log 3"));

Promise.resolve().then(()=>console.log("promise.resolve log"));
