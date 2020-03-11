// const n = require('fs').readFileSync(0,'utf8');

// let cnt = n;

// for(let i=1;i<=n;i++){
//     const arr = [...i.toString()];
//     const diff = (arr.length>=2) ? +arr[1] - +arr[0] : 0;

//     for(let j=0,leng=arr.length;j<leng;j++){
//         if(j+1<leng && diff !==  +arr[j+1] - +arr[j]){
//             cnt--;
//             break
//         }
//     }
// }

// console.log(cnt);


let n = require('fs').readFileSync(0,'utf8');

let cnt = n;

let hanValidator = num => {
    const arr = [...num.toString()];
    const diff = (arr.length>=2) ? +arr[1] - +arr[0] : 0;
    
    for(let i=0,leng=arr.length;i<leng;i++){
        if(i+1<leng && diff !==  +arr[i+1] - +arr[i]){
            return false
        }
    }
    return true    
}

for(let i=1;i<=n;i++){
    if(!hanValidator(i)) cnt--;
}

console.log(cnt);