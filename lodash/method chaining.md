# Lodash

lodash wrapper로 변수를 감싸게 되면서 해당 변수에 대한 chaining을 시작한다.
lodash를 사용한 변수는 value() keyword를 통해 매핑을 풀어줘야 한다.

lodash 라이브러리를 사용하는 이유는, method chaining을 구현하기 위함이다.
자바스크립트 내장 함수를 사용하면, 매번 ()괄호로 바깥을 묶어줘야하는 번거로움이 있다.

```
var users = [
  { 'user': 'barney',  'age': 36 },
  { 'user': 'fred',    'age': 40 },
  { 'user': 'pebbles', 'age': 1 }
];


// lodash 사용, method chaining 예시
var youngest = .sortBy(users, 'age') // age의 값들을 기준으로 오름차순 정렬
  .map(function(o) {
    return o.user + ' is ' + o.age; // 문자열 이어붙여 배열로 반환
  })
  .head() // 첫번째 요소 선택
  .value(); // 값

```
