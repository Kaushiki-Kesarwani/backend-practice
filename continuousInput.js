const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Enter something:");

rl.on('line', (input) => { //works like chat app
  console.log(`You typed: ${input}`);
  
});