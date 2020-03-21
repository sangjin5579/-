const scores = require('fs').readFileSync(0,'utf8').trim().split('\n');

console.log(scores.reduce((sum,score)=>{return sum+=(score<40)?40:+score},0)/5);