const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let result = '';

function validator(num) {
    return (num >= 0 
         && num <= 100
         && !isNaN(num))
         ? true : false;
}

rl.on('line', data => {
    if(validator(parseInt(data))){
        if   (data>=90 && data<=100) result = 'A';
        else if(data>=80 && data<90) result = 'B';
        else if(data>=70 && data<80) result = 'C';
        else if(data>=60 && data<70) result = 'D';
        else result = 'F';
        rl.close();
    } else console.log('0이상 100이하의 양의 정수를 입력해주세요.');
}).on('close', () => {
    console.log(result);
    process.exit();
});