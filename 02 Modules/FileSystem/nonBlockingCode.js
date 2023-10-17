const fs = require('fs');

// create file
fs.writeFile('data.txt', 'Sandip', (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("File has created")
    }
})


// append file
fs.appendFile('data.txt',' Kalekar',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Data appended")
    }
})


// read file
fs.readFile('data.txt',(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data.toString())
    }
})


// delete file
fs.unlink('data.txt', (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("File deleted")
    }
})

console.log("Async code");