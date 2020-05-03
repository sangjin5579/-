const input = [3, 1, 6, 2, 7, 30, 1];

function solution(weight) {
    let productWeight = 0;
    let leng = weight.length;
    weight.sort(function(a, b) {
        return a - b;
    });
    console.log(weight)

    while(true){
        //만약 물건무게를 측정할 수 없다면 break 
        for(let i=0;i<leng;i++){
            if(productWeight === weight[i]){
                productWeight++;
                continue;
            }else if(productWeight > weight[i]){
                for(let j=i+1;j<leng;j++){

                }
            }else if(productWeight < weight[i]){
                break;
            }
        }
    }
    return productWeight;
}

console.log(solution(input))