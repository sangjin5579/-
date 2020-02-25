//백준 10430
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let input1 = 0;
let input2 = 0;
let input3 = 0;

rl.on('line', function (line) {
    input = line.split(' ');
  })  
  .on('close', function () {
    input1 = parseInt(input[0])
    input2 = parseInt(input[1])
    input3 = parseInt(input[2])
    console.log(`${(input1+input2)%input3}
${(input1%input3+input2%input3)%input3}
${(input1*input2)%input3}
${(input1%input3 * input2%input3)%input3}`);
    process.exit();
  });

