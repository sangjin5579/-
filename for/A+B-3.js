//10950
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: ''
})

let lineNum = 0;
let caseNum = 0;
let caseArray = [];

function validator(data) {
    if(typeof data === 'number'){
        return(data>=1
            &&!isNaN(data))
            ? true : false
    }else if(data instanceof Array){
        for(let i=0;i<data.length;i++){
            if(data[i]>=1 && !isNaN(data[i])){
                continue;
            }else return false
        }
        return true
    }else return false
}

rl.on('line', data => {
    lineNum++;
    if(lineNum === 1) {
        if(validator(parseInt(data))) {
            caseNum = parseInt(data);
            rl.prompt();
        }else console.log('테스트 케이스 수를 입력해주세요.');
    } else {
        const inputCase = [];
        inputCase[0] = parseInt(data.split(' ')[0]);
        inputCase[1] = parseInt(data.split(' ')[1]);

        if(validator(inputCase)) {
            caseArray.push(inputCase);
        }else console.log('입력값은 공백으로 구분하며, 1~9의 두 정수를 입력해주세요.');

        (lineNum === caseNum+1) ? rl.close() : rl.prompt();
    }
}).on('close', () => {
    caseArray.forEach(inputCase => console.log(inputCase[0] + inputCase[1]))
    // for(let i=0;i<caseArray.length;i++){
    //     console.log(caseArray[i][0] + caseArray[i][1]);
    // }
    process.exit();
})