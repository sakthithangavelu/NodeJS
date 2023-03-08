#!/usr/bin/env node                 
//shebang line- which tell the os which interpreter to be used

const args = process.argv.slice(2); //process.argv array contains the command-line arguments passed to the script
                                    //slice(2) method is used to remove the first two arguments, which are the Node.js executable and the path to the script file itself. The remaining arguments are stored in the args array.


const name = args[0] || 'World';
console.log(`Hello, ${name}!`);   
//   chmod +x index.js
//   ./index.js Sakthi