# Slice & Splice

### slice

- 배열 자르기

```
let arr = [1,2,3,4,5,6,7,8,9];
//두 번째 인덱스부터 다섯번 째 인덱스까지 자른다.
let slice = arr.slice(2,5);

//[3,4,5]
console.log(slice);
//[1,2,3,4,5,6,7,8,9]
console.log(arr);
```

slice는 시작인덱스, 끝 인덱스 까지 자르며 원본 데이터를 변경하지 않는다.
(끝 인덱스가 5이면 실제 자르는 건 4까지임)

### splice

- 배열 자르기

```
let arr = [1,2,3,4,5,6,7,8,9];
//두 번째 인덱스 3부터 5개를 자른다.
let slice = arr.splice(2,5);

//[3,4,5,6,7]
console.log(slice);
//[1,2,8,9]
console.log(arr);
```

splice(index, 몇개를 자를 것인지)는 잘린 배열을 반환하고, 기존 array는 잘린 값이 담긴다.
splice에 하나의 인자만 넘기면, 해당 인자의 인덱스부터 배열의 마지막값까지 삭제된다.

- 배열에 값 추가하기

```
let arr = [1,2,3,4,5,6,7,8,9];

let slice = arr.splice(2,0,-1,-2,-3);

//[]
console.log(slice);
//[1,2,-1,-2,-3,3,4,5,6,7,8,9]
console.log(arr);
```

### remember

- 인자

  slice(시작 인덱스, 끝 인덱스)
  splice(시작인덱스, 자를 요소의 개수)

- 원본 데이터

  slice: 원본데이터 유지, slice는 잘린 배열 return
  splice: 원본데이터 변경(잘린 값 제거), splice는 잘린값 return

자른 값을 확인하고 싶을 떈 slice를 사용하고,
자른 값을 실제로 이용하거나 자르고 남은 배열을 쓰고 싶다면 splice를 사용해라.
