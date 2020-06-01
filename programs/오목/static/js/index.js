var socket = io();
var users = 0;
var tableSize = 10;
//서버 접속하면 열림
socket.on('connect', function() {
    var name = prompt('반갑습니다. 닉네임을 입력해주세요.', '')
    if(!name){
        let random = Math.floor(Math.random() * 10)
        name = `user${random}`;
    }
    
    localStorage.setItem("name", name);
    socket.emit('newUser', {name: name});
})

socket.on('update', function(data){
    if(data.type === 'connect'){
        users = data.total;
        console.log(`${data.name}:${data.message}(총 ${users}명 대기중)`)
        if(data.user === localStorage.name){
            localStorage.setItem("attend", users);
        }
    }
    if(data.type === 'disconnect'){
        console.log(`${data.name}:${data.message}(총 ${users}명 대기중)`)
        if(data.wait < localStorage.attend){
            localStorage.attend--;
        }
    }

    if(data.type === 'gameControl'){
        tableSize = data.size
        controlFunc[data.func](data);
    }
    readyGameYn(users);
})

var controlFunc = {
    initTable : initTable,
    drawTable : drawTable,
    startGame : startGame,
    setStone : setStone
}

function readyGameYn(users){
    let main = document.getElementById('main');
    let startBtn = document.getElementById('startBtn');
    if(main.childElementCount > 1){
        main.removeChild(main.lastChild);
    }
    let node = document.createElement('span');
    node.innerText = `현재 접속자: ${users}명`
    main.appendChild(node)

    if(users >= 2){
        startBtn.disabled = false;
    }else{
        startBtn.disabled = true;
    }
}

function control(name, data){
    if(localStorage.attend <= 2) {
        let stone = {
            1: '',
            2: '',
            turn: 0
        }
        let size = document.getElementById('size').value;
        if(name === 'startGame'){
            let firstTurn = Math.floor(Math.random() * 2) + 1;
            if(firstTurn === 1){
                stone[1] = '●';
                stone[2] = '○';
                stone.turn = 1;
            }else{
                stone[1] = '○';
                stone[2] = '●';
                stone.turn = 2;
            }
        }
        
        socket.emit('control', {type: 'gameControl', size: size, func: name, stone: stone});
    }
}

initTable(tableSize);

function initTable(data){
    let table = document.getElementById('table');
    document.getElementById('size').value = data.size;
    while(table.hasChildNodes()){
        table.removeChild(table.firstChild);
    }
    drawTable(data.size);
}

function drawTable(tableSize){
    let table = document.getElementById('table');
    for(let i=0;i<tableSize;i++){
        let rowNode = document.createElement('div')
        rowNode.className = `row_${i}`
        for(let j=0;j<tableSize;j++){
            let colNode = document.createElement('span')
            colNode.className = `col_${j}`
            //첫째줄
            if(i === 0){
                colNode.innerText = (j===0) ? '┏' : 
                                    (j===tableSize-1) ? '┓' : '┳';
            //마지막줄
            }else if(i === tableSize-1){
                colNode.innerText = (j===0) ? '┗' : 
                                    (j===tableSize-1) ? '┛' : '┻';
            //중간줄
            }else{
                colNode.innerText = (j===0) ? '┣' : 
                                    (j===tableSize-1) ? '┫' : '╋';
            }

            rowNode.append(colNode);
        }
        table.appendChild(rowNode);
    }
    table.addEventListener('click', function(e){
        
    })
}

function startGame(data){
    console.log(localStorage.attend)
    console.log(data)
    if(localStorage.attend <= 2) {
        alert('게임이 시작되었습니다.')
    }
    document.getElementById('table').addEventListener('click',function(e){
        let col = e.target.className.split('_')[1];
        let row = e.target.parentNode.className;
        document.getElementsByClassName(row)[0].childNodes[col].textContent = '●';
    })
    if(data.stone.turn === localStorage.attend){
        document.getElementById('table').addEventListener('click',function(e){
            alert('ok')
            // console.dir(e)
            // control('setStone',e)
        })
    }
}

function setStone(data){

}