//create web server
var http = require('http');
//create web server
var server = http.createServer(function(req, res){
  //process request
  var url = req.url;
  //process response
  res.writeHeader(200, {
    'content-type': 'text/html;charset=utf-8'
  });
  res.write('你好');
  res.end();
});
//listen port
server.listen(8080, 'localhost');