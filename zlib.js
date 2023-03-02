const zlib = require('zlib');

//Compress a string using gzip


// const input = 'Hello, world!';
// const compressed = zlib.gzipSync(input);
// console.log(compressed.toString('base64'));



//Decompress a string that was compressed using gzip


// const decompressed = new Buffer.from('H4sIAAAAAAAC/ytJLS5RKEssy1cozEwtKkktAgA=', 'base64');
// const decompressed = zlib.gunzipSync(ccompressed);
// console.log(decompressed.toString());


//Compress a file using gzip

const fs = require('fs');
const input = fs.createReadStream('file.txt');
const output = fs.createWriteStream('file.txt.gz');
const gzip = zlib.createGzip();
input.pipe(gzip).pipe(output);
