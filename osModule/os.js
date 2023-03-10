const os = require('os');


//Return the string that identifies the underlying architecture, like arm, x64, arm64.
const arch = os.arch();
console.log('Underlying Architecture:', arch);

// Return BE or LE depending if Node.js was compiled with Big Endian or Little Endian.
const endianess = os.endianness();
console.log('Endianess:',endianess);

//Return the number of bytes that represent the free memory in the system.
const freeMemory = os.freemem();
console.log('Free Memory:', freeMemory);


// Get the current user's home directory
const homeDir = os.homedir();
console.log('Home Directory:', homeDir);

// Get the host name
const hostName = os.hostname();
console.log('Host Name:', hostName);


// Get the total amount of system memory
const totalMemory = os.totalmem();
console.log('Total Memory:', totalMemory);

// Get the number of CPUs available
const numCPUs = os.cpus().length;
console.log('Number of CPUs:', numCPUs);

// Get the OS platform that node was compiled
const platform = os.platform();
console.log('Platform:', platform);

// Get the OS type
const type = os.type();
console.log('Type:', type);

// Get the OS release version
const release = os.release();
console.log('Release:', release);

//Returns the number of seconds the computer has been running since it was last rebooted.
const upTime = os.uptime();
console.log('Up Time:', upTime);

// Gets the users info
const userInfo = os.userInfo();
console.log('User Info:', userInfo);
