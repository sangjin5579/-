const [x,y] = require('fs').readFileSync(0,'utf8').trim().split('\n');

let result = (x>0) ? (y>0) ? 1 : 4 : (y>0) ? 2 : 3;

console.log(result);



function solution(tickets) {
    var answer = [];
    let start = ticket[0][0];
    let end = '';
    
    answer.push(start);
    //["ICN"]
    
    while(ticket.length>=answer.length){
        start = end;
        for(let i=1,leng=ticket.length;i<=leng;i++){
            만약 티켓순회하는데 시작지점이 일치하면
            if(ticket[i][0] === start){
                우선 answer에 넣고
                answer.push(ticket[i][1]);
                //["ICN","SFO"]
                그 티켓의 끝지점이 경로에 존재하는지 
                if(answer.indexOf(ticket[i][1]) === -1){
                    answer에 없으면
                    end = ticket[i][1];
                    answer.push(end);
                }else{
                    answer에 존재하면
                    if(answer.indexOf(ticket[i][1])){
                       
                    }else{
                        
                    }
                }
                
            }
        }
    }
    return answer;
}