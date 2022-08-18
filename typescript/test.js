"use strict";
exports.__esModule = true;
var http = require("http");
var id = 1;
id = 2;
console.log(id);
http.createServer(function (req, res) {
    if (req.url === "/hello" && req.method === 'GET') {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end("Hello");
    }
}).listen(3000, function () { return console.log("Server is listening on port 3000"); });
