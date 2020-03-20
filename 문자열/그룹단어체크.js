//풀이 안함
const [n, ...cases] = require('fs').readFileSync(0,'utf8').split('\n');

let cnt = 0;

let checkStr = (obj, str, i, arr) => {
    if(obj[str] == undefined){
        obj[str] = true
        obj.result = true
    }else{
        if(arr[i-1] === str){
            obj[str] = true
        }else{
            obj[str] = false;
            obj.result = false;
        }
    }
    return obj;
}  

for(let i=0;i<n;i++){
    if(cases[i].trim() == '') {

    }else{
        cnt += ([...cases[i]].reduce(checkStr,{}).result) ? 1 : 0
    }
}

console.log(cnt);      