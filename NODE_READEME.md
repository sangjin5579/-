# node
# process
## process.exit() 
* 호출하거나 이벤트루프가 더이상 수행할 로직이 없을 때 실행된다.
* 실행된 시점에서 컴파일을 중단하고, 대기중인 event loop의 모든 비동기 처리는 포기한다.(exit콜백 로직 포함.)
## process.abort() 
* exit()은 콜백로직을 수행할 수 있지만, abort()는 그냥 즉시 모든것을 종료하는것.
## process.config
* 현재 node 실행에 사용되는 구성옵션의 자바스크립트 표현을 객체로 반환한다.
* 커스텀 가능하다.
## process.connected
* 현재 프로세스의 하위 child process 연결여부를 boolean으로 반환한다.
## process.cpuUsage()
* 사용자 및 시스템코드에 소비된 CPU 시간을 측정한다.(밀리초)
* 만약 여러 CPU 코어가 작업을 수행하는 경우 실제 경과시간보다 길어질 수 있다.

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
* SIGINT외에 다양한 신호 이벤트가 존재한다.

## process.argv
* 이 함수는 node에 의해 실행된 커멘드 라인에 대하여 실행 파일들의 경로를 배열로 반환한다.