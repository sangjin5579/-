# node
## non-blocking
## 이벤트 기반 동작
- event loop : 이벤트 발생시 콜백함수를 관리하고, 실행순서를 관리한다.
- task queue : 이벤트 처리 후, 실행작업들이 순차적으로 대기하는 공간.
- background : node환경에서 비동기 작업이 진행되며, 각종 API를 제공한다.
## 싱글 쓰레드

# process
* PID : 프로세스를 구성하는 프라이빗 요소
* UID, GID : 프로세스를 실행한 사람의 정보
## process.kill(pid, SIGNAL)
* pid에 해당하는 프로세스에 signal 신호를 전송한다.
* SIGUUP신호를 송신할 경우 프로세스가 종료된다.
* 신호에 대한 이벤트 설정 가능. => SIGHUP이벤트의 경우 on이벤트 유지로 프로세스가 종료되지 않는다..
## process.exit(코드) 
* 호출하거나 이벤트루프가 더이상 수행할 로직이 없을 때 실행된다.
* 실행된 시점에서 컴파일을 중단하고, 대기중인 event loop의 모든 비동기 처리는 포기한다.(exit콜백 로직 포함.)
* 코드가 0이면 정상종료, 1이면 비정상 종료를 의미한다.
* 만약 문제가 발생하는 부분에서 1코드로 exit함수를 수행하고자 한다면, 직접 exit(1)을 선언하는 것보다 process.exitCode = 1을 선언하여 자연스러운 종료를 유도해야 한다.(이벤트루프의 비정상동작 방지)
## process.abort() 
* exit()은 콜백로직을 수행할 수 있지만, abort()는 그냥 즉시 모든것을 종료하는것.
## process.memoryUsage()
* node 프로세스의 메모리 사용량을 바이트로 나타낸다.
## process.uptime()
* node가 실행되고 있는 시간을 초단위로 나타낸다.
## process.hrtime()
* 시간성능테스트에 사용하며 배열로 초,나머지 나노초를 반환한다.
* 1초 = 1e3 * 밀리초 = 1e6 * 마이크로초 = 1e9 * 나노초
```
const NS_PER_SEC = 1e9;
const MS_PER_NS = 1e-6
const time = process.hrtime();
for (let i; i < 10000; i++) {
  // Just to simulate the process
}
const diff = process.hrtime(time);
console.log(`Benchmark took ${diff[0] * NS_PER_SEC + diff[1]} nanoseconds`);
console.log(`Benchmark took ${ (diff[0] * NS_PER_SEC + diff[1])  * MS_PER_NS } milliseconds`);
```
## process.cwd()
* 현재 프로세스가 실행되는 위치
## process.config
* 현재 node 실행에 사용되는 구성옵션의 자바스크립트 표현을 객체로 반환한다.
* 커스텀 가능하다.
## process.env
* 시스템 환경변수를 객체로 반환한다.
* 서비스의 중요한 키를 저장하는 공간으로도 사용한다.
* delete process.env [속성명]으로 제거할 수 있다. => undefined
## process.connected
* 현재 프로세스의 하위 child process 연결여부를 boolean으로 반환한다.
## process.cpuUsage()
* 사용자 및 시스템코드에 소비된 CPU 시간을 측정한다.(밀리초)
* 만약 여러 CPU 코어가 작업을 수행하는 경우 실제 경과시간보다 길어질 수 있다.
## process.nextTick(콜백)
* 이벤트 루프가 다른 함수 콜백보다 nextTick의 콜백함수를 우선 처리하도록 한다.
* 이벤트 루프 처리 우선순위는 nextTick > promise > timeout > immediate
## process.argv
* 이 함수는 node에 의해 실행된 커멘드 라인에 대하여 실행 파일들의 경로를 배열로 반환한다.
## process.execPath
* 현재 노드실행파일의 절대경로를 반환한다. 
## process.debugPort = 포트번호
* 디버깅을 위한 포트 설정

