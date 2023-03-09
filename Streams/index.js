const fs = require("node:fs")


const readableStream = fs.createReadStream("./file1.txt",{
    encoding:"utf-8",
    highWaterMark:2,
})

const writeableStream = fs.createWriteStream("./file4.txt")

readableStream.on("data",(chunk) => { 
    console.log(chunk);
    writeableStream.write(chunk)
})