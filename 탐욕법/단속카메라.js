let sample = [[-20,15], [-14,-5], [-18,-13], [-5,-3]];


function solution(routes) {
    var answer = 0;
    let fast = [];
    let sort = [];
    while(sample.length !== 0){
        for(let i=0;i<routes.length;i++){
            if(sort.length === 0){
                fast = routes[i];
            }else{
                if(fast[0] > routes[i][0]){
                    fast = routes[i];
                }else if(fast[0] === routes[i][0]){
                    fast = (fast[1] < routes[i][1]) ? routes[i] : fast;
                }
            }
        }
        sort.push(fast);
        sample.splice(sample.indexOf(fast),1);
        fast = [];
    }


    return answer;
}

console.log(solution(sample));