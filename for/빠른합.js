//15552
// 실행: node Main.js
// 버전: v10.16.0
// 시간 제한: ×3+2초
// 메모리 제한: ×2MB

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




// process.stdin.setEncoding('utf8');

// process.on('beforeExit', (code) => {
//     console.log('Process beforeExit event with code: ', code);
//   });
  
//   process.on('exit', (code) => {
//     console.log('Process exit event with code: ', code);
//   });
  
//   console.log('This message is displayed first.');
  
// process.stdin.on('readable', () => {
//   let chunk;
//   // Use a loop to make sure we read all available data.
//   while ((chunk = process.stdin.read()) !== null) {
//     process.stdout.write(`data: ${chunk}`);
//   }
//     process.stdin.end();  
// });

// process.stdin.on('end', () => {
//     console.log("end이벤트 발생")
//   process.stdout.write('end');
// });

// const startUsage = process.cpuUsage();
// // { user: 38579, system: 6986 }

// // spin the CPU for 500 milliseconds
// const now = Date.now();
// while (Date.now() - now < 500);

// console.log(process.cpuUsage(startUsage));
// { user: 514883, system: 11226 }