const express = require('express');

// Crateing express server
const server = express();

// Handle default requests
server.get("/",(req,res)=>{
    res.send("Welcome to Express Server")
});

// Listen on specified port
server.listen(3100,()=>{
    console.log("Server is listening on port 3100.")
})