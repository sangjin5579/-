const n = require('fs').readFileSync(0,'utf8');

let cnt = n;

for(let i=1;i<=n;i++){
    const arr = [...i.toString()];
    if(arr.length >=2){
        const diff = +arr[1] - +arr[0] ;

        for(let j=0,leng=arr.length;j<leng;j++){
            if(diff !==  +arr[j+1] - +arr[j] && j+1<leng){
                cnt--;
                break
            }
        }
    }
}

console.log(cnt)
