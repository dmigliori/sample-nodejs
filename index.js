var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
//  res.write(req.url);
  res.end(req.url + "888");
}).listen(8080);
