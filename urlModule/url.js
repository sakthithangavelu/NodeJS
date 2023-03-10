const url = require("url");

// Parse a URL string into its components
const urlString = "https://www.example.com/search?q=node.js&limit=10&page=1";
const urlObject = url.parse(urlString);

console.log(urlObject);
console.log(urlObject.protocol); // 'https:'
console.log(urlObject.host); // 'www.example.com:8080'
console.log(urlObject.pathname); // '/path/to/resource'
console.log(urlObject.query); // 'query=string'
console.log(urlObject.hash); // '#hash'

// Create a URL object from its components
const newUrlObject = {
  protocol: "http:",
  host: "localhost:3000",
  pathname: "/users",
  query: { name: "Sakthi", age: 21 },
};
//format() returns formatted url\String
const newUrlString = url.format(newUrlObject);
console.log(newUrlString);
