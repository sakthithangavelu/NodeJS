const crypto= require("node:crypto");
//fs.readFile and crypto.pkfd2 run on a specific thread in libuv's thread pool
//they do run synchronously in their own thread but as far as main thread is concerned
//it appears as if the method is running asynchronously

const MAX_CALLS = 2;//change max call to see console variations

const start = Date.now();
for(let i=0;i< MAX_CALLS;i++){
    crypto.pbkdf2("password","salt",100000,512,"sha512",()=>{
        console.log(`Hash: ${i+1}`,Date.now()-start);
    })
}