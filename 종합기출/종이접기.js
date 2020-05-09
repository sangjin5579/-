function solution(n) {
    var answer = [0];
    for(let h=1;h<n;h++){
        let testArr = [];
        for(let i=0;i<Math.pow(2,h);i++){
            if(i%2 === 0){
                testArr.push(0);
            }else{
                testArr.push(1);
            }
            if(answer.length !== 0){
                testArr.push(answer.shift());
            }
        }
        answer = [];
        for(let i=0;i<testArr.length;i++){
            answer[i] = testArr[i];
        }
        
    }
    
    return answer;
}
console.log(solution(3));