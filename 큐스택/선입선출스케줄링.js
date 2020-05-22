function solution(n, cores) {
    let queues = [];
    let tasks = [];
    
    for(let i=0;i<n;i++){
        tasks.push(1);
    }
    
    for(let i=0;i<cores.length;i++){
        let core = [];
        for(let j=0;j<cores[i];j++){
            core.push(0)
        }
        queues.push(core);
    }
    //[[1],[0,0],[0,0,0]]
    while(tasks.length){
        for(let i=0;i<queues.length;i++){
            queues[i].shift();
            if(!queues[i].includes(1)){
                let task = tasks.shift();
                if(tasks.length===0){
                    return i+1;
                }else{
                    if(tasks.length!==0){
                        queues[i].push(task);
                    }else queues[i].push(0);
                };
            }else queues[i].push(0);
        }
    }
}

console.log(solution(6,[1,2,3]))