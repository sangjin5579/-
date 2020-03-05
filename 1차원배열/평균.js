//풀이x
const [n, datas] = require('fs').readFileSync(0,'utf8').trim().split('\n');

const arr = datas.split(' ');

for(let i=0;i<n;i++){
    arr[i] = +arr[i];
    if(!m) var m = arr[i];
    m = (arr[i] > m) ? arr[i] : m;
}

for(let i=0;i<n;i++){
    arr[i] = arr[i]/m*100;
    if(!sum) var sum = 0;
    sum += arr[i];
}

console.log(sum/n);
