const http = require('http')

http.get("http://jsonplaceholder.typicode.com/posts",resp => {
  let data = "";
  resp.on("data",chunk =>{
    data+= chunk
  })
  resp.on("end",()=>{
    let jsondata = JSON.parse(data)
    console.log(jsondata);
  })
})