/*global require */

var http = require("http"),
    port = 8081;
var requestListener = require("requestListener");
http.createServer(requestListener).listen(8081);
console.log("Server is listening on", port);
