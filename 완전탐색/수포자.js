
const input = [1,3,2,4,2];

function solution(answers) {
    let cases = [[1,2,3,4,5],[2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]];
    var answer = [];
    //최고정답개수를 변수로 설정
    let topScore = 0;
    //케이스의 개수만큼 순회
    for(let i=0;i<cases.length;i++){
        //수포자별 정답수를 cnt변수로 설정
        let cnt = 0;
        let caseLeng = cases[i].length;
        //answers요소를 순회하여 수포자 정답케이스와 비교한 후 정답개수 계산
        for(let j=0;j<answers.length;j++){
            cnt += (answers[j] === cases[i][j%caseLeng]) ? 1: 0;
        }
        //만약 현재 채점자의 정답수가 최고 정답수보다 많다면 answer 초기화
        if(topScore < cnt){
            topScore = cnt
            answer = [i+1];
        //만약 최고정답개수와 같다면 answer에 수포자케이스번호 추가
        }else if(best === cnt){
            answer.push(i+1);
        }
    }
    return answer;
}

console.log(solution(input))