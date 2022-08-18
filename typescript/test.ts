import * as http from 'http'
let id: number = 1;
id = 2

console.log(id)
http.createServer((req, res) => {
    if (req.url === "/hello" && req.method === 'GET') {
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end("Hello");
    }
}).listen(3000, () => console.log("Server is listening on port 3000"));