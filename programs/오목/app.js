const express = require('express');
const socket = require('socket.io');
const fs = require('fs');
const http = require('http');
const app = express();
const server = http.createServer(app);

const io = socket(server);

//서버 리스너 생성
server.listen(8080, () => {
})

let users = 0;
//소켓 io 연결시 동작하는 모든 이벤트 등록
io.sockets.on('connection', function(socket){
    socket.on('newUser', function({name}){
        users++;
        socket.name = name;
        socket.wait = users;
        //모든 소켓에 전송
        io.sockets.emit('update', {type: 'connect', user: name, name: 'SERVER', total: users, message: name + '님이 접속하였습니다.'})
    })

    socket.on('disconnect', function(){
        users--;
        socket.broadcast.emit('update', {type: 'disconnect', name: 'SERVER', total: users, message: socket.name + '님이 나가셨습니다.', wait: socket.wait})
    })

    socket.on('control', function(data){
        io.sockets.emit('update', data)
    })
})

app.use('/css', express.static('./static/css'));
app.use('/js', express.static('./static/js'));

app.get('/', function(requrest, response){
    fs.readFile('./static/index.html', function(err, data){
        if(err){
            response.send('에러입니다.')
        }else{
            response.writeHead(200, {'Content-type':'text/html'});
            response.write(data);//html파일
            response.end();//write를 사용할 경우 꼭 닫아줘야한다
        }
    })
})
