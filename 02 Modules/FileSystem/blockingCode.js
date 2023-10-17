const fs = require('fs');

//create file
fs.writeFileSync('data.txt','first name: Sandip, ');

//append data
fs.appendFileSync('data.txt','last name: Kalekar');

//read file
const buffer = fs.readFileSync('data.txt',{encoding:'utf8'});
console.log(buffer);

//delete file
fs.unlinkSync('data.txt');