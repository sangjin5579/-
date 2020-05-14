function solution(arrangement) {
    var answer = 0;
    let arr = [...arrangement];
    //굳이 stack=[]을 사용하지 않아도 됨.
    let pipe = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] === ")"){
            --pipe;
            if(arr[i] !== arr[i-1]) answer += pipe;
            else answer++;
        }else pipe++;
    }
     
    return answer;
}

console.log(solution('()(((()())(())()))(())'))