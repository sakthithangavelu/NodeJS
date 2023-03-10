const path = require('path');

const filePath = 'file.txt';

console.log(`File name: ${path.basename(filePath)}`);
console.log(`Directory name: ${path.dirname(filePath)}`);
console.log(`File extension: ${path.extname(filePath)}`);
console.log(`Absolute path: ${path.resolve(filePath)}`);