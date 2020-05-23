// const input = require('fs').readFileSync(0,'utf8')

// console.log(input)


const readLine = require('readline');

let read = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

callMenu();

function callMenu(){
    read.question("야구게임 하러오셨쎄요?\n(1)시작하기\n(2)전적보기\n",(data)=>{
        if(data === '1'){
            startGame();    
        }else if(data === '2'){
            console.log('개발중입니다...');
            callMenu();
        }
    });
}

function initAns(leng){
    // 컴퓨터 방어시 후보군 생성
    let cases = makeCase(leng);
    let random = Math.floor(Math.random()*(cases.length));
    return cases[random];
}

function makeCase(caseLeng){
    let useIndex = [];
    let cases = [];
    let hubo = [];
    function making(){
        for(let i=0;i<10;i++){
            if(!useIndex.includes(i)){
                hubo.push(i);
                useIndex.push(i);
                if(hubo.length === caseLeng){
                    let sample = [];
                    for(let j=0;j<caseLeng;j++){
                        sample[j] = hubo[j];
                    }
                    cases.push(sample);
                }else{
                    making();
                }
                hubo.pop();
                useIndex.pop();
            }
        }
    }
    making();
    return cases;
}

function startGame(){
    read.question("(1)내가 맞추기\n(2)컴퓨터가 맞추기\n",(data)=>{
        if(data === '1'){
            read.question("(1)맞힐 공의 수를 입력해주세요.\n",(leng)=>{
                attackCom(initAns(+leng));
            })
        }else if(data === '2'){
            console.log('개발중입니다...');
            startGame();
            //defenceCom(initAns(3));
        }
    })
}

function attackCom(answer){
    let strike=0,ball=0,out=0,attCnt=0;
    let attack = () => {
        read.question(`결과:${strike}S,${ball}B,${out}O / 공격횟수: ${attCnt}\n`,(data)=>{
            attCnt++;
            strike=0,ball=0,out=0;
            let request = [...data];//문자열임.

            for(let i=0;i<answer.length;i++){
                if(answer[i].toString() === request[i]){
                    strike++
                }else{
                    //다르지만 다른 요소에서 포함하고 있는 경우
                    if(answer.includes(+request[i])){
                        ball++
                    }else out++
                }
            }
            
            if(strike === 3){
                console.log(`스트라이크!! 정답:${answer} 총 공격횟수: ${attCnt}`);
                read.question('다시 진행하시겠습니까?\n(1)네, 한 번더\n(2)아뇨, 처음으로\n', (data)=>{
                    if(data === '1'){
                        resetGame(1);
                    }else{
                        //처음으로가기
                        callMenu();
                    }
                });
            }else{
                attack();
            }
        })   
    }
    attack();
}

function defenceCom(initAnswer){
    let attack = initAnswer;
    let strike=0,ball=0,out=0,defCnt = 0;

    let defence = () => {
        read.question('방어할 숫자를 중복없이 입력해주세요.', (data) => {
            defCnt++;
            strike=0,ball=0,out=0;
            let answer = [...data];
            let caseLeng = answer.length;
            for(let i=0;i<caseLeng;i++){
                //자동응답
                if(attack[i].toString() === answer[i]){
                    strike++
                }else{
                    if(answer.includes(attack[i].toString())){
                        ball++
                    }else out++
                }
            }
            console.log(`공격: ${attack}`);
            if(strike === 3){
                console.log(`스트라이크!! 정답:${answer} 총 방어횟수: ${defCnt}`);
                read.question('다시 진행하시겠습니까?\n(1)네, 한 번더\n(2)아뇨, 처음으로\n', (data)=>{
                    if(data === '1'){
                        resetGame(2);
                    }else{
                        callMenu();
                    }
                });
            }else{
                console.log(`${strike}S,${ball}B,${out}O`);
                //나온 경과를 기준으로 attack 다시 설정
                attack = reAnswer(attack, strike, ball, out);
                defence();
            }
        })
    }    
}
// let data = []
// function reAnswer(prevAtt, strike, ball, out){
//     //prevAtt = [1,2,3]
//     let nextAtt = '';
//     data.push([prevAtt, strike, ball, out]);

//     return nextAtt;
// }

function resetGame(attOrDefNum){
    if(attOrDefNum === 1){
        attackCom(initAns(3));
    }else if(attOrDefNum === 2){
        defenceCom(initAns(3));
    }

}