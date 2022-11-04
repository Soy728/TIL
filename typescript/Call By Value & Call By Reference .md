# Call By Value & Call By Reference

## primitive type & reference type

### primitive type (원시 타입)

- number
- string
- boolean
- undefined
- null
- Symbol

원시 타입이 할당 될 때는 변수에 값 자체(실제 값)가 담긴다. 원시 타입의 데이터는 변수에 할당 될 때 메모리 상에 고정된 크기로 저장된다. 변수의 값을 재할당 하면 기존의 메모리 공간의 값이 바뀌는 것이 아니라, 새로운 메모리 공간을 확보하고 그 메모리 공간에 새로운 값을 할당한다. 새롭게 값을 재할당하면, 이전의 값들이 담긴 주소공간은 `가비지 콜렉터` 에 의해 메모리에서 자동 해제된다.

```
//원시 타입. apple과 banana가 가리키는 주솟값이 다르다.

let apple = 10;
let banana = apple;

apple = 30; // 재할당. 새로운 메모리 공간에 30이라는 값을 할당함.

console.log(apple, banana); // 30 10
```

<br>
<br>

### reference type (참조 타입)

- object
- function
- array

참조타입의 데이터는 크기가 정해져 있지 않고 변수에 할당이 될 때 값이 직접 해당 변수에 지정될 수 없으며 변수에는 데이터에 대한 참조값만 저장된다. 참조타입은 변수의 값이 저장된 메모리 블럭의 주소를 가지고 있고 자바스크립트 엔진이 변수가 가지고 있는 메모리 주소를 이용하여 변수의 값에 접근한다.

```
//객체 타입. apple과 banana가 가리키는 주솟값이 같다.

let apple = [1,2,3];
let banana = apple;

apple[1] = 10; // 재할당 없이 값을 직접 변경.

console.log(apple, banana); // [1,10,3], [1,10,3]
```

<br>
<br>

## Call By Value & Call By Reference

<br>

### Call By Value

```
let a = 1;

function addOne(b){
    b = b + 1;
}

addOne(a);

console.log(a); // 1
```

a 변수의 값이 복사되어 addOne 함수에 인자로 할당된다. 따라서 변수 a와 addOne 함수에 인자로 전해진 a는 (= b) 서로 다른 주솟 값을 가지고 있다.

call by value는 원본 값과 동일한 값을 복사해서 사용하는 개념이다. 따라서 원본 변수에는 아무런 영향이 없다.
원시 타입의 경우 call by value가 일어난다.

<br>

### Call By Reference

```
const a = {
    name: 'soy'
};

function changeName(person){
    person.name = 'choco'
}

changeName(a);

console.log(a); // { name : 'choco' }
```

a 오브젝트는 주솟값이 복사되어 changeName 함수의 인자로 전달된다. 따라서 a와 person은 같은 주솟값을 가지고 있으므로 같은 값을 바라보고 있다.

call by reference도 call by value와 동일하게 원본값을 복사해서 사용하지만, 뭔본 값이 가르키는 대상이 그냥 값이 아닌 `주솟값`이라는 점에서 차이가 난다. 참조 타입의 경우 call by reference가 일어난다.

<br>

### Call By Sharing

```
const a = {
    name: 'soy'
};

function changeName(person){
    person = { name : 'choco'};
}

changeName(a);

console.log(a); // { name : 'soy' }
```

changeName 함수에 변수 a의 주솟값을 복사해 전달한다. 맨 처음 person은 a의 주소 공간을 바라보고 있다.
하지만 person = { name : 'choco'}; 를 통해 재할당이 일어나고 person은 새로운 주소공간인 { name : 'choco'}를 바라본다.
