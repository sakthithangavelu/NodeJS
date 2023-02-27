process.nextTick(()=>console.log("process.nextTick log1"));
process.nextTick(()=>{
    console.log("process.nextTick log2")
    process.nextTick(()=>console.log("process.nextTick  inner log"));
});
process.nextTick(()=>console.log("process.nextTick log 3"));

Promise.resolve().then(()=>console.log("promise.resolve log"));
