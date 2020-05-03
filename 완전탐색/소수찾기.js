let testCase = "011"

let sosuValidator = (num) => {
    if(num === 0 || num === 1){
        return false;
    }
    for(let i=2;i<num;i++){
        if(num % i === 0 && num !== 2){
            return false;
        }
    }
    return true;
}

let makeNum = (numbers) => {
    let result = [];
    function test(usedId,currentNum){
        for(let i=0;i<numbers.length;i++){
            if(!usedId.includes(i)){
                usedId.push(i)
                result.push(+(currentNum+numbers[i]));
                test(usedId, currentNum+numbers[i]);
                usedId.pop();
            }
        }
    }
    test([],0);

    return [...new Set(result)]
}

function solution(numbers) {
    var answer = 0;
    let createdNum = makeNum([...numbers]);

    for(let i=0;i<createdNum.length;i++){
        if(sosuValidator(createdNum[i])){
            answer++;
        }
    }
    
    return answer;
}

console.log(solution(testCase))