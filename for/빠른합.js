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



// const NS_PER_SEC = 1e9;
// const MS_PER_NS = 1e-6;
// const S_PER_NS = 1e-9;
// const time = process.hrtime();
// //로직
// const diff = process.hrtime(time);
// console.log(`Benchmark took ${diff[0] * NS_PER_SEC + diff[1]} NS`);
// console.log(`Benchmark took ${ (diff[0] * NS_PER_SEC + diff[1])  * MS_PER_NS } MS`);
// console.log(`Benchmark took ${ (diff[0] * NS_PER_SEC + diff[1])  * S_PER_NS } S`);

process.stdin.resume();
process.stdin.setEncoding('utf8');

let lineNum = 0;
let caseNum = 0;
let caseArray = [];

process.stdin.on('data', function (data) {
    lineNum++;
    if(lineNum === 1) {
        // if(validator(parseInt(data))) {
            caseNum = parseInt(data);
            // rl.prompt();
        // }else console.log('최대 테스트 케이스 개수는 1,000,000개 입니다.');
    } else {
        console.log(parseInt(data.split(' ')[0]) + parseInt(data.split(' ')[1]))
        //const inputCase = [];
        //inputCase[0] = parseInt(data.split(' ')[0]);
        //inputCase[1] = parseInt(data.split(' ')[1]);
        // if(validator(inputCase)) {
            //caseArray.push(inputCase);
        // }else console.log('입력값은 공백으로 구분하며, 1이상 1000이하의 두 정수를 입력해주세요.');

        // (lineNum === caseNum+1) ? process.kill(process.pid,'SIGINT') : process.stdin.resume()
        // process.stdin.end();
    }
});

// process.stdin.on('end', function(){
//     for(let i=0;i<caseArray.length;i++){
//         // process.stdout.write(`${caseArray[i][0] + caseArray[i][1]}\n`);
//         console.log(caseArray[i][0] + caseArray[i][1]);
//     }
//     process.exit(0);
// })







// process.stdin.resume();
// process.stdin.setEncoding('utf8');

// let lineNum = 0;
// let caseNum = 0;
// let caseArray = [];

// process.stdin.on('data', function (data) {
//     lineNum++;
//     // console.log(data)
//     if(lineNum === 1) {
//         caseNum = parseInt(data);
//         for(let i=1;i<=caseNum;i++){
//             const inputCase = [];
//             inputCase[0] = i
//             inputCase[1] = i
//             caseArray.push(inputCase);
//         }
//         process.stdin.end()
//         // process.kill(process.pid,'SIGINT')
//     } else {

//         // (lineNum === caseNum+1) ? process.kill(process.pid,'SIGINT') : process.stdin.resume()
//     }
// });
// process.stdin.on('end', function(){
//     for(let i=0;i<caseArray.length;i++){
//         // process.stdout.write(`${caseArray[i][0] + caseArray[i][1]}\n`);
//         console.log(caseArray[i][0] + caseArray[i][1]);
//     }
//     process.exit(0);
// })

// process.on('SIGINT', function(){
//     // process.stdout.write(`${inputCase}`)
//     //console.log(caseArray)
//     for(let i=0;i<caseArray.length;i++){
//         // process.stdout.write(`${caseArray[i][0] + caseArray[i][1]}\n`);
//         console.log(caseArray[i][0] + caseArray[i][1]);
//     }
//     process.exit(0);
// });