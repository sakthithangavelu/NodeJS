const path = require("path")

console.log(__filename);//__filename is a string represents full path of the file where index.js is located
console.log(__dirname);//__filename is a string represents full path of the folder where index.js is located

console.log(path.basename(__filename));//last portion of __filename
console.log(path.basename(__dirname));//last portion of __dirname

console.log(path.extname(__filename));
console.log(path.extname(__dirname));

console.log(path.parse(__filename));//returns all the above details in an "object" format and we can access it with dot(.) as we do it for objects
console.log(path.format(path.parse(__filename)));//returns original path 

console.log(path.isAbsolute(__filename));//return true if absolute and false if relative
console.log(path.isAbsolute("../ImportingJSON/data.json"));//   "./" is relative so it retuns false

//path.join - for simple concatenation
console.log(path.join("NodeJS","built-inModules","index.js"));
console.log(path.join("/NodeJS","built-inModules","index.js"));
console.log(path.join(__dirname,"data.json"));
console.log(".............................");

//path.resolve
console.log(path.resolve("NodeJS","built-inModules","index.js"));//if folder name do not contain slash at beginning it logs the absolute path to current folder and join the arguments
console.log(path.resolve("/NodeJS","built-inModules","index.js"));
console.log(path.resolve(__dirname,"data.json"));

