let sample = [[-20,15], [-14,-5], [-18,-13], [-5,-3]];


function solution(routes) {
    var camera = 0;
    let fast;
    let sort = [];
    while(routes.length !== 0){
        for(let i=0;i<routes.length;i++){
            if(!fast){
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
        routes.splice(routes.indexOf(fast),1);
        fast = null;
    }

    let range;  
    for(let i=0;i<sort.length;i++){
        if(!range){
            range = sort[i];
            camera++;
        }else{
            //범위안에 들어온다면
            if(sort[i][0] < range[1]){
                //그리고, 뒷번호까지 범위안에 들어온다면,
                if(sort[i][1] < range[1]){
                    range[1] = sort[i][1];
                }
            }else{
                //범위안에 들어오지 않는다면
                range = sort[i];
                camera++;
            }
        }
    }
    
    return camera;
}

console.log(solution(sample));