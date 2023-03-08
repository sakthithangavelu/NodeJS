//The process core module provides a handy method that allows you to programmatically exit from a Node.js program: process.exit().

const fs = require('fs');

// Check if a file exists
function fileExists(filePath) {
  try {
    fs.statSync(filePath);
    return true;
  } catch (err) {
    return false;
  }
}

// Check if a file exists and exit with code 0 or 1 depending on the result
if (fileExists('example.txt')) {
  console.log('The file exists');
  process.exit(0);
} else {
  console.error('The file does not exist');
  process.exit(1);
}