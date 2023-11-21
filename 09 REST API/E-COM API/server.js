// 1. Import Express
import express from 'express';

// 2. Create Server
const server = express();

// 3. Default Requiest Handler
server.get("/", (req,res)=>{
    res.send("Welcome to E-Commerce API")
})

// 4. Specify port
server.listen(3100, ()=>{
    console.log("Server is running on port 3100")
})