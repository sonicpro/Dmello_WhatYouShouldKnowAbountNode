/*global require */

var express = require("express"),
    port = 8081,
    requestListener = require("requestListener"),
    app = express();

app.use(requestListener).listen(8081);
console.log("Server is listening on", port);
