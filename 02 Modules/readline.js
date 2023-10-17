// Import readline module
const readline = require('readline');

// Create interface to connect with terminal
const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Reading Values second arg is of string type
interface.question("Enter first number: ", (num1)=>{
    interface.question("Enter second number: ",(num2)=>{
        const sum = Number(num1) + Number(num2);
        console.log(`The Sum of ${num1} and ${num2} is ${sum}.`);
    })
})