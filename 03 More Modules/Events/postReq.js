const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.method=='POST'){
        // expecting a data from client
        let body ='';

        req.on('data',(chunk)=>{
            body+=chunk.toString();
        });

        req.on('end',()=>{
            console.log(body);
            res.end("Data Received Successfully.")
        });

    } else{
        res.end("Welcome to node js")
    }
})

server.listen(3100,()=>{
    console.log("Server running on port 3100")
});