//백준 10817
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let result = 0;

function integerValidator(num1, num2, num3) {
    return (num1 >= 1 
         && num1 <= 100
         && num2 >= 1
         && num2 <= 100
         && num3 >= 1
         && num3 <= 100
         && !isNaN(num1)
         && !isNaN(num2)
         && !isNaN(num3)
         )
         ? true : false;
}

rl.on('line', line => {
    const input = []
    input[0] = parseInt(line.split(' ')[0]);
    input[1] = parseInt(line.split(' ')[1]);
    input[2] = parseInt(line.split(' ')[2]);

    if(integerValidator(input[0], input[1], input[2])){
        const sortArray = [];
        for(let i=0;i<input.length;i++){
            sortArray[0] = 0;
            if(sortArray[0] <= input[i]){
                sortArray[0] = input[i];
            }
        }
        input.splice(input.indexOf(sortArray[0]), 1);
        
        for(let i=0;i<input.length;i++){
            sortArray[1] = 0;
            if(sortArray[1] <= input[i]){
                sortArray[1] = input[i];
            }
        }
        input.splice(input.indexOf(sortArray[1]), 1);
        sortArray[2] = input[0];
        
        result = sortArray[1];
        rl.close();
    } else console.log('세 수는 공백으로 구분하며, 0보다 크고 100보다 작거나 같은 정수입니다.');
}).on('close', () => {
    console.log(result);
    process.exit();
});