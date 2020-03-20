//풀이 안함
const [n, ...cases] = require('fs').readFileSync(0,'utf8').split('\n');

let cnt = 0;

let checkStr = (obj, str, index, arr) => {
    if(obj[str] === undefined){
        obj[str] = true;
    }else{
        if(arr[index-1] !== str){
            obj[str] = false;
            obj.result = false;
        }
    }
    return obj;
}  

for(let i=0;i<n;i++){
    cnt += ([...cases[i]].reduce(checkStr,{result:true}).result) ? 1 : 0
}

console.log(cnt);