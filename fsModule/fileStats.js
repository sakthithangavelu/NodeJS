const fs = require('fs');

const filePath = 'file.txt';

fs.stat(filePath, (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(`File size: ${stats.size} bytes`);
  console.log(`Last modified: ${stats.mtime}`);
  console.log(`Is directory: ${stats.isDirectory()}`);
  console.log(`Is file: ${stats.isFile()}`);
});