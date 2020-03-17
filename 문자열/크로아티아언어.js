const input = [...require('fs').readFileSync(0,'utf8').trim()];

let countStr = (cnt, val, i, arr) => {
    if(val=='=' || val=='-'){
        return cnt
    }else if(val=='j' && (arr[i-1]=='l' || arr[i-1]=='n')){
        return cnt
    }else if(val=='z' && arr[i-1]=='d' && arr[i+1]=='='){
        return cnt
    }else cnt++ 

    return cnt
}


console.log(input.reduce(countStr,0));