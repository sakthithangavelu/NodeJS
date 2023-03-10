const fs = require('fs');
const path = require('path');

// Create a new folder
const newFolder = path.join(__dirname, 'myFolder');
fs.mkdir(newFolder, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Folder created: ${newFolder}`);
  }
});

// Check if a folder exists
const folderToCheck = path.join(__dirname, 'existingFolder');
fs.access(folderToCheck, fs.constants.F_OK, (err) => {
  if (err) {
    console.error(`${folderToCheck} does not exist`);
  } else {
    console.log(`${folderToCheck} exists`);
  }
});

// Read the contents of a folder
const folderToRead = path.join(__dirname, 'myFolder');
fs.readdir(folderToRead, (err, files) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Contents of ${folderToRead}:`);
    files.forEach((file) => {
      console.log(file);
    });
  }
});

// // Remove a folder
// const folderToRemove = path.join(__dirname, 'myFolder');
// fs.rmdir(folderToRemove, (err) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(`Folder removed: ${folderToRemove}`);
//   }
// });