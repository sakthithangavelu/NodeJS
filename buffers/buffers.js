const buffer = new Buffer.from("Sakthi")

//initialize the buffer passing the size - buffer.alloc()
// const buffer = Buffer.alloc(1024)
// //or
// const buffer = Buffer.allocUnsafe(1024)



console.log(buffer.toJSON());//each number logged in console are unicode charcater code for the string "Sakthi" 
console.log(buffer.toString());//You can print the full content of the buffer using the toString() method:


//buffer has limited memory so dispaly only till the previous memory occupied

buffer.write("CodingNode")//Changing the content of a buffer
console.log(buffer);
console.log(buffer.toString());


//A buffer, being an array of bytes, can be accessed like an array
console.log(buffer[0]) 
console.log(buffer[3]) 
console.log(buffer[5]) 

//length of buffer
console.log(buffer.length)


//Iterate over the contents of a buffer
for (const item of buffer) {
    console.log(item) 
  }