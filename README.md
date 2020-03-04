

* 역슬래시, 따옴표 출력은 \\연속으로 써주면 된다.
* 템플릿 리터럴문법을 사용한다면 개행문법을 사용하지 않아도 띄어쓰기나 줄바꿈 표현이 가능하다.
* console.log는 많이 느리므로 마지막 한번만 사용하도록 하자.

* 콘솔에서는 close가 동작하지 않는다(EOF에 걸리지 않음) 
* 콘솔 종료를 해야 close가 동작하게된다.
* IDE에서는 정상동작한다.

* Number() 와 parseInt() 차이
* 둘다 모두 정수로 형변환, number는 숫자가 아닌경우 NaN return, parseInt는 동일하지만 문자열이 숫자로 시작할 경우 끝나는 지점까지 정수 return
* 실수에 대하여서는 parseFloat()를 따로 사용해주어야 한다.
* 몫 계산의 경우(/) 정수간 나눗셈을 하면 부동소수가 나올 수 있으므로, 결과값에 대하여 다시 형변환을 해준다.

* 조건문은 되도록 큰범주에서 분기처리 하도록 하자.
* 백준 알고리즘은 자동으로 close를 타면 안된다.
* rl.prompt()로 어떠한 표현도 하면 안됨..

* typeof 와 instanceof
```
# typeof은 다음중 하나의 String 반환값을 return하는 연산자.
- undefined
- boolean
- number( NaN 포함 )
- string
- object( null, array 포함)
- function

# instanceof는 비교연산자로 "object 타입에 한정하여 비교"하며, boolean값을 반환한다.
- {} instanceof Object //true
- [] instanceof Array //true 
```
* 할당연산자

* spread 연산자
```
#... : 열거 가능한 오브젝트를 하나씩 열거한다.
let str = 'hello'; let spread = [...str]; 
console.log(spread); // [ 'h', 'e', 'l', 'l', 'o' ]

function test( a, b,...rest){ console.log(a,b,rest); } 
test(...[1,2,3,4,5]); 
// 1 2 [ 3, 4, 5 ] 
```
# if
* 조건의 경우 최대한 큰 범주에서 필터링한 값을 처리하도록 하자.
* 배수 관련 문제는 모두 if와 몫 나머지를 응용한 문제.

# for
* break와 continue에 대하여
```
switch문이나 반복문을 제어할 수 있는 문법
continue : 해당코드를 만나면 다음로직을 수행하지 않고 다시 시작점으로 돌아가 순회를 시작한다.
break : 해당코드가 있는 지점에서 종료하고 블록을 벗어난다.(scope: block)
return : 함수 실행을 종료하고, 함수를 벗어난다. break와 비슷하지만 벗어나는 스코프 범위가 다르다.(scope: function)
```
* for of
* for in

# Array
* 배열 중복제거
```
let values = [3, 1, 3, 5, 2, 4, 4, 4];
let uniqueValues = [...new Set(values)];
// uniqueValues is [3, 1, 5, 2, 4]
```

* filter를 이용한 배열 간편검색
```
let users = [
  { id: 11, name: 'Adam', age: 23, group: 'editor' },
  { id: 47, name: 'John', age: 28, group: 'admin' },
  { id: 85, name: 'William', age: 34, group: 'editor' },
  { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];
let res = users.filter(it => new RegExp('oli', "i").test(it.name))
```
* 배열 요소중 , 데이터 비교로 boolean을 반환받을 수 있다.
```
let hasAdmin = users.some(user => user.group === 'admin');
// true
```
* 배열안의 배열요소 모두 하나로 병합하기
```
let nested = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let flat = [].concat.apply([], nested);
```
* reduce() 를 이용한 배열 누산작업
```
```
* 배열요소중 특정 속성만을 모아서 새로운 배열로 만들기
```
let listOfUserGroups = [...new Set(users.map(it => it.group))];
// listOfUserGroups is ['editor', 'admin'];
```
* 교칩합
```
let arrA = [1, 4, 3, 2];
let arrB = [5, 2, 6, 7, 1];
arrA.filter(it => arrB.includes(it)); // returns [1, 2]
```