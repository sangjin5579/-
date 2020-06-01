function solution(heights) {
    var stack = [];
    
    for(let i=0;i<heights.length;i++){
        stack.push(0);
        for(let j=0;j<i;j++){
            if(heights[j] > heights[i]){
                stack.pop();
                stack.push(j+1);
            }
        }
    }
    return stack;
}

console.log(solution([6,9,5,7,4]))