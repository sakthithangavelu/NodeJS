const buffer = new Buffer.from("Sakthi")
console.log(buffer.toJSON());//each number logged in console are unicode charcater code for the string "Sakthi" 


buffer.write("CodingNode")//buffer has limited memory so dispaly only till the previous memory occupied
console.log(buffer);
console.log(buffer.toString());
