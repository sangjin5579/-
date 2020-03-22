const [A,B,C] = require('fs').readFileSync(0,'utf8').split(' ');

const netProfit = (+C)-(+B);

if(netProfit<=0){
    console.log(-1);
}else{
    console.log(Math.floor(+A/netProfit)+1);
}  