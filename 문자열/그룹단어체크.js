//풀이 안함
const [n, ...cases] = require('fs').readFileSync(0,'utf8').split('\n');

let cnt = 0;

let checkStr = (obj, str, index, arr) => {
    if(index === 0) obj.result = true;
    if(obj[str] === undefined){
        obj[str] = true;
    }else{
        if(arr[index-1] === str){
            obj[str] = true
        }else{
            obj[str] = false;
            obj.result = false;
        }
    }
    return obj;
}  

for(let i=0;i<n;i++){
    cnt += ([...cases[i]].reduce(checkStr,{}).result) ? 1 : 0
}

console.log(cnt);  