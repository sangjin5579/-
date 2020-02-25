const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let whetherLeapYear = 0;

function integerValidator(year) {
    return (year >= 1 
         && year <= 4000
         && !isNaN(year))
         ? true : false;
}

rl.on('line', year => {
    if(integerValidator(parseInt(year))){
        if((year%4 === 0 && year%100 != 0) || year%400 === 0) whetherLeapYear = 1;
        rl.close();
    } else console.log('연도는 1이상 4000이하의 자연수를 입력해주세요.');
}).on('close', () => {
    console.log(whetherLeapYear);
    process.exit();
});