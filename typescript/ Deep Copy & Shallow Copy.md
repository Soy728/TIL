# Deep Copy & Shallow Copy

```
// primitive type

let origin = 10;
let new = origin;
origin = 20;

console.log(origin); // 20
console.log(new); // 10


// reference type

let origin = [1,2,3];
let new = origin;
origin[0] = 100;

console.log(origin); // [100,2,3]
console.log(new); // [100,2,3]
```

원시타입의 복사는 데이터 값 자체를 복사하므로 두 개체는 독립적인 메모리 공간을 차지한다. 참조 타입의 복사는 데이터의 주솟값을 복사하므로 new 개체는 origin 개체의 주솟값을 바라보고 있다. 원시 값은 복사된 값이 서로에게 영향을 미치지 않지만 참조값은 영향을 미친다. 이러한 객체의 특징 때문에 객체를 복사하는 방법은 2가지로 나뉜다.

<br>

### Shallow Copy(얕은 복사)

얕은 복사는 `1 depth`까지 복사하는 것을 의미한다. 객체 안에 객체, 혹은 2차원 배열의 경우 한 개의 객체라도 원본 객체를 참조하고 있다면 `얕은 복사`라고 한다.

1. Object.assign

```
const origin = {
  바나나: '노랑',
  사과: {
    청사과: '초록',
  },
};

//Object.assign 첫번째 인자값(target)에 source를 합치는 연산이며
//return값은 연산이 완료된 첫번째 인자값(target)이다.
const new = Object.assign({}, origin);

copiedObj.b.c = '파랑'

origin === new // false
origin.b.c === new.b.c // true
```

2. Spread operator

```
const origin = {
  바나나: '노랑',
  사과: {
    청사과: '초록',
  },
};

const new = {...origin};

new.b.c = '파랑'

origin === new // false
origin.b.c === new.b.c // true
```

### Deep Copy(깊은 복사)

깊은 복사는 객체 안에 객체가 있을 경우에도 원본과의 참조가 완전히 끊어진 객체를 의미한다.

1. lodash cloneDeep

```
const origin = {
  바나나: '노랑',
  사과: {
    청사과: '초록',
  },
};

const new = _.cloneDeep(origin);

new.b.c = '파랑'

origin === new // false
origin.b.c === new.b.c // false
```

2. JSON.stringfy
   JSON.stringfy()는 객체를 JSON 문자열로 변환하는데 이 과정에서 원본 객체와의 참조가 모두 끊어진다. 따라서 JSON.stringfy()를 통해 객체를 문자열로 변환하고, 다시 JSON.parse()를 이용해 다시 객체로 만들어 주면 된다.

```
const origin = {
  바나나: '노랑',
  사과: {
    청사과: '초록',
  },
};

const new = JSON.parde(JSON.stringfy(origin));

new.b.c = '파랑'

origin === new // false
origin.b.c === new.b.c // false
```
