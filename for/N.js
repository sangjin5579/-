//2741
// const input = require("fs").readFileSync("/dev/stdin", "utf8").trim()

// let result = '';
// for(let i=0;i<parseInt(input);i++){
//     result += i + '\n';
// }

// console.log(result);



//2742
// const input = require("fs").readFileSync("/dev/stdin", "utf8").trim()

// let result = '';
// for(let i=0;i<parseInt(input);i++){
//     result += parseInt(input) - i + '\n';
// }

// console.log(result.trim());


//11021
// const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split('\n');
// const inputLeng = input.length;

// let result = '';
// for(let i=1;i<inputLeng;i++){
//     result += `Case #${i}: ${parseInt(input[i].split(' ')[0])+parseInt(input[i].split(' ')[1])}}\n`;
// }

// console.log(result.trim());

//11022
const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split('\n');
const inputLeng = input.length;

let result = '';
for(let i=1;i<inputLeng;i++){
    result += `Case #${i}: ${parseInt(input[i].split(' ')[0])} + ${parseInt(input[i].split(' ')[1])} = ${parseInt(input[i].split(' ')[0])+parseInt(input[i].split(' ')[1])}\n`;
}

console.log(result.trim());