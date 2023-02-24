const crypto= require("node:crypto");

const MAX_CALLS = 5;//Libuvs thread pool has 4 threads
//for call more than 4 it has to wait to execute the next 

const start = Date.now();
for(let i=0;i< MAX_CALLS;i++){
    crypto.pbkdf2("password","salt",100000,512,"sha512",()=>{
        console.log(`Hash: ${i+1}`,Date.now()-start);
    })
}