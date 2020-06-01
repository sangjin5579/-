function solution(n, results) {
    var answer = 0;
    let records = [];
    for(let i=0,leng=results.length;i<leng;i++){
        let winner = results[i][0];
        let loser = results[i][1];
        
        if(!records[winner]){
            records[winner] = {win:[], lose:[]};
        }//[4:{win:[3], lose:[]}]
        records[winner].win.push(loser);
        
        if(!records[loser]){
            records[loser] = {win:[], lose:[]};
        }//[3:{win:[], lose:[4]}]
        records[loser].lose.push(winner);
    }
    
    for(let i=0,leng=records.length;i<leng;i++){
        let cnt = {s:0,w:0};
        let list = [];
        //선수가 존재한다면
        // i: {win:[...], lose:[...]}
        if(records[i]){
            cntStronger(cnt, records, records[i].lose, list);
            cntWeaker(cnt, records, records[i].win, list);
            if(cnt.s+cnt.w === n-1) answer++
        }
    }
    return answer;
}

function cntStronger(cnt, records, loseList, overlapList) {
    for(let i=0,leng=loseList.length;i<leng;i++){
        //중복리스트에 없다면
        if(!overlapList.includes(loseList[i])){
            cnt.s++
            overlapList.push(loseList[i]);
            cntStronger(cnt, records, records[loseList[i]].lose, overlapList);
        }
    }
}

function cntWeaker(cnt, records, winList, overlapList){
    for(let i=0,leng=winList.length;i<leng;i++){
        //중복리스트에 없다면
        if(!overlapList.includes(winList[i])){
            cnt.w++
            overlapList.push(winList[i]);
            cntWeaker(cnt, records, records[winList[i]].win, overlapList);
        }
    }    
}
console.log(solution(5, [[4, 3], [4, 2], [3, 2], [1, 2], [2, 5]]));