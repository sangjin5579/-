const n = require('fs').readFileSync("/dev/stdin", "utf8").trim();

let str = n;
let cycle = 0;

while(+str!==+n || cycle===0){
    if(+str < 10){
        str = (+str*10 + +str).toString();
    }else{
        let a = +(str.substr(0,1));
        let b = +(str.substr(1,1));
        let sum = a+b;
        str = (sum < 10) ? 
            str = b.toString() + sum.toString() :
            str = b.toString() + sum.toString().substr(1,1);
    }
    cycle++;
}

console.log(cycle);