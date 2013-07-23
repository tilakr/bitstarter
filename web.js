var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    buf = fs.readFileSync('index.html');
    response.end(buf.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
