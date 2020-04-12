// const lost = [2,3,4];
// const n =7;
// const reserve = [1,2,3,6];

// function solution(n, lost, reserve) {
//     var answer = n;
//     for(let i=0,leng=lost.length;i<leng;i++){
//         console.log(lost)
//         console.log(reserve)
//         if(reserve[reserve.indexOf(lost[i])]){
//             reserve.splice(reserve.indexOf(lost[i]), 1);
//         }else if(reserve[reserve.indexOf(lost[i]-1)]){
//             reserve.splice(reserve.indexOf(lost[i]-1), 1);
//         }else if(reserve[reserve.indexOf(lost[i]+1)]){
//             reserve.splice(reserve.indexOf(lost[i]+1), 1);
//         }else --answer;
//     }
//     return answer;
// }

// console.log(solution(n,lost,reserve));


function solution(name) {
    var answer = 0;
    for(let i=0,leng=name.length;i<leng;i++){
        let code = name[i].charCodeAt(0);
        let move = code - 65;
        if(move > 12){
            console.log(26-move)  
            answer += 26-move;
            
        }else{
            console.log(move)
            answer += move;
        }

        if(i !== leng-1) answer++;

    }
    return answer;
}

console.log(solution('JAZ'));