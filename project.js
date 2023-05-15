var http = require('http'); 
 
http.createServer(function (req, res) { 
  res.writeHead(200, {'Content-Type': 'text/plain'}); 
  res.end('COM229!'); 
}).listen(8080);

module.exports = createServer;
