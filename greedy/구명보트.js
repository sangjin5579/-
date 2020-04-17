function solution(people, limit) {
    var answer = 0;
    let cnt = 0;

    people.sort(function(a,b){
        return b-a
    })

    while(true){
        if(people.length === 0) break;
        cnt++;

        let max = people[0]
        people.splice(0,1);

        for(let j=0;j<people.length;j++){
            if(max + people[j] <= limit){
                people.splice(people.indexOf(people[j]),1);
                break;
            }
        }
    }
    
    answer = cnt;
    
    return answer;
}

console.log(solution([70, 50, 80, 50],100))