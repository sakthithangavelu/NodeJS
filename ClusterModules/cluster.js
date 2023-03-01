const cluster = require("node:cluster");//cluster module increases performance improvement
const http = require ("node:http");


if(cluster.isMaster){
    console.log(`Master process ${process.pid} is running`);
    cluster.fork(); //worker 1
    cluster.fork(); //worker 2

}else{
    console.log(`Worker ${process.pid} started`);
    const server = http.createServer((req,res)=>{
        if(req.url == "/"){
            res.writeHead(200,{"Content-Type":"text/plain"})
            res.end("Home page");
        }else if(req.url==="/slow-page"){
            for (let i =0 ; i < 6000000000 ; i++ ) {}//simulate cpu work
            res.writeHead(200,{"Content-Type":"text/plain"})
            res.end("Slow Page");
        }
    })
    server.listen(8000,()=>console.log("Server is running on port 8000"));
}