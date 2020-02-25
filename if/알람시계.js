//백준 2884
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let alarmTime = '';

function timeValidator(hour, min) {
    return (hour >= 0 
         && hour <= 23
         && min  >= 0
         && min  <= 59
         && !isNaN(hour)
         && !isNaN(min))
         ? true : false;
}

rl.on('line', line => {
    let hour = parseInt(line.split(' ')[0]);
    let min = parseInt(line.split(' ')[1]);

    if(timeValidator(hour, min)){
        let setHour = (min < 45) ? 
                                 (hour<1) ? 23 : hour-1 
                                 : hour;
        let setMin = (min < 45) ? min+15 : min-45;
        
        alarmTime = `${setHour} ${setMin}`;
        rl.close();
    } else console.log('시간은 24시간표현이며, 시간과 분의 구분은 공백으로 해주세요.');
}).on('close', () => {
    console.log(alarmTime);
    process.exit();
});