//2675
const [t, ...cases] = require('fs').readFileSync(0, 'utf8').trim().split('\n');

let result = '';
for(let i=0;i<t;i++){

    const test = [...cases[i].split(' ')[1]];
    for(let j=0,leng=test.length;j<leng;j++){
        for(let k=0;k<cases[i].split(' ')[0];k++){
            result += test[j]
        }
    }
    result += '\n';
}
console.log(result);