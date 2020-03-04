const n = require('fs').readFileSync("/dev/stdin", "utf8");

let str = '';
let sub = '';
let cycle = 0;

while(str !== n){


    cycle++;
}

if(n.length === 1){
    str = n+n
    console.log(str)
}else if(n.length === 2){
    let a = +n.substr(0,1);
    let b = +n.substr(1,1);
}
