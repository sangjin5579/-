function solution(lines) {
    var logArr = [];
    var logPointArr = [];
 
    lines.forEach(log => {
        let s = log.split(' ')[1];
        let duration = +log.split(' ')[2].replace("s","");
        let endSec = +s.split(':')[0]*60*60 + +s.split(':')[1]*60 + +s.split(':')[2];
        //왜 0.001해야하는지 모르겠음
        let startSec = endSec - duration + 0.001;
 
        logArr.push(
            [startSec, endSec, duration]
        )
 
        logPointArr.push(
            endSec
        )
        logPointArr.push(
            startSec
        )
    })
 
    var max = 0;
    //모든 경우의 수를 위한 로그포인트 시간순 정렬
    logPointArr.sort();
 
    // 모든 로그의 처리 시작 및 끝 순간을 기준으로 for돌림
    logPointArr.forEach(log => {
        var beginRange = log
        var endRange = log + 1
        var count = 0; 
 
        logArr.forEach(logItem => {
            var startPoint = logItem[0]
            var finishPoint = logItem[1]
            //범위를 벗어나지면 포함된 경우도 넣어야함
            if( (startPoint>=beginRange && startPoint<endRange) ||
                (finishPoint>=beginRange && finishPoint<endRange) ||
                (startPoint<=beginRange && finishPoint>=endRange) ) {
                    count++
                }
 
        })
 
        if(count>max) {
            max = count
        }
 
    })
 
    return max
}

console.log(solution([
    "2016-09-15 01:00:04.001 2.0s",
    "2016-09-15 01:00:07.000 2s"
    ]))

