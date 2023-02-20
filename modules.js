var http = require("http");
var myModule =  require("./exportModule");

http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html"})
    res.write("The date and time is:"+ myModule.exportModule());
    res.end();
}).listen(8080)