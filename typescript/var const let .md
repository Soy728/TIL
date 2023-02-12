# var const let

`var`: 함수 레벨 스코프, 재선언 가능, 재할당 가능
<br />

`let`: 블록 레벨 스코프, 재선언 불가능, 재할당 가능

<br />

`const`: 블록 레벨 스코프, 재선언 불가능, 재할당 불가능
<br />
<br />

- 함수 레벨 스코프 vs 블록 레벨 스코프

```
// 함수 레벨 스코프
function fruit(){
  var apple = 'red'
}

if(true){
  var banana = 'yellow'
}

console.log(apple); // Uncaught ReferenceError: apple is not defined
console.log(banana); // banana

// 블록 레벨 스코프
function fruit(){
  let apple = 'red'
}

if(true){
  let banana = 'yellow'
}

console.log(apple); // Uncaught ReferenceError: apple is not defined
console.log(banana); // Uncaught ReferenceError: banana is not defined

```

- 호이스팅

var, let, const 모두 호이스팅 된다.
var은 호이스팅 될 때, 선언과 동시에 undefined로 초기화가 진행된다.
let, const는 호이스팅될때 선언만 우선적으로 진행된다.
따라서, 변수선언전에 사용을 했을 시에 var은 undefined로 초기화가 되어 에러가 나지 않지만,
let, const 는 초기화 자체가 이뤄지지 않아서 reference error가 발생한다.

- 함수의 호이스팅
  함수는 크게 함수 선언식, 함수 표현식, 화살표 함수가 존재한다.

```
// 함수 선언식
function fruit(){
  ...
}

// 함수 표현식
let fruit = function() {
  ...
}
```

함수 선언식은 호이스팅에 영향을 받지만, 함수 표현식은 호이스팅에 영향을 받지 않는다.

```
// 실행 전
logMessage();
sumNumbers();

function logMessage() {
  return 'worked';
}

var sumNumbers = function () {
  return 10 + 20;
}

// 호이스팅 후
function logMessage() {
  return 'worked';
}
var sumNumbers;

logMessage();
sumNumbers(); // uncaught TypeError: sumNumbers is not a function

var sumNumbers = function () {
  return 10 + 20;
}
```

sumNumbers는 변수로 호이스팅되어 인식되어지기 때문에 에러가 발생한다.
