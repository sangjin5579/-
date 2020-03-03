//10871
const input = require('fs').readFileSync("/dev/stdin", "utf8").split('\n');

const n = parseInt(input[0].split(' ')[0]);
const x = parseInt(input[0].split(' ')[1]);
let arr = input[1].split(' ');
let arr2 = [];

for(let i=0;i<n;i++){
    arr[i] = parseInt(arr[i]);
    if(arr[i]<x) arr2.push(arr[i]);
}

console.log(arr2.join(' '));
