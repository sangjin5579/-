//8393
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let result = 0;

function validator(num) {
    return(num>=1
         &&num<=10000
         &&!isNaN(num))
         ? true : false
}

rl.on('line', data => {
    if(validator(parseInt(data))){
        for(let i=1;i<=parseInt(data);i++){
            result += i;
        }
        rl.close();
    }else console.log('1~10,000 사이의 정수를 입력해주세요');
}).on('close', () => {
    console.log(result);
    process.exit();
})