var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World"); 
  response.end();
}).listen(8888);//port 8888 可以修改port 位置，如果port有被佔用
