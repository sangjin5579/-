const tickets = [["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL", "SFO"]];

function solution(tickets) {
    var answer = [];
    let start = 'ICN';
    
    answer.push(start);
    
    while(tickets.length !== 0){
        let exist = false;
        let ticketIndex = 0;
        for(let i=0,leng=tickets.length;i<leng;i++){
            if(tickets[i][0] === start){
                if(!exist){
                    answer.push(tickets[i][1]);
                    ticketIndex = i;
                    exist = true;
                }else{
                    if(answer[answer.length-1].charCodeAt(0) > tickets[i][1].charCodeAt(0)){
                        answer.pop();
                        answer.push(tickets[i][1]);
                        ticketIndex = i;
                    }else if(answer[answer.length-1].charAt(0) === tickets[i][1].charAt(0)){
                        if(answer[answer.length-1].charCodeAt(1) > tickets[i][1].charCodeAt(1)){
                            answer.pop();
                            answer.push(tickets[i][1]);
                            ticketIndex = i;
                        }else if(answer[answer.length-1].charAt(1) === tickets[i][1].charAt(1)){
                            if(answer[answer.length-1].charCodeAt(2) > tickets[i][1].charCodeAt(2)){
                                answer.pop();
                                answer.push(tickets[i][1]);
                                ticketIndex = i;
                            }
                        }
                    }
                }
            }
        }
        start = answer[answer.length-1];
        tickets.splice(ticketIndex,1);
    }
    return answer;
}

console.log(solution(tickets));