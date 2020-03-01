//15552
// 실행: node Main.js
// 버전: v10.16.0
// 시간 제한: ×3+2초
// 메모리 제한: ×2MB


//정답
//"dev/stdin" = process.stdin.fd = 1 을 의미한다.
const data = require("fs").readFileSync("/dev/stdin", "utf8").trim().split('\n');
const dataLeng = data.length;
let result = '';
for(let i=1;i<dataLeng;i++){
    result += parseInt(data[i].split(' ')[0]) + parseInt(data[i].split(' ')[1]) + '\n';
}
console.log(result);


// process.stdin은 실패(이유모름)
// process.stdin.resume();
// process.stdin.setEncoding('utf8');

// var lineNum = 0;
// var caseNum = 0;
// var result = '';

// process.stdin.on('data', function (data) {
//     lineNum++;
//     if(lineNum === 1) {
//         caseNum = parseInt(data);
//     }else{
//         result += parseInt(data.split(' ')[0]) + parseInt(data.split(' ')[1]) + '\n';
//     }
//     process.stdin.resume();
// });

// process.stdin.on('end', function() { 
//     console.log(result.trim())    
// })




// readline 모듈은 시간초과
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//     prompt: ''
// })

// let lineNum = 0;
// let caseNum = 0;
// let caseArray = [];

// function validator(data) {
//     if(typeof data === 'number'){
//         return(data>=1
//              &&data<=1000000
//              &&!isNaN(data))
//              ? true : false
//     }else if(data instanceof Array){
//         for(let i=0;i<data.length;i++){
//             if(data[i]>=1 && data[i]<=1000 && !isNaN(data[i])){
//                 continue;
//             }else return false
//         }
//         return true
//     }else return false
// }

// rl.on('line', data => {
//     lineNum++;
//     if(lineNum === 1) {
//         if(validator(parseInt(data))) {
//             caseNum = parseInt(data);
//             rl.prompt();
//         }else console.log('최대 테스트 케이스 개수는 1,000,000개 입니다.');
//     } else {
//         const inputCase = [];
//         inputCase[0] = parseInt(data.split(' ')[0]);
//         inputCase[1] = parseInt(data.split(' ')[1]);

//         if(validator(inputCase)) {
//             caseArray.push(inputCase);
//         }else console.log('입력값은 공백으로 구분하며, 1이상 1000이하의 두 정수를 입력해주세요.');

//         (lineNum === caseNum+1) ? rl.close() : rl.prompt();
//     }
// }).on('close', () => {
//     for(let i=0;i<caseArray.length;i++){
//         console.log(caseArray[i][0] + caseArray[i][1]);
//     }
//     process.exit();
// })