// Test code for Travis CI intro...

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!\n'); // build will pass or fail based on semicolon
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337');
