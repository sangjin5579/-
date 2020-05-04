const input = [[123, 0, 3]];

let validator = (hubo, compare) => {
    let result = [];
    for(let i=0,leng=hubo.length;i<leng;i++){
        let data = [...hubo[i]];
        
        let comCase = [...compare[0].toString()];
        let strike = 0;
        let ball = 0;
        for(let j=0;j<3;j++){
            if(data[j] === comCase[j]){
                strike++;
            }else if(data[j] !== comCase[j] && data.includes(comCase[j])){
                ball++;
            }
        }
        if(compare[1] === strike && compare[2] === ball){
            result.push(hubo[i])
        }
    }
    return result;
}

let makeNum = () => {
    let result = [];
    let num = [];
    for(let i=1;i<=9;i++){
        num.push(i);
        for(let j=1;j<=9;j++){
            if(!num.includes(j)){
                num.push(j);
                for(let k=1;k<=9;k++){
                    if(!num.includes(k)){
                        num.push(k)
                        result.push(num.join(''));
                        num.pop();
                    }
                }
                num.pop();
            }
        }
        num.pop();
    }
    return result
}

function solution(baseball) {
    var answer = 0;
    let result = makeNum();
    for(let i=0,leng=baseball.length;i<leng;i++){
        result = validator(result, baseball[i])
    }
    answer = result.length;
    return answer;
}

console.log(solution(input))


