const [x,y] = require('fs').readFileSync(0,'utf8').trim().split('\n');

let result = (x>0) ? (y>0) ? 1 : 4 : (y>0) ? 2 : 3;

console.log(result);