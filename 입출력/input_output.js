
// var input = fs.readFileSync('/dev/stdin').toString().split('\n');

//콘솔에서는 close가 동작하지 않는다(EOF에 걸리지 않음) 
//콘솔 종료를 해야 close가 동작하게된다.
//IDE에서는 정상동작한다.

//Number() 와 parseInt() 차이
// 둘다 모두 정수로 형변환, number는 숫자가 아닌경우 NaN return, parseInt는 동일하지만 문자열이 숫자로 시작할 경우 끝나는 지점까지 정수 return
//몫 계산의 경우(/) 정수간 나눗셈을 하면 부동소수가 나올 수 있으므로, 결과값에 대하여 다시 형변환을 해준다.
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input[0] = parseInt(line.split(' ')[0]);
    input[1] = parseInt(line.split(' ')[1]);
    rl.close();
}).on('close', function () {
    console.log(input[0] + input[1]);
    console.log(input[0] - input[1]);
    console.log(input[0] * input[1]);
    console.log(parseInt(input[0] / input[1]));
    console.log(input[0] % input[1]);
    process.exit();
});

