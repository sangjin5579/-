let testCase = "17"

let sosuValidator = (num) => {
    for(let i=2;i<num;i++){
        if(num % i === 0 || num === 1){
            return false;
        }
    }
    return true;
}

let makeNum = (numbers) => {
    console.log(numbers)
    let result = [];
    function test(usedId,currentNum){
        console.log(usedId)
        console.log(currentNum)

            for(let i=0;i<numbers.length;i++){
                if(!usedId.includes(i)){
                    usedId.push(i)
                    result.push(+(currentNum+numbers[i]));
                    test(usedId,currentNum+numbers[i]);
                }
            }
    }

    // for(let i=0;i<numbers.length;i++){
    //     result.push(+numbers[i]);
    //     for(let j=0;j<numbers.length;j++){
    //         if(j !== i){
    //             result.push(+(numbers[i]+number[j]))
    //             for(let k=0;k<numbers.length;k++){
    //                 if(k !== i && k !== j){
    //                     result.push(+(numbers[i]+number[j]+number[k]))
        
    //                 }
    //             }
    //         }
    //     }
    // }
    
    //중복제거한 후 return
    return [...new Set(test([],0))]
}

function solution(numbers) {
    var answer = 0;
    let createdNum = makeNum([...numbers]);
    console.log(createdNum)
    for(let i=0;i<createdNum.length;i++){
        if(sosuValidator(createdNum[i])){
            answer++;
        }
    }
    // for(let i=0;i<numbers.length;i++){
    //     let num = numbers[i];
    //     if(sosuValidator(+num)){
    //         if(sosu.indexOf(+num) === -1){
    //             sosu.push(+num);
    //         }
    //     }
    //     if(num.length < numbers.length){
    //             for(let i=0;i<numbers.length;i++){
    //                 let num = numbers[i];
    //                 if(sosuValidator(+num)){
    //                     if(sosu.indexOf(+num) === -1){
    //                         sosu.push(+num);
    //                     }
    //                 }
    //                 if(num.length < numbers.length){
            
    //                 }
    //             }
    //     }
    // }
    // numbers.sort((a,b)=>{
    //     return a-b;
    // })
    
    
    return answer;
}

console.log(solution(testCase))