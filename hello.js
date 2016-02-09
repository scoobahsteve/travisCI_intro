//Commented code will not pass

// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World!\n') // this will FAIL travis ci lint
// }).listen(1337, '127.0.0.1');
// console.log('Server running at http://127.0.0.1:1337');

// Correct code to pass build

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!\n'); // build should pass now!
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337');
