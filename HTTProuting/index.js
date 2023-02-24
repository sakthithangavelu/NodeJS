const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") //req.url - gives access to url property   //req.method - gives access to the GET,POST,PUT,DELETE methods
  {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home Page");
  } 
  else if (req.url === "/SignIn") 
  {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("SignIn page");
  } 
  else if (req.url === "/api") 
  {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        firstName: "Sakthi",
        lastName: "Thangavelu",
      })
    );
  } 
  else 
  {
    res.writeHead(404);
    res.end("Page not found");
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
 