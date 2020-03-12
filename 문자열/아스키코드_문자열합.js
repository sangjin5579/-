//console.log(require('fs').readFileSync(0,'utf8').charCodeAt(0));

//11720
const [n, data] = require('fs').readFileSync(0,'utf8').trim().split('\n');

let result = 0;
for(let i=0;i<n;i++){
    if(!arr) var arr = [...data];
    result += +arr[i];
}

console.log(result);