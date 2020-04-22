const [A,B,V] = require('fs').readFileSync(0,'utf8').split(' ');

let per = +V/(+A - +B);
let nam = +V%(+A - +B);
let result = 0;


result = (nam === 0) ? --per : Math.ceil(per);



console.log(result);  