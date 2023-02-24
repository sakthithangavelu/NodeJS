const fs = require("node:fs");

console.log("First");

fs.readFile("./file.txt","utf-8",(error,data)=>{ //fs.readFile is asyncronous and non blocking check console for output---tis is because of libuv thread pool 
    console.log("File contents");
});

console.log("Last");