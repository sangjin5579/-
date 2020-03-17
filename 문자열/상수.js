const input = require('fs').readFileSync(0,'utf8').split(' ');

const backwards = [];

for(let i=0,leng=input.length;i<leng;i++){
    const arr = [...input[i]];
    //배열객체의 주소값을 할당하는 것이 아닌 원시타입의 값을 할당하는 것.
    let temp = arr[2];
    arr[2] = arr[0];
    arr[0] = temp;
    backwards[i] = +arr.join('');
}

if(backwards[1]<backwards[0]){
    console.log(backwards[0]);
}else console.log(backwards[1]);