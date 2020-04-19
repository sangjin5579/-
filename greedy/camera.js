function solution(routes) {
    var answer = 0;
    let routeIndex = 0;
    let min = 9999;
    let secMin = 9999;
    let point = 0;
    let cam = 0;
    let test = [];

    
    while(true){
        let j = routes.length;
        let index = 0;
        let imi = false;
        for(let i=0;i<j;i++){
            if(routes[i][0] < min){
                min = routes[i][0];
                point = routes[i][1];
                routIndex = i;

                if(imi){
                    test.shift();
                }else imi=true;

                index = i;
                test.push(toutes[i]);
            }
        }
        routes.splice(index,1);
    }


    for(let i=0;routes.length;i++){
        if(routes[i][0] < secmin){
            secMin = routes[i][0];
        }
    }
    return answer;
}


console.log(solution([[-20,15], [-14,-5], [-18,-13], [-5,-3]]))