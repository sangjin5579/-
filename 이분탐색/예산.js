function solution(budgets, M) {
    var answer = 0;
    let sum = 0;
    let leng = budgets.length;
    
    budgets = budgets.sort((a,b)=>a-b);
    
    for(let i=0;i<leng;i++){
        sum += budgets[i];
    }

    if(sum<=M){
        answer = budgets[leng-1];
    }else{
        //min값을 최소값으로 할 경우 9번 케이스 오류가 발생한다.(최저예산이 평균예산보다 큰경우)
        let minStand = 0;
        let maxStand = budgets[leng-1];
        let limit = 0;
        //이분탐색을 수행할 경우 min,max,limit은 하나의 수에 수렴하므로 소수첫째까지 비교하였다.
        while(minStand.toFixed(1) !== maxStand.toFixed(1)){
            limit = (minStand+maxStand)/2;
            sum = 0;
            for(let i=0;i<leng;i++){
                sum += (budgets[i] < limit) ? budgets[i] : limit;
            }
            //총합이 예산보다 작을경우 상한가를 늘릴 수 있으므로
            if(sum <= M){
                //minStand 기준값을 상한가로 수정하여 반복한다.
                minStand = limit;
            }else{
            //총합이 예산보다 클경우 상한가를 낮추어야 하므로
                //maxStand 기준값을 상한가로 수정하여 반복한다.
                maxStand = limit;
            }
        }
        //예산은 자연수 이므로 내림하였다.
        answer = Math.floor(limit);
    }
    return answer;
}

console.log(solution([120, 110, 140, 150],485))