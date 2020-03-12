const str = [...(require('fs').readFileSync(0,'utf8'))];

let code = 97;
let endCode = 122;
let result = '';
const alphabet = [];
//while로 하면??
for(let i=0;i<=endCode-code;i++){
    alphabet[i] = (str.includes(String.fromCharCode(code+i))) ? 
                   str.indexOf(String.fromCharCode(code+i))   :
                   -1;
    
    result += alphabet[i] + ' ';
}

console.log(result);