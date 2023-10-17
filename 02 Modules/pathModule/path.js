const path = require('path');

// path.join() - relative path
const relativePath = path.join('data','data.txt')
console.log(relativePath);

// path.resolve() - absolute path
const absolutePath = path.resolve('data','data.txt')
console.log(absolutePath);