let brown = 10;
let red = 2;

function solution(brown, red) {
    var answer = [];
    let cnt = 0;
    let arr = [];
    for(let i=1;i<=red;i++){
        if(red%i === 0){
            arr.push(i);
        }
    }

    for(let i=0;i<arr.length;i++){
        let redSe = arr[i];
        let redGa = red/redSe;
        let setBrown = (redGa+2)*2 + redSe*2
        if(setBrown === brown){
            answer[0] = redGa+2;
            answer[1] = redSe+2;
            break;
        }
    }
    return answer;
}


console.log(solution(brown,red))