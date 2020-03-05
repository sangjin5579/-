//10818
// const [n, data] = require('fs').readFileSync(0,'utf8').split('\n');

// const arr = data.split(' ');

// for(let i=0;i<n;i++){
//     if(!max || !min) {
//         var max = +arr[i];
//         var min = +arr[i];
//     }
//     max = (max < +arr[i]) ? +arr[i] : max;
//     min = (min > +arr[i]) ? +arr[i] : min;
// }

// console.log(min + ' ' + max);
//Math.max.apply(null,arr)로도 구할 수 있다.

//2562
const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');

const leng = input.length;
for(let i=0;i<leng;i++){
   input[i] = +input[i]
   if(!max) var max = input[i];
   max = (max < input[i]) ? input[i] : max;
}

console.log(`${max} ${input.indexOf(max)+1}`);