const http = require('http');
const fs = require('fs'); // it is handle the files

const server = http.createServer((req,res) =>{
    fs.readFile('index.html', (err,data) =>{
        if(err){
            res.writeHead(500);
            res.end("<h1>Page not Found</h1>");
        }else{
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.end(data);
        }
    });
});

server.listen(8000, () =>{
    console.log("Server Running On Port Number 8000");
});