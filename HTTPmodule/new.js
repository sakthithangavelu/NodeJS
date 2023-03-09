const http = require('http');

http.get('http://jsonplaceholder.typicode.com/posts', (res) => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on('data', (data) => {
    console.log(data.toString());
  });
}).on('error', (error) => {
  console.error(error);
});