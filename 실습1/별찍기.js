//
// const n = require('fs').readFileSync(0,'utf8');

// let result = '';

// for(let i=1;i<=2*n-1;i++){
//     if(i<=n){
//         for(let j=0;j<i;j++){
//             result += '*';
//         }
//     }else{
//         for(let j=0;j<n*2-i;j++){
//             result += '*';
//         }
//     }
//     result += '\n';
// }

// console.log(result.trim());


//
// const n = require('fs').readFileSync(0,'utf8');

// let result = '';

// for(let i=1;i<=2*n-1;i++){
//     if(i<=n){
//         for(let j=0;j<i-1;j++){
//             result += ' ';
//         }
//         for(let j=0;j<2*n-1-2*(i-1);j++){
//             result += '*';
//         }
//     }else{
//         for(let j=0;j<2*n-1-(i);j++){
//             result += ' ';
//         }
//         for(let j=0;j<2*(i-n)+1;j++){
//             result += '*';
//         }
//     }
//     result += '\n';
// }

// console.log(result.trim());


//
// 1.stdin을 호출하여 입력값 N을 받습니다.
const n = require('fs').readFileSync(0,'utf8');

// 2.한번에 결과값을 출력하기 위하여 String타입의 result변수를 선언합니다.
let result = '';

// 3. 값 n에 따라서 별찍기 줄의 수가 첫째줄을 제외하고 등차수열 이룹니다(1,4,6,8). 따라서 n값이 1인경우와 아닌경우로 나눠야함
if(n>1){
	 //줄수만큼 순회
    for(let l=1;l<=2*n;l++){
        //줄수l이 짝수일 경우 첫째줄에 공백 추가 나머지는 그냥 진행
        //홀수일 경우
        if(l%2){
            for(let s=0;s<Math.ceil(n/2);s++){
                result += '* ';
            }
        }else{
            for(let s=0;s<Math.floor(n/2);s++){
                result += ' *';
            }
        }
        result += '\n'; 
    }
}else{
    result += '*';
}

console.log(result.trim());