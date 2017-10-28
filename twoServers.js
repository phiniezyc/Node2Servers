// Require/import the HTTP module
var http = require("http");


var PORT1 = 7000;
var PORT2 = 7500;


function handleRequest1(request, response) {

  response.end("YOU ARE SO WISE: " + request.url);
}


var server1 = http.createServer(handleRequest1);

server1.listen(PORT1, function() {

 
  console.log("Server listening on: http://localhost:" + PORT1);
});









function handleRequest2(request, response) {

  
  response.end("YOU NEED TO STUDY MORE: " + request.url);
}


var server2 = http.createServer(handleRequest2);


server2.listen(PORT2, function() {

  
  console.log("Server listening on: http://localhost:" + PORT2);
});