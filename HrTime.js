const NS_PER_SEC = 1e9;
const MS_PER_NS = 1e-6;
const S_PER_NS = 1e-9;
const time = process.hrtime();
//로직
const diff = process.hrtime(time);
console.log(`Benchmark took ${diff[0] * NS_PER_SEC + diff[1]} NS`);
console.log(`Benchmark took ${ (diff[0] * NS_PER_SEC + diff[1])  * MS_PER_NS } MS`);
console.log(`Benchmark took ${ (diff[0] * NS_PER_SEC + diff[1])  * S_PER_NS } S`);
