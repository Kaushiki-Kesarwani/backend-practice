const http = require('http');

http.createServer((req,res)=>{
    
    console.log(req.url);
    console.log(req.method);
    console.log(res.headers);

    if(req.url =="/"){
        res.write("<h2>Home page</h2>");
    }
    else if(req.url=="/login"){
        res.write("<h2>Login page</h2>");
    }

     else if(req.url== "/sign"){
        res.write("<h2>Login page</h2>");
    }

    else{
       res.write("<h2>other page</h2>"); 
    }

res.end("Hey hello!");
}).listen(6000,()=>{
    console.log("Server running at 6000")});
