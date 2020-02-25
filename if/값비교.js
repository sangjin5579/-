const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let result = '';

function integerValidator(num1, num2) {
    return (num1 >= -10000 
         && num1 <=  10000 
         && num2 >= -10000 
         && num2 <=  10000
         && !isNaN(num1)
         && !isNaN(num2))
         ? true : false;
}

rl.on('line', line => {
    const input = [];
    input[0] = parseInt(line.split(' ')[0]);
    input[1] = parseInt(line.split(' ')[1]);
    if(integerValidator(input[0], input[1])){
        if(input[0] > input[1]) {
            result = '>';
        }
        else if(input[0] < input[1]) {
            result = '<';
        }
        else if(input[0] == input[1]) {
            result = '==';
        }
        rl.close();
    } else console.log('공백을 간격으로 하는 -10,000이상 10,000이하의 값을 입력해주세요.');
}).on('close', () => {
    console.log(result);
    process.exit();
});