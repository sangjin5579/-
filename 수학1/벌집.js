const N = +require('fs').readFileSync(0,'utf8');

let cycle = 1;
let endPoint = 1;

if(N === 1) console.log(cycle);

while(N !== 1){ 	
	cycle++
    endPoint += 6*(cycle-1);
    	
    if(N<=endPoint){
        console.log(cycle);
        break
    }
}