## 표준 Stream
- 표준스트림은 Unix계열 운영체제에서 프로그램과 장치 사이에 미리 연결된 추상화된 입출력 통로를 가리킨다.
- 표준스트림(stdin,stdout,stderr)은 사용자의 터미널에 부착(상속)된다. 어떤 명령이 대화형 Shell을 통해 실행될 때, 일반적으로 명령의 스트림은 셸이 실행중인 텍스트 터미널에 연결된다.  
- Shell에서 실행되는 모든 명령들은 Shell을 부모 process로 삼아 세 표준스트림을 다시 상속받는다. 실행 프로그램에 연쇄적으로 상속할 수 있다.
- stdin(표준입력)은 프로그램으로 들어가는 데이터 스트림으로, 프로그램측에서 read명령을 통하여 데이터 전송을 요청(ls,dir은 입력없이 명령수행)할 수 있다. 별도의 리다이렉션 없이 프로그램을 시작한 경우, 표준입력 스트림은 키보드에서 받아온다.
- stdout(표준출력)은 프로그램이 출력 데이터를 기록하는 스트림으로, 프로그램측에서 write명령을 통하여 데이터 전송(출력)을 요청(mv,move는 수행후 메시지x)할 수 있다. 리다이렉션 없이 표준 출력은 프로그램을 시작한 텍스트 터미널이다.
- 표준출력에 파이프(pipe)를 사용하면 다른 프로그램에 stdin 스트림으로 출력데이터를 송신할 수 있다.
- stderr(표준오류)는 프로그램이 오류 메시지나 진단을 출력하기 위한 또다른 출력 스트림이다. 독립적인 스트림이며, 별도로 리다이렉션 가능하다.
### process.stdin
* text shell로부터 node 프로그램 프로세스에 상속된 표준입력 스트림이다.
* stdin 스트림은 기본적으로 멈춰있기 때문에 읽기 위해서는 resum()메소드를 실행해야 한다.
* 혹시모르니 데이터 인코딩도 해주자.
```
process.stdin.resume();
process.stdin.setEncoding('utf8');
```
* 이유를 모르겠는데 콘솔에서 ctrl-D(로그아웃)을 해야 stdin end이벤트가 호출된다.
* ctrl-c(프로그램 종료)로 살향하고자 한다면 signal이벤트로 출력할 수 있다.
```
 process.on('SIGINT', function(){
     process.stdout.write('\n end \n');
     process.exit(0);
 });
```
### process.stdout
* text shell로부터 node 프로그램 프로세스에 상속된 표준출력 스트림이다.
* 기본적으로 text shell이 출력스트림이다.
* node의 다르 스트림과 다르게 일반적으로 blocking된다.
* pipe를 참조하는경우 non-blocking이다.
#### EOF
- End Of File의 약자로, 파일의 끝을 표현하기 위한 상수(-1)이다.
- 파일의 끝에 도달하는 경우 반환한다.
- 하지만 콘솔로부터 입력 Stream을 받는 경우 파일의 끝이 존재하지 않기 때문에 
- 콘솔의 경우 Ctrl-Z(일시정지) 명령어가 파일의 EOF를 의미한다.

### process.stderr
* text shell로부터 node 프로그램 프로세스에 상속된 또다른 독립 출력 스트림이다.
* 기본적으로 text shell이 출력스트림이다.
* node의 다르 스트림과 다르게 일반적으로 blocking된다.
* pipe를 참조하는경우 non-blocking이다.
### process.__defineGetter__('stdxxx',callback)
* 표준출력스트림을 가로채어 출력장치를 바꿀 수 있다.
* 이후의 출력로직은 모두 연결된 프로그램으로 송신된다.

## event: multipleResolves
* promise객체를 반환하는 함수를 호출시 resolve,reject에 대하여 구조적인 에러를 추적하고 에러 발견시 중단하는 이벤트.
* promise 콜백에 resolve가 여러번 사용되거나, resolve와 reject가 동시에 시행될 때, try catch로는 에러가 잡히지 않는데 이를 잡아준다.

## event: uncaughtException
* 에러가 발생시키는 로직을 실행하는 시점에서 node는 디폴트로 컴파일을 중단하고 모든 동기, 대기중인 비동기 작업을 중단시킨다.
* 하지만 uncaughtException이벤트를 적용하면 node의 디폴트 예외처리를 무시하고
컴파일을 중단하되, err인자로 에러를 더 간략히 반환하고 진행중이던 비동기 작업은 완료되는대로 origin 인자를 통해 반환한다.

## event: warning
* 문제가 있는 나쁜 소스코드에 대하여 경고처리를 할 수 있다. 기존의 로직은 예외없이 모두 수행된다.

## event: SIGINT
* ctrl + c 신호에 대하여 콜백함수를 발생시킬 수 있다.
* SIGINT외에 다양한 신호 이벤트가 존재한다. SIGHUP은 콘솔이 종료될 때.


## Socket
## Buffer