let X = +require('fs').readFileSync(0,'utf8');

let sum = 0;
let N = 0;
while(true){
    N++;
    sum += N;

    if(X<=sum){
        break;
    }
}

let index = X - (sum-N);
let result = (N%2 === 1) ? `${N-index+1}/${index}` : `${index}/${N-index+1}`;

console.log(result);
