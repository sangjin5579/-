const input = [...require('fs').readFileSync(0,'utf8').trim()];

const dial = [
    ['A','B','C'],
    ['D','E','F'],
    ['G','H','I'],
    ['J','K','L'],
    ['M','N','O'],
    ['P','Q','R','S'],
    ['T','U','V'],
    ['W','X','Y','Z']
]

let calculator = (time, val) => {
    for(let i=0,leng=dial.length;i<leng;i++){
        if(dial[i].includes(val)) {
            time += i+3;
            return time;
        } 
    }
}

console.log(input.reduce(calculator, 0));


