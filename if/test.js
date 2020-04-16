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



// function solution(number, k) {
//     var answer = '';
//     let arr = [...number];
//     let test = [];
//     arr = arr.sort(function(a,b){
//         return b - a;
//     })
//     for(let i=0;i<k;i++){
//         test.push(arr.pop());
//     }
//     for(let i=0;i<test.length;i++){
//         arr.splice
//         arr.splice()
//     }
//     answer = arr.join('');
//     return answer;
// }


function solution(people, limit) {
    var answer = 0;
    let cnt = 0;

    people.sort(function(a,b){
        return b-a
    })

    while(true){
        if(people.length === 0) break;
        cnt++;

        let max = people[0]
        people.splice(0,1);
        console.log(max);
        console.log(people);

        for(let j=0;j<people.length;j++){
            if(max + people[j] <= limit){
                people.splice(people.indexOf(people[j]),1);
                console.log('결과',people)
                continue;
            }
        }
    }
    
    answer = cnt;
    
    return answer;
}

console.log(solution([70, 50, 50, 50],100))