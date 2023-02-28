//callbacks in microtask queues are executed in between the execution of callbacks in the timer queue

setTimeout(()=>console.log("setTimeout 1"),0);
setTimeout(()=>{
     console.log("setTimeout 2")
     process.nextTick(()=>
     console.log("process.nextTick log inside setTimeout")
     )
},0);
setTimeout(()=>console.log("setTimeout 3"),0);

process.nextTick(()=>console.log("process.nextTick log1"));
process.nextTick(()=>{
    console.log("process.nextTick log2")
    process.nextTick(()=>console.log("process.nextTick  inner log"));
});
process.nextTick(()=>console.log("process.nextTick log 3"));

Promise.resolve().then(()=>console.log("promise.resolve log"));
