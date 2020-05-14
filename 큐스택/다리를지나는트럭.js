

function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    //현재 다리 상태
    let queue = [];

    let queueSum = 0;

    for(let i=0;i<bridge_length;i++){
        queue.push(0);
    }

    let nowTruck = truck_weights.shift();
    
    //큐에 트럭무게 앞에 넣고 한칸씩 밀기
    queue.unshift(nowTruck);
    queue.pop();

    //다리무게 증가
    queueSum += nowTruck;

    //시간증가
    answer++

    //다리 무게가 없어진 시점에서 다 끝난 것임
    while(queueSum){
        // 지나간 트럭 큐(다리) 및 무게 제거하고
        queueSum -= queue.pop();
        // 안건넌 트럭 가져와 담고
        nowTruck = truck_weights.shift();
        
        //다리에 추가할 수 있다면 큐(다리)에 추가하고 다리 무게 증가 
        if(queueSum+nowTruck <= weight){
            queue.unshift(nowTruck);
            queueSum += nowTruck;   
        }else{
            // 추가할 수 없다면 다리에 0을 넣고 nowTruck 출발지점에 돌려놓기
            queue.unshift(0);
            truck_weights.unshift(nowTruck);
        }
    }

    return answer;
}


console.log(solution())