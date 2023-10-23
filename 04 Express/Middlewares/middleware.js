const express = require('express');

// Create server
const app = express();

// Middleware / request handler: It has access to req, res, next 
app.get('/',(req, res, next)=>{
    console.log('This is first middleware.')
    next();    // to call next middleware as it is not ending response
})

function secondMiddleware(req, res, next){
    console.log('This second middleware.')
    next();
}

function thirdMiddleware(req, res, next){
    console.log('This third middleware.')
    next();
}

// .get(path, reqHandler or array of reqHandlers)
app.get('/', [thirdMiddleware, secondMiddleware],(req, res)=>{
    res.send('Welcome to express server');
})


// Middleware for all req irrespective of path
function appMiddleware(req, res, next){
    console.log('This is application level middleware. Will get called irrespective of path/req.')
    next();
}

app.use(appMiddleware);

app.listen(3200, ()=>{
    console.log('Server is listening on 3200.')
})