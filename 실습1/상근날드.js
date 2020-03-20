const input = require('fs').readFileSync('/dev/stdin','utf8').trim().split('\n');

let min_h = 99999999;
let min_s = 99999999;


min_h = (+input[0] < min_h) ? +input[0] : min_h;
min_h = (+input[1] < min_h) ? +input[1] : min_h;
min_h = (+input[2] < min_h) ? +input[2] : min_h;

min_s = (+input[3] < min_s) ? +input[3] : min_s;
min_s = (+input[4] < min_s) ? +input[4] : min_s;

console.log(min_h + min_s - 50);