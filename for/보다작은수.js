const [firstData, seq] = require('fs').readFileSync("/dev/stdin", "utf8").split('\n');

const n = parseInt(firstData.split(' ')[0]);
const x = parseInt(firstData.split(' ')[1]);
let result = '';

for(let i=0;i<n;i++){
    let data = parseInt(seq.split(' ')[i]);
    result += (data < x) ? data + ' ' : '';
}

console.log(result);



// const data = require('fs').readFileSync("/dev/stdin", "utf8").trim().split('\n');

// const n = parseInt(data[0].split(' ')[0]);
// const x = parseInt(data[0].split(' ')[1]);
// let result = '';

// for(let i=0;i<n;i++){
//     let data = parseInt(seq.split(' ')[i]);
//     result += (data < x) ? data + ' ' : '';
// }

// console.log(data)