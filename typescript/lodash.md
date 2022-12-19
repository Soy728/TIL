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

### join

```
_.join(array, [separator=','])
```

seperator를 매개로 배열안의 문자열을 합친다.

### get

object에서 원하는 값을 뽑아 낼때 유용한 method. 키 값이 없을 경우 undefined를 반환.</br>

```
// object에 직접 접근
const resChainParams = await APIMintscan.Blocks.getParams({ chainId: chainId });

const directObject = {
		blocks_per_year: resChainParams.params.minting_params.params.blocks_per_year
	};

// lodash get으로 object에 접근
const lodashGetObject = {
     blocks_per_year: _.get(arg, 'params.minting_params.params.blocks_per_year');
}

```

object에 직접 접근할 경우, 해당 키가 없으면 오류가 발생하지만 lodash get으로 object에 접근하고 키가 없는 경우 undefined를 반환해준다. 즉, object에 해당 프로퍼티 이름으로 값이 존재 하지 않을 때 예상치 못한 오류들을 막아주고 하위 depth로 갈 수 있으며 안전하게 undefined를 반환해준다. 또한 default값을 세팅할 수 있다.
