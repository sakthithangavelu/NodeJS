const http = require('http');//application has access to the HTTP module, and is able to create a server

const hostname = '127.0.0.1';
const port = 3000;

//The createServer() method of http creates a new HTTP server and returns it.
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('HeLlO WoRlD');
});
//The server is set to listen on the specified port and host name
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});