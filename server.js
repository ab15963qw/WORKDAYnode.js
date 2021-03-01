var http = require("http");//第一行請求（require）Node.js自帶的 http 模組，並且把它賦值給 http 變數。

//接下來我們執行http模組提供的函數： createServer 。這個函數會回傳一個物件，這個物件有一個叫做 listen 的方法，這個方法有一個數值參數，指定這個HTTP伺服器監聽的埠號號。

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World"); 
  response.end();
}).listen(8888);//port 8888 可以修改port 位置，如果port有被佔用
