const crypto = require("node:crypto");

const start = Date.now();
//every method in node.js that has "sync" suffix always runs on the main thread and is blocking
crypto.pbkdf2Sync("password","salt",100000,512,"sha512");//display time taken for a function call
crypto.pbkdf2Sync("password","salt",100000,512,"sha512");

console.log("Hash:",Date.now()-start);