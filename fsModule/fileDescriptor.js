
// file descriptor is an integer that represents a reference to an open file, socket, or other input/output (I/O) resource


const fs = require('fs');

const filePath = 'file.txt';

// Open the file and get a file descriptor
const fd = fs.openSync(filePath, 'r'); //The 'r' flag indicates that the file should be opened in read-only mode

// Allocate a buffer to hold the file contents
const bufferSize = 1024;
const buffer = Buffer.alloc(bufferSize);

// Read from the file using the file descriptor
const bytesRead = fs.readSync(fd, buffer, 0, bufferSize, null);

// Log the contents of the buffer to the console
console.log(buffer.toString('utf8', 0, bytesRead));

// Close the file
fs.closeSync(fd);
