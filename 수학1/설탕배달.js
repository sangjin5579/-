const n = require('fs').readFileSync(0,'utf8');
console.log((+n)%5)
console.log((+n)%5%3)
if((+n)%5%3 === 0){
    console.log( Math.floor((+n)/5) + (+n)%5/3);    
}else console.log(-1); 