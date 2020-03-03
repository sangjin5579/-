//2438
const input = require("fs").readFileSync("/dev/stdin", "utf8").trim();
const caseCnt = parseInt(input);

let result = '';
let star = "";
for(let j=0;j<caseCnt;j++){
    star += " ";
}

for(let i=0;i<caseCnt;i++){
    star += '*'
    star = star.replace(' ','');  
    result += star + '\n';
}

console.log(result);