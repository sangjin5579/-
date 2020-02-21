
// var input = fs.readFileSync('/dev/stdin').toString().split('\n');

//콘솔에서는 close가 동작하지 않는다(EOF에 걸리지 않음) 
//콘솔 종료를 해야 close가 동작하게된다.
//IDE에서는 정상동작한다.
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
  })
  .on('close', function () {
    console.log(`${parseInt(input[0]) + parseInt(input[1])}
${parseInt(input[0]) - parseInt(input[1])}
${parseInt(input[0]) * parseInt(input[1])}
${parseInt(input[0]) / parseInt(input[1])}
${parseInt(input[0]) % parseInt(input[1])}`);
    process.exit();
  });

