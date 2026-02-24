const http = require('http');
const port = 5000;
http.createServer((req,res)=>{
    res.write("<h1>This is server.</h1>");
    res.end("hello world");
}).listen({port});