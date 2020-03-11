//4673
// let arr = [];
// for(let i=1;i<=10000;i++){
//     arr[i] = i;
// }

// let n = 0;
// while(n<10000){
//     n++
//     let spreadArr = [...n.toString()];
// 	let dn = n;
//     for(let i=0,leng=spreadArr.length;i<leng;i++){
//         dn += +spreadArr[i];
//     }

//     if(arr.includes(dn)) arr.splice(arr.indexOf(dn),1);    
// }

// let result = '';
// for(let i=0,leng=arr.length;i<leng;i++){
//     result += arr[i] + '\n';
// }

// console.log(result);


const arr = [];
for(let i=1;i<=10000;i++){
    arr[i] = i;
}

let dnFunc = n => {
    let dn = n;
    let spreadArr = [...n.toString()];
    for(let i=0,leng=spreadArr.length;i<leng;i++){
        dn += +spreadArr[i];
    }
    return dn;
}

let n = 0;
while(n<10000){
    n++
    if(arr.includes(dnFunc(n))) arr.splice(arr.indexOf(dnFunc(n)),1);
}

let result = '';
for(let i=0,leng=arr.length;i<leng;i++){
    result += arr[i] + '\n';
}

console.log(result.trim());




