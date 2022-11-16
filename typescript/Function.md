# Function

- 함수 선언식

```
function open(){
    return 'opened'
}

open();
```

- 함수 표현식
  함수 표현식이 변수에 저장되면, 변수는 함수처럼 사용 가능해진다. 변수에 저장된 함수는 함수명이 필요 없으며, 변수 이름을 통하여 호출된다.

```
let open = function (){
    return 'opened'
}

open();
```

javascript에서, `함수 표현식`은 호이스팅에 따라 브라우저가 자바스크립트를 해석할 때 맨 위로 끌어올린다.

```
logMessage();
sumNumbers();

function logMessage() {
  return 'worked';
}

var sumNumbers = function () {
  return 10 + 20;
};


//호이스팅에 의해 자바스크립트 해석기는 코드를 아래와 같이 인식한다.

function logMessage() {
  return 'worked';
}

var sumNumbers;

logMessage(); // 'worked'
sumNumbers(); // Uncaught TypeError: sumNumbers is not a function

sumNumbers = function () {
  return 10 + 20;
};
```

sumNumbers는 변수가 먼저 선언이 되고, 함수가 호출된 후에 함수의 로직이 선언되므로 sumNumbers는 함수로 인식하지 않고 변수로 인식한다.

<br/><br/>

- 화살표 함수 표현식

```
let open = () => {
    return 'opened'
}

open();
```

```
let sum = (a, b) => a + b;

/* 위 화살표 함수는 아래 함수의 축약 버전입니다.

let sum = function(a, b) {
  return a + b;
};
*/

alert( sum(1, 2) ); // 3
```

- 즉시 실행 함수
  함수를 정의하자마자 바로 호출하는 것, 한 번의 실행만 필요로 하는 초기화 코드 부분에 사용한다.

```
//기명 즉시 실행 함수
(function square(x) {
    console.log(x*x);
})(2);

//익명 즉시 실행 함수
(function (x) {
    console.log(x*x);
})(2);
```
