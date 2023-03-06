const fs =  require("node:fs")
console.log("first");//readFileSync - reads the file in synchronous way
const fileContents = fs.readFileSync("./file.txt","utf-8")//utf-8 - encoding standard hepls to convert the logged txt as human readble
console.log(fileContents);


console.log("second");//readFile - for asynchronous callbacks and reading
fs.readFile("./file.txt","utf-8",(error,data) => {//error-first-callback
    if(error){
        console.log(error);
    }
    else{
        console.log(data);
    }
})


console.log("third");//writeFileSync - writes content in to the file
fs.writeFileSync("./fileNew.txt","Hi Joy");

//writeFile - asynchronous approach
fs.writeFile("./fileNew.txt"," Hi Joy",{flag :"a"},(err)=> {  //flag is used to append the txt in the mentioned file
    if(err){
        console.log(err);
    }else{
        console.log("File Written");
    }
});