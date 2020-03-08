//풀이x
const [n, ...cases] = require('fs').readFileSync(0, 'utf8').trim().split('\n');

let arrs = [];
let result = [];

for(let i=0;i<n;i++){
    arrs[i] = [...cases[i]];
    result[i] = 0;

    let leng = arrs[i].length;
    for(let j=0;j<leng;j++){
        if(arrs[i][j] === 'O'){
            arrs[i][j] = (arrs[i][j-1]) ? arrs[i][j-1]+1 : 1;
        }else arrs[i][j] = 0;
        result[i] += arrs[i][j];
    }
    console.log(result[i]);  
}
