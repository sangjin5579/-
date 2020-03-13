const test = [...require('fs').readFileSync(0,'utf8').trim()];

let transStr = code => {
    return (65<=code && code<=90) ? code : code-32;
}

const result = test.reduce((obj, str) => {
    console.log(str)
    let code = transStr(+str.charCodeAt(0));
    console.log(code)
    if(obj[code]){
        obj[code]++
    }else{
        obj[code] = 1;
    }
    
    if(obj.max.cnt<obj[code]){
        obj.max.name = code;
        obj.max.cnt = obj[code];
        obj.max.overlap = false;
    }else if(obj.max.cnt==obj[code]) obj.max.overlap = true;
    console.log(obj)
    return obj;
}, {max:{name:0, cnt:0, overlap: false}});
 
if(result.max.overlap){
    console.log('?');
}else console.log(String.fromCharCode(result.max.name));