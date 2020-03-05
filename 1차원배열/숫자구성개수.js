const [data1, data2, data3] = require('fs').readFileSync(0,'utf8').split('\n')

const cnt = [0,0,0,0,0,0,0,0,0,0];
let arr = [...(+data1 * +data2 * +data3).toString()];
const leng = arr.length;
for(let i=0;i<leng;i++){
    cnt[+arr[i]]++
}
for(let i=0;i<10;i++){
    console.log(cnt[i]);
}