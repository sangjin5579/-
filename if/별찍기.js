//2523
const n = require('fs').readFileSync(0,'utf8');

let result = '';

for(let i=1;i<=2*n-1;i++){
    if(i<=n){
        for(let j=0;j<i;j++){
            result += '*';
        }
    }else{
        for(let j=0;j<n*2-i;j++){
            result += '*';
        }
    }
    result += '\n';
}

console.log(result.trim());