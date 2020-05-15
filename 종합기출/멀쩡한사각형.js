let calcCommonNum = (num1, num2) => {
    let min = Math.min(num1, num2);
    for(let i=min;i>0;i--){
        if(num1%i === 0 && num2%i === 0){
          return i;  
        }
    }
}

function solution(w, h) {
    let total = w * h;
    let comNum = calcCommonNum(w,h);
    
    return total - (w+h-comNum);
}

console.log(solution(1,3))