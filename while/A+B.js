//10952
const input = require('fs').readFileSync("/dev/stdin", "utf8").split('\n');
let result = '';

let i = 0;
while(true) {
    if(input[i].split(' ')[0]==0&&input[i].split(' ')[1]==0){
        break;
    }
    result += parseInt(input[i].split(' ')[0]) + parseInt(input[i].split(' ')[1]) + '\n';
    i++
}
console.log(result);
