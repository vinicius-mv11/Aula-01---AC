var http = require('http');

http.createServer(function(req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' });
  res.end('Servidor criado em node.js!\n');
}).listen(3000, () => console.log('server started'))