function solution(n) {
    var answer = '';
    let p = 0;//자리수
    while(true){
        let sum = 0;
        //모든 자리수에 0이상의 값이 존재해야 한다. 따라서 자리수별 최대값을 넣어 조건을 만족하는 자리수 p를 구함.
        for(let i=0;i<p;i++){
            //자리당 3까지 증가할 수 있으므로 3을 곱하여 더해준다. 
            sum += Math.pow(3,i)*3;
        }
        
        if(n > sum){
            p++
        }else break;
    }
    
    console.log(p)
    let arr = [];
    //[1,3] 재귀 돌려야함
    for(let i=p;i>0;i--){
        console.log('초기n:'+n)
        console.log('자리수 p'+i)
        let val = Math.floor(n/Math.pow(3,i-1));
        console.log('n을 나눈 몫'+val)
        
        if(val === 0){
            let prev = arr.pop();
            if(prev === 3)
            i++
        }else{
            arr.push(val)
            n -= val*Math.pow(3,i-1);
            
        }
    }
    return answer;
}

console.log(solution(6))