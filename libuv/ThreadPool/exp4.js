const crypto= require("node:crypto");

//by increasing the threapool size , we are able to improve the local time taken to run multiple calls of an asynchronous method like pbkdf2

process.env.UV_THREADPOOL_SIZE = 6;
const MAX_CALLS = 6;

const start = Date.now();
for(let i=0;i< MAX_CALLS;i++){
    crypto.pbkdf2("password","salt",100000,512,"sha512",()=>{
        console.log(`Hash: ${i+1}`,Date.now()-start);
    })
}
