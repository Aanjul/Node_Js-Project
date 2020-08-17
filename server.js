var http = require('http');

var server = http.createServer(function(req, res){
    res.writeHead(200);
    res.end('Hi Evereryboodyyyyy');
});
server.listen(8080);