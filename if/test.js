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


// function solution(name) {  
//     var answer = 0;
//     let arr = [];  
//     let direct = "right";  
    
//     for(let i=0,leng=name.length;i<leng;i++){
//         if(name[i] === 'A'){
//             arr[i] = 1;
//         }else arr[i] = 0;
//     }
    
//     console.log(arr);

//     let l = 0;
//     while(l<name.length){
//         l++
//         if(arr[name.length-l] === 0 && arr[l] === 0){
//             console.log(0)
//             continue;
//         }else if(arr[l] === 0){
//             console.log(1)
//             break;
//         }else if(arr[name.length-l] === 0){
//             direct = 'left';
//             console.log(2)
//             break;
//         }
//     }

//     console.log(direct);

//     func(direct)
//     function func(direct){
//         let code = name[0].charCodeAt(0);
//         let move = code - 65;

//         if(move > 12){
//             answer += 26-move;
//         }else{
//             answer += move;
//         }   

//         if(direct === "right"){
//             for(let i=1,leng=name.length;i<leng;i++){
//                 if(i !== leng-1) answer++;
//                 code = name[i].charCodeAt(0);
//                 move = code - 65;

//                 if(move > 12){
//                     answer += 26-move;
//                 }else{
//                     answer += move;
//                 }   
//             }
//         }else{
//             for(let i=name.length-1;i>0;--i){
//                 if(i !== 1) answer++;
//                 code = name[i].charCodeAt(0);
//                 move = code - 65;

//                 if(move > 12){
//                     answer += 26-move;
//                 }else{
//                     answer += move;
//                 }
//             }
//         }
//     }
//     return answer;
// }

// console.log(solution('JEROEN'));


//1231234, 3
function solution(number, k) {
    var answer = [...number];
    let arr = [...number];
    let sp = 0;

let cnt = 2;
    while(cnt > 0){
        let max = 0;

        console.log(answer)
        for(let i=sp;i<=sp+k;i++){
            if(max <= arr[i]) max = arr[i];
        }
        console.log(max)
        answer.splice(sp,arr.indexOf(max));
        k -= arr.indexOf(max)
        // let num = arr.indexOf(max);
        // for(let i=sp;i<num;i++){
        //     console.log(i)
        //     answer.splice(i,1);
        //     console.log(answer)
        //     --k;
        // }

        sp = arr.indexOf(max) + 1;
        console.log(k)
        console.log(sp)
        --cnt;
    }
    
    
    // let test = [];
    // arr = arr.sort(function(a,b){
    //     return b - a;
    // })
    // for(let i=0;i<k;i++){
    //     test.push(arr.pop());
    // }
    // for(let i=0;i<test.length;i++){
    //     arr.splice
    //     arr.splice()
    // }
    // answer = arr.join('');
    return answer;
}

console.log(solution("1231234", 3));