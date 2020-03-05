const datas = require('fs').readFileSync(0,'utf8').trim().split('\n').map(e => +e % 42);

console.log([...new Set(datas)].length);
