const n = +require('fs').readFileSync(0,'utf8');

let a = 0;
while(true){
    if(n-3*a<0){
        console.log(-1)
        break;
    }else if((n-3*a)%5 === 0){
        console.log(a+(n-3*a)/5);
        break;
    }

    a++
}