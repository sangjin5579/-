//풀이x
// const [n, datas] = require('fs').readFileSync(0,'utf8').trim().split('\n');

// const arr = datas.split(' ');

// for(let i=0;i<n;i++){
//     arr[i] = +arr[i];
//     if(!m) var m = arr[i];
//     m = (arr[i] > m) ? arr[i] : m;
// }

// for(let i=0;i<n;i++){
//     arr[i] = arr[i]/m*100;
//     if(!sum) var sum = 0;
//     sum += arr[i];
// }

// console.log(sum/n);



//평균은 넘겠지 풀이x
const [n, ...cases] = require('fs').readFileSync(0,'utf8').trim().split('\n');

for(let i=0;i<+n;i++){
    let sn = +cases[i].split(' ')[0];
    let sum = 0;
    let overAvgN = 0;
    for(let j=1;j<=sn;j++){
        sum += +cases[i].split(' ')[j];
    }
    
    for(let j=1;j<=sn;j++){
        if(sum/sn < +cases[i].split(' ')[j]){
            overAvgN++;
        }
    }
    
    console.log((overAvgN / sn * 100).toFixed(3)+'%');
}