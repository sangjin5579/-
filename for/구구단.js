//2739

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let result = '';

function validator(num) {
    return(num>=1
         &&num<=9
         &&!isNaN(num))
         ? true : false
}

rl.on('line', data => {
    if(validator(parseInt(data))){
        for(let i=1;i<10;i++) {
           result += data + ' * ' + i + ' = ' + parseInt(data)*i + '\n'
        }
        rl.close();
    }else console.log('1~9의 자연수를 입력해주세요.');
}).on('close', () => {
    console.log(result);
    process.exit();
})