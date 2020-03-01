//2438
const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split('\n');
const caseCnt = parseInt(input[0]);

let result = '';
let star = '';
for(let i=1;i<=caseCnt;i++){
    star += '*'
    result += star + '\n';
}

console.log(result.trim());