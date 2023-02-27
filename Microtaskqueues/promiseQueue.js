//All callbacks in nextTick queue are executed before callbacks in promise queue

Promise.resolve().then(()=>console.log("promise.resolve log"));
process.nextTick(()=>console.log("process.nextTick log"));