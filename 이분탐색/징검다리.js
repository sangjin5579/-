let collect = (n, leng) => {
    let result = [];
    function test(n, delIndex){
        for(let i=0;i<leng;i++){
            if(!delIndex.includes(i)){
                delIndex.push(i);
                --n;
                if(n === 0){
                    let sam = [];
                    for(let j=0;j<delIndex.length;j++){
                        sam[j] = delIndex[j];
                    }
                    result.push(sam);
                }else{
                    test(n, delIndex);
                }
                delIndex.pop();
                n++;
            }
        }
    }
    test(n,[]);
    return result;
}

let calcMin = (removeIndex, rocks, distance) => {
    let min = 100000;
    let last = 0;
    let reRocks = [];
    let dis = [];

    for(let i=0;i<rocks.length;i++){
        if(!removeIndex.includes(i)){
            reRocks.push(rocks[i]);
        }
    }

    for(let i=0;i<reRocks.length;i++){
        if(dis.length === 0){
            dis.push(reRocks[i]);
        }else if(dis.length > 0 && dis.length < reRocks.length-1){
            dis.push(reRocks[i]-reRocks[i-1]);
        }else {
            dis.push(reRocks[i]-reRocks[i-1]);
            last = reRocks[i];
        }
    }
    
    dis.push(distance-last)
    for(let i=0;i<dis.length;i++){
        min = (dis[i]<min) ? dis[i] : min;
    }
    return min
}

function solution(distance, rocks, n) {
    var answer = 0;

    rocks.sort((a,b) => {
        return a-b;
    })

    //빼는 경우의 수를 구한다.
    let removeIndexArr = collect(n,rocks.length);
    for(let i=0;i<removeIndexArr.length;i++){
        answer = (answer < calcMin(removeIndexArr[i], rocks, distance)) ? 
                  calcMin(removeIndexArr[i], rocks, distance) : answer;
    }
    return answer;
}


console.log(solution(25, [2, 14, 11, 21, 17], 2))