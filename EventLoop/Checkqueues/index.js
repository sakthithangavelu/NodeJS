//Microtask queues callbacks are executed in between check queue callbacks

setImmediate(()=> console.log("this is setImmediate 1"))
setImmediate(()=> {
    console.log("this is setImmediate 2")
    process.nextTick(()=> console.log("this is process.nexTick 1"))
    Promise.resolve().then(()=>console.log("this is promise.resolve 1"))
});
setImmediate(()=> console.log("this is setImmediate 3"))
