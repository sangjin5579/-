// 백준 2588
//조건문은 되도록 큰범주에서 분기처리 하도록 하자.
//백준 알고리즘은 자동으로 close를 타면 안된다.
//rl.prompt()로 어떠한 표현도 하면 안됨..

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let cnt = 0;

rl.on('line', line => {
    if(line.length===3 && parseInt(line)>0){
        cnt++;
        if(cnt <= 2) {
            input[cnt-1] = line;
        } else rl.close();
    } else console.log('3자리 양의 정수를 입력해주세요.');
    
}).on('close', () => {
    let calc1 = parseInt(input[1].substr(input[1].length-1, 1)) * parseInt(input[0]);
    let calc2 = parseInt(input[1].substr(input[1].length-2, 1)) * parseInt(input[0]);
    let calc3 = parseInt(input[1].substr(input[1].length-3, 1)) * parseInt(input[0]);    
    
    console.log(calc1);
    console.log(calc2);
    console.log(calc3);
    console.log(calc3*100 + calc2*10 + calc1);
    process.exit();
});